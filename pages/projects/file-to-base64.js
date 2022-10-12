import Head from 'next/head';
import { useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MainLayout from '../../components/MainLayout';
import { BASE_PATH } from '../../configs/constants';
import readBlob from '../../utils/readBlob';

const FileToBase64 = () => {
  const [base64String, setBase64String] = useState();
  const onDragOver = (evt) => evt.preventDefault();

  const handleDocumentUploadButton = async (evt) => {
    const base64Result = await readBlob(evt.target.files[0]);
    setBase64String(base64Result);
  };

  const handleDocumentUploadDropzone = async (evt) => {
    evt.preventDefault();
    const singleItem = evt.dataTransfer.items[0];
    if (singleItem.kind !== 'file' || (singleItem.type.includes('image') === false && singleItem.type.includes('pdf') === false)) return;
    const base64Result = await readBlob(singleItem.getAsFile());
    setBase64String(base64Result);
  };

  return (
    <>
      <Head>
        <title>File To Base64</title>
        <meta name="description" content="upload and convert file to base64 string" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>File Url String To Base64</Typography>
          <div onDrop={handleDocumentUploadDropzone} onDragOver={onDragOver} style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '200px', borderRadius: '8px', outline: '2px dashed #92b0b3' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'fit-content', padding: '8px', whiteSpace: 'nowrap', zIndex: 1, position: 'absolute', top: '50%', left: '50%', WebkitTransform: 'translate(-50%, -50%)', MozTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)' }}>
              <Button endIcon={<UploadFileIcon />} sx={{ fontSize: '1.2rem', marginBottom: '8px' }} variant="contained" component="label">
                Upload
                <input onChange={handleDocumentUploadButton} type="file" accept="*" hidden />
              </Button>
              <Typography sx={{ fontSize: '1.6rem' }} component="p">click atau drag gambar ke sini.</Typography>
            </div>
          </div>
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

export default FileToBase64;
