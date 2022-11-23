import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

// const googleMapsLoader = new Loader({ language: 'id-ID', version: 'weekly', libraries: ['places'] });
// const apiKey = 'AIzaSyBYVzK1OcNsLbsdtVwPObs5V-PsV1YhOX4';

const GoogleMapsApiKeyTester = () => {
  const mapRef = useRef();
  const [apiKeyListStr, setApiKeyListStr] = useState('');
  const [unusableApiKeyString, setUnusableApiKeyString] = useState('');
  const [usableApiKeyString, setUsableApiKeyString] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!apiKey.trim()) return;
    const googleMapsLoader = new Loader({ apiKey, language: 'id-ID', version: 'weekly', libraries: ['places'] });
    googleMapsLoader.load().then((google) => {
      const gmapObj = new google.maps.Map(mapRef.current, { center: indonesiaCoordinate, zoom: 4, mapTypeControl: false, disableDefaultUI: true, mapTypeId: 'roadmap', styles: mapStyles.night, gestureHandling: 'greedy', restriction: { latLngBounds: indonesiaBound, strictBounds: false } });
      const markerObj = new google.maps.Marker({ position: indonesiaCoordinate });
      markerObj.setMap(gmapObj);
    }).catch((err) => console.log('Gagal memuat google maps karena: ', err));
    window.gm_authFailure = () => setUnusableApiKeyString((prev) => (prev.trim() ? `${prev}
${apiKey}` : apiKey));
    // eslint-disable-next-line consistent-return
    return () => {
      if (googleMapsLoader) {
        googleMapsLoader.reset();
        delete window.google;
        Loader.instance = undefined;
      }
    };
  }, [apiKey]);

  useEffect(() => {
    const apiKeyList = apiKeyListStr.split('\n');
    const unusableApiKeyList = unusableApiKeyString.split('\n');
    const usableApiKeyList = apiKeyList.filter((ky) => unusableApiKeyList.every((kyInv) => kyInv !== ky));
    setUsableApiKeyString(usableApiKeyList.join('\n'));
  }, [isFinished]);

  const handleApiKeyListChange = (evt) => {
    if (evt.target.value.includes(',')) {
      const convertedList = evt.target.value.split(',').map((keyStr) => keyStr.trim()).join('\n');
      setApiKeyListStr(convertedList);
      return;
    }
    setApiKeyListStr(evt.target.value);
  };

  const handleExe = () => {
    setIsLoading(true);
    setIsFinished(false);
    setUnusableApiKeyString('');
    setUsableApiKeyString('');
    const apiKeyList = apiKeyListStr.split('\n');
    apiKeyList.forEach((curApiKey, curApiKeyIndex) => setTimeout(() => {
      setApiKey(curApiKey);
      if (curApiKeyIndex === apiKeyList.length - 1) {
        setTimeout(() => {
          setApiKey('');
          setIsFinished(true);
          setIsLoading(false);
        }, 2000);
      }
    }, curApiKeyIndex * 2000));
  };

  return (
    <>
      <Head>
        <title>Google Maps API Key Tester</title>
        <meta name="description" content="Test google maps API key whether is usable or not" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Google Maps API Key Tester</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', columnGap: '8px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '8px' }}>
              <Typography textAlign="center">Enter Your API Key Here</Typography>
              <TextField
                value={apiKeyListStr}
                minRows={10}
                maxRows={10}
                onChange={handleApiKeyListChange}
                multiline
                style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '8px' }}>
              <Typography textAlign="center">Google Maps Preview</Typography>
              <div className="map" id="mapRef" style={{ height: '263px', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapRef} />
            </Box>
          </Box>
          <Button variant="contained" onClick={handleExe} disabled={isLoading}>{isLoading ? 'Testing...' : 'Test'}</Button>
          {isFinished && (
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', columnGap: '8px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '8px' }}>
                <Typography textAlign="center">Unusable API Key</Typography>
                <TextField
                  value={unusableApiKeyString}
                  minRows={10}
                  maxRows={10}
                  multiline
                  style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '8px' }}>
                <Typography textAlign="center">Usable API Key</Typography>
                <TextField
                  value={usableApiKeyString}
                  minRows={10}
                  maxRows={10}
                  multiline
                  style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
                />
              </Box>
            </Box>
          )}
        </Paper>
      </MainLayout>
    </>
  );
};

export default GoogleMapsApiKeyTester;
