import './Header.css';
import { SubHeading } from '../../components';
import HeaderImage from '../../assets/welcome.png';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <SubHeading title="Få nye oplevelser igennem maden" />
    <h1 className="app__header-h1">Autentisk Vietnamesisk Cousine</h1>
    <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    <a href='#menu'>
    <button type="button" className="custom__button">Udforsk Menu</button>
    </a>
  </div>

  <div className="app__wrapper_img">
    <img src={HeaderImage} alt="header_img" />
  </div>
</div>
);

export default Header;
