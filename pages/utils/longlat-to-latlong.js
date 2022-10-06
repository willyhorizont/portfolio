import Head from 'next/head';
import React, { useState } from 'react';
import { BASE_PATH } from '../../configs/constants';
import styles from '../../styles/Home.module.css';

const LongLatToLatLong = () => {
  const [latLong, setLatLong] = useState('');
  const handleLatLong = (evt) => {
    if (!evt.target.value) {
      setLatLong('');
      return;
    }
    setLatLong([...evt.target.value.split(' ')].map((str) => [str.split(',')[1], str.split(',')[0]].join(',')).join(' '));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Long Lat To Lat Long</title>
        <meta name="description" content="Long Lat To Lat Long LongLat To LatLong" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h3 style={{ textAlign: 'center' }}>Longlat to Latlong</h3>
        <h4 style={{ textAlign: 'center' }}>Paste Longlat here to get Latlong</h4>
        <textarea
          value={latLong}
          placeholder="-7.37154006899988,109.688911438 -7.37160134799996,109.688801012 -7.37167999899998,109.688659999"
          onChange={handleLatLong}
          rows={20}
          multiline
          style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
        />
      </main>
    </div>
  );
};

export default LongLatToLatLong;
