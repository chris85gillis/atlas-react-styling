import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p style={{ color: '#6A8EAE' }}>{author}</p> 
    </div>
  );
};

export default SongTitle;