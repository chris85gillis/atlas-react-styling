import React from 'react';
import { FaBackward, FaForward, FaPlay, FaRandom } from 'react-icons/fa';

const PlayControls = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button className="text-nightText hover:text-nightSecondary focus:outline-none">1x</button>
      <button className="text-nightText hover:text-nightSecondary focus:outline-none">
        <FaBackward />
      </button>
      <button className="bg-nightAccent text-nightPrimary p-2 rounded-lg hover:bg-nightSecondary focus:outline-none">
        <FaPlay />
      </button>
      <button className="text-nightText hover:text-nightSecondary focus:outline-none">
        <FaForward />
      </button>
      <button className="text-nightText hover:text-nightSecondary focus:outline-none">
        <FaRandom />
      </button>
    </div>
  );
};

export default PlayControls;