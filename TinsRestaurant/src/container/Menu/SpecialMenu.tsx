import './SpecialMenu.css';
import ImageShaker from '../../assets/menu.png';
import ImageFoodNumberFour from '../../assets/foodImages/testImagePho.jpg';
import ImageTea from '../../assets/foodImages/tea.jpg';
import { SubHeading, MenuItem } from '../../components';


const cocktails = [
  {
    title: 'Passion Rum',
    price: '89 KR',
    tags: 'Passion | Lime | Mynte | Rom',
  },
  {
    title: "Berry Bomb",
    price: '89 KR',
    tags: 'Lime | Bær | Rom | Danskvand',
  },
  {
    title: 'Moscoc Mule med et twist',
    price: '89 KR',
    tags: 'Lime | Citrongræs sirup | Gingerbeer',
  },
  {
    title: 'Pink Lychee',
    price: '89 KR',
    tags: 'Vodka | Æggehvide | Litchi Sirup | Tranebær | Ananas',
  },
  {
    title: 'Frozen Daiquiri',
    price: '89 KR',
    tags: 'Passion | Lime / Jordbær',
  },
  {
    title: 'Whiskey Sour',
    price: '89 KR',
    tags: 'Æggehvide | Citron | Whiskey',
  },
  {
    title: 'Gin-Jito',
    price: '89 KR',
    tags: 'Lime | Thai Basilikum | Gingerbeer',
  },
  {
    title: "Saigon Sweet'n sour",
    price: '89 KR',
    tags: 'Gin | Lime | Mynte | Kumquat',
  }
];

const softDrinks = [
  {
    id: 1,
    title: "Coca Cola/Pepsi Max/Faxe Kondi",
    price: "35 KR",
    tags: "25cl"
  },
  {
    id: 2,
    title: "Økologisk Saft",
    price: "42 KR",
    tags: "Hyldblomst el. Ingefær/Citron, 25 cl"
  },
  {
    id: 3,
    title: "Galvanina Bio-Sodavand",
    price: "48 KR",
    tags: "Pink Grape, Mandarin, Ginger Beer, Danskvand, 35 cl"
  },
  {
    id: 4,
    title: "Galvanina Danskvand",
    price: "65 KR",
    tags: "75 cl"
  },
  {
    id: 5,
    title: "Asiatisk Øl",
    price: "52 KR",
    tags: "Saigon el. Tiger, 33 cl"
  },
  {
    id: 6,
    title: "Pift Øl",
    price: "52 KR",
    tags: "Citrus el. Mango, 50 cl"
  },
  {
    id: 7,
    title: "Kissmeyer Øl",
    price: "55 KR",
    tags: "Pale Ale, 33 cl"
  },
  {
    id: 8,
    title: "Anarkist Øl",
    price: "72 KR",
    tags: "Bloody Weizen, New England IPA, Dobbelt IPA, 50 cl"
  },
  {
    id: 9,
    title: "Alkoholfri Heineken",
    price: "39 KR",
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

const hotBevarages = [
  {
    id: 1,
    title: "Sort Kaffe",
    price: "30 KR",
    tags: "Ved refill: +15 KR"
  },
  {
    id: 2,
    title: "Kaffe Latte/Cappuccino",
    price: "35 KR",
    tags: ""
  },
  {
    id: 3,
    title: "Økologisk The",
    price: "25 KR",
    tags: "Pukka: LemonGrass Ginger, Three Ginger, Supreme Matcha Green, Ginseng Matcha Green, Lemon Ginger & Manuka Honey"
  },
  {
    id: 4,
    title: "Kande Med The",
    price: "45 KR",
    tags: "Jasmin eller Oolong"
  }
];

const coldBevarages = [
  {
    id: 1,
    title: "Postevand Gratis Refill",
    price: "29 KR",
    tags: ""
  },
  {
    id: 2,
    title: "Vietnamesisk Iskaffe",
    price: "55 KR",
    tags: ""
  },
  {
    id: 3,
    title: "Avocado Smoothie",
    price: "55 KR",
    tags: ""
  },
  {
    id: 4,
    title: "Tins Lemonade",
    price: "55 KR",
    tags: ""
  },
  {
    id: 5,
    title: "Tins Iste",
    price: "55 KR",
    tags: ""
  },
  {
    id: 6,
    title: "Friskpresset Appelsinjuice",
    price: "55 KR",
    tags: ""
  }
];

const SpecialMenu = () => (
  <>


    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Snacks</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
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
        <SubHeading title="Aften menu" />
        <h1 className="headtext__cormorant">Kulinarisk oplevelse</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Foretter / Salater</p>
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

        <div className="app__specialMenu-menu_img">
          <img src={ImageFoodNumberFour} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Hovedretter / Desert</p>
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
        <SubHeading title="Et udvalg af drikke" />
        <h1 className="headtext__cormorant">Menuen der slukker tørsten</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Læskedrikke</p>
          <div className="app__specialMenu_menu_items">
            {softDrinks.map((softDrinks, index) => (
              <MenuItem
                key={index}
                title={softDrinks.title}
                price={softDrinks.price}
                tags={softDrinks.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={ImageShaker} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <p className='app__specialMenu-menu_heading'>To for 165 KR</p>
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
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Varme Drikke</p>
          <div className="app__specialMenu_menu_items">
            {hotBevarages.map((hotBevarages, index) => (
              <MenuItem
                key={index}
                title={hotBevarages.title}
                price={hotBevarages.price}
                tags={hotBevarages.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={ImageTea} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Kolde Drikke</p>
          <div className="app__specialMenu_menu_items">
            {coldBevarages.map((coldBevarages, index) => (
              <MenuItem
                key={index}
                title={coldBevarages.title}
                price={coldBevarages.price}
                tags={coldBevarages.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  </>
);

export default SpecialMenu;
