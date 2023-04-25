import React from 'react'
import styles from '../styles/trailer.module.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


export default function Trailer() {

  const opts = {
    height: '340',
    width: '340',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className={styles.upperContainer}>
        <Link to="/">
          <FaArrowLeft className={styles.arrowLeft} />
        </Link>
      </div>
      <div className={styles.videoContainer}>
        <YouTube videoId="MQFIhbYUndc" opts={opts} />
      </div>
      <div className={styles.lowerContainer}>
        <h2>Watch our trailer</h2>
        <h3>Introduction to our future proof talent!</h3>
      </div>
    </div>
  );
}
