import React from 'react';
import Button from '@material-ui/core/Button';

export const FormNavigation = (props) => {

  function goBack () {
    props.goBack();
  }

  function goForward () {
    props.goForward();
  }

  return (
    <div>
        <Button variant="contained" color="primary" onClick={ goBack }>Back</Button>
        <Button variant="contained" color="primary" onClick={ goForward }>Next</Button>
    </div>
  );
}