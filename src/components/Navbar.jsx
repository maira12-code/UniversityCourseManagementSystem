import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <h2>University CMS</h2>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/students'>Students</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/enroll'>Enroll</Link>
        <Link to='/enrollments'>Enrollments</Link>
      </div>
    </nav>
  );
}

export default Navbar;