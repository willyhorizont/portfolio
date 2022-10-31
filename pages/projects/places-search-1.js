import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const loader = new Loader({ apiKey: 'AIzaSyAraptFbVXN4LZi66o7tDbrvEti1a8gVeo', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const PlacesSearch1 = () => {
  const pacInputRef = useRef(null);
  const mapBox = useRef();
  const [objek, setObjek] = useState(null);

  useEffect(() => {
    loader.load().then((google) => {
      const gmapObj = new google.maps.Map(mapBox.current, {
        center: indonesiaCoordinate,
        zoom: 4,
        mapTypeControl: false,
        disableDefaultUI: true,
        mapTypeId: 'roadmap',
        styles: mapStyles.night,
        gestureHandling: 'greedy',
        restriction: { latLngBounds: indonesiaBound, strictBounds: false }
      });
      const searchBoxObj = new google.maps.places.SearchBox(pacInputRef.current, { componentRestrictions: { country: 'id' } });
      // gmapObj.controls[google.maps.ControlPosition.TOP_LEFT].push(pacInputRef.current);

      gmapObj.addListener('bounds_changed', () => searchBoxObj.setBounds(gmapObj.getBounds()));

      let markerList = [];

      searchBoxObj.addListener('places_changed', () => {
        const pacInputValue = pacInputRef.current.value.toUpperCase();
        const placeList = searchBoxObj.getPlaces();
        console.log('placeList', placeList);
        const filteredPlaceList = placeList.filter((tempat) => tempat?.name.toUpperCase().startsWith(pacInputValue));
        console.log('filteredPlaceList', filteredPlaceList);
        const newPlaceList = filteredPlaceList.map((tempat) => ({ name: tempat?.name, lat: tempat?.geometry?.location?.lat?.(), lng: tempat?.geometry?.location?.lng?.(), id: tempat?.place_id }));
        console.log('newPlaceList', newPlaceList);
        setObjek(newPlaceList);

        if (placeList.length === 0) return;

        markerList.forEach((marker) => marker.setMap(null));
        markerList = [];

        const bounds = new google.maps.LatLngBounds();

        placeList.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            alert('Returned place contains no geometry');
            return;
          }

          const iconObj = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markerList.push(
            new google.maps.Marker({
              map: gmapObj,
              icon: iconObj,
              title: place.name,
              position: place.geometry.location
            })
          );

          if (place.geometry.viewport) bounds.union(place.geometry.viewport);
          if (!place.geometry.viewport) bounds.extend(place.geometry.location);
        });
        gmapObj.fitBounds(bounds);
      });
    }).catch((err) => alert('Gagal memuat google maps karena: ', err));
  }, []);

  return (
    <>
      <Head>
        <title>Places Search 1</title>
        <meta name="description" content="places search 1" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Box sx={{ display: 'flex', position: 'relative', flexDirection: 'column' }}>
          {/* <TextField
            inputRef={pacInputRef}
            sx={{ zIndex: 1, borderRadius: '8px', flexGrow: 1, width: 'calc(100% - 16px)', position: 'absolute', top: '8px', left: 0, right: 0, margin: '0 auto', backgroundColor: 'black' }}
            inputProps={{ style: { fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white' } }}
            placeholder="Masukkan Alamat"
            type="text"
            variant="outlined"
            autoComplete="false"
          /> */}
          <div style={{ zIndex: 1, borderRadius: '8px', flexGrow: 1, width: 'calc(100% - 16px)', position: 'absolute', top: '8px', left: 0, right: 0, margin: '0 auto', backgroundColor: 'black' }}>
            <input ref={pacInputRef} autoComplete="false" type="text" id="pacInputRef" name="pacInputRef" style={{ fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white', width: '100%' }} />
          </div>
          <div className="map" style={{ height: '70vh', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapBox} />
          {objek?.map?.((obj) => (
            <div key={obj?.id} id="satuObj" style={{ display: 'flex', flexDirection: 'row' }}>
              <div id="namaObj">{obj?.name}</div>
              <div id="latObj">{obj?.lat}</div>
              <div id="lngObj">{obj?.lng}</div>
            </div>
          ))}
        </Box>
      </MainLayout>
    </>
  );
};

export default PlacesSearch1;
