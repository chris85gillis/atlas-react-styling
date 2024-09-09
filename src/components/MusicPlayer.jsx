import React from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:space-x-6 p-4 bg-nightBg rounded-lg shadow-md w-full max-w-5xl mx-auto">
      {/* Currently Playing Section */}
      <div className="flex-1 min-h-[400px] md:min-h-[600px]">
        <CurrentlyPlaying />
      </div>

      {/* Dividing Line */}
      <div className="hidden md:flex w-[2px] bg-gray-400 mx-2"></div>


      {/* Playlist Section */}
      <div className="flex-1 mt-6 md:mt-0">
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;