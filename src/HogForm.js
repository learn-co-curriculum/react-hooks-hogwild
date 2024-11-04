import React, { useState } from 'react';

const HogForm = ({ setHogsState }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, specialty, weight: parseInt(weight), greased, highestMedal, image };
    setHogsState(prevHogs => [...prevHogs, newHog]);
    setName('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" required />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required />
      <label>
        Greased:
        <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
      </label>
      <input value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} placeholder="Highest Medal" required />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;