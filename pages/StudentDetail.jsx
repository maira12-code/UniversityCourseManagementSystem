import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UniversityContext } from '../context/UniversityContext';

function StudentDetail() {
  const { id } = useParams();

  const {
    students,
    courses,
    enrollments
  } = useContext(UniversityContext);

  const student = students.find(
    s => s.id === Number(id)
  );

  const studentEnrollments = enrollments.filter(
    enrollment => enrollment.studentId === Number(id)
  );

  return (
    <div>
      <h1>{student?.name}</h1>
      <p>{student?.email}</p>

      <h2>Enrolled Courses</h2>

      <ul>
        {studentEnrollments.map(enrollment => {
          const course = courses.find(
            c => c.id === enrollment.courseId
          );

          return (
            <li key={enrollment.id}>
              {course?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentDetail;