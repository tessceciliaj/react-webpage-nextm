import styles from '../styles/students.module.css';
import studentPic from '../assets/student1.png';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function StudentCard({
  img,
  name,
  profession,
  portfolioUrl,
  portfolio,
  desc,
  email,
  linkedinUrl,
  linkedin,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const imgUrl = img.length !== 0 ? img : studentPic;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.studentCard} onClick={handleClick}>
        <div className={styles.upper}>
          <img src={imgUrl} width={200} height={200} alt='student image' />
        </div>
        <div className={styles.lower}>
          <h3>{name}</h3>
          <p className={styles.profession}>{profession}</p>
          <div className={styles.links}>
            {portfolio ? (
              <a href={portfolioUrl}>
                <p className={styles.link}>Portfolio</p>
              </a>
            ) : (
              <a href={portfolioUrl}>
                <p className={styles.link} id={styles.disabled}>
                  Portfolio
                </p>
              </a>
            )}
            <span>|</span>
            {open ? (
              <div className={styles.link}>close</div>
            ) : (
              <div className={styles.link}>Read more</div>
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.bigCard}>
          <div className={styles.moreInfo}>
            <div>
              <p>{`"${desc}"`}</p>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.linkedinbox}>
                <a href={linkedinUrl} id={!linkedin ? styles.disabled : ''}>
                  <div className={styles.icon}>
                    <FaLinkedin />
                  </div>
                  <p>LinkedIn</p>
                </a>
              </div>
              <div className={styles.emailbox}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <p className={styles.email}>{email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
