import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return alert("Please provide at least a name and image URL!");

    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight) || 0,
      greased,
      "highest medal achieved": medal,
      image
    };

    onAddHog(newHog);

    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("");
    setImage("");
  }

  return (
    <form className="ui form segment" onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <h3>Add a New Porker</h3>
      <div className="three fields">
        <div className="field">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Pig Name" />
        </div>
        <div className="field">
          <label>Specialty</label>
          <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image link" />
        </div>
      </div>
      <div className="three fields">
        <div className="field">
          <label>Weight (lbs)</label>
          <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
        </div>
        <div className="field">
          <label>Highest Medal</label>
          <input type="text" value={medal} onChange={(e) => setMedal(e.target.value)} placeholder="gold, silver, etc." />
        </div>
        <div className="field" style={{ display: "flex", alignItems: "center", paddingTop: "25px" }}>
          <div className="ui checkbox">
            <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} id="form-greased" />
            <label htmlFor="form-greased">Is Greased?</label>
          </div>
        </div>
      </div>
      <button className="ui button primary" type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
