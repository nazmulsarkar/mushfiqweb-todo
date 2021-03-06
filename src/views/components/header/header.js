import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon/socialicon';
import AppIcon from './todo64.png';

import './header.css';


const Header = ({ authenticated, signOut, authType }) => (
  <header className="header slide-in-top">
    <div className='app-info'>
      <div className='app-img'>
        <img src={AppIcon} />
        <h1 className="app-title Alegreya">A Simple Todo App</h1>
      </div>
      {authenticated ?
        <div>
          <Button className='signout-button' onClick={signOut}>Sign out</Button>
          <Icon name={authType} />
        </div> : null}
    </div>
    {/*
    <div className="g-row">
      <div className="g-col">
        <img src={AppIcon}/>
        <h1 className="header__title Alegreya">A Simple Todo App</h1>

        <ul className="header__actions">
          {authenticated ? <li><Button onClick={signOut}>Sign out</Button></li> : null}
          <li>
            <Icon name={authType}/>
          </li>
        </ul>
      </div>
    </div>
    */}
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
