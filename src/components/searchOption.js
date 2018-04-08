import React from 'react';
import Photo from './photo';
import '../css/search.css';

const SearchOption = ({result})  => {

  const photographer = (file) => {
    const name = file.split(" ");
    return name[1] + " " + name[2];
  };

  return (
    <div>
      <div className="thumb">
        <Photo image={result} />
      </div>
      <div className="optionname">
        <p> {photographer(result.file)} </p>
      </div>
    </div>
  )
}

export default SearchOption;
