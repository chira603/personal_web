import React from 'react';
import { Box, Container } from '@mui/material';
import Contact from '../../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        <Contact />
      </Container>
    </Box>
  );
};

export default ContactPage;
