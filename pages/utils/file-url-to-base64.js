import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import readBlob from '../../utils/readBlob';
import { BASE_PATH } from '../../configs/constants';
import styles from '../../styles/Home.module.css';

const FileUrlToBase64 = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [base64String, setBase64String] = useState('');
  const [loading, setLoading] = useState(false);

  const getBase64String = async (evt) => {
    setLoading(true);
    setFileUrl(evt.target.value);
    const controller = new AbortController();
    try {
      const responseBlob = await axios.get(evt.target.value, { responseType: 'blob', signal: controller.signal });
      const base64Result = await readBlob(responseBlob.data);
      setBase64String(base64Result);
    } catch (err) {
      if (controller.signal.aborted) return;
      if (!err?.response) {
        setBase64String('File url not responding.');
        return;
      }
      setBase64String(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>File Url To Base64</title>
        <meta name="description" content="file url string to base64 string" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        {loading && <p>loading...</p>}
        <h3 style={{ textAlign: 'center' }}>File Url String To Base64</h3>
        <h4 style={{ textAlign: 'center' }}>File url string</h4>
        <input value={fileUrl} onChange={getBase64String} style={{ width: '100%' }} />
        <h4 style={{ textAlign: 'center' }}>Base64 string result</h4>
        <textarea
          value={base64String}
          rows={20}
          multiline
          style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
        />
      </main>
    </div>
  );
};

export default FileUrlToBase64;
