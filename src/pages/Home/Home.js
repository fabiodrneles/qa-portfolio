import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Quality Assurance Specialist</h1>
            <p className="hero-subtitle">
              Especialista em Garantia de Qualidade com 8+ anos de experiência 
              em testes automatizados, performance e segurança
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Casos de Teste</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>Cobertura de Testes</p>
              </div>
              <div className="stat">
                <h3>99.8%</h3>
                <p>Defect Detection</p>
              </div>
            </div>
            <Link to="/portfolio" className="cta-button">
              Ver Portfólio Completo
            </Link>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Testes Automatizados</h3>
              <ul>
                <li>Selenium WebDriver</li>
                <li>Cypress</li>
                <li>Playwright</li>
                <li>Appium</li>
                <li>RestAssured</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Linguagens</h3>
              <ul>
                <li>Java</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>TestNG, JUnit</li>
                <li>Cucumber BDD</li>
              </ul>
            </div>

            {/**
             * 
             *             <div className="skill-category">
              <h3>CI/CD & DevOps</h3>
              <ul>
                <li>Jenkins</li>
                <li>GitLab CI</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Azure DevOps</li>
              </ul>
            </div>
             */}

            <div className="skill-category">
              <h3>Testes Especializados</h3>
              <ul>
                <li>Performance (JMeter)</li>
                <li>Segurança (OWASP)</li>
                <li>API Testing</li>
                <li>Mobile Testing</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;