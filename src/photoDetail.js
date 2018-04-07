import React, { Component } from 'react';

export default class PhotoDetail extends Component {

  photographer(file) {
    let name = file.split(" ");
    return name[1] + " " + name[2];
  }

  date(file) {
    let date = file.split(" ");
    return date[3].split('-').reverse().join('.');
  }

  tags(file) {
    let file2 = file.replace(/.jpg/g, '');
    let tags = file2.split(" ");
    tags.splice(0, 4);

    return tags.join(" ");
  }

  render () {
    return (
      <div>
        <h2> {this.photographer(this.props.photo.file)}</h2>
        <h3> {this.date(this.props.photo.file)}</h3>
        <h3> Tags: {this.tags(this.props.photo.file)}</h3>
      </div>
    );
  }
};
