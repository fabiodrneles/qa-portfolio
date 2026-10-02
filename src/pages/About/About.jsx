import { about, metrics as qualityMetrics, profile, tools as qaTools } from '../../data/portfolio';
import './About.css';

const About = () => {
  const { experience, certifications, methodologies } = about;

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>Sobre Mim</h1>
            <p className="hero-subtitle">{about.summary}</p>
            <div className="hero-stats">
              {about.stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-header">
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
              </div>
              <div className="profile-details">
                <div className="detail-item">
                  <span className="label">Localização:</span>
                  <span className="value">{profile.location}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Disponibilidade:</span>
                  <span className="value available">{profile.availability}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Experiência:</span>
                  <span className="value">{profile.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Especialização:</span>
                  <span className="value">{profile.specialization}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia de Trabalho */}
        <section className="philosophy-section">
          <h2>Minha Filosofia de Qualidade</h2>
          <div className="philosophy-grid">
            {about.philosophy.map((item) => (
              <div key={item.title} className="philosophy-card">
                <div className="philosophy-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="experience-section">
          <h2>Experiência Profissional</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.position}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificações */}
        <section className="certifications-section">
          <h2>Certificações e Qualificações</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-badge">{cert.badge}</div>
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metodologias */}
        <section className="methodologies-section">
          <h2>Metodologias e Processos</h2>
          <div className="methodologies-list">
            {methodologies.map((method, index) => (
              <div key={index} className="methodology-item">
                <div className="methodology-header">
                  <h4>{method.name}</h4>
                  <span className="proficiency">{method.proficiency}%</span>
                </div>
                <p className="methodology-description">{method.description}</p>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-fill" 
                    style={{ width: `${method.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Tecnológica */}
        <section className="tech-stack-section">
          <h2>Stack Tecnológica</h2>
          <div className="tech-categories">
            {Object.entries(qaTools).map(([category, tools]) => (
              <div key={category} className="tech-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="tools-list">
                  {tools.map((tool, index) => (
                    <div key={index} className="tool-item">
                      <span className="tool-name">{tool.name}</span>
                      <div className="tool-meta">
                        <span className="tool-proficiency">{tool.proficiency}</span>
                        <span className="tool-years">{tool.years} anos</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Métricas de Carreira */}
        <section className="career-metrics">
          <h2>Métricas de Carreira</h2>
          <div className="metrics-grid">
            <div className="career-metric">
              <div className="metric-value">{qualityMetrics.overall.ddp}%</div>
              <div className="metric-label">Defect Detection Percentage</div>
            </div>
            <div className="career-metric">
              <div className="metric-value">{qualityMetrics.overall.automationRate}%</div>
              <div className="metric-label">Taxa de Automação</div>
            </div>
            <div className="career-metric">
              <div className="metric-value">{qualityMetrics.overall.testCoverage}%</div>
              <div className="metric-label">Cobertura de Testes</div>
            </div>
            <div className="career-metric">
              <div className="metric-value">{qualityMetrics.overall.defectLeakage}%</div>
              <div className="metric-label">Defect Leakage</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;