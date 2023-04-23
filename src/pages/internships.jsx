import React from 'react'
import styles from '../styles/internships.module.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function internships() {
  return (
    <>
    <div className={styles.upperContainer}>
      <div> <FaArrowLeft/> </div>
      <h1>Lets talk</h1>
      <p>Lorem impsum sit amet consectetur adipisicing elit, sed do.</p>
    </div>
    <div className={styles.lowerContainer}>
      <form>
      <input type='text' id='name' name='name' value='' placeholder='John Doe'/>
      <input type='text' id='email' name='email' value='' placeholder='johndoe@example.com'/>
      <input type='text' id='phone' name='phone' value='' placeholder='123-546 789'/>
      </form>
      <h2>Personal Information</h2>
    </div>
    <button>
      <FaArrowRight/>
    </button>
    </>
  )
}
