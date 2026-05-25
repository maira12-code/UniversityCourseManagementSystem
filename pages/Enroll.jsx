import { useContext, useState } from 'react';
import { UniversityContext } from '../context/UniversityContext';

function Enroll() {
  const {
    students,
    courses,
    enrollStudent
  } = useContext(UniversityContext);

  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentId || !courseId) {
      alert('Select student and course');
      return;
    }

    enrollStudent(Number(studentId), Number(courseId));
  };

  return (
    <div>
      <h1>Enroll Student</h1>

      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setStudentId(e.target.value)}>
          <option>Select Student</option>

          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => setCourseId(e.target.value)}>
          <option>Select Course</option>

          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>

        <button>Enroll</button>
      </form>
    </div>
  );
}

export default Enroll;