import React, { Component } from "react";
import axios from "axios";

class ApiUsers extends Component {
  state = {
    getData: [],
  };
  componentDidMount() {
    this.getDataApi();
  }
  getDataApi = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log("ini data", res.data);
      this.setState({
        getData: res.data,
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.getData.map((result) => {
          return <p key={result.id}>{result.name}</p>;
        })}
      </div>
    );
  }
}

export default ApiUsers;
