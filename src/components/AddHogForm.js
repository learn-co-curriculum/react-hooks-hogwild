import React, { useState } from "react";

const emptyHog = {
  name: "",
  specialty: "",
  greased: false,
  weight: "",
  "highest medal achieved": "",
  image: "",
};

const fields = [
  { label: "Name", key: "name", type: "text", required: true },
  { label: "Specialty", key: "specialty", type: "text" },
  { label: "Weight (lbs)", key: "weight", type: "number" },
  { label: "Highest Medal", key: "highest medal achieved", type: "text" },
  { label: "Image URL", key: "image", type: "text" },
];

function AddHogForm({ onAddHog }) {
  const [newHog, setNewHog] = useState(emptyHog);

  function handleSubmit(e) {
    e.preventDefault();
    onAddHog({ ...newHog, weight: parseFloat(newHog.weight) || 0 });
    setNewHog(emptyHog);
  }

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="fields">
          {fields.map((field) => (
            <div className="field" key={field.key}>
              <label>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.label}
                value={newHog[field.key]}
                onChange={(e) => setNewHog({ ...newHog, [field.key]: e.target.value })}
                required={field.required}
              />
            </div>
          ))}
          <div className="field">
            <label>
              <input
                type="checkbox"
                checked={newHog.greased}
                onChange={(e) => setNewHog({ ...newHog, greased: e.target.checked })}
              />
              Greased?
            </label>
          </div>
        </div>
        <button className="ui button green" type="submit">
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default AddHogForm;