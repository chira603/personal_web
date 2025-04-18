import React from 'react';
import { Container } from '@mui/material';
import Education from '../../components/Education';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const EducationPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Education />
      </Container>
    </BackgroundAnimation>
  );
};

export default EducationPage;
