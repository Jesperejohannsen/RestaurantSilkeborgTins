import './SpecialMenu.css';
import ImageShaker from '../../assets/menu.png';
import ImageFoodNumberFour from '../../assets/foodImages/testImagePho.jpg';
import ImageTea from '../../assets/foodImages/tea.jpg';
import { SubHeading, MenuItem } from '../../components';


const cocktails = [
  {
    title: 'Passion Rum',
    price: '89,-',
    tags: 'Passion | Lime | Mynte | Rom',
  },
  {
    title: "Berry Bomb",
    price: '89,-',
    tags: 'Lime | Bær | Rom | Danskvand',
  },
  {
    title: 'Moscoc Mule med et twist',
    price: '89,-',
    tags: 'Lime | Citrongræs sirup | Gingerbeer',
  },
  {
    title: 'Pink Lychee',
    price: '89,-',
    tags: 'Vodka | Æggehvide | Litchi Sirup | Tranebær | Ananas',
  },
  {
    title: 'Frozen Daiquiri',
    price: '89,-',
    tags: 'Passion | Lime / Jordbær',
  },
  {
    title: 'Whiskey Sour',
    price: '89,-',
    tags: 'Æggehvide | Citron | Whiskey',
  },
  {
    title: 'Gin-Jito',
    price: '89,-',
    tags: 'Lime | Thai Basilikum | Gingerbeer',
  },
  {
    title: "Saigon Sweet'n sour",
    price: '89,-',
    tags: 'Gin | Lime | Mynte | Kumquat',
  }
];

// const wineMenu = [
//   {
//     title: 'Cava - Dom Potier, Demi-Sec',
//     price: '195,-',
//     tags: 'Mousserende, Spanien'
//   },
//   {
//     title: 'He Pinot Gris',
//     price: '69/235,-',
//     tags: 'Hvidvin, Alsace, Frankrig'
//   },
//   {
//     title: 'Riesling',
//     price: '235,-',
//     tags: 'Hvidvin, Domaine Spielmann, Alsace, Frankrig, 2020'
//   },
//   {
//     title: 'Rata Road',
//     price: '235,-',
//     tags: 'Hvidvin, Sauvignon Blanc, 2020, New Zealand'
//   },
//   {
//     title: 'Chardonnay',
//     price: '69/235,-',
//     tags: 'Hvidvin, Orby, Frankrig'
//   },
//   {
//     title: 'Syrah-Grenache',
//     price: '255,-',
//     tags: 'Rødvin, Orby, Frankrig'
//   },
//   {
//     title: 'Cabernet-Syrah',
//     price: '255,-',
//     tags: 'Rødvin, Orby, Frankrig'
//   },
//   {
//     title: 'Merlot',
//     price: '69/235,-',
//     tags: 'Rødvin, Chateau Castagnac, Bordeaux, Frankrig, 2019'
//   },
//   {
//     title: 'Shiraz',
//     price: '255,-',
//     tags: 'Rødvin, First Drop, Australien, 2016'
//   },
//   {
//     title: 'Rosé d’Anjou',
//     price: '69/225,-',
//     tags: 'Rosé, Frankrig'
//   },
//   {
//     title: 'Rosé Gris de La Dune',
//     price: '235,-',
//     tags: 'Rosé, Frankrig'
//   }
// ];

const softDrinks = [
  {
    id: 1,
    title: "Coca Cola/Pepsi Max/Faxe Kondi",
    price: "35,-",
    tags: "25cl"
  },
  {
    id: 2,
    title: "Økologisk Saft",
    price: "42,-",
    tags: "Hyldblomst el. Ingefær/Citron, 25 cl"
  },
  {
    id: 3,
    title: "Galvanina Bio-Sodavand",
    price: "48,-",
    tags: "Pink Grape, Mandarin, Ginger Beer, Danskvand, 35 cl"
  },
  {
    id: 4,
    title: "Galvanina Danskvand",
    price: "65,-",
    tags: "75 cl"
  },
  {
    id: 5,
    title: "Asiatisk Øl",
    price: "52,-",
    tags: "Saigon el. Tiger, 33 cl"
  },
  {
    id: 6,
    title: "Pift Øl",
    price: "52,-",
    tags: "Citrus el. Mango, 50 cl"
  },
  {
    id: 7,
    title: "Kissmeyer Øl",
    price: "55,-",
    tags: "Pale Ale, 33 cl"
  },
  {
    id: 8,
    title: "Anarkist Øl",
    price: "72,-",
    tags: "Bloody Weizen, New England IPA, Dobbelt IPA, 50 cl"
  },
  {
    id: 9,
    title: "Alkoholfri Heineken",
    price: "39,-",
    tags: "33 cl"
  }

];

