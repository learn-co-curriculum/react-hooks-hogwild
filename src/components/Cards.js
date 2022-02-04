import React from 'react';
import hogs from '../porkers_data';

function Cards({hogs}) {
  
  return <div style={{border: "solid 1px"}} className = "ui grid container">
    <p>Cards</p>
    <img src={hogs.image}/>
    <h2>Name: {}</h2>
    <h3>Hog Specs: {}</h3>
    <ul>
      <li>More specs</li>
    </ul>
  </div>;
}

export default Cards;

