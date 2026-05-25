import { useContext, useState } from 'react';
import { UniversityContext } from '../context/UniversityContext';
import CourseCard from '../components/CourseCard';

function Courses() {
  const { courses, addCourse } = useContext(UniversityContext);

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Course title required');
      return;
    }

    addCourse({
      id: Date.now(),
      title
    });

    setTitle('');
  };

  return (
    <div>
      <h1>Courses</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Course Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button>Add Course</button>
      </form>

      <div>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;