import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Logo from '../../assets/logoImages/tin_logo.png';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleLinkClick('home')}>Forside</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleLinkClick('about')}>Om Tins</a>
        </li>
        <li className={activeSection === 'menu' ? 'active' : ''}>
          <a href="#menu" onClick={() => handleLinkClick('menu')}>Menu</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleLinkClick('contact')}>Kontakt</a>
        </li>
      </ul>
      <div className="app__navbar_socialMediaSection">
        <a href="https://www.facebook.com/tinsfood/?locale=da_DK" target="_blank" rel="noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/tinsfoods_/" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='white' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className={activeSection === 'home' ? 'active' : ''}>
                <a href="#home" onClick={() => handleLinkClick('home')}>Forside</a>
              </li>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#about" onClick={() => handleLinkClick('about')}>Om Tins</a>
              </li>
              <li className={activeSection === 'menu' ? 'active' : ''}>
                <a href="#menu" onClick={() => handleLinkClick('menu')}>Menu</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact" onClick={() => handleLinkClick('contact')}>Kontakt</a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;