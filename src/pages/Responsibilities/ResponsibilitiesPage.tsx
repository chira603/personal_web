import React from 'react';
import { Container } from '@mui/material';
import Responsibilities from '../../components/Responsibilities';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const ResponsibilitiesPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Responsibilities />
      </Container>
    </BackgroundAnimation>
  );
};

export default ResponsibilitiesPage;
