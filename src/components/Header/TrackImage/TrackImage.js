import React from 'react';

import './TrackImage.css';

const TrackImage = ({imgURL}) => {
    return (
        <div className = 'trackImage'>
            <img src={imgURL} alt='trackIMG'></img>
        </div>
    )
}

export default TrackImage;
