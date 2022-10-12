import { useState } from 'react';
import { LinearProgress, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';
import readBlob from '../../utils/readBlob';
import { BASE_PATH } from '../../configs/constants';
import MainLayout from '../../components/MainLayout';

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
    <>
      <Head>
        <title>File Url To Base64</title>
        <meta name="description" content="file url string to base64 string" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px' }}>
          {loading && <LinearProgress />}
          <Typography variant="h3" textAlign="center" gutterBottom>File Url String To Base64</Typography>
          <Typography textAlign="center">File url string</Typography>
          <TextField variant="outlined" value={fileUrl} onChange={getBase64String} sx={{ width: '100%' }} />
          <Typography textAlign="center">Base64 string result</Typography>
          <TextField
            value={base64String}
            minRows={10}
            maxRows={20}
            multiline
            style={{ width: '100%', borderRadius: '8px', backgroundColor: '#091929', color: '#ddd' }}
          />
        </Paper>
      </MainLayout>
    </>
  );
};

export default FileUrlToBase64;
