import React from 'react';
import { qaTools, qualityMetrics } from '../../data/testData';
import './About.css';

const About = () => {
  const experience = [
    {
      period: "2022 - Presente",
      company: "TechCorp Solutions",
      position: "Senior QA Engineer",
      achievements: [
        "Liderança técnica da equipe de automação com 5 QAs",
        "Implementação de framework de testes E2E com 85% de cobertura",
        "Redução de 60% no tempo de release através de CI/CD",
        "Mentoria de 3 QAs juniores para senioridade"
      ]
    },
    {
      period: "2020 - 2022",
      company: "Digital Innovation Ltda",
      position: "QA Engineer Pleno",
      achievements: [
        "Desenvolvimento de suite de testes de API com RestAssured",
        "Implementação de testes de performance com JMeter",
        "Integração de testes na pipeline DevOps",
        "Criação de estratégia de testes para microservices"
      ]
    },
    {
      period: "2018 - 2020",
      company: "StartUp Agile",
      position: "QA Analyst",
      achievements: [
        "Criação de processos de QA do zero",
        "Implementação de testes manuais e automação inicial",
        "Colaboração com desenvolvimento em metodologia Agile",
        "Definição de métricas e KPIs de qualidade"
      ]
    },
    {
      period: "2016 - 2018",
      company: "SoftTech Systems",
      position: "QA Analyst Júnior",
      achievements: [
        "Execução de testes manuais em aplicações web",
        "Documentação de casos de teste",
        "Suporte em testes de regressão",
        "Aprendizado de ferramentas de automação"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISTQB Advanced Test Analyst",
      issuer: "ISTQB",
      year: "2022",
      badge: "🏅"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2021",
      badge: "☁️"
    },
    {
      name: "Selenium WebDriver Advanced",
      issuer: "Udemy",
      year: "2020",
      badge: "🚀"
    },
    {
      name: "Agile Testing Foundations",
      issuer: "Coursera",
      year: "2019",
      badge: "🔄"
    },
    {
      name: "Performance Testing with JMeter",
      issuer: "Pluralsight",
      year: "2020",
      badge: "⚡"
    }
  ];

  const methodologies = [
    {
      name: "Agile/Scrum",
      description: "Experiência em squads ágeis com sprints de 2 semanas",
      proficiency: 95
    },
    {
      name: "BDD (Behavior Driven Development)",
      description: "Implementação de Cucumber/Gherkin para colaboração",
      proficiency: 90
    },
    {
      name: "CI/CD",
      description: "Integração contínua com Jenkins, GitLab CI e Azure DevOps",
      proficiency: 88
    },
    {
      name: "Shift-Left Testing",
      description: "Testes desde as fases iniciais do desenvolvimento",
      proficiency: 92
    },
    {
      name: "Test Pyramid",
      description: "Estratégia balanceada entre unit, integration e E2E tests",
      proficiency: 85
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>Sobre Mim</h1>
            <p className="hero-subtitle">
              QA Engineer Sênior com 8+ anos de experiência em garantia de qualidade, 
              especializado em automação de testes, estratégias de qualidade e liderança técnica.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos Entregues</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15k+</span>
                <span className="stat-label">Casos de Teste</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfação do Cliente</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-header">
                <h3>Fabio Silva</h3>
                <p>Senior QA Engineer</p>
              </div>
              <div className="profile-details">
                <div className="detail-item">
                  <span className="label">Localização:</span>
                  <span className="value">São Paulo, SP</span>
                </div>
                <div className="detail-item">
                  <span className="label">Disponibilidade:</span>
                  <span className="value available">Disponível</span>
                </div>
                <div className="detail-item">
                  <span className="label">Experiência:</span>
                  <span className="value">8 anos</span>
                </div>
                <div className="detail-item">
                  <span className="label">Especialização:</span>
                  <span className="value">Test Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia de Trabalho */}
        <section className="philosophy-section">
          <h2>Minha Filosofia de Qualidade</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">🎯</div>
              <h3>Qualidade desde o Início</h3>
              <p>
                Acredito na abordagem Shift-Left, onde a qualidade é incorporada 
                desde as fases iniciais do desenvolvimento, não apenas no final.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">🤝</div>
              <h3>Colaboração Estratégica</h3>
              <p>
                Trabalho em estreita colaboração com desenvolvedores, POs e stakeholders 
                para alinhar expectativas e garantir qualidade end-to-end.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">📊</div>
              <h3>Data-Driven Decisions</h3>
              <p>
                Uso métricas e dados para tomar decisões sobre qualidade, priorização 
                de testes e melhoria contínua dos processos.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">🚀</div>
              <h3>Automação Inteligente</h3>
              <p>
                Foco em automação estratégica que entrega valor real, não apenas 
                em cobrir números, mas em melhorar eficiência e confiabilidade.
              </p>
            </div>
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