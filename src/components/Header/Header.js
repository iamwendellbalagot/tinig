import React from 'react';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import TrackImage from './TrackImage/TrackImage';

import './Header.css';

const Header = () => {
    const uri = 'https://i.scdn.co/image/ab67616d00001e0273918da1cc981763ec1e9fdd';
    return (
        <div className ='header'>
            <div className='header__trackImage'><TrackImage imgURL = {uri}/></div>
            <div className='header__controls'>
                <div className='control__track'>
                    <p>Look What I've Become</p>
                    <span>Mike Posner</span>
                </div>
                <div className="control__buttons">
                    <ShuffleIcon className="button__green" />
                    <SkipPreviousIcon className="button__icon" />
                    <PlayCircleOutlineIcon
                        fontSize="large"
                        className="button__icon"
                    />
                    <SkipNextIcon className="button__icon" />
                    <RepeatIcon className="button__green" />
                </div>
            </div>
            <div className='header___account'><h3>Account</h3></div>
        </div>
    )
}

export default Header;
