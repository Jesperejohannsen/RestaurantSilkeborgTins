import './SpecialMenu.css';
import { MenuItem } from '../../components';


const cocktails = [
  {
    title: 'Passion Rum',
    price: '95 KR',
    tags: 'Passion | Lime | Mynte | Rom',
  },
  {
    title: 'Berry Bomb',
    price: '95 KR',
    tags: 'Lime | Bær | Rom | Danskvand',
  },
  {
    title: 'Moscoc Mule med et twist',
    price: '95 KR',
    tags: 'Lime | Citrongræs sirup | Gingerbeer',
  },
  {
    title: 'Gin-Jito',
    price: '95 KR',
    tags: 'Æggehvide | Citron | Whiskey',
  },
  {
    title: 'Gin-Jito',
    price: '95 KR',
    tags: 'Lime | Thai Basilikum | Gingerbeer',
  },
  {
    title: "Saigon Sweet'n sour",
    price: '95 KR',
    tags: 'Gin | Lime | Mynte | Kumquat',
  }
];

const softDrinks = [
  {
    id: 1,
    title: "Coca Cola/Zero",
    price: "32 KR",
    tags: "35 cl"
  },
  {
    id: 2,
    title: "Ginger Beer",
    price: "32 KR",
    tags: "Caribia, 33 cl"
  },
  {
    id: 3,
    title: "Hyldblomst Saft",
    price: "32 KR",
    tags: "Bornholms Mosteri, 27.5 cl"
  },
  {
    id: 4,
    title: "Danskvand",
    price: "32/69 KR",
    tags: "Ramlösa, 33 eller 80 cl"
  },
  {
    id: 5,
    title: "Asiatisk Øl",
    price: "55 KR",
    tags: "Saigon el. Tiger, 33 cl"
  },
  {
    id: 6,
    title: "Kronenbourg Blanc",
    price: "45/65 KR",
    tags: "Fadøl, 25 el. 50 cl"
  },
  {
    id: 7,
    title: "Angelo Poretti",
    price: "45/65 KR",
    tags: "Fadøl, 25 el. 50 cl"
  },
  {
    id: 8,
    title: "Tuborg Classic",
    price: "38/55 KR",
    tags: "Fadøl, 25 el. 50 cl"
  },
  {
    id: 9,
    title: "Alkoholfri Øl",
    price: "45 KR",
    tags: "33 cl"
  }
];

const dinnerStartersMenu = [
  {
    id: 1,
    title: "BAO",
    tags: "Dampet bolle med marineret svinekød, agurk, syltet grøntsager og koriander.",
    price: "55 KR"
  },
  {
    id: 2,
    title: "GỎI CUỐN",
    tags: "To friske ruller med salat, urter og rejer, svinekød eller oksekød. Serveres med hoisinsovs (Kan fås som vegetar og glutenfri).",
    price: "65 KR"
  },
  {
    id: 3,
    title: "BÁNH XÈO",
    tags: "Rispandekage med rejer, svinekød, salat og friske urter. Serveres med fiskesovs (Glutenfri. Kan fås som vegetar).",
    price: "89 KR"
  },
  {
    id: 4,
    title: "GYOZA",
    tags: "4 stk pandestegte gyoza. Serveres med ponzu og ingefærsoya.",
    price: "75 KR"
  },
  {
    id: 5,
    title: "GỎI CUỐN",
    tags: "Tre friske ruller med salat, urter og rejer, svinekød eller oksekød. Serveres med hoisinsaus (Kan fås som vegetar og glutenfri).",
    price: "75 KR"
  },
];

const dinnerMainCourseMenu = [
  {
    id: 1,
    title: "UGENS SALAT",
    price: "135 KR",
    tags: "Hør tjeneren for indholdet i ugens salat. (Kan fås som glutenfri).",
  },
  {
    id: 2,
    title: "PHỞ BÒ",
    price: "135 KR",
    tags: "Oksekødsuppe med risnudler, kødboller og blancheret kød. Serveres med friske urter (Kan fås som glutenfri).",
  },
  {
    id: 3,
    title: "BÚN BÒ HUẾ",
    price: "135 KR",
    tags: "Spicy nudelsuppe med okse- og svinekød samt friske urter. (Glutenfri).",
  },
  {
    id: 4,
    title: "BÚN THỊT NƯỚNG CHẢ GIÒ",
    price: "135 KR",
    tags: "Friske nudler med stegte forårsruller og grillet svinekød eller stegt oksekød (Kan fås som vegetar. Indeholder laktose).",
  },
  {
    id: 5,
    title: "CƠM THỊT NƯỚNG",
    price: "135 KR",
    tags: "Grillet svinekød med ris, kimchi og spejlæg.",
  },
  {
    id: 6,
    title: "PHỞ XÀO",
    tags: "Stegte risnudler med forskellige grøntsager og svampe. Vælg mellem tofu, oksekød eller rejer.",
    price: "135 KR"
  },
  {
    id: 7,
    title: "BOWL",
    price: "139 KR",
    tags: "Spørg tjeneren for at høre om indholdet i dagens bowl. (Kan fås som glutenfri).",
  },
  {
    id: 8,
    title: "VEGETAR BOWL",
    price: "139 KR",
    tags: "Spørg tjeneren for indholdet i ugens vegetarret.",
  },
  {
    id: 9,
    title: "BØRNERET",
    price: "85 KR",
    tags: "Kyllinge karaage med pomfritter af søde kartofler og mayo.",
  },
  {
    id: 10,
    title: "DEL ET MÅLTID / 195 KR. PR. PERSON",
    tags: "Vietnamesisk måltid sammensat af forskellige retter. Minimum to personer. Spørg tjeneren for dagens deling. Fås ikke som take-way.",
    price: ""
  },
  {
    id: 11,
    title: "DESSERT",
    tags: "Spørg tjeneren, hvad dagens dessert består af. Frit valg af kaffe +15 KR",
    price: "69 KR"
  }
];

