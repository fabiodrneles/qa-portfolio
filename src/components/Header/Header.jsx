import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>QA Portfolio</h1>
          <span>Senior Quality Assurance Engineer</span>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Início
          </Link>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfólio
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;