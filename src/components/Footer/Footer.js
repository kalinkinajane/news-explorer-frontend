import "./Footer.css";
import LogoGit from "../../images/logoGit.png";
import LogoFacebook from "../../images/logoFacebook.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer page__content">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__content">
        <div className="footer__menu">
          <Link to="/" className="footer__menu-main">
            Главная
          </Link>
          <a
            className="footer__menu-link "
            href="https://praktikum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
        </div>

        <div className="footer__social">
          <a
            className="footer__social-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__social-image"
              src={LogoGit}
              alt="Логотип Git"
            ></img>
          </a>
          <a
            className="footer__social-link"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__social-image"
              src={LogoFacebook}
              alt="Логотип Facebook"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
