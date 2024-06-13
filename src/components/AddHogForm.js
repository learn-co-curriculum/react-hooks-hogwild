import React, { useState } from "react";

const AddHogForm = ({ handleNewHog }) => {

	const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    medal: 'none',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewHog(formData)
  }

	return (
    <form className="ui form"  style={{maxWidth:'400px'}} onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Greased</label>
        <input
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Medal</label>
        <select
        className="ui dropdown"
          name="medal"
          value={formData.medal}
          onChange={handleChange}
        >
          <option value="none">None</option>
					<option value="wood">Wood</option>
					<option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
					<option value="diamond">Diamond</option>
					<option value="platinum">Platinum</option>
        </select>
      </div>
      <div className="field">
        <label>Image Source</label>
        <input
          type="text"
          name="image"
          value={formData.image} onChange={handleChange} 
        />
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  );
};

export default AddHogForm;
