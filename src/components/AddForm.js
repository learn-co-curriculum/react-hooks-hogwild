import React, { useState } from "react"

function AddForm({ isHidden, onAddHog }) {
  const emptyForm = {
    name: "",
    weight: 0.0,
    specialty: "",
    greased: false,
    "highest medal achieved": "None (Womp Womp)",
    image: "",
  }

  const [formData, setFormData] = useState({...emptyForm})

  if(!isHidden && formData.name !== "") {
    setFormData({...emptyForm})
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "greased" ? e.target.checked : e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const submittedData = formData
    if (submittedData.image === "") {
      submittedData.image = "https://bigdeliciouslife.com/wp-content/uploads/2023/08/crispy-bacon-11.jpg"
    }
    onAddHog(submittedData)
    setFormData({...emptyForm})
  }

  return (
    <form hidden={!isHidden} onSubmit={handleSubmit} className="addForm">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      ></input>
      <label>Weight:</label>
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        required
      ></input>
      <label>Specialty:</label>
      <input
        type="text"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        required
      ></input>
      <label>Greased:</label>
      <input
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      ></input>
      <label>Highest Medal Earned:</label>
      <select
        name="highest medal achieved"
        value={formData["highest medal achieved"]}
        onChange={handleChange}
        className="sortBtn"
      >
        <option value="None (Womp Womp)">None (Womp Womp)</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
      </select>
      <label>Image URL:</label>
      <input type="text" name="image" value={formData.image} onChange={handleChange}></input>
      <input type="submit" value="Add Hog" className="sortBtn"></input>
    </form>
  )
}

export default AddForm
