import React from 'react'
import styles from '../styles/about.module.css'
import student from '../assets/student0.png'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function about() {
  return (
    <div>
      <div>
        <Link to="/">
          <FaArrowLeft className={styles.arrowLeft} />
        </Link>
      </div>
      <div className={styles.upperContainer}>
        <h1>About all this</h1>
        <p>
          "Just A Normal Room" is a VR experience made by the students that are
          here today. Try a piece of the future!
        </p>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.innerContainer}>
          <img src={student} width={50} height={50} alt="student picture" />
          <p>Jad Tawbi</p>
        </div>
        <p className={styles.quote}>
          "Creating the hand mechanics made me rediscover how fun throwing
          things are"
        </p>
      </div>
    </div>
  );
}
