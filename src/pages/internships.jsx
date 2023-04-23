import React, { useState } from 'react';
import styles from '../styles/internships.module.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function internships() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //to see data 
  console.log('name is: ' + name);
  console.log('email is: ' + email);
  console.log('phone is: ' + phone);
  

  return (
    <>
      <div className={styles.upperContainer}>
        <div className={styles.arrowLeft}>
          {' '}
          <FaArrowLeft />{' '}
        </div>
        <h1>Lets talk</h1>
        <p>Lorem impsum sit amet consectetur adipisicing elit, sed do.</p>
      </div>
      <div className={styles.lowerContainer}>
        <form>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            placeholder='John Doe'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            placeholder='johndoe@example.com'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='text'
            id='phone'
            name='phone'
            value={phone}
            placeholder='123-546 789'
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </form>
        <h2>Personal Information</h2>
      </div>
      <button className={styles.btn}>
        <FaArrowRight />
      </button>
    </>
  );
}
