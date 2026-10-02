import { Link } from 'react-router-dom';
import { contacts, profile, site } from '../../data/portfolio';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{site.title}</h1>

        <ul className="footer__list">
          <li>
            <Link to="/about" className="footer__link">
              Sobre
            </Link>
          </li>

          <li>
            <Link to="/portfolio" className="footer__link">
              Portfólio
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          {contacts.map((contact) => (
            <a
              key={contact.url}
              href={contact.url}
              aria-label={contact.label}
              className="footer__social-link"
              rel="noreferrer"
              target="_blank"
            >
              <i className={`bx ${contact.icon}`}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">
          &#169; {profile.name}. <strong>Feito em React</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
