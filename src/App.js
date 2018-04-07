import React, { Component } from 'react';
import './App.css';
import files from './_filenames.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import Photo from './photo.js';
import PhotoDetail from './photoDetail.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: files
     };
  }

  render() {
    return (
      <div className="App">
        <Carousel showArrows={true} showThumbs={false} showIndicators={false} showStatus={false}>
          { this.state.files.map((file, index) => (
              <div key={index}>
                <Photo image={file} />
                <PhotoDetail photo={file} />
              </div>
            ))
          }
        </Carousel>
      </div>
    );
  }
}

export default App;
