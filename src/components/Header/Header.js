import React from 'react';

import TrackImage from './TrackImage/TrackImage';

import './Header.css';

const Header = () => {
    const uri = 'https://i.scdn.co/image/ab67616d00001e0273918da1cc981763ec1e9fdd';
    return (
        <div className ='header'>
            <div className='header__trackImage'><TrackImage imgURL = {uri}/></div>
            <div className='header__controls'><h3>Controls</h3></div>
            <div className='header___account'><h3>Account</h3></div>
        </div>
    )
}

export default Header;
