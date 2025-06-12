import { useState } from "react";

const AddHogForm = ({ addHog, setOpen }) => {
  const [nameValue, setNameValue] = useState("");
  const [specialtyValue, setSpecialtyValue] = useState("");
  const [weightValue, setWeightValue] = useState(0.01);
  const [imageValue, setImageValue] = useState("");
  const [medalValue, setMedalValue] = useState("");
  const [greasedValue, setGreasedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog({
      name: nameValue,
      specialty: specialtyValue,
      greased: greasedValue === "true",
      weight: weightValue,
      "highest medal achieved": medalValue,
      image: imageValue,
    });
    setNameValue("");
    setSpecialtyValue("");
    setImageValue("");
    setWeightValue("");
    setMedalValue("");
    setGreasedValue("");
    setOpen(false);
  };

  const changeName = (e) => {
    setNameValue(e.target.value);
  };

  const changeWeight = (e) => {
    setWeightValue(e.target.value);
  };

  const changeSpecialty = (e) => {
    setSpecialtyValue(e.target.value);
  };

  const changeImage = (e) => {
    setImageValue(e.target.value);
  };

  const changeSelectedMedal = (e) => {
    setMedalValue(e.target.querySelector("option:checked").value);
  };

  const changeSelectedGreased = (e) => {
    setGreasedValue(e.target.querySelector("option:checked").value);
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="three fields">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={changeName}
          />
        </div>
        <div className="field ">
          <label>Specialty</label>
          <input
            type="text"
            placeholder="Specialty"
            value={specialtyValue}
            onChange={changeSpecialty}
          />
        </div>
        <div className="field">
          <label>Greased?</label>
          <select defaultValue={greasedValue} onChange={changeSelectedGreased}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
      </div>
      <div className="three fields">
        <div className="field fluid">
          <label>Weight</label>
          <input
            type="number"
            placeholder="Weight"
            value={weightValue}
            onChange={changeWeight}
            step={0.01}
          />
        </div>
        <div className="field">
          <label>Highest Medal Achieved</label>
          <select defaultValue={medalValue} onChange={changeSelectedMedal}>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="diamond">Diamond</option>
          </select>
        </div>
        <div className="field">
          <label>Image URL</label>
          <input
            type="url"
            placeholder="https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/trouble.jpg"
            value={imageValue}
            onChange={changeImage}
          />
        </div>
      </div>
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddHogForm;
