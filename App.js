import React, { Component } from 'react'
import Example from './Example'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css'

function App() {
    
    return (
        <div className = "container">
          <Row>
            <Col xs="4" sm="2" className = "leftSide">.col-6 .col-sm-4</Col>
            <Col xs="8" sm="6" className = "middle">
              <div>
                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button className="button">Submit</Button>
              </div>
              <div>
                <Example />
              </div>  
              </Col>
            <Col xs="4" sm="2" className = "leftSide">.col-6 .col-sm-4</Col>
          </Row>
        </div>
    )
}

export default App