import React from 'react';
import './Playlist.css';

const Playlist = ({playlist_name}) => {
    return (
        <li><p>{playlist_name}</p></li>);
}

export default Playlist;
