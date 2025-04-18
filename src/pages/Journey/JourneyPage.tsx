import React from 'react';
import { Box, Container } from '@mui/material';
import Journey from '../../components/Journey';

const JourneyPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Journey />
      </Container>
    </Box>
  );
};

export default JourneyPage;
