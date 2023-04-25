import studentData from '../../public/studentData.js';
import StudentCard from '../components/StudentCard.jsx';
import styles from '../styles/students.module.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Students() {
    return (
        <div>
            <div className={styles.arrowLeft}>
                <Link to='/'>
                    <FaArrowLeft />
                </Link>
            </div>
            <h1 className={styles.title}>STUDENTS</h1>
            <div className={styles.cardsContainer}>
                {studentData.map((data) => {
                    return <StudentCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
}
