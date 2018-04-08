import React from 'react';
import SearchOption from './searchOption';

const Suggestions = ({results, onPhotoSelect}) => {
  const options = results.map(r => (
    <li onClick={() => onPhotoSelect(r)}>
      <div>
        <SearchOption result={r} />
      </div>
    </li>
  ))
  return <ul className="options">{options}</ul>;
}

export default Suggestions;
