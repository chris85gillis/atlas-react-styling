import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold text-">{title}</h1>
      <p style={{ color: '#03DAC5' }}>{author}</p> 
    </div>
  );
};

export default SongTitle;