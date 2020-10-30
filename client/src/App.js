// App.js
//
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    //this.state = {
      //flower: {}
    //}
    this.state = {
      query: {}
    }
    //this.getFlower();
    this.getQuery();
  }
  getFlower() {
    fetch('/flower')
      .then(response => response.json())
      .then(data => {
        this.setState({
          flower: data
        });
      });
  }
  getQuery() {
    fetch('/query')
      .then(response => response.json())
      .then(data => {
        this.setState({
          query: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>This URL is:  {this.state.query.url}</h1>
      </div>
    );
  }
}
export default App;