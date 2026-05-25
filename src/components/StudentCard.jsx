import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UniversityContext } from '../context/UniversityContext';

function StudentCard({ student }) {
  const { deleteStudent } = useContext(UniversityContext);

  return (
    <div className='card'>
      <h3>{student.name}</h3>
      <p>{student.email}</p>

      <Link to={`/student/${student.id}`}>
        View Details
      </Link>

      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;