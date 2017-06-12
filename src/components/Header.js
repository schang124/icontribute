/**
 * Created by schang124 on 2017/05/16.
 */
import React from 'react';

import { iconMenu } from '../media';
import '../scss/components/_header.scss';

const Header = ({handleClick}) => {
    return(
        <div>
            <header>
                <div className="ico-header-title">
                    <h1>Title</h1>
                </div>
                <div className="ico-header-button left">
                    <button className="ico-button-menu" onClick={handleClick}>
                        <i><img src={iconMenu} alt="show menu"/></i>
                    </button>
                    <button className="ico-button-back"></button>
                    <button className="ico-button-close"></button>
                </div>
            </header>
            <div className="header-default-space"></div>
        </div>
    );
};

export default Header;