const dinnerStartersMenu = [
  {
    id: 1,
    title: "Bao",
    tags: "Dampet hvedebolle med marineret svinekød, agurk, sylte og koriander.",
    price: "49,-"
  },
  {
    id: 2,
    title: "Chả Giò",
    tags: "Tre hjemmelavede stegte forårsruller med svinekød og sursød sauce. (Kan fås som vegetar. Indeholder laktose.)",
    price: "65,-"
  },
  {
    id: 3,
    title: "Tôm Lăn Bột",
    tags: "Indbagte rejer m. chili mayo.",
    price: "69,-"
  },
  {
    id: 4,
    title: "Hoành Thánh Chiên",
    tags: "Stegte wonton med rejer og kylling. Serveret med satay sauce.",
    price: "69,-"
  },
  {
    id: 5,
    title: "Gỏi Cuốn",
    tags: "Tre friske ruller med salat, urter og rejer, svinekød eller oksekød. Serveres med hoisinsaus (Kan fås som vegetar og glutenfri).",
    price: "75,-"
  },
  {
    id: 6,
    title: "Bánh Xèo",
    tags: "Rispandekage med rejer, svinekød, salat og friske urter. Serveres med fisksaus. (Glutenfri. Kan fås som vegetar)",
    price: "89,-"
  }
];

const dinnerMainCourseMenu = [
  {
    id: 1,
    title: "Phở Bò",
    price: "109,-",
    tags: "Oksekødsuppe med kødboller og blancheret kød. Serveres med friske urter.",
  },
  {
    id: 2,
    title: "Bún Bò Huế",
    price: "109,-",
    tags: "Spicy nudelsuppe med oksekød og friske urter.",
  },
  {
    id: 3,
    title: "Bún Thịt Nướng Chả Giò",
    price: "109,-",
    tags: "Friske nudler med svinekød og forårsruller. (Kan fås som vegetar)",
  },
  {
    id: 4,
    title: "Cơm Tấm",
    price: "109,-",
    tags: "Grillet svinekød med ris og vietnamesisk æggekage.",
  },
  {
    id: 5,
    title: "Phở Xào Chay",
    price: "109,-",
    tags: "Stegte nudler med grøntsager, svampe og tofu.",
  },
  {
    id: 6,
    title: "Dagens Bowl",
    tags: "Spørg tjeneren for at høre om indholdet i dagens bowl.",
    price: "119,-"
  },
  {
    id: 7,
    title: "Delt Måltid",
    price: "159,- pr. person",
    tags: "Vietnamesisk måltid sammensat af ugens råvarer. Minimum to personer. Spørg tjeneren for dagens deling.",
  },
  {
    id: 8,
    title: "Dagens Dessert",
    price: "59,-",
    tags: "Spørg tjeneren, hvad dagens dessert består af.",
  },
  {
    id: 9,
    title: "Side Orders",
    price: "32,-",
    tags: "Vietnamesisk Kimchi - 32 KR. / Stegt Grønt - 39 KR. / Ekstra Kød - 15 KR.",
  }
];

const lunchMenu = [
  {
    id: 1,
    title: "Bánh Mì",
    price: "59,-",
    tags: "Vælg mellem spælæg, marineret svinekød eller oksekød"
  },
  {
    id: 2,
    title: "Bao Bun",
    price: "40,-",
    tags: "Dampede bao bun med marineret svinekød"
  },
  {
    id: 3,
    title: "Gỏi Gà",
    price: "80,-",
    tags: "Kylling, kål, gulerødder, krydderurter"
  },
  {
    id: 4,
    title: "Stegte Ris",
    price: "85,-",
    tags: "Stegte ris med grøntsager og rejer"
  },
  {
    id: 5,
    title: "Ris med Omelet",
    price: "85,-",
    tags: "Omelet med rejer og grøntsager, serveres med let grønt og soya"
  },
  {
    id: 6,
    title: "Tins Frokosttallerken",
    price: "99,-",
    tags: "Med æg, paté, oksekød, pølse og sylte, serveres med brød"
  }
];

const hotBevarages = [
  {
    id: 1,
    title: "Sort Kaffe",
    price: "30,-",
    tags: "Ved refill: +15 KR"
  },
  {
    id: 2,
    title: "Kaffe Latte/Cappuccino",
    price: "35,-",
    tags: ""
  },
  {
    id: 3,
    title: "Økologisk The",
    price: "25,-",
    tags: "Pukka: LemonGrass Ginger, Three Ginger, Supreme Matcha Green, Ginseng Matcha Green, Lemon Ginger & Manuka Honey"
  },
  {
    id: 4,
    title: "Kande Med The",
    price: "45,-",
    tags: "Jasmin eller Oolong"
  }
];

const coldBevarages = [
  {
    id: 1,
    title: "Postevand Gratis Refill",
    price: "29,-",
    tags: ""
  },
  {
    id: 2,
    title: "Vietnamesisk Iskaffe",
    price: "55,-",
    tags: ""
  },
  {
    id: 3,
    title: "Avocado Smoothie",
    price: "55,-",
    tags: ""
  },
  {
    id: 4,
    title: "Tins Lemonade",
    price: "55,-",
    tags: ""
  },
  {
    id: 5,
    title: "Tins Iste",
    price: "55,-",
    tags: ""
  },
  {
    id: 6,
    title: "Friskpresset Appelsinjuice",
    price: "55,-",
    tags: ""
  }
];

const SpecialMenu = () => (
  <>


    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Frokost menu" />
        <h1 className="headtext__cormorant">En lækker & let frokost</h1>
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
          <p className='app__specialMenu-menu_heading'>To for 165,-</p>
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
