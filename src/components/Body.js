import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../styles/body.scss';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#8DD3D9'
      }
    },
});

export const Body = (props) => {
  return (
    <div className="body-container">
        <MuiThemeProvider theme={theme}>
          { props.bodyElement }
        </MuiThemeProvider>
    </div>
  );
}