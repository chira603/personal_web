import React from 'react';
import { Container } from '@mui/material';
import Projects from '../../components/Projects';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const ProjectsPage: React.FC = () => {
  return (
    <BackgroundAnimation>
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Projects />
      </Container>
    </BackgroundAnimation>
  );
};

export default ProjectsPage;
