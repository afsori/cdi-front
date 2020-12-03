import React, { Component } from "react";
import { Content, Footer, Header } from "../../component";
import axios from "axios";
import "./home.scss";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    getData: [],
    statePostData: {
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
    },
  };
  componentDidMount() {
    this.getDataApi();
  }

  getDataApi = () => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact")
      .then((result) => {
        this.setState({
          getData: result.data.data,
        });
      });
  };

  postDataApi = () => {
    axios
      .post(
        "https://simple-contact-crud.herokuapp.com/contact",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        this.state.statePostData
      )
      .then((resultnya) => {
        console.log("ini result post", resultnya.data);
        this.getDataApi();
        this.setState(
          {
            statePostData: {
              id: "",
              firstName: "",
              lastName: "",
              age: "",
              photo: "",
            },
          },
          (err) => console.log("ini error", err)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFormChange = (event) => {
    let formstateNew = { ...this.state.statePostData };

    formstateNew[event.target.name] = event.target.value;

    this.setState(
      {
        statePostData: formstateNew,
      },
      () => {
        console.log("form post data");
      }
    );
  };

  handleSubmit = () => {
    this.postDataApi();
    this.setState({
      statePostData: {
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        photo: "",
      },
    });
  };

  //edit data
  putDataApi = () => {
    axios
      .put(
        `https://simple-contact-crud.herokuapp.com/contact/${this.state.statePostData.id}`,
        this.state.statePostData
      )
      .then((result) => {
        // console.log('ini put data', result)
        this.getDataApi();
      });
  };

  handleSubmitEdit = () => {
    this.putDataApi();
    this.setState({
      statePostData: {
        id: "",
        title: "",
        author: "",
      },
    });
  };

  changeFormEdit = (event) => {
    let formstatenew = { ...this.state.statePostData };
    formstatenew[event.target.name] = event.target.value;

    this.setState({
      statePostData: formstatenew,
    });
  };

  handleEdit = (data) => {
    //   console.log('edit data',data)
    this.setState({
      statePostData: data,
    });
  };

  // detail
  handleDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  //deleted
  handleDeleted = (id) => {
    axios
      .delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
      .then((idx, result) => {
        this.getDataApi();
      });
  };

  render() {
    // let page_limit = 4

    return (
      <div>
        <Header />
        <div className="container">
          <div className="d-flex">
            <div className="wrapper-card-post-data card">
              <p>Tambah data</p>
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={this.handleFormChange}
                name="firstName"
                type="text"
                placeholder="masukan title"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={this.handleFormChange}
                name="lastName"
                type="text"
                placeholder="masukkan nama anda"
              />
              <label htmlFor="age">Usia</label>
              <input
                onChange={this.handleFormChange}
                name="age"
                type="text"
                placeholder="masukkan usia anda"
              />
              <label htmlFor="photo">Photo</label>
              <input
                onChange={this.handleFormChange}
                name="photo"
                type="text"
                placeholder="masukkan photo anda"
              />
              <button onClick={this.handleSubmit}>Kirim</button>
            </div>
            <div className="wrapper-card-post-data card">
              <p>Edit data</p>
              <label htmlFor="firstName">First Name</label>
              <input
                value={this.state.statePostData.firstName || ""}
                onChange={this.changeFormEdit}
                name="firstName"
                type="text"
                placeholder="masukan Nama"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                value={this.state.statePostData.lastName || ""}
                onChange={this.changeFormEdit}
                name="lastName"
                type="text"
                placeholder="masukkan nama anda"
              />
              <label htmlFor="age">Usia</label>
              <input
                onChange={this.handleFormChange}
                name="age"
                type="text"
                placeholder="masukkan usia anda"
              />
              <label htmlFor="photo">Photo</label>
              <input
                onChange={this.handleFormChange}
                name="photo"
                type="text"
                placeholder="masukkan foto anda"
              />
              <button onClick={this.handleSubmitEdit}>Kirim</button>
            </div>
          </div>
          <Content
            render_link={this.renderLink}
            key={this.state.getData.id}
            data={this.state.getData}
            editData={this.handleEdit}
            detail={this.handleDetail}
            delete={this.handleDeleted}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
