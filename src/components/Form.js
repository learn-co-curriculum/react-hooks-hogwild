import React, { useState } from 'react';

function HogForm({ addHog }) {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        greased: false,
        weight: '',
        highestMedal: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name: formData.name,
            specialty: formData.specialty,
            greased: formData.greased,
            weight: parseFloat(formData.weight),
            "highest medal achieved": formData.highestMedal,
            image: formData.image
        };
        addHog(newHog);
        setFormData({
            name: '',
            specialty: '',
            greased: false,
            weight: '',
            highestMedal: '',
            image: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <div style={fieldStyles}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Specialty</label>
                <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Greased</label>
                <input
                    type="checkbox"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
            </div>
            <div style={fieldStyles}>
                <label>Weight</label>
                <input
                    type="number"
                    name="weight"
                    step="0.1"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Highest Medal Achieved</label>
                <select
                    name="highestMedal"
                    value={formData.highestMedal}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select medal</option>
                    <option value="wood">Wood</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                    <option value="diamond">Diamond</option>
                </select>
            </div>
            <div style={fieldStyles}>
                <label>Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" style={buttonStyles}>Add Hog</button>
        </form>
    );
}

const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
};

const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
};

const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default HogForm;
