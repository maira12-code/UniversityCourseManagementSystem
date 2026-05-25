import { useContext } from 'react';
import { UniversityContext } from '../context/UniversityContext';

function Home() {
  const {
    students,
    courses,
    enrollments
  } = useContext(UniversityContext);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className='dashboard'>
        <div className='box'>
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className='box'>
          <h2>{courses.length}</h2>
          <p>Total Courses</p>
        </div>

        <div className='box'>
          <h2>{enrollments.length}</h2>
          <p>Total Enrollments</p>
        </div>
      </div>
    </div>
  );
}

export default Home;