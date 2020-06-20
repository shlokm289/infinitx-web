import React from 'react';

//custom UI components
import {Jumbotron, Container} from 'reactstrap';
import '.././App.css';

const Header = () => {
	return(
		<div>
			<Jumbotron className="bg" fluid>
				<Container>
					<h1>INFINIT_X</h1>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default Header;