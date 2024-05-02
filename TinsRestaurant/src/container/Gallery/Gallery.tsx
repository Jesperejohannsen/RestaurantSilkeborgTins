import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import  ImageFoodOne  from '../../assets/foodImages/bigDish.jpg';
import  ImageFoodTwo  from '../../assets/foodImages/vietnam2.jpg';
import  ImageFoodThree  from '../../assets/foodImages/vietnam3.jpg';
import  ImageFoodFour  from '../../assets/foodImages/vietnam4.jpg';
import  ImageFoodFive  from '../../assets/foodImages/vietnam6.jpg';
import { SubHeading } from '../../components';
import './Gallery.css';

const Images = [
  {
    id: 1,
    image: ImageFoodOne,
  },
  {
    id: 2,
    image: ImageFoodTwo,
  },
  {
    id: 3,
    image: ImageFoodThree,
  },
  {
    id: 4,
    image: ImageFoodFour,
  },
  {
    id: 5,
    image: ImageFoodFive,
  }
];


const Gallery = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;

    if (current) {
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Udpluk fra menuen</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <a href='https://www.instagram.com/tinsfood/' target="_blank" rel="noopener noreferrer">
       <button type="button" className="custom__button">Se flere billeder</button>
      </a>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {Images.map((item, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={item.image} alt={`gallery_image-${index + 1}`} />
            <BsInstagram className="gallery__image-icon" href='https://www.instagram.com/tinsfood/'/>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
};

export default Gallery;