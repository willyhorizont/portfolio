import { useRef, useState } from 'react';
import Head from 'next/head';
import { IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MainLayout from '../../components/MainLayout';
import { BASE_PATH } from '../../configs/constants';
import masKargoOriginDestinationList from '../../configs/masKargoOriginDestinationList';
// import generateRegexFromSearchQuery from '../../utils/generateRegexFromSearchQuery';

const AutocompleteSearchbox = () => {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(null);
  const [autocompleteResult, setAutocompleteResult] = useState(null);
  const searchInputTimeoutRef = useRef(null);

  const filterResult = (str) => () => {
    const onlyAbcd = str.replace(/\W+/g, ' ');
    const wordList = onlyAbcd.split(' ');
    const filteredResult = masKargoOriginDestinationList.filter((origdes) => wordList.some((srl) => origdes.Name.toUpperCase().includes(srl.toUpperCase())));
    setAutocompleteResult(filteredResult);
    clearTimeout(searchInputTimeoutRef.current);
  };

  const handleSearchInput = (evt) => {
    setSearch(evt.target.value);
    if (searchInputTimeoutRef.current) clearTimeout(searchInputTimeoutRef.current);
    searchInputTimeoutRef.current = setTimeout(filterResult(evt.target.value), 1000);
  };

  const handleMouseEnter = (id) => () => setFocus(id);
  const handleMouseLeave = () => setFocus(null);
  const handleSelect = (name) => () => {
    setSearch(name);
    setAutocompleteResult(null);
  };

  const handleOnFocus = () => setAutocompleteResult(masKargoOriginDestinationList);
  const handleHideWindow = () => setAutocompleteResult(null);

  return (
    <>
      <Head>
        <title>Autocomplete Searchbox</title>
        <meta name="description" content="autocomplete searchbox dropdown list select option API" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Paper elevation={3} sx={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Autocomplete Searchbox</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: '#121212', width: '100%', position: 'relative' }}>
            <input onFocus={handleOnFocus} onChange={handleSearchInput} value={search} placeholder="Saya sedang cari..." style={{ padding: '8px', width: '100%', color: 'inherit', fontSize: '1.4rem' }} />
            {autocompleteResult !== null && (
              <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '50px', backgroundColor: '#121212', width: '100%', padding: '8px', maxHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-end' }}>
                  <IconButton aria-label="back" onClick={handleHideWindow} sx={{ padding: '0' }}>
                    <CloseIcon fontSize="small" color="primary" />
                  </IconButton>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#121212', width: '100%', padding: '8px', overflowY: 'auto' }}>
                  {autocompleteResult?.map?.((origdes) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <div key={origdes?.ID} onClick={handleSelect(origdes?.Name)} onMouseEnter={handleMouseEnter(origdes?.ID)} onMouseLeave={handleMouseLeave} style={focus === origdes?.ID ? { cursor: 'pointer', backgroundColor: '#222' } : { cursor: 'pointer' }}>{origdes?.Name}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Paper>
      </MainLayout>
    </>
  );
};

export default AutocompleteSearchbox;
