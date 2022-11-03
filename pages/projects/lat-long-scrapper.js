import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from '../../configs/googleMapStyles';
import { BASE_PATH, indonesiaBound, indonesiaCoordinate } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const loader = new Loader({ apiKey: 'AIzaSyBYVzK1OcNsLbsdtVwPObs5V-PsV1YhOX4', language: 'id-ID', version: 'weekly', libraries: ['places'] });

const LatLongScrapper = () => {
  const pacInputRef = useRef(null);
  const mapRef = useRef();
  const [objek, setObjek] = useState(null);
  const router = useRouter();
  const { katakunci, kondisi } = router.query;

  const handleEnterKey = (evt) => {
    if (evt.keyCode === 13) setObjek(null);
  };

  useEffect(() => {
    loader.load().then((google) => {
      const gmapObj = new google.maps.Map(mapRef.current, {
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

      gmapObj.addListener('bounds_changed', () => {
        // console.log('bounds_changed');
        searchBoxObj.setBounds(gmapObj.getBounds());
      });

      let markerList = [];

      searchBoxObj.addListener('places_changed', () => {
        // console.log('places_changed');
        const pacInputValue = pacInputRef.current.value.toLowerCase();
        const placeList = searchBoxObj.getPlaces();
        // console.log('placeList', placeList);

        if (placeList.length === 0) return;

        markerList.forEach((marker) => marker.setMap(null));
        markerList = [];

        if (placeList.length > 1) {
          const bounds = new google.maps.LatLngBounds();
          placeList.forEach((place) => {
            if (!place?.geometry || !place?.geometry?.location) {
              alert(`Tidak ada detail tersedia untuk: ${place?.name}`);
              return;
            }

            // Create a marker for each place.
            markerList.push(new google.maps.Marker({ map: gmapObj, title: place?.name, position: place?.geometry?.location }));

            if (place?.geometry?.viewport) {
              // Only geocodes have viewport.
              bounds.union(place?.geometry?.viewport);
            }
            if (!place?.geometry?.viewport) {
              bounds.extend(place?.geometry?.location);
            }
          });
          gmapObj.fitBounds(bounds);

          if (pacInputValue === katakunci) {
            const filteredPlaceList = placeList.filter((tempat) => (kondisi === 'startsWith' ? tempat?.name?.toLowerCase?.()?.startsWith?.(pacInputValue) : tempat?.name?.toLowerCase?.()?.includes?.(pacInputValue)));
            // console.log('filteredPlaceList', filteredPlaceList);
            const newPlaceList = filteredPlaceList.map((tempat) => ({ name: tempat?.name, lat: tempat?.geometry?.location?.lat?.(), lng: tempat?.geometry?.location?.lng?.(), id: tempat?.place_id }));
            // console.log('newPlaceList', newPlaceList);
            setObjek(newPlaceList?.length === 0 ? null : newPlaceList);
          }
          return;
        }

        const place = placeList[0];
        if (!place?.geometry || !place?.geometry?.location) {
          alert(`Tidak ada detail tersedia untuk: ${place?.name}`);
          return;
        }

        if (place?.geometry?.viewport) gmapObj.fitBounds(place?.geometry?.viewport);
        gmapObj.setCenter(place?.geometry?.location);
        markerList.push(new google.maps.Marker({ map: gmapObj, title: place?.name, position: place?.geometry?.location }));

        if (pacInputValue === katakunci && kondisi === 'startsWith' && place?.name?.toLowerCase?.()?.startsWith?.(pacInputValue)) {
          setObjek([{ name: place?.name, lat: place?.geometry?.location?.lat?.(), lng: place?.geometry?.location?.lng?.(), id: place?.place_id }]);
          return;
        }
        if (pacInputValue === katakunci) setObjek([{ name: place?.name, lat: place?.geometry?.location?.lat?.(), lng: place?.geometry?.location?.lng?.(), id: place?.place_id }]);
      });
    }).catch((err) => alert('Gagal memuat google maps karena: ', err));
  }, [kondisi]);

  return (
    <>
      <Head>
        <title>Lat Long Scrapper</title>
        <meta name="description" content="Google Maps API Places SearchBox Lat Long Scrapper" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Box sx={{ display: 'flex', position: 'relative', flexDirection: 'column' }}>
          <div style={{ zIndex: 1, borderRadius: '8px', flexGrow: 1, width: 'calc(100% - 16px)', position: 'absolute', top: '8px', left: 0, right: 0, margin: '0 auto', backgroundColor: 'black' }}>
            <input ref={pacInputRef} onKeyDown={handleEnterKey} placeholder="Masukkan Alamat" autoComplete="false" type="text" id="pacInputRef" name="pacInputRef" style={{ fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white', width: '100%' }} />
          </div>
          <div className="map" id="mapRef" style={{ height: '70vh', width: '100%', borderRadius: '8px', border: '1px solid', borderColor: 'divider' }} ref={mapRef} />
          {objek !== null && (
            <div id="hasilSearch">
              <div style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>Nama</div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <div>Lat</div>
                  <div>Lng</div>
                </div>
              </div>
              {objek?.map?.((obj) => (
                <div key={obj?.id} id="satuObj" style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', justifyContent: 'space-between' }}>
                  <div id="namaObj" style={{ flex: 1 }}>{obj?.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                    <div id="latObj">{obj?.lat}</div>
                    <div id="lngObj">{obj?.lng}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* <div id="hasilSearch">
            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>Nama</div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Lat</div>
                <div>Lng</div>
              </div>
            </div>
            {objek !== null && objek?.map?.((obj) => (
              <div key={obj?.id} id="satuObj" style={{ display: 'flex', flexDirection: 'row', columnGap: '8px', justifyContent: 'space-between' }}>
                <div id="namaObj" style={{ flex: 1 }}>{obj?.name}</div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                  <div id="latObj">{obj?.lat}</div>
                  <div id="lngObj">{obj?.lng}</div>
                </div>
              </div>
            ))}
          </div> */}
        </Box>
      </MainLayout>
    </>
  );
};

export default LatLongScrapper;
