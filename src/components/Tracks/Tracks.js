import React from 'react';

import './Tracks.css';

const Tracks = ({name, artist}) => {
    return (
        <div className = 'tracks'>
            <p>{name}</p>
            <span>{artist}</span>
        </div>
    )
}

export default Tracks;
