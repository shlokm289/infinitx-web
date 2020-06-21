import React from 'react';

//custom UI components
import {Jumbotron, Container} from 'reactstrap';
import '.././App.css';

const Header = () => {
	return(
		<div>
			<Jumbotron className="bg" fluid>
				<Container>
					<div className="row">
						<div className="col-sm-6">
							<h1>
								1NF1N1T_X
								<hr style={{color: '#FFF'}}/>
								<p>S01LV!NG PR0BL3M5 with BL0CKCHA1N</p>
							</h1>	
						</div>
						<div className="col-sm-4 offset-1">		
						</div>
					</div>
					
					
				</Container>
			</Jumbotron>
		</div>
	)
}

export default Header;