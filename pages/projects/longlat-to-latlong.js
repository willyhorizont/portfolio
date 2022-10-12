import { useState } from 'react';
import Head from 'next/head';
import { Paper, TextField, Typography } from '@mui/material';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const LongLatToLatLong = () => {
  const [latLong, setLatLong] = useState('');
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

  return (
    <>
      <Head>
        <title>Long Lat To Lat Long</title>
        <meta name="description" content="Long Lat To Lat Long LongLat To LatLong" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
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
      </MainLayout>
    </>
  );
};

export default LongLatToLatLong;
