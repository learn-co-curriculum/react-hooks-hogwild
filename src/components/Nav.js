import piggy from '../porco.png';
import React from 'react';

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://www.homedepot.com/p/LG-Electronics-24-1-cu-ft-French-Door-Refrigerator-in-Stainless-Steel-LFX25974ST/202957132">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav
