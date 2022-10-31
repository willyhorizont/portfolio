import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const loader = new Loader({ apiKey: 'AIzaSyAraptFbVXN4LZi66o7tDbrvEti1a8gVeo', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const GoogleMapsPlacesAutocompleteAndGeocoder = () => {
  const [google, setGoogle] = useState(null);
  const [gmapObj, setGmapObj] = useState(null);
  const [markerObj, setMarkerObj] = useState(null);
  const [geocoderObj, setGeocoderObj] = useState(null);
  const [autocompleteObj, setAutocompleteObj] = useState(null);
  const pacInputRef = useRef(null);
  const mapBox = useRef();

  useEffect(() => {
    loader.load().then((gugel) => setGoogle(gugel)).catch((err) => alert('Gagal memuat google maps karena: ', err));
    return () => setGoogle(null);
  }, []);

  useEffect(() => {
    if (google === null || mapBox.current === null || pacInputRef.current === null) return;
    setGmapObj(new google.maps.Map(mapBox.current, {
      center: indonesiaCoordinate,
      zoom: 4,
      mapTypeControl: false,
      disableDefaultUI: true,
      mapTypeId: 'roadmap',
      styles: mapStyles.night,
      gestureHandling: 'greedy',
      restriction: { latLngBounds: indonesiaBound, strictBounds: false }
    }));
    setMarkerObj(new google.maps.Marker());
    setGeocoderObj(new google.maps.Geocoder());
    setAutocompleteObj(new google.maps.places.Autocomplete(pacInputRef.current, { componentRestrictions: { country: 'id' } }));
    // eslint-disable-next-line consistent-return
    return () => {
      setGmapObj(null);
      setMarkerObj(null);
      setGeocoderObj(null);
      setAutocompleteObj(null);
    };
  }, [google, mapBox.current, pacInputRef.current]);

  useEffect(() => {
    if (gmapObj === null || markerObj === null || geocoderObj === null || autocompleteObj === null) return;
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

    // eslint-disable-next-line consistent-return
    return () => {
      if (google) {
        google.maps.event.removeListener(autocompletePlaceChangedListener);
        google.maps.event.removeListener(gmapClickListener);
        google.maps.event.removeListener(markerClickListener);
      }
    };
  }, [gmapObj, markerObj, geocoderObj, autocompleteObj]);

  return (
    <>
      <Head>
        <title>Google Maps Places Autocomplete and Reverse Geocode</title>
        <meta name="description" content="google maps places autocomplete and reverse geocode" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <TextField
            inputRef={pacInputRef}
            sx={{ zIndex: 1, borderRadius: '8px', flexGrow: 1, width: 'calc(100% - 16px)', position: 'absolute', top: '8px', left: 0, right: 0, margin: '0 auto', backgroundColor: 'black' }}
            inputProps={{ style: { fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white' } }}
            placeholder="Masukkan Alamat"
            type="text"
            variant="outlined"
            autoComplete="false"
          />
          <div className="map" style={{ height: '70vh', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapBox} />
        </Box>
      </MainLayout>
    </>
  );
};

export default GoogleMapsPlacesAutocompleteAndGeocoder;
