import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Row,
	Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

import '.././App.css';

const NavComponent = () => {
	return(
		<div className="bg">
			<Navbar>
				<NavbarBrand>
					INFINIT_X
				</NavbarBrand>
				<Nav>
					<NavItem>
						<NavLink href="/about" style={{color: '#FFF'}}>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/services' style={{color: '#FFF'}}>Our Services</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/login' style={{color: '#FFF'}}>Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/signup' style={{color: '#FFF'}}>Sign Up</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/contactus' style={{color: '#FFF'}}>Contact Us</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	)
}

export default NavComponent;