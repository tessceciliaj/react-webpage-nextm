import React from 'react';
import styles from '../styles/trailer.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import logo from '../../public/OXOX_logo.png'

export default function Trailer() {
    const opts = {
        height: '340',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className={styles.trailer}>
            <div>
                <h1 className={styles.title}>Trailer</h1>
            </div>
            <div className={styles.upperContainer}>
                <Link to='/'>
                    <FaArrowLeft className={styles.arrowLeft} />
                </Link>
            </div>
            <div className={styles.videoContainer}>
                <YouTube videoId='HJWOwlN5CrM' opts={opts} className={styles.video} />
            </div>
            <div className={styles.lowerContainer}>
                <div>
                <h3>Meet our</h3>
                <h3 className={styles.bold}>futureproof talent!</h3>
                </div>
                <div className={styles.imgContainer}>
                    <img src={logo} height={200} weight={200} />
                    </div>
            </div>
        </div>
    );
}
