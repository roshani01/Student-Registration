import React, { useState } from 'react';

const CourseOfferings = () => {
  //const [courseTypes, setCourseTypes] = useState(['Individual', 'Group']);
  const [courseTypes] = useState(['Individual', 'Group']);

  

  //const [courses, setCourses] = useState(['English', 'Hindi']);
  const [courses] = useState(['English', 'Hindi']);  // Only the state, no setter function



  const [offerings, setOfferings] = useState([]);

  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (selectedType && selectedCourse) {
      const newOffering = `${selectedType} - ${selectedCourse}`;
      if (editingIndex !== null) {
        const updated = [...offerings];
        updated[editingIndex] = newOffering;
        setOfferings(updated);
        setEditingIndex(null);
      } else {
        setOfferings([...offerings, newOffering]);
      }
      setSelectedType('');
      setSelectedCourse('');
    }
  };

  const handleDelete = (index) => {
    setOfferings(offerings.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const [type, course] = offerings[index].split(' - ');
    setSelectedType(type);
    setSelectedCourse(course);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Type</option>
        {courseTypes.map((type, i) => <option key={i}>{type}</option>)}
      </select>

      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course, i) => <option key={i}>{course}</option>)}
      </select>

      <button onClick={handleAdd}>{editingIndex !== null ? 'Update' : 'Add'}</button>

      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>
            {offering}
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferings;
