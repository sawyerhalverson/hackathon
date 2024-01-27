import React, { useState } from 'react';

const Map = () => {
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div>
      <h2>Map</h2>
      <p>Where do you want to go?</p>

      <label>
        Select Destination:
        <select value={selectedDestination} onChange={handleDestinationChange}>
          <option value="">-- Select --</option>
          <option value="Tanner Building">Tanner Building</option>
          <option value="Wilkinson Center">Wilkinson Center</option>
          <option value="JKB">JKB</option>
        </select>
      </label>

      {selectedDestination && (
        <div>
          <p>You selected: {selectedDestination}</p>
          {/* Include map or any other content related to the selected destination */}
        </div>
      )}
    </div>
  );
};

export default Map;
