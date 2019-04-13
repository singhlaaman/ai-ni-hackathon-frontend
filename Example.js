import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./App.css"

const Example = (props) => {
  return (
     <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse color="primary" className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="success" className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="info" className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="warning" className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="danger" className = "button">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

export default Example