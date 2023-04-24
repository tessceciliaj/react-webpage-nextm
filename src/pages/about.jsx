import React from 'react'
import styles from '../styles/about.module.css'
import student from '../assets/student1.png'
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
        <h1>Im a big fan of Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.innerContainer}>
          <img src={student} width={50} height={50} alt="student picture"/>
          <p>John Doe</p>
        </div>
        <p className={styles.quote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}
