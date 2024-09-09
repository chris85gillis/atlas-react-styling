import React from 'react';
import placeholder from '../assets/placeholder.svg';

const CoverArt = () => {
  return (
    <div className="flex justify-left items-center">
      <img
        src={placeholder}
        alt="Cover Art"
        className="w-84 h-84 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CoverArt;