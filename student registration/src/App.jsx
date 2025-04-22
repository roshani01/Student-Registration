import React from 'react';
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import CourseOfferings from './components/CourseOfferings';
import StudentRegistrations from './components/StudentRegistrations';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Registration System</h1>
      <CourseTypes />
      <Courses />
      <CourseOfferings />
      <StudentRegistrations />
    </div>
  );
}

export default App;
