import React, { useState } from 'react';

const LongLatToLatLong = () => {
  const [latLong, setLatLong] = useState('');
  const handleLatLong = (evt) => {
    if (!evt.target.value) {
      setLatLong('');
      return;
    }
    setLatLong([...evt.target.value.split(' ')].map((str) => [str.split(',')[1], str.split(',')[0]].join(',')).join(' '));
  };

  return (
    <div style={{ padding: '8px' }}>
      <h3 style={{ textAlign: 'center' }}>Longlat to Latlong</h3>
      <h4 style={{ textAlign: 'center' }}>Paste Longlat here to get Latlong</h4>
      <input
        value={latLong}
        placeholder="-7.37154006899988,109.688911438 -7.37160134799996,109.688801012 -7.37167999899998,109.688659999"
        onChange={handleLatLong}
        minRows={10}
        maxRows={20}
        multiline
        style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
      />
    </div>
  );
};

export default LongLatToLatLong;
