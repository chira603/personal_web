import React from 'react';
import { Container } from '@mui/material';
import Passions from '../../components/Passions';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const PassionsPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Passions />
      </Container>
    </BackgroundAnimation>
  );
};

export default PassionsPage;
