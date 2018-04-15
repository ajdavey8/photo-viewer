import React, { Component } from 'react';
import files from '../_filenames.json';
import { Carousel } from 'react-responsive-carousel';
import Photo from './photo';
import PhotoDetail from './photoDetail';
import Search from './searchBar';
import '../css/carousel.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: files,
      selectedPhoto: files[58]
     };
  }

  render() {
    const allPhotos = [this.state.selectedPhoto, ...this.state.files];

    return (
      <div>
        <div>
          <Search files={this.state.files} onPhotoSelect={ selectedPhoto => this.setState({selectedPhoto}) } />
        </div>
        <Carousel showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} useKeyboardArrows={true}>
          {allPhotos.map((file, index) => (
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
