import React from 'react';
import './Playlist.css';

const Playlist = ({playlist_name}) => {
    return (
        <li>{playlist_name}</li>);
}

export default Playlist;
