import React from 'react';
import Button from '@material-ui/core/Button';

import apartment_house from '../assets/icons/apartment_house.svg';
import terraced_house from '../assets/icons/terraced_house.svg';
import semidetached_house from '../assets/icons/semidetached_house.svg';
import detached_house from '../assets/icons/detached_house.svg';

import lightning from '../assets/icons/lightning.svg';
import heart from '../assets/icons/heart.svg';
import star from '../assets/icons/star.svg';

export const Home = (props) => {

    function switchComponent (component) {
        props.switchComponent(component)
    }

    return (
        <div>
            <h3>INSTANT DIGITAL VALUATION</h3>
            <h1>What type of building are you valuating?</h1>
            <div className="realty-option-container">
                <Button variant="contained" color="primary"
                    onClick={() => switchComponent("apartment-form-controller") }>
                    <img src={ apartment_house } alt="apartment_house" style={{ height: "20px" }} />
                    Apartment   
                </Button>

                <Button variant="contained" color="primary">
                    <img src={ terraced_house } alt="terraced_house" style={{ height: "20px" }} />
                    Terraced</Button>
                <Button variant="contained" color="primary">
                    <img src={ semidetached_house } alt="semidetached_house" style={{ height: "20px" }} />
                    Semi Detached</Button>
                <Button variant="contained" color="primary">
                    <img src={ detached_house } alt="detached_house" style={{ height: "20px" }} />
                    Detached</Button>
            </div>
            <div>
                <p><img src={ lightning } alt="lightning" style={{ height: "20px" }} />
                2min instant digital valuation</p>

                <p><img src={ heart } alt="heart" style={{ height: "20px" }} />
                364 168 valuations made since 2018</p>

                <p><img src={ star } alt="star" style={{ height: "20px" }} />
                4,8 rating on Google (brokers average 3,2)</p>
            </div>
        </div>
    );
}
