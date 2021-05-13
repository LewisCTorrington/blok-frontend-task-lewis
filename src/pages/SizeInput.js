import React from 'react';
import Slider from '@material-ui/core/Slider';

import size from '../assets/icons/size.svg';

import '../styles/form-body.scss';

export const SizeInput = () => {
  const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 200,
      label: '200',
    },
  ];

  const [value, setValue] = React.useState(marks[0].value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="form-container">
        <h1>How big is the apartment?</h1>
        <img src={ size } alt="size" style={{ height: "60px" }} />
        <Slider 
          value={value} 
          onChange={handleChange} 
          aria-labelledby="continuous-slider"
          min={marks[0].value}
          max={marks[1].value}
          marks={marks} 
          valueLabelDisplay="on" />
    </div>
  );
}
