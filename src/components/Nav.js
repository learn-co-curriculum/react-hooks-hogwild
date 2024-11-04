import React from 'react';

const Nav = ({ toggleGreasedFilter, handleSort }) => {
  return (
    <nav>
      <button onClick={toggleGreasedFilter}>Toggle Greased Hogs</button>
      <button onClick={() => handleSort('name')}>Sort by Name</button>
      <button onClick={() => handleSort('weight')}>Sort by Weight</button>
    </nav>
  );
};

export default Nav;