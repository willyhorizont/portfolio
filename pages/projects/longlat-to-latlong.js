import { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const LongLatToLatLong = () => {
  const [latLong, setLatLong] = useState('');

  const clearField = () => setLatLong('');

  const handleLatLong = (evt) => {
    if (!evt.target.value) {
      setLatLong('');
      return;
    }
    // eslint-disable-next-line no-useless-escape
    const tesReg1 = /[^\d ,.\-]/g;
    const newStr1 = evt.target.value.replaceAll(tesReg1, ';');
    const splitStr1 = newStr1.split(';').filter(Boolean);
    const strMap1 = splitStr1.reduce((longest, curStr) => {
      if (!longest) return curStr;
      if (longest.length > curStr.length) return longest;
      return curStr;
    }, '');
    const latLongResult = [...strMap1.split(' ')].map((str) => [str.split(',')[1], str.split(',')[0]].join(',')).join(' ') + ' ';
    setLatLong(latLongResult);
    navigator.clipboard.writeText(latLongResult);
  };

  const copyLatLong = () => navigator.clipboard.writeText(latLong);

  return (
    <>
      <Head>
        <title>Long Lat To Lat Long</title>
        <meta name="description" content="Long Lat To Lat Long LongLat To LatLong" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" gutterBottom>Longlat to Latlong</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '8px' }}>
            <Button variant="contained" onClick={clearField}>Clear</Button>
            <Button variant="contained" onClick={copyLatLong}>Copy</Button>
          </Box>
          <Typography>Paste Longlat here to get Latlong</Typography>
          <TextField
            value={latLong}
            onChange={handleLatLong}
            minRows={10}
            maxRows={20}
            multiline
            style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
          />
        </Paper>
      </MainLayout>
    </>
  );
};

export default LongLatToLatLong;
