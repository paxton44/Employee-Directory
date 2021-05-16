import React, { Component } from "react";
// import './App.css';
// import API from './utils/API';
import Container from './Container';
import Col from "./Col";
import Card from "./Card";
import Row from "./Row";


class EmployeeDirectoryContainer extends Component {
  state = {
    result: {},
    search: ""
  };



  render() {
    return (

      //build out views
     <Container>
       <Row>
          <Col size ='md-8'>
            <Card>
                <div>
                    <h1>TestApp.js</h1>
                </div>
            </Card>
          </Col>
        </Row>
     </Container> 
    );
  }
}

export default EmployeeDirectoryContainer;