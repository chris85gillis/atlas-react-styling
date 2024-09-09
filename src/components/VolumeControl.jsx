import React from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const VolumeControl = () => {
  return (
    <div className="flex items-center space-x-3 mt-4">
      {/* Volume Icon */}
      <FaVolumeUp className="text-nightText text-lg" />

      {/* Volume Slider */}
      <input
        type="range"
        min="0"
        max="100"
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          WebkitAppearance: 'none',
          appearance: 'none',
          background: `linear-gradient(to right, #BB86FC 0%, #BB86FC var(--value, 50%), #E5E7EB var(--value, 50%), #E5E7EB 100%)`,
          outline: 'none',
        }}
        onInput={(e) => {
          e.target.style.setProperty('--value', `${e.target.value}%`);
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background-color: #BB86FC;
          border-radius: 50%;
          border: 2px solid #BB86FC;
          cursor: pointer;
        }

        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background-color: #6A8EAE;
          border-radius: 50%;
          border: 2px solid #6A8EAE;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;