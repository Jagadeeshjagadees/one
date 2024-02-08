import React, { useState } from "react";

import {Row,Col, CardLink} from 'react-bootstrap'
import Container from "react-bootstrap/esm/Container";
import image1 from '../assets/movie-pic1.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import { useNavigate } from "react-router-dom";
export default function Signup({setUser}){
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    
    
    const handleSubmit=()=>{
        localStorage.setItem('userEmail',email);
        setUser(email);
        //navigate to home page
        navigate('/')
    }
    return(<div className="container-log">
        <Container >
            <Row >
              
                <Col className="col"><img  src={image1} height={380} width={380}/> </Col>
                <Col className="col two">
                <Card style={{width:'25rem',padding:24}}>
                    <Card.Body>
                    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="login-btn" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <div style={{display:"flex",justifyContent:'center'}}>Already have an account?  <CardLink href="/login">Please Login</CardLink></div>
   

                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>)
}