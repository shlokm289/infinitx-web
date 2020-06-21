import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import Login from '../components/LoginComponent';
import NavComponent from '../components/NavComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';

import '.././App.css';

const LoginPage = () => {
	return(
	<div className="bg">
		<NavComponent />
		<Header />
		<div >
			<Container fluid>
				<Row>
					<Col className="col-12 col-sm-6 offset-3">
						<Login />
					</Col>
				</Row>
			</Container>
		</div>
		<Footer />
	</div>
	)
}

export default LoginPage;
