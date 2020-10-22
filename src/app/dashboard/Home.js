import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/user")
      .then((res) => {
          this.setState({
              user: res.data
          })
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  render() {
   
    return <h2> You are not log in</h2>;
  }
}

export default Home;
