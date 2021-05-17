import React, { Component } from "react";
import Container from './Container';
// import Col from "./Col";
import Card from "./Card";
// import Row from "./Row";
import API from "../utils/API"


class EmployeeDirectoryContainer extends Component {
  constructor(){
    super();
  }
  state = {
    users: [],
    // search: "",
  };

  componentDidMount(){
    API.search().then((searchedUsers) => {
      console.log(searchedUsers.data.results);
      this.setState({ users: searchedUsers.data.results });
    })
  }



  render() {
    return (

      //build out views
     <Container>
            <Card>
                <div>
                    <h1>
                    <Card users={this.state.users} /> 
                    </h1>
                </div>
            </Card>
     </Container> 
    );
  }
}

export default EmployeeDirectoryContainer;