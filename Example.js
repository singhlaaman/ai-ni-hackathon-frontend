import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./App.css"

const Example = (props) => {
  return (
     <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "button">
        <CardTitle><h2>Lifeline Helpline NI</h2></CardTitle>
        <CardText>Lifeline is the Northern Ireland crisis response helpline service for people who are experiencing distress or despair. No matter what your age or where you live in Northern Ireland, if you are or someone you know is in distress or despair, Lifeline is here to help.</CardText>
        <Button>Call</Button>
      </Card>
      <Card body inverse color="danger" className = "button">
        <CardTitle><h2>Helplines Network NI</h2></CardTitle>
        <CardText>Helplines Network NI is a membership–led organisation consisting of over 30 different helplines operating across Northern Ireland. The helplines provide a variety of vital support services including, information, advice, counselling, a listening ear and be-friending, and offer immediate support to those with a wide-range of health and wellbeing needs, often for those who are the most vulnerable in our community. Many of the services take place over the phone, but some can help via email, text and in some cases with live web-chat. </CardText>
        <Button style={{ backgroundColor: '#333', borderColor: '#333' }}>Call</Button>
      </Card>
    </div>
  );
};

export default Example