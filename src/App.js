import React, { useEffect } from 'react';
import SpotifyWebAPI from 'spotify-web-api-js';
import { useStateValue } from './hoc/stateProvider/StateProvider';
import { getTokenFromResponse } from './spotify';


import './App.css';
import Home from './container/Home/Home';
import Login from './container/Login/Login';

const sp= new SpotifyWebAPI();

function App() {

	const [{token}, dispatch] = useStateValue();

	useEffect(() =>{
		const hash = getTokenFromResponse();
		window.location.hash = '';
		let _token = hash.access_token;

		if (_token){
			sp.setAccessToken(_token);
			
			dispatch({
				type: 'SET_TOKEN',
				token: _token
			});
		}
	}, [token, dispatch])

	return (
		<div className="app">
			{token?<Home spotify={sp}/> :<Login />}
		</div>
	);
	}

export default App;
