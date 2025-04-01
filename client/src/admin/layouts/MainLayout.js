import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: '30px' },
          mr: { sm: '30px' },
          mt: '64px',
          backgroundColor: 'background.default',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }} className="container-fluid p-4 bg-light min-vh-100">
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
