import React from 'react';
import {Link} from 'react-router-dom';

import logo from './img/default-logo.png';
import Menu from './Menu';

const Logo = () =>
    <Link to="/" className="u-image u-logo u-image-1">
        <img src={logo} className="u-logo-image u-logo-image-1" alt=""/>
    </Link>
;

export default () =>
    <header className="u-clearfix u-header u-header">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <Logo/>
            <Menu/>
        </div>
    </header>
;
