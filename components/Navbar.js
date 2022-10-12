import Link from 'next/link';
import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ padding: '4px', backgroundColor: '#121212' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '8px' }}>
        <Link href="/">
          Willy Horizont&apos;s Portfolio
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
