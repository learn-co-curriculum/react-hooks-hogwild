import React, { useState } from 'react'

function PigForm({  setAllHogs, hogs }) {
  const [newHogName, setNewHogName] = useState('')
  const [newHogSpecialty, setNewHogSpecialty] = useState('')
  const [newHogWeight, setNewHogWeight] = useState('')
  const [newHogGreased, setNewHogGreased] = useState('')
  const [newHogMedal, setNewHogMedal] = useState('')
  const [newHogImg, setNewHogImg] = useState('')

  function handleHogNameChange(event) {
    setNewHogName(event.target.value)
  }

  function handleHogSpecialtyChange(event) {
    setNewHogSpecialty(event.target.value)
  }

  function handleHogWeightChange(event) {
    setNewHogWeight(event.target.value)
  }

  function handleHogGreasedChange(event) {
    setNewHogGreased(event.target.value)
  }

  function handleHogsMedalChange(event) {
    setNewHogMedal(event.target.value)
  }

  function handleHogsImgChange(event) {
    setNewHogImg(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const addHog = {
      name: newHogName,
      specialty: newHogSpecialty,
      greased: newHogGreased,
      weight: newHogWeight,
      "highest medal achieved": newHogMedal,
      image: newHogImg
    }

    const newHogList = [...hogs, addHog]
    setAllHogs(newHogList)
  }

  return (
    <ul>
      <form onSubmit={handleSubmit}>
        <li>
        <label>
          Name
          <input
            type="text"
            name="text"
            value={newHogName}
            onChange={handleHogNameChange}
          />
        </label>
        <label>
          Specialty
          <input
            type="text"
            name="text"
            value={newHogSpecialty}
            onChange={handleHogSpecialtyChange}
          />
        </label>
        <label>
          Weight
          <input
            placeholder='Please enter a number'
            type="text"
            name="text"
            value={newHogWeight}
            onChange={handleHogWeightChange}
          />
        </label>
      </li>
      <li>
        <label>
          Pigture
          <input
            placeholder='Please enter an img url'
            type="text"
            name="text"
            value={newHogImg}
            onChange={handleHogsImgChange}
          />
        </label>
      </li>
      <li>
      <label>
        Greased?
        <select
          name="category"
          value={newHogGreased}
          onChange={handleHogGreasedChange}
        >
          <option value=""disabled selected>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      </li>
      <label>
        Highest Medal Achieved
        <select
          name="category"
          value={newHogMedal}
          onChange={handleHogsMedalChange}
        >
          <option value=""disabled selected>Select Medal</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
      </label>
      <li>
        <input type="submit" value="Add Hog" />
      </li>
      </form>
    </ul>
  )
}

export default PigForm
