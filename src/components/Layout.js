import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '8px' }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
