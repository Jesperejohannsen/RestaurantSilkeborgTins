import ImageTin from '../../assets/logoImages/tin.jpg';
import ImageQuote from '../../assets/quote.png';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={ImageTin} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Kokkens ord" />
      <h1 className="headtext__cormorant">Hvad vi tror på</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={ImageQuote} alt="quote_image" />
          <p className="p__opensans">Når vi selv besøger Vietnam, spiser vi helst lokalt. Vi sætter pris på atuentisk mad, der går i generationer. Det er netop dette vi vægter meget højt på Tins. Vi vil gerne dele den oplevelse med vores gæster.</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Tin</p>
        <p className="p__opensans">Kok & grundlægger</p>
      </div>
    </div>
  </div>
);

export default Chef;
