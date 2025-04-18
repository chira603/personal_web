import React from 'react';
import { Container } from '@mui/material';
import Achievements from '../../components/Achievements';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const AchievementsPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Achievements />
      </Container>
    </BackgroundAnimation>
  );
};

export default AchievementsPage;
