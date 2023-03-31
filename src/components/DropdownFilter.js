import React, { useState } from 'react';
import "../styles/DropdownFilter_style.css"


const DropdownFilter = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdown-filter">   
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;