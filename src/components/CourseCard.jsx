import { useContext } from 'react';
import { UniversityContext } from '../context/UniversityContext';

function CourseCard({ course }) {
  const { deleteCourse } = useContext(UniversityContext);

  return (
    <div className='card'>
      <h3>{course.title}</h3>

      <button onClick={() => deleteCourse(course.id)}>
        Delete
      </button>
    </div>
  );
}

export default CourseCard;