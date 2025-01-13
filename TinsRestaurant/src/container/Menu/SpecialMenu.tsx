import './SpecialMenu.css';
import { MenuItem } from '../../components';

const dinnerStartersMenu = [
  {
    id: 1,
    title: "7 - BAO",
    tags: "Dampet bolle med marineret svinekød, agurk, syltet grøntsager og koriander.",
    price: "55 KR"
  },
  {
    id: 2,
    title: "8 - GỎI CUỐN",
    tags: "To friske ruller med salat, urter og rejer, svinekød eller oksekød. Serveres med hoisinsovs (Kan fås som vegetar og glutenfri).",
    price: "65 KR"
  },
  {
    id: 3,
    title: "9 - BÁNH XÈO",
    tags: "Rispandekage med rejer, svinekød, salat og friske urter. Serveres med fiskesovs (Glutenfri. Kan fås som vegetar).",
    price: "89 KR"
  },
  {
    id: 4,
    title: "10 - GYOZA",
    tags: "4 stk pandestegte gyoza. Serveres med ponzu og ingefærsoya.",
    price: "75 KR"
  },
];

const dinnerMainCourseMenu = [
  {
    id: 1,
    title: "11 - UGENS SALAT",
    price: "135 KR",
    tags: "Hør tjeneren for indholdet i ugens salat. (Kan fås som glutenfri).",
  },
  {
    id: 2,
    title: "12 - PHỞ BÒ",
    price: "135 KR",
    tags: "Oksekødsuppe med risnudler, kødboller og blancheret kød. Serveres med friske urter (Kan fås som glutenfri).",
  },
  {
    id: 3,
    title: "13 - BÚN BÒ HUẾ",
    price: "135 KR",
    tags: "Spicy nudelsuppe med okse- og svinekød samt friske urter. (Glutenfri).",
  },
  {
    id: 4,
    title: "14 - BÚN THỊT NƯỚNG CHẢ GIÒ",
    price: "135 KR",
    tags: "Friske nudler med stegte forårsruller og grillet svinekød eller stegt oksekød (Kan fås som vegetar. Indeholder laktose).",
  },
  {
    id: 5,
    title: "15 - CƠM THỊT NƯỚNG",
    price: "135 KR",
    tags: "Grillet svinekød med ris, kimchi og spejlæg.",
  },
  {
    id: 6,
    title: "16 - PHỞ XÀO",
    tags: "Stegte risnudler med forskellige grøntsager og svampe. Vælg mellem tofu, oksekød eller rejer.",
    price: "135 KR"
  },
  {
    id: 7,
    title: "17 - BOWL",
    price: "139 KR",
    tags: "Spørg tjeneren for at høre om indholdet i dagens bowl. (Kan fås som glutenfri).",
  },
  {
    id: 8,
    title: "18 - VEGETAR BOWL",
    price: "139 KR",
    tags: "Spørg tjeneren for indholdet i ugens vegetarret.",
  },
  {
    id: 9,
    title: "19 - BØRNERET",
    price: "85 KR",
    tags: "Kyllinge karaage med pomfritter af søde kartofler og mayo.",
  },
  {
    id: 10,
    title: "20 - DEL ET MÅLTID / 195 KR. PR. PERSON",
    tags: "Vietnamesisk måltid sammensat af forskellige retter. Minimum to personer. Spørg tjeneren for dagens deling. Fås ikke som take-way.",
    price: ""
  },
  {
    id: 11,
    title: "21 - DESSERT",
    tags: "Spørg tjeneren, hvad dagens dessert består af. Frit valg af kaffe +15 KR",
    price: "69 KR"
  }
];

const lunchMenu = [
  {
    id: 1,
    title: "1 - CHẢ GIÒ",
    price: "65 KR",
    tags: "Tre hjemmelavede stegte forårsruller med svinekød og sursød sauce. (Kan fås som vegetar. Indeholder laktose)."
  },
  {
    id: 2,
    title: "2 - TÔM LĂN BỘT",
    price: "75 KR",
    tags: "Indbagte rejer m. chili mayo."
  },
  {
    id: 3,
    title: "3 - HOÀNH THÁNH CHIÊN",
    price: "75 KR",
    tags: "Fire hjemmelavede wonton med rejer kylling og satay sauce."
  },
  {
    id: 4,
    title: "4 - BÁNH PHỒNG TÔM",
    price: "25 KR",
    tags: "Rejechips."
  },
  {
    id: 5,
    title: "5 - KHOAI LANG CHIÊN",
    price: "55 KR",
    tags: "Pomfritter af sødekartoffel med urtemayo."
  },
  {
    id: 6,
    title: "6 - REJETOAST",
    price: "65 KR",
    tags: "Med chilimayo."
  }
];

const SpecialMenu = () => (
  <>
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Snacks</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {lunchMenu.map((lunchMenu, index) => (
              <MenuItem
                key={index}
                title={lunchMenu.title}
                price={lunchMenu.price}
                tags={lunchMenu.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Forretter</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {dinnerStartersMenu.map((dinnerStarterMenu, index) => (
              <MenuItem
                key={index}
                title={dinnerStarterMenu.title}
                price={dinnerStarterMenu.price}
                tags={dinnerStarterMenu.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Hovedretter & Desert</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {dinnerMainCourseMenu.map((dinnerMainCourse, index) => (
              <MenuItem
                key={index}
                title={dinnerMainCourse.title}
                price={dinnerMainCourse.price}
                tags={dinnerMainCourse.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SpecialMenu;