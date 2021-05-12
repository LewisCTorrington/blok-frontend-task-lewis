import React from 'react';
import Button from '@material-ui/core/Button';

import apartment_house from '../assets/icons/apartment_house.svg';
import terraced_house from '../assets/icons/terraced_house.svg';
import semidetached_house from '../assets/icons/semidetached_house.svg';
import detached_house from '../assets/icons/detached_house.svg';

import lightning from '../assets/icons/lightning.svg';
import heart from '../assets/icons/heart.svg';
import star from '../assets/icons/star.svg';

import '../styles/body.scss';
import '../styles/home.scss';

export const Home = (props) => {

    function switchComponent (component) {
        props.switchComponent(component)
    }

    return (
        <div className="body-container">
            <div>
                <h3>INSTANT DIGITAL VALUATION</h3>
                <h1>What type of building are you valuating?</h1>
                <div className="realty-options-container">
                    <Button className="realty-option" variant="contained" color="primary"
                        onClick={() => switchComponent("apartment-form-controller") }>
                        <img className="realty-option-img" src={ apartment_house } alt="apartment_house" />
                        Apartment   
                    </Button>

                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ terraced_house } alt="terraced_house" />
                        Terraced</Button>
                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ semidetached_house } alt="semidetached_house" />
                        Semi Detached</Button>
                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ detached_house } alt="detached_house" />
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
        </div>
    );
}
