import React from 'react';

const CoverArt = () => {
  return (
    <div className="flex justify-left items-center">
      <img
        src="/src/assets/placeholder.svg"
        alt="Cover Art"
        className="w-84 h-84 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CoverArt;