import React, { Component } from "react";
import Container from './Container';
// import Col from "./Col";
import Card from "./Card";
// import Row from "./Row";
import API from "../utils/API"
import EmployeeList from "./EmployeeList";


class EmployeeDirectoryContainer extends Component {

  state = {
    search: "",
    users: [],
    filterResults: []
  };

 
    componentDidMount() {
      //this turns the data readable by formatting it into json under the hood
      API.search().then((response) => {
    
        this.setState({ users: response.data.results });
      });
      //check to make sure im making an empty array to put data in
      console.log(this.state.users);
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