import React, {useEffect} from 'react'

import { useStateValue } from '../../hoc/stateProvider/StateProvider';
import Logo from '../../components/Logo/Logo';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tracks from '../../components/Tracks/Tracks';
import Header from '../../components/Header/Header';

import './Home.css';

const Home = ({spotify}) => {

    const [{user, token, discover_weekly}, dispatch] = useStateValue();

    useEffect(() =>{
        if(token){
            spotify.getMe()
            .then(user => {
                dispatch({
                    type:'SET_USER',
                    user:user
                });
            })
    
            spotify.getUserPlaylists()
            .then(playlist => {
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlist
                })
            })

            spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7')
            .then(pl => {
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: pl
                });
            });
            // console.log(discover_weekly?.tracks.items);
        }
    
    }, [user, dispatch]);
    
    return (
        <div className = 'home'>
            <div className='home__sidebar'>
                <Logo />
                <Sidebar />
            </div>
           
        
            <div className = 'home__body'>
                <div className = 'body__header'>
                    <Header />
                </div>
                <div className = 'body__tracks'>
                    <h2>Tracks</h2>
                    <hr />
                    {discover_weekly?.tracks.items.map(track => (
                        <Tracks key={track.track.id}
                                name = {track.track.name}
                                artist = {track.track.artists[0].name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
