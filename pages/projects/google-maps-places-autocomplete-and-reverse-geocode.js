import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const googleMapsLoader = new Loader({ apiKey: 'AIzaSyBYVzK1OcNsLbsdtVwPObs5V-PsV1YhOX4', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const GoogleMapsPlacesAutocompleteAndGeocoder = () => {
  const pacInputRef = useRef(null);
  const mapRef = useRef();

  useEffect(() => {
    googleMapsLoader.load().then((google) => {
      const gmapObj = new google.maps.Map(mapRef.current, { center: indonesiaCoordinate, zoom: 4, mapTypeControl: false, disableDefaultUI: true, mapTypeId: 'roadmap', styles: mapStyles.night, gestureHandling: 'greedy', restriction: { latLngBounds: indonesiaBound, strictBounds: false } });
      const markerObj = new google.maps.Marker();
      const geocoderObj = new google.maps.Geocoder();
      const autocompleteObj = new google.maps.places.Autocomplete(pacInputRef.current, { componentRestrictions: { country: 'id' } });

      autocompleteObj.bindTo('bounds', gmapObj);
      const autocompletePlaceChangedListener = autocompleteObj.addListener('place_changed', () => {
        const place = autocompleteObj.getPlace();
        if (!place?.geometry || !place?.geometry?.location) {
          alert(`Tidak ada detail tersedia untuk: ${place?.name}`);
          return;
        }

        if (place?.geometry?.viewport) gmapObj.fitBounds(place?.geometry?.viewport);
        gmapObj.setCenter(place?.geometry?.location);
        markerObj.setMap(gmapObj);
        markerObj.setPosition(place?.geometry?.location);
        gmapObj.panTo(place?.geometry?.location);

        console.log('autocomplete result:', place);
      });

      const gmapClickListener = gmapObj.addListener('click', async (evt) => {
        const clickedLocation = evt?.latLng?.toJSON?.();
        gmapObj.setCenter(clickedLocation);
        markerObj.setMap(gmapObj);
        markerObj.setPosition(clickedLocation);
        gmapObj.panTo(clickedLocation);

        console.log('clicked location:', clickedLocation);

        try {
          const geocodeResponse = await geocoderObj.geocode({ location: clickedLocation });
          const geocodeResponseFirstResult = geocodeResponse?.results?.[0];
          console.log('geocode result:', geocodeResponseFirstResult);
        } catch (err) {
          alert('Gagal reverse geocode karena:: ', err?.message);
        }
      });

      const markerClickListener = markerObj.addListener('click', () => markerObj.setMap(null));

      return () => {
        google.maps.event.removeListener(autocompletePlaceChangedListener);
        google.maps.event.removeListener(gmapClickListener);
        google.maps.event.removeListener(markerClickListener);
      };
    }).catch((err) => alert('Gagal memuat google maps karena: ', err));
    return () => {
      if (googleMapsLoader) {
        googleMapsLoader.reset();
        delete window.google;
        Loader.instance = undefined;
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Google Maps Places Autocomplete and Reverse Geocode</title>
        <meta name="description" content="google maps places autocomplete and reverse geocode" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Google Maps Places Autocomplete and Reverse Geocode</Typography>
          <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
            <div style={{ zIndex: 1, borderRadius: '8px', flexGrow: 1, width: 'calc(100% - 16px)', position: 'absolute', top: '8px', left: 0, right: 0, margin: '0 auto', backgroundColor: 'black' }}>
              <input ref={pacInputRef} placeholder="Masukkan Alamat" autoComplete="false" type="text" id="pacInputRef" name="pacInputRef" style={{ fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white', width: '100%' }} />
            </div>
            <div className="map" id="mapRef" style={{ height: '70vh', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapRef} />
          </Box>
        </Paper>
      </MainLayout>
    </>
  );
};

export default GoogleMapsPlacesAutocompleteAndGeocoder;
