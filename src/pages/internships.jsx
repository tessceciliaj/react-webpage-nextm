import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import firebaseConfig from '../firebaseConfig';
import styles from '../styles/internships.module.css';
import { Link } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function internships() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log('name is: ' + name);
    console.log('email is: ' + email);
    console.log('phone is: ' + phone);

    const databaseRef = ref(database, 'internshipSignups');
    const person = {
      name: name,
      email: email,
      phone: phone,
    };
    push(databaseRef, person)
      .then(() => {
        console.log('Data written successfully!');
      })
      .catch((error) => {
        console.error('Error writing data: ', error);
      });
  };

  return (
    <>
      <div className={styles.upperContainer}>
        <div className={styles.arrowLeft}>
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <h1>Lets talk</h1>
        <p>Are you interested in futureproof talent? Fill out your contact information here.</p>
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
        <h2>Our student body is diverse and features a variety of both experience and skill. What are you looking for?</h2>
      </div>
      <button className={styles.btn} onClick={handleClick}>
        <FaArrowRight />
      </button>
    </>
  );
}
