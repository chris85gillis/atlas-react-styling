import React from 'react';
import { FaBackward, FaForward, FaPlay, FaRandom } from 'react-icons/fa';

const PlayControls = () => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-4">
      {/* Speed Button */}
      <button className="text-gray-800 hover:text-black text-lg font-medium">
        1x
      </button>

      {/* Back Button */}
      <button className="text-gray-600 hover:text-black">
        <FaBackward className="text-xl" />
      </button>

      {/* Play Button */}
      <button className="text-black p-2 border-2 border-gray-800 rounded-md">
        <FaPlay className="text-xl" />
      </button>

      {/* Forward Button */}
      <button className="text-gray-600 hover:text-black">
        <FaForward className="text-xl" />
      </button>

      {/* Shuffle Button */}
      <button className="text-gray-800 hover:text-black">
        <FaRandom className="text-xl" />
      </button>
    </div>
  );
};

export default PlayControls;