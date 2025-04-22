import React, { useState } from 'react';

const StudentRegistrations = () => {
  //const [offerings, setOfferings] = useState(['Individual - English', 'Group - Hindi']);
  const [offerings] = useState(['Individual - English', 'Group - Hindi']); // Only the state, no setter function

  const [selectedOffering, setSelectedOffering] = useState('');
  const [studentName, setStudentName] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [filterType, setFilterType] = useState('');

  const handleRegister = () => {
    if (studentName && selectedOffering) {
      const newRegistration = { studentName, offering: selectedOffering };
      setRegistrations([...registrations, newRegistration]);
      setStudentName('');
    }
  };

  const filteredOfferings = filterType
    ? offerings.filter((o) => o.startsWith(filterType))
    : offerings;

  return (
    <div>
      <h2>Student Registrations</h2>

      <input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Student Name" />

      <select value={selectedOffering} onChange={(e) => setSelectedOffering(e.target.value)}>
        <option value="">Select Offering</option>
        {filteredOfferings.map((offering, i) => <option key={i}>{offering}</option>)}
      </select>

      <button onClick={handleRegister}>Register</button>

      <h3>Filter by Course Type</h3>
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All</option>
        <option>Individual</option>
        <option>Group</option>
      </select>

      <ul>
        {registrations
          .filter((reg) => !filterType || reg.offering.startsWith(filterType))
          .map((reg, i) => (
            <li key={i}>
              {reg.studentName} → {reg.offering}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentRegistrations;
