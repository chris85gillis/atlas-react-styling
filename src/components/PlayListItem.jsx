import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-500">{genre}</p>
      </div>
      <span className="text-sm text-gray-500">{length}</span>
    </div>
  );
};

export default PlayListItem;