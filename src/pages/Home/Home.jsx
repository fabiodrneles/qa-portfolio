import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../../components/footer/Footer.jsx';
import { home, profile } from '../../data/portfolio';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{profile.headline}</h1>
            <p className="hero-subtitle">{profile.summary}</p>

            <div className="hero-stats">
              {home.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
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
            {home.skills.map((skill) => (
              <div key={skill.category} className="skill-category">
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
