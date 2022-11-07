import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

const initialGoogleMapsApiKeyTestResult = { mapStaticResponse: false, placesApiFindPlaceResponse: false, placesApiNearbySearchResponse: false, placesApiTextSearchResponse: false, placesApiPlaceAutocomplete: false };

const GoogleMapsApiKeyTester = () => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [googleMapsApiKeyTestResult, setGoogleMapsApiKeyTestResult] = useState(initialGoogleMapsApiKeyTestResult);

  const handleGoogleMapsApiKeyChange = (evt) => setGoogleMapsApiKey(evt.target.value);

  const testGoogleMapsApiKey = async () => {
    setIsLoading(true);
    try {
      const mapStaticResponse = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${googleMapsApiKey}`);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, mapStatic: mapStaticResponse.status === 200 }));
    } catch (err) {
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, mapStatic: false }));
    }
    try {
      const placesApiFindPlaceResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${googleMapsApiKey}`);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiFindPlace: placesApiFindPlaceResponse.status === 200 }));
    } catch (err) {
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiFindPlace: false }));
    }
    try {
      const placesApiNearbySearchResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${googleMapsApiKey}`);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiNearbySearch: placesApiNearbySearchResponse.status === 200 }));
    } catch (err) {
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiNearbySearch: false }));
    }
    try {
      const placesApiTextSearchResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=${googleMapsApiKey}`);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiTextSearch: placesApiTextSearchResponse.status === 200 }));
    } catch (error) {
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiTextSearch: false }));
    }
    try {
      const placesApiPlaceAutocompleteResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&strictbounds=true&key=${googleMapsApiKey}`);
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceAutocomplete: placesApiPlaceAutocompleteResponse.status === 200 }));
    } catch (error) {
      setGoogleMapsApiKeyTestResult((prev) => ({ ...prev, placesApiPlaceAutocomplete: false }));
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
            <>
              <div id="mapStaticResponse" style={{ marginTop: '8px' }}>Maps Static API: {googleMapsApiKeyTestResult.mapStaticResponse ? 'True' : 'False'}</div>
              <div id="placesApiFindPlaceResponse" style={{ marginTop: '8px' }}>Places API Find Place: {googleMapsApiKeyTestResult.placesApiFindPlaceResponse ? 'True' : 'False'}</div>
              <div id="placesApiNearbySearchResponse" style={{ marginTop: '8px' }}>Places API Nearby Search: {googleMapsApiKeyTestResult.placesApiNearbySearchResponse ? 'True' : 'False'}</div>
              <div id="placesApiTextSearchResponse" style={{ marginTop: '8px' }}>Places API Text Search: {googleMapsApiKeyTestResult.placesApiTextSearchResponse ? 'True' : 'False'}</div>
              <div id="placesApiPlaceAutocompleteResponse" style={{ marginTop: '8px' }}>Places API Place Autocomplete: {googleMapsApiKeyTestResult.placesApiPlaceAutocompleteResponse ? 'True' : 'False'}</div>
            </>
          )}
        </Paper>
      </MainLayout>
    </>
  );
};

export default GoogleMapsApiKeyTester;
