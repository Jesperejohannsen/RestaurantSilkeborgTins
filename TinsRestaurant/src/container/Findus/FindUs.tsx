import { SubHeading } from '../../components';
import ImageTinsFacade from '../../assets/logoImages/tinsFacadeAdresse.jpg';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
  <div className="app__wrapper_info">
    <SubHeading title="Kontakt" />
    <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Os</h1>
    <div className="app__wrapper-content">
      <p className="p__opensans">Søndergade 23</p>
      <p className="p__opensans">Silkeborg, Denmark</p>
      <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Åbningstider</p>
      <p className="p__opensans">Mandag: Lukket </p>
      <p className="p__opensans">Tirsdag: 11:00 - 21:00 </p>
      <p className="p__opensans">Onsdag: 11:00 - 21:00 </p>
      <p className="p__opensans">Torsdag: 11:00 - 21:00 </p>
      <p className="p__opensans">Fredag: 11:00 - 21:00 </p>
      <p className="p__opensans">Lørdag: 11:00 - 21:00 </p>
      <p className="p__opensans">Søndag: Lukket </p>
    </div>
  </div>
  <div className="app__wrapper_img">
      <img src={ImageTinsFacade} alt="finus_img" />
  </div>
</div>
);

export default FindUs;
