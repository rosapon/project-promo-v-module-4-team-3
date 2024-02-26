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
        <Button
        url="/newProject"
        text="Añadir proyecto"
        style="header__title--new-btn landing__btn"
      />
      </nav>

      <div className="header__title">
        <h1>Proyectos molones</h1>
        <h2>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>
      </div>
    </header>
  );
}
export default Header;
