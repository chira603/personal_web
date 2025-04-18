import React from 'react';
import { Box, Container } from '@mui/material';
import Certificates from '../../components/Certificates';

const CertificatesPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Certificates />
      </Container>
    </Box>
  );
};

export default CertificatesPage;
