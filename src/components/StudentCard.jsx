import styles from '../styles/students.module.css';
import studentPic from '../assets/student1.png';

export default function StudentCard({ img, name, profession, portfolioUrl }) {
    const fullDesc = profession;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 4);
    const smallDesc = selectedWords.join(' ');


    return (
        <div className={styles.studentCard}>
            <div className={styles.upper}>
                <img src={studentPic} width={200} height={200} alt='student image' />
            </div>
            <div className={styles.lower}>
                <h3>{name}</h3>
                <p className={styles.profession}>{`${smallDesc}...`}</p>
                <div className={styles.links}>
                    <a href={portfolioUrl}>
                        <p className={styles.link}>Portfolio</p>
                    </a>
                    <span>|</span>
                    <p className={styles.link}>Read more</p>
                </div>
            </div>
        </div>
    );
}
