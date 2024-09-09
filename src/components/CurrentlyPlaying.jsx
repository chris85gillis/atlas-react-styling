import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <CoverArt />
      <SongTitle title="Painted in Blue" author="Soul Canvas" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;