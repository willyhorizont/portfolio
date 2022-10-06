import React, { useState } from 'react';
import { Paper, TextField, Typography } from '@mui/material';

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
    <Paper elevation={3} sx={{ padding: '8px' }}>
      <Typography variant="h3" textAlign="center" gutterBottom>Longlat to Latlong</Typography>
      <Typography textAlign="center">Paste Longlat here to get Latlong</Typography>
      <TextField
        value={latLong}
        placeholder="-7.37154006899988,109.688911438 -7.37160134799996,109.688801012 -7.37167999899998,109.688659999"
        onChange={handleLatLong}
        minRows={10}
        maxRows={20}
        multiline
        style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
      />
    </Paper>
  );
};

export default LongLatToLatLong;
