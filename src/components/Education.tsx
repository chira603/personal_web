import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Education: React.FC = () => {
  const theme = useTheme();

  // Education data
  const educationData = [
    {
      degree: 'B.Tech.',
      institution: 'IIT Gandhinagar',
      year: '2022 - Present',
      score: 'CPI: 6.86',
      color: theme.palette.primary.main,
    },
    {
      degree: 'Class XII',
      institution: 'A B High School, Navsari',
      year: '2021 - 2022',
      score: 'Percentage: 87.84%',
      color: '#2196f3',
    },
    {
      degree: 'Class X',
      institution: 'A B School, Navsari',
      year: '2019 - 2020',
      score: 'Percentage: 91.67%',
      color: '#ff9800',
    },
  ];

  // Entrance Exam Results
  const entranceExamData = [
    {
      exam: 'JEE Advanced',
      year: '2022',
      result: 'AICR: 126',
      description: 'All India Rank among 1.1 million aspirants',
      color: '#9c27b0',
      icon: <EmojiEventsIcon sx={{ fontSize: 30, color: '#9c27b0' }} />,
    },
    {
      exam: 'JEE Main',
      year: '2022',
      result: 'AICR: 234',
      description: 'All India Category Rank',
      color: '#f44336',
      icon: <MilitaryTechIcon sx={{ fontSize: 30, color: '#f44336' }} />,
    },
    {
      exam: 'GUJCET',
      year: '2022',
      result: '108.75/120',
      description: '99.78 percentile among all Gujarat students',
      color: '#ff9800',
      icon: <MilitaryTechIcon sx={{ fontSize: 30, color: '#ff9800' }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0A0A0A 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
          filter: 'blur(70px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10, position: 'relative', zIndex: 1 }}>
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -30,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '150px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, rgba(0, 200, 83, 0.7), transparent)',
              borderRadius: '2px',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.05,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%2300c853\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '20px',
              zIndex: -1,
            }}
          />

          {/* Title and subtitle */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto Mono',
              color: theme.palette.primary.main,
              mb: 2,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              display: 'inline-block',
              padding: '4px 12px',
              border: `1px solid ${theme.palette.primary.main}30`,
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 200, 83, 0.05)',
            }}
          >
            ACADEMIC BACKGROUND
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 4,
              mt: 2,
              background: 'linear-gradient(90deg, #ffffff, #00c853, #ffffff)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 200, 83, 0.2)',
            }}
          >
            Education
          </Typography>

          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              My academic journey has equipped me with a strong foundation in computer science and engineering,
              with a focus on quantitative analysis and problem-solving skills.
            </Typography>
          </Box>
        </Box>

        {/* Education Cards */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Roboto Mono',
            fontWeight: 700,
            mb: 5,
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }
          }}
        >
          Academic Education
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {educationData.map((education, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${education.color}60`,
                    borderColor: education.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${education.color}, transparent)`,
                    opacity: 0.7,
                  },
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: `${education.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${education.color}50`,
                        boxShadow: `0 0 15px ${education.color}30`,
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 30, color: education.color }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: education.color,
                      }}
                    >
                      {education.degree}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {education.institution}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TimelineIcon sx={{ fontSize: 20, color: theme.palette.text.secondary, mr: 1 }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'Roboto',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {education.year}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    >
                      {education.score}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2, borderColor: `${education.color}30` }} />

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        height: '4px',
                        background: `linear-gradient(to right, transparent, ${education.color}, transparent)`,
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Entrance Exam Results */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Roboto Mono',
            fontWeight: 700,
            mb: 5,
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }
          }}
        >
          Entrance Exam Results
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {entranceExamData.map((exam, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${exam.color}60`,
                    borderColor: exam.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${exam.color}, transparent)`,
                    opacity: 0.7,
                  },
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: `${exam.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${exam.color}50`,
                        boxShadow: `0 0 15px ${exam.color}30`,
                      }}
                    >
                      {exam.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: exam.color,
                      }}
                    >
                      {exam.exam}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TimelineIcon sx={{ fontSize: 20, color: theme.palette.text.secondary, mr: 1 }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'Roboto',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {exam.year}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: exam.color,
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {exam.result}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {exam.description}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2, borderColor: `${exam.color}30` }} />

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        height: '4px',
                        background: `linear-gradient(to right, transparent, ${exam.color}, transparent)`,
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
