import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Logo from '../../assets/logoImages/tin_logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


return (
 <nav className="app__navbar">
  <div className="app__navbar-logo">
    <img src={Logo} alt="app logo" />
  </div>
  <ul className="app__navbar-links">
    <li className='="p__opensans'><a href="#home">Forside</a></li>
    <li className='="p__opensans'><a href="#about">Om Tins</a></li>
    <li className='="p__opensans'><a href="#menu">Menu</a></li>
    <li className='="p__opensans'><a href="#contact">Kontakt</a></li>
  </ul>
  <div className="app__navbar_socialMediaSection">
    <a href="https://www.facebook.com/tinsfood/?locale=da_DK" target="_blank" rel="noreferrer">
      <FaFacebook size={30}/>
    </a>
    <a href="https://www.instagram.com/tinsfood/" target="_blank" rel="noreferrer">
      <FaInstagram size={30}/>
    </a>
  </div>
  <div className="app__navbar-smallscreen">
   <GiHamburgerMenu color='white' fontSize={27} onClick={() => setToggleMenu(true)}/>

   {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen_links">
          <li className='p__opensans'><a href="#home" onClick={() => setToggleMenu(false)}>Forside</a></li>
          <li className='p__opensans'><a href="#about" onClick={() => setToggleMenu(false)}>Om Tins</a></li>
          <li className='p__opensans'><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
          <li className='p__opensans'><a href="#contact" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
        </ul>
    </div>
)}

  </div>
 </nav>
)
};

export default Navbar;
