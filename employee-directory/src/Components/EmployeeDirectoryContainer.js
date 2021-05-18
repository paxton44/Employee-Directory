import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API"


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
   
            <Card users={this.state.users}>
               
            </Card>
     
    );
  }
}

export default EmployeeDirectoryContainer;