import React, { useState, useEffect } from "react";
import { Body, SwitchComponents, FormNavigation } from './';
import { RoomsInput, SizeInput } from '../pages';
import { CSSTransitionGroup } from 'react-transition-group'

import '../styles/transitions.scss';

export const ApartmentFormController = (props) => {
  const [activeComponentOrderIndex, setActiveComponentOrderIndex] = useState(0)

  const formOrder = [
    "size-input",
    "rooms-input"
    // More form fields, plus an actual form submission page would be entered here
  ];

  useEffect(() => {
    if (activeComponentOrderIndex < 0
       || activeComponentOrderIndex >= formOrder.length) {
      switchToHome();
    }
  });

  function nextComponentInOrder () {
    setActiveComponentOrderIndex(activeComponentOrderIndex + 1)
  }

  function previousComponentInOrder () {
    setActiveComponentOrderIndex(activeComponentOrderIndex - 1)
  }

  function switchToHome () {
    props.switchComponent("home")
  }

  return (
    <div>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>

        <SwitchComponents active = { formOrder[activeComponentOrderIndex] }>
          <Body name = "rooms-input" bodyElement = { <RoomsInput /> }/>
          <Body name = "size-input" bodyElement = { <SizeInput /> }/>

        </SwitchComponents>

      </CSSTransitionGroup>

      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}>

        <FormNavigation
          goBack={ previousComponentInOrder }
          goForward={ nextComponentInOrder } />

      </CSSTransitionGroup>
    </div>
  );
}
