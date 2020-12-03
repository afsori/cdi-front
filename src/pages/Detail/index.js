import React, { Component } from "react";
import axios from "axios";

class Detail extends Component {
  state = {
    setDetailPage: {
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
    },
  };
  componentDidMount() {
    let param = this.props.match.params.detailPage;
    console.log("ini params", this.props);
    axios
      .get(`https://simple-contact-crud.herokuapp.com/contact/${param}`)
      .then((result) => {
        console.log("detail", result.data);
        this.setState({
          setDetailPage: result.data.data,
        });
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.setDetailPage.firstName}</p>
        <p>{this.state.setDetailPage.lastName}</p>
        <p>{this.state.setDetailPage.age}</p>
        <img src={this.state.setDetailPage.photo} alt="images" />
      </div>
    );
  }
}

export default Detail;
