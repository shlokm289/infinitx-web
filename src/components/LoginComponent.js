import React from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Button,
	CardFooter,
	CardText,
	Row,
	Col
} from 'reactstrap';

const Login = () => {
	return(
	<>
      	<Card>
        	<CardHeader style={{color: '#000'}}><strong><i>Login</i></strong></CardHeader>
        	<CardBody style={{color: '#000'}}>
          		<Form>
          			<FormGroup>
          				<Label>Email</Label>
          				<Input type="text" placeholder="username@provider.com"/>
          			</FormGroup>
          			<FormGroup>
          				<Label>Password</Label>
          				<Input type="password" placeholder="********"/>
          			</FormGroup>
          			<Row>
          				<Col>
          					<Button>Sign In</Button>
          				</Col>
          				<Col>
          					<Button>Facebook</Button>
          				</Col>
          				<Col>
          					<Button>Google</Button>
          				</Col>
          			</Row>
          		</Form>
        	</CardBody>
        	<CardFooter style={{color: '#000'}}></CardFooter>
      	</Card>
    </>
	)
}

export default Login;