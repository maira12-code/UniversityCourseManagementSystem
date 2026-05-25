import { createContext, useEffect, useState } from 'react';

export const UniversityContext = createContext();

export const UniversityProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    const storedEnrollments = JSON.parse(localStorage.getItem('enrollments')) || [];

    setStudents(storedStudents);
    setCourses(storedCourses);
    setEnrollments(storedEnrollments);
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
  }, [enrollments]);
const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));

    setEnrollments(
      enrollments.filter(enrollment => enrollment.studentId !== id)
    );
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };  
const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));

    setEnrollments(
      enrollments.filter(enrollment => enrollment.courseId !== id)
    );
  };

  const enrollStudent = (studentId, courseId) => {
    const exists = enrollments.find(
      enrollment =>
        enrollment.studentId === studentId &&
        enrollment.courseId === courseId
    );  
if (exists) {
      alert('Duplicate enrollment not allowed');
      return;
    }

    const newEnrollment = {
      id: Date.now(),
      studentId,
      courseId
    };

    setEnrollments([...enrollments, newEnrollment]);
  };    
const removeEnrollment = (id) => {
    setEnrollments(
      enrollments.filter(enrollment => enrollment.id !== id)
    );
  };

  return (
    <UniversityContext.Provider
      value={{
        students,
        courses,
        enrollments,
        addStudent,
        deleteStudent,  
        addCourse,
        deleteCourse,
        enrollStudent,
        removeEnrollment
      }}
    >
      {children}
    </UniversityContext.Provider>
  );
};