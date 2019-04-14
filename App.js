import React, { Component } from 'react'
import Example from './Example'
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css'

function App() {
    
    return (
        <div>
        <Container>
          <Row>
            <Col xs="4" sm="2" className = "leftSide"></Col>
            <Col xs="8" sm="6" className = "middle">
              <div>
                <FormGroup>
                  <h1>You have been making negative posts lately. Feeling down? </h1><br /> <h3>Here's some resources local to you :-</h3>
                  </FormGroup>
                
              </div>
              <div>
                <Example />
              </div>  
              </Col>
            <Col xs="4" sm="2" className = "leftSide"></Col>
          </Row>
          </Container>
        </div>
    )
}

export default App