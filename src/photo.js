import React from 'react';

const Photo = ({image}) => (
  <img src={require(`./images/${image.file}`)} alt={image.file} />
);

export default Photo;
