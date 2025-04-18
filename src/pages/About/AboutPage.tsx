import React from 'react';
import { Container } from '@mui/material';
import About from '../../components/About';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const AboutPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <About />
      </Container>
    </BackgroundAnimation>
  );
};

export default AboutPage;