const lunchMenu = [
  {
    id: 1,
    title: "CHẢ GIÒ",
    price: "65 KR",
    tags: "Tre hjemmelavede stegte forårsruller med svinekød og sursød sauce. (Kan fås som vegetar. Indeholder laktose)."
  },
  {
    id: 2,
    title: "TÔM LĂN BỘT",
    price: "75 KR",
    tags: "Indbagte rejer m. chili mayo."
  },
  {
    id: 3,
    title: "HOÀNH THÁNH CHIÊN",
    price: "75 KR",
    tags: "Fire hjemmelavede wonton med rejer kylling og satay sauce."
  },
  {
    id: 4,
    title: "BÁNH PHỒNG TÔM",
    price: "25 KR",
    tags: "Rejechips."
  },
  {
    id: 5,
    title: "KHOAI LANG CHIÊN",
    price: "55 KR",
    tags: "Pomfritter af sødekartoffel med urtemayo."
  },
  {
    id: 6,
    title: "REJETOAST",
    price: "65 KR",
    tags: "Med chilimayo."
  }
];

const hotBeverages = [
  {
    title: "Sort Kaffe",
    price: "30 KR",
    tags: "Ved refill: +15,-"
  },
  {
    title: "Kaffe Latte/Cappuccino",
    price: "35 KR",
    tags: ""
  },
  {
    title: "Kande Med The",
    price: "45 KR",
    tags: "Jasmin eller Oolong"
  }
];

const coldBeverages = [
  {
    title: "Postevand Gratis Refill",
    price: "20 KR",
    tags: ""
  },
  {
    title: "Vietnamesisk Iskaffe",
    price: "55 KR",
    tags: ""
  },
  {
    title: "Avocado Smoothie",
    price: "55 KR",
    tags: ""
  },
  {
    title: "Tins Lemonade",
    price: "55 KR",
    tags: ""
  },
  {
    title: "Matcha Iced Latte",
    price: "55 KR",
    tags: ""
  }
];

const wineMenu = [
  {
    id: 1,
    title: "Cava",
    price: "69/195 KR",
    tags: "Semi-Seco, Mousserende"
  },
  {
    id: 2,
    title: "Andantino",
    price: "69/195 KR",
    tags: "Garganega, Italien, Hvidvin"
  },
  {
    id: 3,
    title: "Fosche",
    price: "255 KR",
    tags: "Chardonnay, Piemonte, Hvidvin"
  },
  {
    id: 4,
    title: "Eimermann",
    price: "245 KR",
    tags: "Riesling, Tyskland, Hvidvin"
  },
  {
    id: 5,
    title: "Sancerre",
    price: "395 KR",
    tags: "Sancerre, Frankrig, Hvidvin"
  },
  {
    id: 6,
    title: "Andantino",
    price: "69/195 KR",
    tags: "Sangiovese, Italien, Rødvin"
  },
  {
    id: 7,
    title: "Light Horse",
    price: "295 KR",
    tags: "Pinot Noir, USA, Rødvin"
  },
  {
    id: 8,
    title: "Valpolicella",
    price: "245 KR",
    tags: "Italien, Rødvin"
  },
  {
    id: 9,
    title: "Amarone",
    price: "555 KR",
    tags: "Amarone, Italien, Rødvin"
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

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Læskedrikke</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {softDrinks.map((softDrink, index) => (
              <MenuItem
                key={index}
                title={softDrink.title}
                price={softDrink.price}
                tags={softDrink.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Vin</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {wineMenu.map((wine, index) => (
              <MenuItem
                key={index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Cocktails</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Varme Drikke</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {hotBeverages.map((hotBevarage, index) => (
              <MenuItem
                key={index}
                title={hotBevarage.title}
                price={hotBevarage.price}
                tags={hotBevarage.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Kolde Drikke</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            {coldBeverages.map((coldBevarage, index) => (
              <MenuItem
                key={index}
                title={coldBevarage.title}
                price={coldBevarage.price}
                tags={coldBevarage.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SpecialMenu;