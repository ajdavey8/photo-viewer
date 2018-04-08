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
    return (
      <div>
        <div>
          <Search files={this.state.files} onPhotoSelect={ selectedPhoto => this.setState({selectedPhoto}) } />
        </div>
        <Carousel showArrows={true} showThumbs={false} showIndicators={false} showStatus={false}>
          <div>
            <Photo image={this.state.selectedPhoto} />
            <PhotoDetail photo={this.state.selectedPhoto} />
          </div>
          {this.state.files.map((file, index) => (
              <div key={index}>
                <Photo image={file} />
                <PhotoDetail photo={file} />
              </div>
            ))
          }
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </Carousel>
      </div>
    );
  }
}

export default App;

// <div>
// <Photo image={this.state.files[45]} />
// <PhotoDetail photo={this.state.files[45]} />
// </div>
// <div >
// <Photo image={this.state.files[4]} />
// <PhotoDetail photo={this.state.files[4]} />
// </div>
// <div >
// <Photo image={this.state.files[5]} />
// <PhotoDetail photo={this.state.files[5]} />
// </div>
// <div >
// <Photo image={this.state.files[32]} />
// <PhotoDetail photo={this.state.files[32]} />
// </div>

// let others = this.state.files.map((file, index) => {
//      others.push(
//       <div key={index}>
//       <Photo image={file} />
//       <PhotoDetail photo={file} />
//       </div>
//     );
//   });
