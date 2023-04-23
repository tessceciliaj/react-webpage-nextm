import styles from '../styles/students.module.css'
import studentPic from '../assets/student.png'

export default function StudentCard({img, name, profession, email, portfolioUrl}) {
    return (
        <div className={styles.studentCard}>
            <div>
              <img src={studentPic} width={100} height={100} alt="student image" />
             {/*  <a href={portfolioUrl}>
                <p className={styles.portfolio}>Portfolio</p>
              </a>
    */}
            </div>
            <div>
              <h3>{name}</h3>
              <p className={styles.profession}>{profession}</p>
              <p>{email}</p>
            </div>
        </div>
    );
}
