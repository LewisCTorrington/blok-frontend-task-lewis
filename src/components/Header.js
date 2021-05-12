import React from 'react';

import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <div style={{ padding: "24px 24px 0" }}>
        <img src={ logo } alt="Logo" style={{ height: "38px" }} />
    </div>
  );
}