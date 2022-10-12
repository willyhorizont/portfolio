import { Container } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <main style={{ minHeight: '100vh', padding: '4rem 0', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </main>
  );
};

export default MainLayout;
