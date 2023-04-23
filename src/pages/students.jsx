import studentData from '../../public/studentData.js';
import StudentCard from '../components/StudentCard.jsx';

export default function Students() {
    return (
        <div>
            <div>TITLE</div>
            <div>
                {studentData.map((data) => {
                    <StudentCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
}
