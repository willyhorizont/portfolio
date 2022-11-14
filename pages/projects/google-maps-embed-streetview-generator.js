import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const googleMapsLoader = new Loader({ apiKey: 'AIzaSyA0GE3dFR0orMQ7l8PJKtRU_3p99pgbrmw', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const GoogleMapsEmbedMap = () => {
  const [latCilik, setLatCilik] = useState('');
  const [lngCilik, setLngCilik] = useState('');
  const [trigger, setTrigger] = useState(0);
  const [iframeSrc, setIframeSrc] = useState('');
  const [iframeElement, setIframeElement] = useState('');

  useEffect(() => {
    googleMapsLoader.load().then((google) => {
      if (latCilik === 0 || lngCilik === 0) return;
      fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?location=${latCilik},${lngCilik}&key=AIzaSyA0GE3dFR0orMQ7l8PJKtRU_3p99pgbrmw`)
        .then((response) => response.json())
        .then((data) => {
          const panoId = data?.pano_id || 'x'.repeat(24);
          const lokasi = { lat: parseFloat(latCilik), lng: parseFloat(lngCilik) };
          const streetViewInstance = new google.maps.StreetViewService();
          streetViewInstance.getPanorama({ location: lokasi, radius: 100, source: google.maps.StreetViewSource.OUTDOOR }, (streetViewPanoramaData, status) => {
            if (status === 'OK') {
              const point = streetViewPanoramaData.location.latLng;
              const panoHeading = google.maps.geometry.spherical.computeHeading(point, lokasi);
              const newIframeSrc = `https://www.google.com/maps/embed?pb=!6m8!1m7!${panoId}!2m2!1d${latCilik}!2d${lngCilik}!3f${panoHeading}!4f0!5f0`;
              setIframeSrc(newIframeSrc);
              setIframeElement(`<iframe title="generated-google-maps-embed-streetview" src=${newIframeSrc} width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />`);
            }
          });
        }).catch((err) => console.log('err', err));
    }).catch((err) => console.log('Gagal memuat google maps karena: ', err));
    return () => {
      if (googleMapsLoader) {
        googleMapsLoader.reset();
        delete window.google;
        Loader.instance = undefined;
      }
    };
  }, [trigger]);

  const handleLat = (evt) => setLatCilik(evt.target.value);
  const handleLng = (evt) => setLngCilik(evt.target.value);
  const handleExe = () => setTrigger((prev) => prev + 1);

  return (
    <>
      <Head>
        <title>Google Maps Embed Street View Generator</title>
        <meta name="description" content="google maps embed street view generator" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>
      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '8px' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Google Maps Embed Street View Generator</Typography>
          <TextField label="Lat" value={latCilik} onChange={handleLat} inputProps={{ style: { fontSize: '1.6rem', lineHeight: '1.2em' } }} variant="outlined" autoComplete="false" type="text" />
          <TextField label="Lng" value={lngCilik} onChange={handleLng} inputProps={{ style: { fontSize: '1.6rem', lineHeight: '1.2em' } }} variant="outlined" autoComplete="false" type="text" />
          <Button variant="contained" onClick={handleExe}>Generate</Button>
          {iframeSrc && (
            <>
              <Typography variant="h3" textAlign="center">Embed Streetview Result</Typography>
              <iframe title="generated-google-maps-embed-streetview" src={iframeSrc} width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {iframeElement}
              </pre>
            </>
          )}
        </Paper>
      </MainLayout>
    </>
  );
};

export default GoogleMapsEmbedMap;
