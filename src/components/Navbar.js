import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const baseUrl = '/portfolio/utils/';
const utilList = [{
  url: `${baseUrl}longlat-to-latlong`,
  name: 'Longlat to Latlong'
}, {
  url: `${baseUrl}file-url-to-base64`,
  name: 'File Url to Base64'
}];

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [utilsAnchor, setUtilsAnchor] = useState();
  const isUtilsMenuOpen = Boolean(utilsAnchor);

  const gotoHomePage = () => navigate('/');
  const openUtilsMenu = (evt) => setUtilsAnchor(evt.currentTarget);
  const handleMenuClose = () => setUtilsAnchor(null);

  return (
    <>
      <AppBar position="sticky" sx={{ padding: '4px', backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : '#121212' }}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '8px' }}>
          <Button
            variant="text"
            onClick={gotoHomePage}
            sx={location.pathname === '/portfolio' ? { borderBottom: '2px solid', borderBottomColor: 'inherit', fontSize: '1.4rem', borderRadius: 0 } : { fontSize: '1.4rem', borderRadius: 0, border: 'none' }}
          >
            Willy Horizont&apos;s Portfolio
          </Button>
          <Button
            variant="text"
            id="utils-menu"
            aria-controls={isUtilsMenuOpen ? 'utils-menu' : undefined}
            aria-expanded={isUtilsMenuOpen ? 'true' : undefined}
            onClick={openUtilsMenu}
            aria-haspopup="true"
            color="inherit"
            sx={location.pathname.includes('/portfolio/utils') ? { borderBottom: '2px solid', borderBottomColor: 'inherit', fontSize: '1.4rem', borderRadius: 0 } : { fontSize: '1.4rem', borderRadius: 0, border: 'none' }}
          >
            Utils
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="utils-menu"
        anchorEl={utilsAnchor}
        open={isUtilsMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{ 'aria-labelledby': 'utils-menu' }}
      >
        {utilList.map((util) => (
          <MenuItem key={util.url} onClick={handleMenuClose} component={Link} to={util.url}>
            {util.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
