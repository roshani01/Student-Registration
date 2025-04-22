import React, { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim()) {
      if (editingIndex !== null) {
        const updated = [...courses];
        updated[editingIndex] = input;
        setCourses(updated);
        setEditingIndex(null);
      } else {
        setCourses([...courses, input]);
      }
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(courses[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>Courses</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. English" />
      <button onClick={handleAdd}>{editingIndex !== null ? 'Update' : 'Add'}</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
