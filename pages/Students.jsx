import { useContext, useState } from 'react';
import { UniversityContext } from '../context/UniversityContext';
import StudentCard from '../components/StudentCard';

function Students() {
  const { students, addStudent } = useContext(UniversityContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('All fields are required');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email
    };

    addStudent(newStudent);

    setName('');
    setEmail('');
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Students</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Student Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>Add Student</button>
      </form>

      <input
        type='text'
        placeholder='Search Students'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredStudents.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;