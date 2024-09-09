import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <CurrentlyPlaying />
      <Playlist /> {/* Add Playlist component */}
      <Footer />
    </div>
  );
}

export default App;