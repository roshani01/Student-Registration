import React, { useState } from 'react';

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() !== '') {
      if (editingIndex !== null) {
        const updated = [...courseTypes];
        updated[editingIndex] = input;
        setCourseTypes(updated);
        setEditingIndex(null);
      } else {
        setCourseTypes([...courseTypes, input]);
      }
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const updated = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updated);
  };

  const handleEdit = (index) => {
    setInput(courseTypes[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. Individual" />
      <button onClick={handleAdd}>{editingIndex !== null ? 'Update' : 'Add'}</button>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypes;
