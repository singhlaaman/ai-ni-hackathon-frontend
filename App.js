import React, { Component } from 'react'
import Example from './Example'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css'

function App() {
    
    return (
        <div className = "container">
          <Row>
            <Col xs="4" sm="2" className = "leftSide">Your Profile Comes Here..</Col>
            <Col xs="8" sm="6" className = "middle">
              <div>
                <FormGroup>
                  <Label for="exampleText">Post Your Status Here:</Label>
                  <Input type="textarea" name="text" id="exampleText" placeholder="Your Status Here..."/>
                </FormGroup>
                <Button className="button">Post</Button>
              </div>
              <div>
                <Example />
              </div>  
              </Col>
            <Col xs="4" sm="2" className = "leftSide">You can make friends with these people..</Col>
          </Row>
        </div>
    )
}

export default App