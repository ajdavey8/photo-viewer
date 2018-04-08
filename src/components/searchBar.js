import React, { Component } from 'react';
import Suggestions from './suggestions';
import '../css/search.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
     };

     this.handleInputChange = this.handleInputChange.bind(this)
  }

  getInfo(){
    let result = this.props.files.filter(file => file.file.includes(this.state.query));

    this.setState({
      results: result
    });
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    });
  }

  render() {
    return (
      <div className="input" >
            <form >
              <input
              placeholder="What are you looking for?"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              />
              <div>
              <Suggestions results={this.state.results} onPhotoSelect={this.props.onPhotoSelect} />
              </div>
            </form>
        </div>
   );
  }
}

export default SearchBar;
