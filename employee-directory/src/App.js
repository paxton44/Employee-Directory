import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import API from './utils/API';
import Container from './Components/Container';
import Col from "./Components/Col";
import Card from "./Components/Card";
import Row from "./Components/Row";


function App() {

  //js code 
  
  
  
  
  return (

    //build out views
   <Container>
     <Row>
        <Col size ='md-8'>
          <Card>
              <div>
                  <h1>TestApp</h1>
              </div>
          </Card>
        </Col>
      </Row>
   </Container> 
  );
}

export default App;
