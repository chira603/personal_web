import React from 'react';
import { Box, Typography, Grid, Paper, useTheme, Divider, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';

const Achievements: React.FC = () => {
  const theme = useTheme();

  const certifications = [
    {
      title: 'Gold Certificate at WorldQuant Alphathon',
      issuer: 'WorldQuant',
      date: '2023',
      description: 'Earned 10,000 points during the competition, demonstrating exceptional quantitative trading strategy development skills.',
      icon: <WorkspacePremiumIcon sx={{ color: '#FFD700', fontSize: 40 }} />
    },
    {
      title: 'NISM VIII (Equity and Derivatives)',
      issuer: 'National Institute of Securities Markets',
      date: '2023',
      description: 'Scored 77.75 out of 100 in the NISM certification exam concerning equity derivatives.',
      icon: <VerifiedIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />
    },
    {
      title: 'SEBI Investor Certificate',
      issuer: 'Securities and Exchange Board of India',
      date: '2023',
      description: 'Bagged 49 out of 50 in the NISM Sebi Investor Certificate Examination.',
      icon: <VerifiedIcon sx={{ color: '#2196f3', fontSize: 40 }} />
    },
    {
      title: 'NISM Finance Literacy Certificate',
      issuer: 'National Institute of Securities Markets',
      date: '2023',
      description: 'Certified in financial literacy by the National Institute of Securities Markets.',
      icon: <VerifiedIcon sx={{ color: '#9c27b0', fontSize: 40 }} />
    },
  ];

  const achievements = [
    {
      title: 'JEE Advanced 2022',
      organization: 'IIT Entrance Examination',
      date: '2022',
      description: 'Achieved All India Category Rank of 126 among 1.1 million aspirants.',
      icon: <SchoolIcon sx={{ color: '#FF5722', fontSize: 40 }} />,
      color: '#FF5722'
    },
    {
      title: 'GUJCET',
      organization: 'Gujarat Common Entrance Test',
      date: '2022',
      description: 'Secured 99.78 percentile rank, attempted by all Gujarat students.',
      icon: <SchoolIcon sx={{ color: '#2196f3', fontSize: 40 }} />,
      color: '#2196f3'
    },
    {
      title: 'WorldQuant Competition',
      organization: 'WorldQuant University',
      date: '2023',
      description: 'Secured rank under 10 in the WorldQuant competition at college level.',
      icon: <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 40 }} />,
      color: '#FFD700'
    },
    {
      title: 'CodeForces Rating',
      organization: 'Competitive Programming',
      date: '2023',
      description: 'Secured Rating of 780 on the CodeForces platform.',
      icon: <WorkspacePremiumIcon sx={{ color: '#9c27b0', fontSize: 40 }} />,
      color: '#9c27b0'
    },
    {
      title: 'Hackout Participation',
      organization: 'SYNAPSE Tech Team',
      date: '2023',
      description: 'Participated in the Competitive Programming Section of Hackout Hackathon.',
      icon: <WorkspacePremiumIcon sx={{ color: '#00BCD4', fontSize: 40 }} />,
      color: '#00BCD4'
    },
    {
      title: 'Frisbee Tournament',
      organization: 'Intramurals 2.0',
      date: '2023',
      description: 'First position in Frisbee tournament of Intramurals 2.0.',
      icon: <EmojiEventsIcon sx={{ color: '#4CAF50', fontSize: 40 }} />,
      color: '#4CAF50'
    },
    {
      title: 'General Championship',
      organization: 'IIT Gandhinagar',
      date: '2023',
      description: 'Gold medal in Frisbee in General Championship.',
      icon: <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 40 }} />,
      color: '#FFD700'
    },
    {
      title: 'Stockrush',
      organization: 'Amalthea-Tech Summit IIT Gandhinagar',
      date: '2023',
      description: 'Secured rank under the top 150 in Stockrush, an online stock trading competition.',
      icon: <WorkspacePremiumIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
      color: theme.palette.primary.main
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(180deg, #0A0A0A 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Enhanced background effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${theme.palette.primary.main}30 0%, transparent 70%)`,
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.7,
          animation: 'pulse 8s infinite alternate',
          '@keyframes pulse': {
            '0%': { opacity: 0.5, transform: 'scale(1)' },
            '100%': { opacity: 0.8, transform: 'scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, #9c27b025 0%, transparent 70%)`,
          filter: 'blur(70px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.6,
          animation: 'float 10s infinite alternate',
          '@keyframes float': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      {/* Additional glowing elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '180px',
          height: '180px',
          background: `radial-gradient(circle, #FFD70030 0%, transparent 70%)`,
          filter: 'blur(40px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.7,
          animation: 'pulse-gold 12s infinite alternate-reverse',
          '@keyframes pulse-gold': {
            '0%': { opacity: 0.4, transform: 'scale(1) rotate(0deg)' },
            '50%': { opacity: 0.7, transform: 'scale(1.2) rotate(5deg)' },
            '100%': { opacity: 0.4, transform: 'scale(1) rotate(0deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          left: '20%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, #4CAF5025 0%, transparent 70%)`,
          filter: 'blur(50px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.5,
          animation: 'pulse-green 15s infinite alternate',
          '@keyframes pulse-green': {
            '0%': { opacity: 0.3, transform: 'scale(1) translateY(0)' },
            '50%': { opacity: 0.6, transform: 'scale(1.1) translateY(-15px)' },
            '100%': { opacity: 0.3, transform: 'scale(1) translateY(0)' },
          },
        }}
      />
      <Box>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto Mono',
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            CREDENTIALS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Achievements & Certifications
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto',
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            A collection of my professional certifications, academic achievements, and notable accomplishments in
            finance, academics, competitive programming, and sports.
          </Typography>
        </Box>

        {/* Certifications Section */}
        <Box sx={{ mb: 10, position: 'relative' }}>
          {/* Decorative elements for certifications section */}
          {/* Enhanced background effects for certifications section */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle, ${theme.palette.primary.main}30 0%, transparent 70%)`,
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.7,
              animation: 'pulse2 10s infinite alternate',
              '@keyframes pulse2': {
                '0%': { opacity: 0.5, transform: 'scale(1)' },
                '100%': { opacity: 0.8, transform: 'scale(1.2)' },
              },
            }}
          />
          {/* Additional glowing elements for certifications */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '15%',
              width: '120px',
              height: '120px',
              background: `radial-gradient(circle, #FFD70030 0%, transparent 70%)`,
              filter: 'blur(35px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.6,
              animation: 'pulse-cert 12s infinite alternate-reverse',
              '@keyframes pulse-cert': {
                '0%': { opacity: 0.4, transform: 'scale(1) translateX(0)' },
                '50%': { opacity: 0.7, transform: 'scale(1.1) translateX(15px)' },
                '100%': { opacity: 0.4, transform: 'scale(1) translateX(0)' },
              },
            }}
          />
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
            Professional Certifications
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    backgroundColor: 'rgba(18, 18, 18, 0.6)',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${theme.palette.primary.main}90`,
                      '&::before': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                      '&::after': {
                        opacity: 0.8,
                        height: '100%',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                      opacity: 0.7,
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}80, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.5s ease-in-out, height 0.5s ease-in-out',
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {cert.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        ml: 2,
                      }}
                    >
                      {cert.title}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {cert.issuer}
                    </Typography>
                    <Chip
                      label={cert.date}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 200, 83, 0.2)',
                        color: theme.palette.primary.main,
                        fontFamily: 'Roboto Mono',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      flexGrow: 1,
                    }}
                  >
                    {cert.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements Section */}
        <Box sx={{ position: 'relative' }}>
          {/* Decorative elements for achievements section */}
          {/* Enhanced background effects for achievements section */}
          <Box
            sx={{
              position: 'absolute',
              top: '5%',
              left: '8%',
              width: '120px',
              height: '120px',
              background: `radial-gradient(circle, #FFD70040 0%, transparent 70%)`,
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.7,
              animation: 'float2 12s infinite alternate',
              '@keyframes float2': {
                '0%': { transform: 'translateY(0) rotate(0deg)' },
                '50%': { transform: 'translateY(-15px) rotate(5deg)' },
                '100%': { transform: 'translateY(0) rotate(0deg)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '180px',
              height: '180px',
              background: `radial-gradient(circle, #4CAF5030 0%, transparent 70%)`,
              filter: 'blur(50px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.6,
              animation: 'float3 15s infinite alternate-reverse',
              '@keyframes float3': {
                '0%': { transform: 'translateY(0) rotate(0deg)' },
                '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
                '100%': { transform: 'translateY(0) rotate(0deg)' },
              },
            }}
          />
          {/* Additional glowing elements for achievements */}
          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              right: '25%',
              width: '100px',
              height: '100px',
              background: `radial-gradient(circle, #FF572235 0%, transparent 70%)`,
              filter: 'blur(30px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.6,
              animation: 'pulse-orange 10s infinite alternate',
              '@keyframes pulse-orange': {
                '0%': { opacity: 0.4, transform: 'scale(1) rotate(0deg)' },
                '50%': { opacity: 0.7, transform: 'scale(1.3) rotate(-5deg)' },
                '100%': { opacity: 0.4, transform: 'scale(1) rotate(0deg)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '40%',
              left: '30%',
              width: '130px',
              height: '130px',
              background: `radial-gradient(circle, #2196f335 0%, transparent 70%)`,
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.5,
              animation: 'pulse-blue 13s infinite alternate-reverse',
              '@keyframes pulse-blue': {
                '0%': { opacity: 0.3, transform: 'scale(1) translateY(0)' },
                '50%': { opacity: 0.6, transform: 'scale(1.2) translateY(-10px)' },
                '100%': { opacity: 0.3, transform: 'scale(1) translateY(0)' },
              },
            }}
          />
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
            Notable Achievements
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    backgroundColor: 'rgba(18, 18, 18, 0.6)',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${achievement.color}90`,
                      '&::before': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                      '&::after': {
                        opacity: 0.8,
                        height: '100%',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                      opacity: 0.7,
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: `linear-gradient(90deg, transparent, ${achievement.color}80, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.5s ease-in-out, height 0.5s ease-in-out',
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {achievement.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        ml: 2,
                      }}
                    >
                      {achievement.title}
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {achievement.organization}
                    </Typography>
                    <Chip
                      label={achievement.date}
                      size="small"
                      sx={{
                        backgroundColor: `${achievement.color}25`,
                        color: achievement.color,
                        fontFamily: 'Roboto Mono',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      flexGrow: 1,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievements;
