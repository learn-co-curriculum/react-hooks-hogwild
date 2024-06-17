import React, { useState } from "react";

function Form({ onAddPig }) {
  const [formData, setFormData] = useState ('')

  return (
    <div>
      <form onSubmit={onAddPig}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image URL"
        />
        <input
          type="text"
          id="specialty"
          name="specialty"
          placeholder="Specialty"
        />
        <input
          type="text"
          id="weight"
          name="weight"
          placeholder="Weight"
        />
        <input
          type="text"
          id="medal"
          name="medal"
          placeholder="Highest Medal Achieved"
        />
        <label htmlFor="greased">Greased?</label>
        <input
          type="checkbox"
          id="greased"
          name="greased"
        />
        <button type="submit">Add Pig</button>
      </form>
    </div>
  );
}

export default Form;
