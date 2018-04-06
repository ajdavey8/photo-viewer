import React, { Component } from 'react';
import './App.css';
import files from './_filenames.json';

class App extends Component {

  render() {
    const image = "./images/"+files[0].file;
    return (
      <div className="App">
      <img src={require(`${image}`)} alt="person in the rain" />
      </div>
    );
  }
}

export default App;
