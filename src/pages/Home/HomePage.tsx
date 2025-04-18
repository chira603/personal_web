import React from 'react';
import { Container } from '@mui/material';
import Hero from '../../components/Hero';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const HomePage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container
        maxWidth="lg"
        sx={{
          pt: 8,
          position: 'relative',
          zIndex: 2,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -50,
            left: -50,
            right: -50,
            bottom: -50,
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(30px)',
            zIndex: -1,
          }
        }}
      >
        <Hero />
      </Container>
    </BackgroundAnimation>
  );
};

export default HomePage;
