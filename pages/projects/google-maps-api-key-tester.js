import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const initialGoogleMapsApiKeyTestResult = {
  mapsStaticApi: false,
  streetViewStaticApi: false,
  elevationApi: false,
  directionsApi: false,
  distanceMatrixApi: false,
  roadsApiSnapToRoads: false,
  roadsApiNearestRoads: false,
  roadsApiSpeedLimits: false,
  routesApiComputeRoute: false,
  routesApiComputeRouteMatrix: false,
  placesApiFindPlace: false,
  placesApiNearbySearch: false,
  placesApiTextSearch: false,
  placesApiPlaceDetails: false,
  placesApiPlacePhotos: false,
  placesApiPlaceAutocomplete: false,
  placesApiQueryAutocomplete: false,
  geocodingApi: false,
  geolocationApi: false,
  timeZoneApi: false
};

const GoogleMapsApiKeyTester = () => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [googleMapsApiKeyTestResult, setGoogleMapsApiKeyTestResult] = useState(initialGoogleMapsApiKeyTestResult);

  const handleGoogleMapsApiKeyChange = (evt) => setGoogleMapsApiKey(evt.target.value);

  const testGoogleMapsApiKey = async () => {
    if (!googleMapsApiKey) return;
    setIsLoading(true);
    try {
      const mapsStaticApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${googleMapsApiKey}`);
      console.log('mapsStaticApiResponse', mapsStaticApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, mapsStaticApi: mapsStaticApiResponse.status === 200 }));
    } catch (err) {
      console.log('mapsStaticApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, mapsStaticApi: false }));
    }
    try {
      const streetViewStaticApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=${googleMapsApiKey}`);
      console.log('streetViewStaticApiResponse', streetViewStaticApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, streetViewStaticApi: streetViewStaticApiResponse.status === 200 }));
    } catch (err) {
      console.log('streetViewStaticApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, streetViewStaticApi: false }));
    }
    try {
      const elevationApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034&key=${googleMapsApiKey}`);
      console.log('elevationApiResponse', elevationApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, elevationApi: elevationApiResponse.status === 200 && elevationApiResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('elevationApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, elevationApi: false }));
    }
    try {
      const directionsApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${googleMapsApiKey}`);
      console.log('directionsApiResponse', directionsApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, directionsApi: directionsApiResponse.status === 200 && directionsApiResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('directionsApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, directionsApi: false }));
    }
    try {
      const distanceMatrixApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=${googleMapsApiKey}`);
      console.log('distanceMatrixApiResponse', distanceMatrixApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, distanceMatrixApi: distanceMatrixApiResponse.status === 200 && distanceMatrixApiResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('distanceMatrixApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, distanceMatrixApi: false }));
    }
    try {
      const roadsApiSnapToRoadsResponse = await axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=-35.27801%2C149.12958%7C-35.28032%2C149.12907%7C-35.28099%2C149.12929%7C-35.28144%2C149.12984%7C-35.28194%2C149.13003%7C-35.28282%2C149.12956%7C-35.28302%2C149.12881%7C-35.28473%2C149.12836&interpolate=true&key=${googleMapsApiKey}`);
      console.log('roadsApiSnapToRoadsResponse', roadsApiSnapToRoadsResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiSnapToRoads: roadsApiSnapToRoadsResponse.status === 200 && roadsApiSnapToRoadsResponse?.data?.snappedPoints !== undefined }));
    } catch (err) {
      console.log('roadsApiSnapToRoadsError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiSnapToRoads: false }));
    }
    try {
      const roadsApiNearestRoadsResponse = await axios.get(`https://roads.googleapis.com/v1/nearestRoads?points=60.170880%2C24.942795%7C60.170879%2C24.942796%7C60.170877%2C24.942796&key=${googleMapsApiKey}`);
      console.log('roadsApiNearestRoadsResponse', roadsApiNearestRoadsResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiNearestRoads: roadsApiNearestRoadsResponse.status === 200 && roadsApiNearestRoadsResponse?.data?.snappedPoints !== undefined }));
    } catch (err) {
      console.log('roadsApiNearestRoadsError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiNearestRoads: false }));
    }
    try {
      const roadsApiSpeedLimitsResponse = await axios.get(`https://roads.googleapis.com/v1/speedLimits?path=38.75807927603043,-9.03741754643809|38.6896537,-9.1770515|41.1399289,-8.6094075&key=${googleMapsApiKey}`);
      console.log('roadsApiSpeedLimitsResponse', roadsApiSpeedLimitsResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiSpeedLimits: roadsApiSpeedLimitsResponse.status === 200 && roadsApiSpeedLimitsResponse?.data?.snappedPoints !== undefined && roadsApiSpeedLimitsResponse?.data?.speedLimits !== undefined }));
    } catch (err) {
      console.log('roadsApiSpeedLimitsError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, roadsApiSpeedLimits: false }));
    }
    try {
      const routesApiComputeRouteResponse = await axios.post('https://routes.googleapis.com/directions/v2:computeRoutes', {
        origin: { location: { latLng: { latitude: 37.419734, longitude: -122.0827784 } } },
        destination: { location: { latLng: { latitude: 37.417670, longitude: -122.079595 } } },
        travelMode: 'DRIVE',
        routingPreference: 'TRAFFIC_AWARE',
        departureTime: '2023-10-15T15:01:23.045123456Z',
        computeAlternativeRoutes: false,
        routeModifiers: { avoidTolls: false, avoidHighways: false, avoidFerries: false },
        languageCode: 'en-US',
        units: 'IMPERIAL'
      }, { headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': googleMapsApiKey, 'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline' } });
      console.log('routesApiComputeRouteResponse', routesApiComputeRouteResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, routesApiComputeRoute: routesApiComputeRouteResponse.status === 200 }));
    } catch (err) {
      console.log('routesApiComputeRouteError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, routesApiComputeRoute: false }));
    }
    try {
      const routesApiComputeRouteMatrixResponse = await axios.post('https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix', {
        origins: [{ waypoint: { location: { latLng: { latitude: 37.420761, longitude: -122.081356 } } }, routeModifiers: { avoid_ferries: true } }, { waypoint: { location: { latLng: { latitude: 37.403184, longitude: -122.097371 } } }, routeModifiers: { avoid_ferries: true } }],
        destinations: [{ waypoint: { location: { latLng: { latitude: 37.420999, longitude: -122.086894 } } } }, { waypoint: { location: { latLng: { latitude: 37.383047, longitude: -122.044651 } } } }],
        travelMode: 'DRIVE',
        routingPreference: 'TRAFFIC_AWARE'
      }, { headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': googleMapsApiKey, 'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline' } });
      console.log('routesApiComputeRouteMatrixResponse', routesApiComputeRouteMatrixResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, routesApiComputeRouteMatrix: routesApiComputeRouteMatrixResponse.status === 200 }));
    } catch (err) {
      console.log('routesApiComputeRouteMatrixError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, routesApiComputeRouteMatrix: false }));
    }

    try {
      const placesApiFindPlaceResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${googleMapsApiKey}`);
      console.log('placesApiFindPlaceResponse', placesApiFindPlaceResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiFindPlace: placesApiFindPlaceResponse.status === 200 && placesApiFindPlaceResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiFindPlaceError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiFindPlace: false }));
    }
    try {
      const placesApiNearbySearchResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${googleMapsApiKey}`);
      console.log('placesApiNearbySearchResponse', placesApiNearbySearchResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiNearbySearch: placesApiNearbySearchResponse.status === 200 && placesApiNearbySearchResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiNearbySearchError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiNearbySearch: false }));
    }
    try {
      const placesApiTextSearchResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=${googleMapsApiKey}`);
      console.log('placesApiTextSearchResponse', placesApiTextSearchResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiTextSearch: placesApiTextSearchResponse.status === 200 && placesApiTextSearchResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiTextSearchError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiTextSearch: false }));
    }
    try {
      const placesApiPlaceDetailsResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=${googleMapsApiKey}`);
      console.log('placesApiPlaceDetailsResponse', placesApiPlaceDetailsResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceDetails: placesApiPlaceDetailsResponse.status === 200 && placesApiPlaceDetailsResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiPlaceDetailsError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceDetails: false }));
    }
    try {
      const placesApiPlacePhotosResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT&key=${googleMapsApiKey}`);
      console.log('placesApiPlacePhotosResponse', placesApiPlacePhotosResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlacePhotos: placesApiPlacePhotosResponse.status === 200 }));
    } catch (err) {
      console.log('placesApiPlacePhotosError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlacePhotos: false }));
    }
    try {
      const placesApiPlaceAutocompleteResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=${googleMapsApiKey}`);
      console.log('placesApiPlaceAutocompleteResponse', placesApiPlaceAutocompleteResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceAutocomplete: placesApiPlaceAutocompleteResponse.status === 200 && placesApiPlaceAutocompleteResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiPlaceAutocompleteError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceAutocomplete: false }));
    }
    try {
      const placesApiQueryAutocompleteResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20Sydney&key=${googleMapsApiKey}`);
      console.log('placesApiQueryAutocompleteResponse', placesApiQueryAutocompleteResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiQueryAutocomplete: placesApiQueryAutocompleteResponse.status === 200 && placesApiQueryAutocompleteResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('placesApiQueryAutocompleteError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiQueryAutocomplete: false }));
    }
    try {
      const geocodingApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${googleMapsApiKey}`);
      console.log('geocodingApiResponse', geocodingApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, geocodingApi: geocodingApiResponse.status === 200 && geocodingApiResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('geocodingApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, geocodingApi: false }));
    }
    try {
      const geolocationApiResponse = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleMapsApiKey}`, {
        considerIp: 'false',
        wifiAccessPoints: [
          { macAddress: '84:d4:7e:f6:99:64', signalStrength: -54, signalToNoiseRatio: 0 },
          { macAddress: '84:d4:7e:f6:99:71', signalStrength: -43, signalToNoiseRatio: 0 },
          { macAddress: '84:d4:7e:f7:21:35', signalStrength: -32, signalToNoiseRatio: 0 }
        ]
      }, { headers: { 'Content-Type': 'application/json' } });
      console.log('geolocationApiResponse', geolocationApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, geolocationApi: geolocationApiResponse.status === 200 && geolocationApiResponse?.data?.location !== undefined && geolocationApiResponse?.data?.accuracy !== undefined }));
    } catch (err) {
      console.log('geolocationApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, geolocationApi: false }));
    }
    try {
      const timeZoneApiResponse = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=${googleMapsApiKey}`);
      console.log('timeZoneApiResponse', timeZoneApiResponse);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, timeZoneApi: timeZoneApiResponse.status === 200 && timeZoneApiResponse?.data?.status === 'OK' }));
    } catch (err) {
      console.log('timeZoneApiError', err);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, timeZoneApi: false }));
    }
    setIsLoading(false);
  };

  const handleSubmitGoogleMapsApiKeyChange = (evt) => {
    if (evt.keyCode === 13) {
      testGoogleMapsApiKey();
    }
  };

  return (
    <>
      <Head>
        <title>Google Maps API Key Tester</title>
        <meta name="description" content="google maps api key tester" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Google Maps API Key Tester</Typography>
          <input onChange={handleGoogleMapsApiKeyChange} onKeyDown={handleSubmitGoogleMapsApiKeyChange} placeholder="Put Api Key Here" autoComplete="false" type="text" id="googleMapsApiKeyInputRef" style={{ fontSize: '1.6rem', padding: '4px', borderRadius: '8px', color: 'white', width: '100%' }} />
          {isLoading && <div id="isLoading">loading...</div>}
          {isLoading === false && (
            <div id="hasilTest" style={{ width: '100%', marginTop: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Maps Static API: </div>
                <div id="mapsStaticApi">{googleMapsApiKeyTestResult.mapsStaticApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Streetview Static API: </div>
                <div id="streetViewStaticApi">{googleMapsApiKeyTestResult.streetViewStaticApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Elevation API: </div>
                <div id="elevationApi">{googleMapsApiKeyTestResult.elevationApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Directions API: </div>
                <div id="directionsApi">{googleMapsApiKeyTestResult.directionsApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Distance Matrix API: </div>
                <div id="distanceMatrixApi">{googleMapsApiKeyTestResult.distanceMatrixApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Roads API Snap To Roads: </div>
                <div id="roadsApiSnapToRoads">{googleMapsApiKeyTestResult.roadsApiSnapToRoads ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Roads API Nearest Roads: </div>
                <div id="roadsApiNearestRoads">{googleMapsApiKeyTestResult.roadsApiNearestRoads ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Roads API Speed Limits: </div>
                <div id="roadsApiSpeedLimits">{googleMapsApiKeyTestResult.roadsApiSpeedLimits ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Routes API Compute Route: </div>
                <div id="routesApiComputeRoute">{googleMapsApiKeyTestResult.routesApiComputeRoute ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Routes API Compute Route Matrix: </div>
                <div id="routesApiComputeRouteMatrix">{googleMapsApiKeyTestResult.routesApiComputeRouteMatrix ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Find Place: </div>
                <div id="placesApiFindPlace">{googleMapsApiKeyTestResult.placesApiFindPlace ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Nearby Search: </div>
                <div id="placesApiNearbySearch">{googleMapsApiKeyTestResult.placesApiNearbySearch ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Text Search: </div>
                <div id="placesApiTextSearch">{googleMapsApiKeyTestResult.placesApiTextSearch ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Place Details: </div>
                <div id="placesApiPlaceDetails">{googleMapsApiKeyTestResult.placesApiPlaceDetails ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Place Photos: </div>
                <div id="placesApiPlacePhotos">{googleMapsApiKeyTestResult.placesApiPlacePhotos ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Place Autocomplete: </div>
                <div id="placesApiPlaceAutocomplete">{googleMapsApiKeyTestResult.placesApiPlaceAutocomplete ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Places API Query Autocomplete: </div>
                <div id="placesApiQueryAutocomplete">{googleMapsApiKeyTestResult.placesApiQueryAutocomplete ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Geocoding API: </div>
                <div id="geocodingApi">{googleMapsApiKeyTestResult.geocodingApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Geolocation API: </div>
                <div id="geolocationApi">{googleMapsApiKeyTestResult.geolocationApi ? 'True' : 'False'}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <div>Time Zone API: </div>
                <div id="timeZoneApi">{googleMapsApiKeyTestResult.timeZoneApi ? 'True' : 'False'}</div>
              </div>
            </div>
          )}
        </Paper>
      </MainLayout>
    </>
  );
};

export default GoogleMapsApiKeyTester;
