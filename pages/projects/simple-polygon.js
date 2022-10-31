import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';
import jatisampurnaPath from '../../configs/jatisampurnaPath.json';

const loader = new Loader({ apiKey: 'AIzaSyAraptFbVXN4LZi66o7tDbrvEti1a8gVeo', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const kotakIndonesia = [
  {
    lat: 7.038895607525868,
    lng: 93.54309686109853
  }, {
    lat: -12.100411561439204,
    lng: 93.63098748609853
  },
  {
    lat: -12.701288939723776,
    lng: 146.71692498609852
  }, {
    lat: 8.866766782404309,
    lng: 145.39856561109852
  }
];

const SimplePolygon = () => {
  const [google, setGoogle] = useState(null);
  const [gmapObj, setGmapObj] = useState(null);
  const [polygonOverlayObj, setPolygonOverlayObj] = useState(null);
  const [polygonObj, setPolygonObj] = useState(null);
  const mapBox = useRef();

  useEffect(() => {
    loader.load().then((gugel) => setGoogle(gugel)).catch((err) => alert('Gagal memuat google maps karena: ', err));
    return () => setGoogle(null);
  }, []);

  useEffect(() => {
    if (google === null || mapBox.current === null) return;
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

    setPolygonObj(new google.maps.Polygon());
    setPolygonOverlayObj(new google.maps.Polygon());

    // eslint-disable-next-line consistent-return
    return () => {
      setGmapObj(null);
      setPolygonObj(null);
      setPolygonOverlayObj(null);
    };
  }, [google, mapBox.current]);

  useEffect(() => {
    if (gmapObj === null || polygonOverlayObj === null || polygonObj === null) return;

    polygonOverlayObj.setOptions({
      paths: kotakIndonesia,
      fillColor: '#000000',
      fillOpacity: 1,
      zIndex: 1
    });
    polygonObj.setOptions({
      paths: jatisampurnaPath,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      zIndex: 2
    });

    polygonOverlayObj.setMap(gmapObj);
    polygonObj.setMap(gmapObj);
  }, [gmapObj, polygonObj]);

  return (
    <>
      <Head>
        <title>File Url To Base64</title>
        <meta name="description" content="file url string to base64 string" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <div className="map" style={{ height: '70vh', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapBox} />
        </Box>
      </MainLayout>
    </>
  );
};

export default SimplePolygon;
