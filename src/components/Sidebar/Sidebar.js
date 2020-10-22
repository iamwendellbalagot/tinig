import React from 'react';
import { useStateValue } from '../../hoc/stateProvider/StateProvider';

import SearchIcon from '@material-ui/icons/Search';

import Playlist from './Playlist/Playlist';

import './Sidebar.css';

const Sidebar = () => {
    const [{playlist}, dispatch] = useStateValue();

    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__search'>
                <input type='text' className='search__input' placeholder ='Search...'></input>
                <SearchIcon className='search__button' fontSize='large'/>
            </div>
            <br />
            <p>Playlist</p>
            <hr />
            <ul>
                {playlist?.items?.map(p =>{
                    return <Playlist key={p.name}  playlist_name = {p.name}/>
                })}
            </ul>
        </div>
    )
}

export default Sidebar;
