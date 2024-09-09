import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex justify-between items-center py-2 flex-nowrap">
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-nightText truncate">{title}</h2>
        <p className="text-sm text-nightSecondary truncate">{genre}</p>
      </div>
      <span className="text-sm text-nightSecondary ml-48 whitespace-nowrap pr-4">{length}</span>
    </div>
  );
};

export default PlayListItem;