import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-nightBg rounded-lg p-4">
      {/* Cover Art */}
      <div className="flex-1 flex items-center justify-center">
        <CoverArt />
      </div>

      {/* Song Title */}
      <div className="mt-4 text-nightText">
        <SongTitle title="Painted in Blue" author="Soul Canvas" />
      </div>

      {/* Play Controls */}
      <div className="mt-4">
        <PlayControls />
      </div>

      {/* Volume Control */}
      <div className="mt-4">
        <VolumeControl />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;