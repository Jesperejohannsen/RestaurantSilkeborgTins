import ImageG from '../../assets/G.png';
import ImageSpoon from '../../assets/spoon.png';
import Logo from '../../assets/logoImages/tin_logo.png';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={ImageG} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Om Tin</h1>
        <img src={ImageSpoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Vi stræber efter at etablere en restaurant, der indfanger essensen af hjemlig atmosfære, hvor gæsterne kan nyde en atmosfære præget af afslappethed og gæstfrihed, med særlig opmærksomhed på familiens velbefindende, herunder børnenes komfort og glæde.</p>
      </div>

      <div className="app__aboutus-tins_logo flex__center">
        <img src={Logo} alt="tins_logo" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Vores rejse</h1>
        <img src={ImageSpoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">ADet er af afgørende betydning for os at skabe autentiske vietnamesiske gastronomiske oplevelser, som vi kan være stolte af. Vores tilgang til madlavning er dybt forankret i dedikation og lidenskab, hvilket afspejles i vores hjertevarme retter. Vi stræber efter at etablere en restaurant, der indfanger essensen af hjemlig atmosfære, hvor gæsterne kan nyde en atmosfære præget af afslappethed og gæstfrihed, med særlig opmærksomhed på familiens velbefindende, herunder børnenes komfort og glæde.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
