// 003 FR-2: validates portfolio.json and names the field of every error.

const str = { type: 'string' };
const num = { type: 'number' };
const url = { type: 'url' };
const list = (of) => ({ type: 'array', of });
const obj = (fields) => ({ type: 'object', fields });
const map = (of) => ({ type: 'map', of });
const optional = (rule) => ({ ...rule, optional: true });

const stat = obj({ value: str, label: str });

export const schema = obj({
  site: obj({ title: str, description: str }),
  profile: obj({
    name: str,
    role: str,
    headline: str,
    summary: str,
    location: str,
    availability: str,
    experience: str,
    specialization: str,
  }),
  contacts: list(obj({ label: str, icon: str, url })),
  home: obj({
    stats: list(stat),
    skills: list(obj({ category: str, items: list(str) })),
  }),
  about: obj({
    summary: str,
    stats: list(stat),
    philosophy: list(obj({ icon: str, title: str, text: str })),
    experience: list(obj({ period: str, company: str, position: str, achievements: list(str) })),
    certifications: list(obj({ name: str, issuer: str, year: str, badge: str, url: optional(url) })),
    methodologies: list(obj({ name: str, description: str, proficiency: num })),
  }),
  tools: map(list(obj({ name: str, proficiency: str, years: num }))),
  reports: list(obj({ id: num, projectName: str, projectType: str, status: str })),
  scenarios: list(obj({ id: num, title: str, type: str, objective: str })),
  metrics: obj({
    overall: obj({
      ddp: num,
      testEfficiency: num,
      defectDensity: num,
      defectLeakage: num,
      testCoverage: num,
      automationRate: num,
    }),
    byType: list(obj({ type: str })),
    defectEvolution: list(obj({ month: str })),
    rootCauseAnalysis: list(obj({ type: str })),
  }),
});

const typeOf = (value) => (Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value);

const check = (rule, value, path, errors) => {
  if (value === undefined) {
    if (!rule.optional) errors.push(`${path}: obrigatório`);
    return;
  }
  switch (rule.type) {
    case 'string':
      if (typeof value !== 'string' || value.trim() === '') errors.push(`${path}: texto não vazio esperado`);
      break;
    case 'number':
      if (typeof value !== 'number' || Number.isNaN(value)) errors.push(`${path}: número esperado`);
      break;
    case 'url':
      if (typeof value !== 'string' || !/^https:\/\/[^\s/]+\.[^\s]+$/.test(value)) {
        errors.push(`${path}: URL https esperada`);
      }
      break;
    case 'array':
      if (!Array.isArray(value)) errors.push(`${path}: lista esperada, veio ${typeOf(value)}`);
      else value.forEach((item, i) => check(rule.of, item, `${path}[${i}]`, errors));
      break;
    case 'map':
    case 'object':
      if (typeOf(value) !== 'object') {
        errors.push(`${path}: objeto esperado, veio ${typeOf(value)}`);
      } else if (rule.type === 'map') {
        Object.entries(value).forEach(([key, item]) => check(rule.of, item, `${path}.${key}`, errors));
      } else {
        Object.entries(rule.fields).forEach(([key, sub]) =>
          check(sub, value[key], path ? `${path}.${key}` : key, errors),
        );
      }
      break;
    default:
      throw new Error(`regra desconhecida em ${path}: ${rule.type}`);
  }
};

export const validatePortfolio = (data) => {
  const errors = [];
  check(schema, data, '', errors);
  return errors;
};
