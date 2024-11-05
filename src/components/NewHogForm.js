import React, { useState } from "react";

const NewHogForm = ({ addNewHog }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, specialty, greased, weight, medal, image };
    addNewHog(newHog);
    // Clear the form after submission
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  };

  return (
    <form className="new-hog-form" onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="greased">Greased:</label>
        <input
          type="checkbox"
          id="greased"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <input
          type="text"
          id="medal"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit-button">Add Hog</button>
    </form>
  );
};

export default NewHogForm;
