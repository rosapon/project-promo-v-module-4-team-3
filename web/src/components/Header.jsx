import logoAdalab from '../images/logo-adalab.png';
import '../scss/layout/Header.scss';
import Button from './Button';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav--div">
          <i className="fa-solid fa-laptop-code"></i>
          <p className="text">Proyectos Molones</p>
        </div>
        <a
          href="https://www.adalab.es/"
          className="header__nav--logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoAdalab} alt="adalab" />
        </a>
      </nav>

      <div className="header__title">
        <h1>Proyectos molones</h1>
        <h2>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>
        {/* <a className="header__title--new-btn" href=''>Nuevo proyecto</a> */}
        {/* <a className="header__title--see-btn" href="">
          Ver proyectos
        </a> */}
      </div>
    </header>
  );
}
export default Header;
