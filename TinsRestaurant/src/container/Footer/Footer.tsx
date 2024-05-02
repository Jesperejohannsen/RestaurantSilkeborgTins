import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import ImageLogo from '../../assets/logoImages/tin_logo.png'
import ImageSpoon from '../../assets/spoon.png'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakt os</h1>
        <p className="p__opensans">Søndergade 23</p>
        <p className="p__opensans">Silkeborg, Danmark</p>
        <p className="p__opensans">+45 51 27 86 86</p>
        <p className="p__opensans">tinsfood@outlook.dk</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={ImageLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={ImageSpoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.instagram.com/tinsfood/' target="_blank" rel="noopener noreferrer">
          <FiInstagram />
          </a>
          <a href='https://www.facebook.com/tinsfood/?locale=da_DK' target="_blank" rel="noopener noreferrer">
          <FiFacebook  />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Åbningstider</h1>
        <p className="p__opensans">Tirsdag-Lørdag:</p>
        <p className="p__opensans">11:00 - 21:00 </p>
        <p className="p__opensans">Søndag-Mandag:</p>
        <p className="p__opensans">Lukket</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">@2024 JEJ. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;