import styles from '../styles/students.module.css';
import studentPic from '../assets/student1.png';
import { FaEnvelope } from 'react-icons/fa';

export default function StudentCard({
    img,
    name,
    profession,
    portfolioUrl,
    portfolio,
    desc,
    email,
}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.studentCard}>
                <div className={styles.upper}>
                    <img src={studentPic} width={200} height={200} alt='student image' />
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
                        <div className={styles.link}>Read more</div>
                    </div>
                </div>
            </div>
            <div className={styles.bigCard}>
                <div className={styles.moreInfo}>
                    <div>
                        <p>{`"${desc}"`}</p>
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
    );
}
