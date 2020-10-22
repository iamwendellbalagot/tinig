import React, {useEffect} from 'react'

import { useStateValue } from '../../hoc/stateProvider/StateProvider';
import Logo from '../../components/Logo/Logo';
import Sidebar from '../../components/Sidebar/Sidebar';

import './Home.css';

const Home = ({spotify}) => {

    const [{user, token}, dispatch] = useStateValue();

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
                    <h1>Welcome {user?.display_name}</h1>
                </div>
                <div className = 'body__tracks'>
                    <h2>Tracks</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
