import React, { useState } from 'react';

const Map = () => {
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div>
      <h2>Map</h2>
    
      {/* Include map or any other content related to the selected destination */}
      <div style={{ opacity: 1 }}>
        {/* Map content goes here */}
      </div>

      {selectedDestination && (
        <div>
          <p>You selected: {selectedDestination}</p>
          {/* Additional details or actions related to the selected destination */}
        </div>
      )}
    </div>
  );
};

export default Map;
