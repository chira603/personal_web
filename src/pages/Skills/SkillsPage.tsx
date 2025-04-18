import React from 'react';
import { Container } from '@mui/material';
import Skills from '../../components/Skills';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const SkillsPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Skills />
      </Container>
    </BackgroundAnimation>
  );
};

export default SkillsPage;
