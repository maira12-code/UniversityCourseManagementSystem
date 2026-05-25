import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Enroll from './pages/Enroll';
import Enrollments from './pages/Enrollments';
import StudentDetail from './pages/StudentDetail';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/enroll' element={<Enroll />} />
        <Route path='/enrollments' element={<Enrollments />} />
        <Route path='/student/:id' element={<StudentDetail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;