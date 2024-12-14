import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        batch: '',
        department: '',
        numOfCourses: 0,
        picture: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));

        try {
            const response = await axios.post('http://localhost:5000/api/students', data);
            alert('Student added successfully!');
        } catch (error) {
            alert('Error adding student');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="rollNumber" placeholder="Roll Number" onChange={handleChange} required />
            <input type="text" name="batch" placeholder="Batch" onChange={handleChange} required />
            <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
            <input type="number" name="numOfCourses" placeholder="Number of Courses" onChange={handleChange} required />
            <input type="file" name="picture" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
