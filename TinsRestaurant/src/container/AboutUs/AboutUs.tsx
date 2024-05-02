import ImageG from '../../assets/G.png';
import ImageSpoon from '../../assets/spoon.png';
import ImageKnife from '../../assets/knife.png';

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
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
    </div>

    <div className="app__aboutus-content_knife flex__center">
      <img src={ImageKnife} alt="about_knife" />
    </div>

    <div className="app__aboutus-content_history">
      <h1 className="headtext__cormorant">Vores rejse</h1>
      <img src={ImageSpoon} alt="about_spoon" className="spoon__img" />
      <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
    </div>
  </div>
</div>
);

export default AboutUs;
