import { useContext } from 'react';
import { UniversityContext } from '../context/UniversityContext';

function EnrollmentTable() {
  const {
    enrollments,
    students,
    courses,
    removeEnrollment
  } = useContext(UniversityContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Course</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {enrollments.map(enrollment => {
          const student = students.find(
            s => s.id === enrollment.studentId
          );

          const course = courses.find(
            c => c.id === enrollment.courseId
          );

          return (
            <tr key={enrollment.id}>
              <td>{student?.name}</td>
              <td>{course?.title}</td>

              <td>
                <button
                  onClick={() => removeEnrollment(enrollment.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EnrollmentTable;