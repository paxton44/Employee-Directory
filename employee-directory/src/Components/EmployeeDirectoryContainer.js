import React, { Component } from "react";
import Container from './Container';
// import Col from "./Col";
import Card from "./Card";
// import Row from "./Row";
import API from "../utils/API"
import EmployeeList from "./EmployeeList";


class EmployeeDirectoryContainer extends Component {

  state = {
    users: [],
    // search: "",
  };

  componentDidMount(){
  
  }



  render() {
    return (

      //build out views
     <Container>
            <Card>
               
            </Card>
     </Container> 
    );
  }
}

export default EmployeeDirectoryContainer;