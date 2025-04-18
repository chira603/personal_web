import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Layout from './components/Layout';
import HomePage from './pages/Home/HomePage';

import EducationPage from './pages/Education/EducationPage';
import ExperiencePage from './pages/Experience/ExperiencePage';
import SkillsPage from './pages/Skills/SkillsPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ResponsibilitiesPage from './pages/Responsibilities/ResponsibilitiesPage';
import PassionsPage from './pages/Passions/PassionsPage';
import CertificatesPage from './pages/Certificates/CertificatesPage';
import AchievementsPage from './pages/Achievements/AchievementsPage';
import ContactPage from './pages/Contact/ContactPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/responsibilities" element={<ResponsibilitiesPage />} />
            <Route path="/passions" element={<PassionsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
