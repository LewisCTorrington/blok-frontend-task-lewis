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
                <h5>INSTANT DIGITAL VALUATION</h5>
                <h1>What type of building are you valuating?</h1>
                <div className="realty-options-container">
                    <Button className="realty-option" variant="contained" color="primary"
                        onClick={() => switchComponent("apartment-form-controller") }>
                        <img className="realty-option-img" src={ apartment_house } alt="apartment_house" />
                        <div>Apartment</div>
                    </Button>

                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ terraced_house } alt="terraced_house" />
                        <div>Terraced</div></Button>
                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ semidetached_house } alt="semidetached_house" />
                        <div>Semi Detached</div></Button>
                    <Button className="realty-option" variant="contained" color="primary">
                        <img className="realty-option-img" src={ detached_house } alt="detached_house" />
                        <div>Detached</div></Button>
                </div>
                <div className="stats-container">
                    <li className="stats-item-container">
                        <img className="stats-img" src={ lightning } alt="lightning" />
                        <div><b>2min</b> instant digital valuation</div>
                    </li>
                    <li className="stats-item-container">
                        <img className="stats-img" src={ heart } alt="heart" />
                        <div><b>364 168</b> valuations made since 2018</div>
                    </li>
                    <li className="stats-item-container">
                        <img className="stats-img" src={ star } alt="star" />
                        <div><b>4,8</b> rating on Google (brokers average 3,2)</div>
                    </li>
                </div>
            </div>
        </div>
    );
}
