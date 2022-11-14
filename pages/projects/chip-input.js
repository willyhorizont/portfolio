import { useState } from 'react';
import Head from 'next/head';
import { Chip, Paper, Typography } from '@mui/material';
import MainLayout from '../../components/MainLayout';
import { BASE_PATH } from '../../configs/constants';

export const categoryRegex = /^[a-zA-Z0-9 .'-]*$/;

const ChipInput = () => {
  const [chipList, setChipList] = useState(null);
  const [newChip, setNewChip] = useState('');

  const handleAddChip = (evt) => {
    if (newChip.length === 0 || evt.keyCode !== 13) return;
    setChipList((cur) => (cur === null ? [newChip] : [...cur.filter((c) => c !== newChip), newChip]));
    setNewChip('');
  };

  const handleChipChange = (evt) => {
    if (categoryRegex.test(evt.target.value) === false) return;
    setNewChip(evt.target.value);
  };

  const handleDeleteChip = (chipToDelete) => () => setChipList((cur) => cur.filter((chip) => chip !== chipToDelete));

  return (
    <>
      <Head>
        <title>Chip Input</title>
        <meta name="description" content="chip input" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Chip Input</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '8px', border: '2px solid rgba(255, 255, 255, 0.23)', borderRadius: '4px', padding: '8px', backgroundColor: '#091929', width: '100%', '&:hover': { border: '1px solid white' } }}>
            {chipList?.map?.((chip) => <Chip key={chip} label={chip} onDelete={handleDeleteChip(chip)} sx={{ fontSize: '1.6rem', width: 'fit-content' }} variant="outlined" color="primary" />)}
            <input onKeyDown={handleAddChip} onChange={handleChipChange} value={newChip} type="text" style={{ border: 'none', outline: 'none', padding: '8px', flexGrow: 1, color: 'inherit', fontSize: '1.4rem', backgroundColor: '#091929' }} />
          </div>
        </Paper>
      </MainLayout>
    </>
  );
};

export default ChipInput;
