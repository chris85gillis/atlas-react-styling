import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = () => {
  const songs = [
    { title: 'Painted in Blue', genre: 'Soul Canvas', length: '5:55' },
    { title: 'Tidal Drift', genre: 'Echoes of the Sea', length: '8:02' },
    { title: 'Fading Shadows', genre: 'The Emberlight', length: '3:01' },
    { title: 'Cosmic Drift', genre: 'Solar Flare', length: '5:01' },
    { title: 'Urban Serenade', genre: 'Midnight Groove', length: '4:54' },
    { title: 'Whispers in the Wind', genre: 'Rust & Ruin', length: '6:13' },
    { title: 'Electric Fever', genre: 'Neon Jungle', length: '8:41' },
    { title: 'Edge of the Abyss', genre: 'Steel Horizon', length: '2:27' },
    { title: 'Golden Haze', genre: 'Velvet Waves', length: '3:15' },
    { title: 'Shatter the Silence', genre: 'Thunderclap Echo', length: '8:22' },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-black mb-4">Playlist</h3>
      <div className="space-y-2">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            genre={song.genre}
            length={song.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;