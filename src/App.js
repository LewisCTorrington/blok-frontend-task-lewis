import React, { useState } from "react";
import { Header, Body, SwitchComponents, ApartmentFormController } from './components';
import { Home } from './pages';
import { CSSTransitionGroup } from 'react-transition-group';

import background from './assets/background.jpg';
import './App.css';
import './styles/transitions.scss';

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home")

  function switchComponent (component) {
    setActiveComponent(component);
  }

  return (
    <div>
      <div className="container">
        <Header />

        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionEnter={true}
          transitionLeave={true}>
          <SwitchComponents active = { activeComponent }>

            <Body name = "home" bodyElement = {
              <Home switchComponent = { switchComponent } /> 
            }/>

            <Body name = "apartment-form-controller" bodyElement = {
              <ApartmentFormController switchComponent = { switchComponent }/> 
            }/>

          </SwitchComponents>
        </CSSTransitionGroup>
      </div>

      <div className="bg">
        <img src={ background } alt="background" />
      </div>
    </div>
  );
}
