import React, { useState } from 'react';
import './index.css';

function  Registration() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    address: '',
    domain: '',
    studentId: '',
    university: '',
    startDate: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age || formData.age < 16 || formData.age > 30) newErrors.age = 'Age must be between 16 and 30';
    if (!formData.contactNumber.match(/^\d{10}$/)) newErrors.contactNumber = 'Valid 10-digit contact number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.domain) newErrors.domain = 'Please select a domain';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.university.trim()) newErrors.university = 'University name is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Registration submitted successfully for Startup World! 🚀');
      setFormData({
        name: '',
        age: '',
        contactNumber: '',
        address: '',
        domain: '',
        studentId: '',
        university: '',
        startDate: '',
        comments: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Join Startup World!</h2>
      <div className="space-y-4">
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="input-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your 10-digit contact number"
          />
          {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
        </div>
        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="input-group">
          <label>Domain of Interest</label>
          <select
            name="domain"
            value={formData.domain}
            onChange={handleChange}
          >
            <option value="">Select a domain</option>
            <option value="Tech">Web Dev</option>
            <option value="Marketing">App Dev</option>
            <option value="Design">Full Stack</option>
            <option value="Business">Python dev</option>
            <option value="Other">Backend dev</option>
          </select>
          {errors.domain && <p className="error">{errors.domain}</p>}
        </div>
        <div className="input-group">
          <label>Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="Enter your student ID"
          />
          {errors.studentId && <p className="error">{errors.studentId}</p>}
        </div>
        <div className="input-group">
          <label>University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder="Enter your university name"
          />
          {errors.university && <p className="error">{errors.university}</p>}
        </div>
        <div className="input-group">
          <label>Start of Joining</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          {errors.startDate && <p className="error">{errors.startDate}</p>}
        </div>
        <div className="input-group">
          <label>Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Any additional comments or info"
            rows="4"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="submit-button"
        >
          Register Now!
        </button>
      </div>
    </div>
  );
}

export default  Registration;