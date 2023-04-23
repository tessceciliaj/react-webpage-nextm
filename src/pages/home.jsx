import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../App.module.css'
import blueShape from '../../public/shape-blue.png'
import { Link } from 'react-router-dom';

const sliderContent = [
    { title: 'Internships',
     description: 'Lorem ipsum hello my name is John, bla bla bla ',
     button: "LET'S TALK" },
    { title: 'Students',
     description: 'Lorem ipsum hello my name is Lolo, bla bla bla ',
     button: "BROWSE" },
    { title: 'TikTok Filters',
     description: 'Lorem ipsum hello my name is Puh, bla bla bla ',
     button: "TRY NOW" },
    { title: 'About all this',
     description: 'Lorem ipsum hello my name is Donald, bla bla bla',
     button: "TRY NOW" }
  ]

export default function home() {
  return (
    <main className={styles.main}>
    <div className={styles.upperContainer}>
      <img alt='LOGO' />
      <h2>DISCOVER</h2>
      <h1>FUTUREPROOF TALENT</h1>
    </div>
    <div className={styles.lowerContainer}>
    
      <div className={styles.sliderContainer}>
        <Swiper
             modules={[Pagination]}
             spaceBetween={50}
             slidesPerView={1}
             loop={true}
             pagination={{ clickable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
        >
    <SwiperSlide>
      <img src={blueShape} alt='Blue Shape' width={200} height={210} />
      <h3>{sliderContent[0].title}</h3>
      <p>{sliderContent[0].description}</p>
      <Link to="/internships">
        <button className={styles.btnFront}>
          {sliderContent[0].button}
        </button>
      </Link> 
    </SwiperSlide>
    <SwiperSlide>
    <img src={blueShape} alt='Blue Shape' width={200} height={210} />
      <h3>{sliderContent[1].title}</h3>
      <p>{sliderContent[1].description}</p>
      <Link to="/students">
        <button className={styles.btnFront}>
          {sliderContent[1].button}
        </button>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
    <img src={blueShape} alt='Blue Shape' width={200} height={210} />
      <h3>{sliderContent[2].title}</h3>
      <p>{sliderContent[2].description}</p>
      <Link to="/tiktokfilter">
        <button className={styles.btnFront}>
          {sliderContent[2].button}
        </button>
      </Link>
    </SwiperSlide>
    <SwiperSlide>
    <img src={blueShape} alt='Blue Shape' width={200} height={210} />
      <h3>{sliderContent[3].title}</h3>
      <p>{sliderContent[3].description}</p>
      <Link to="/about">
        <button className={styles.btnFront}>
          {sliderContent[3].button}
        </button>
      </Link>
    </SwiperSlide>
  </Swiper>
      </div>
    </div>
  </main>
  )
}