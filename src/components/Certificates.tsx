import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme, Divider } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';

const Certificates: React.FC = () => {
  const theme = useTheme();

  // Certificates data
  const certificatesData = [
    {
      title: 'Gold Certificate at WorldQuant Alphathon',
      description: 'Earned 10,000 points during the competition',
      color: '#FFD700', // Gold color
    },
    {
      title: 'NISM VIII (Equity and Derivatives)',
      description: 'Scored 77.75 out of 100 in the NISM certification exam concerning equity derivatives',
      color: '#2196f3',
    },
    {
      title: 'SEBI Investor Certificate',
      description: 'Bagged 49 out of 50 in the NISM Sebi Investor Certificate Examination',
      color: '#9c27b0',
    },
    {
      title: 'NISM Finance Literacy Certificate',
      description: 'Certified in financial literacy by the National Institute of Securities Markets',
      color: '#00c853',
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
            PROFESSIONAL CREDENTIALS
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
            Certificates & Licenses
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
              I've earned several professional certifications that validate my knowledge and expertise in finance,
              trading, and investment strategies.
            </Typography>
          </Box>
        </Box>

        {/* Certificates Grid */}
        <Grid container spacing={4} justifyContent="center">
          {certificatesData.map((certificate, index) => (
            <Grid item xs={12} sm={6} key={index}>
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${certificate.color}60`,
                    borderColor: certificate.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${certificate.color}, transparent)`,
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
                        backgroundColor: `${certificate.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${certificate.color}50`,
                        boxShadow: `0 0 15px ${certificate.color}30`,
                      }}
                    >
                      {index === 0 ? (
                        <WorkspacePremiumIcon sx={{ fontSize: 30, color: certificate.color }} />
                      ) : (
                        <VerifiedIcon sx={{ fontSize: 30, color: certificate.color }} />
                      )}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: certificate.color,
                      }}
                    >
                      {certificate.title}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2, borderColor: `${certificate.color}30` }} />

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {certificate.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certificates;
