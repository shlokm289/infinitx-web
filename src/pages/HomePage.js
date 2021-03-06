import React from 'react';

//custom UI
import '.././App.css';

//page components
import NavComponent from '../components/NavComponent';
import Header from '../components/HeaderComponent';

const HomePage = () => {
	return(
		<div>
			<NavComponent/>
			<Header/>
		</div>
	)
}

export default HomePage;