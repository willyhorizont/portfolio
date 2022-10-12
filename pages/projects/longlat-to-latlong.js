import Head from 'next/head';
import { Box, Button, Paper, Typography } from '@mui/material';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const LongLatToLatLong = () => {
  const handleExe = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText();

      // eslint-disable-next-line no-useless-escape
      const tesReg1 = /[^\d ,.\-]/g;
      const newStr1 = clipboardData.replaceAll(tesReg1, ';');
      const splitStr1 = newStr1.split(';').filter(Boolean);
      const strMap1 = splitStr1.reduce((longest, curStr) => (longest.length > curStr.length ? longest : curStr), '');
      const latLongResult = [...strMap1.split(' ')].map((str) => [str.split(',')[1], str.split(',')[0]].join(',')).join(' ') + ' ';
      navigator.clipboard.writeText(latLongResult);
    } catch (error) {
      alert('error get clipboard data');
    }
  };

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
            <Button variant="contained" onClick={handleExe}>Execute</Button>
          </Box>
        </Paper>
      </MainLayout>
    </>
  );
};

export default LongLatToLatLong;
