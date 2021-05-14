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

  const handleSecondaryInputChange = (event) => {
    let newValue = event.target.value;
    newValue = Number(newValue);
    if(newValue && (marks[0].value <= newValue <= marks[1].value)) {
      setValue(newValue);
    }
  };

  return (
    <div className="form-container">
        <h1>How big is the apartment?</h1>
        <img className="header-icon-img" src={ size } alt="size" />
        <Slider 
          value={ value } 
          onChange={ handleChange } 
          aria-labelledby="continuous-slider"
          min={ marks[0].value }
          max={ marks[1].value }
          marks={ marks } 
          valueLabelDisplay="on" />

          <input 
            className="secondary-form-input"
            type="number"
            variant="outlined"
            value={ value } 
            onChange={ handleSecondaryInputChange } />
    </div>
  );
}
