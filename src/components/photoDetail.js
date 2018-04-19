import React, { Component } from 'react';
import '../css/photoDetail.css';

export default class PhotoDetail extends Component {

  photographer(file) {
    const name = file.split(" ");
    return name[1] + " " + name[2];
  }

  date(file) {
    const date = file.split(" ");
    return date[3].split('-').reverse().join('.');
  }

  tags(file) {
    const shortenedfile = file.replace(/.jpg/g, '');
    const tags = shortenedfile.split(" ");
    tags.splice(0, 4);

    return tags.join(" ");
  }

  render () {
    return (
      <div className="legend">
        <h3> {this.date(this.props.photo.file)}</h3>
        <h2> {this.photographer(this.props.photo.file)}</h2>
        <p id="tag"> Tags: {this.tags(this.props.photo.file)}</p>
      </div>
    );
  }
};
