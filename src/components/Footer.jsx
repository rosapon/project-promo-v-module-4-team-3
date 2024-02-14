import logoAdalab from '../images/logo-adalab.png';
import '../scss/layout/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.adalab.es/"
        className="header__nav--logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoAdalab} alt="adalab" />
      </a>
    </footer>
  );
}

export default Footer;
