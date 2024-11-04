import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const FilterSort = ({ onFilter, onSort, onToggleGreased }) => (
  <div>
    <Button onClick={onToggleGreased}>Toggle Greased</Button>
    <Dropdown
      placeholder='Sort by'
      selection
      options={[
        { key: 'name', text: 'Name', value: 'name' },
        { key: 'weight', text: 'Weight', value: 'weight' },
      ]}
      onChange={(e, { value }) => onSort(value)}
    />
  </div>
);

export default FilterSort;