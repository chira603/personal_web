import React from 'react';
import { Container } from '@mui/material';
import Experience from '../../components/Experience';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const ExperiencePage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Experience />
      </Container>
    </BackgroundAnimation>
  );
};

export default ExperiencePage;
