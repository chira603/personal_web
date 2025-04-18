import React from 'react';
import { Box, Container } from '@mui/material';
import Portfolio from '../../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Portfolio />
      </Container>
    </Box>
  );
};

export default PortfolioPage;
