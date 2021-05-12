import React from 'react';
import Button from '@material-ui/core/Button';

import back_arrow from '../assets/icons/back_arrow.svg';

import '../styles/navigation.scss';

export const FormNavigation = (props) => {

  function goBack () {
    props.goBack();
  }

  function goForward () {
    props.goForward();
  }

  return (
    <div className="nav-container">
        <div className="nav-btn-container">
        <Button className="nav-btn back-btn" 
          variant="contained" color="primary" onClick={ goBack }>
          <img className="back-arrow" src={ back_arrow } alt="back_arrow" /></Button>

        <Button className="nav-btn" 
          variant="contained" color="primary" onClick={ goForward }>
          Next</Button>
        </div>
    </div>
  );
}