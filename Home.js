import React, { Component } from "react";
import fire from "./config/Fire";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.submit = this.submit.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  submit(e) {
    e.preventDefault();
    // Make a request for a user with a given ID
    let api1 = `https://maps.googleapis.com/maps/api/geocode/json?&address=`;
    let api2 = "http://restcountries.eu/rest/v2/all";
    axios
      .get(api2)
      .then((response) => {
        if (response.status >= 400) {
          alert("Bad response from server");
        } else return axios.get(api1);
      })
      .catch((error) => console.log(error.response));
  }
  render() {
    return (
      <div className="col-md-6">
        <h1>You are home</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.submit} class="btn btn-primary">
            submit
          </button>
        </form>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
}
export default Home;
