import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profile.png';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    '> Initializing quantitative model...',
    '> Loading market data...',
    '> Analyzing patterns...',
    '> Backtesting strategy...',
    `> Alpha: +${Math.floor(Math.random() * 100) / 10}%`
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalText(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, terminalLines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8, // To account for the fixed header
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0A0A0A 100%)`,
      }}
    >
      {/* Animated background elements that look like stock charts */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.1,
        }}
      >
        {/* Green uptrend line */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '10%',
            width: '30%',
            height: '2px',
            background: theme.palette.primary.main,
            transform: 'rotate(30deg)',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: theme.palette.primary.main,
              right: 0,
              top: '-4px',
            },
          }}
        />

        {/* Red downtrend line */}
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '20%',
            width: '25%',
            height: '2px',
            background: theme.palette.secondary.main,
            transform: 'rotate(-25deg)',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: theme.palette.secondary.main,
              left: 0,
              top: '-4px',
            },
          }}
        />

        {/* Candlestick patterns */}
        {[...Array(10)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '4px',
              height: Math.random() * 50 + 20,
              background: Math.random() > 0.5 ? theme.palette.primary.main : theme.palette.secondary.main,
              top: `${Math.random() * 80 + 10}%`,
              left: `${index * 10}%`,
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '4px',
                height: Math.random() * 30 + 10,
                background: 'transparent',
                border: `1px solid ${Math.random() > 0.5 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                top: '-15px',
                left: 0,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '4px',
                height: Math.random() * 30 + 10,
                background: 'transparent',
                border: `1px solid ${Math.random() > 0.5 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                bottom: '-15px',
                left: 0,
              },
            }}
          />
        ))}
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Box sx={{ position: 'relative', mb: 8 }}>
          {/* Background decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '200px',
              height: '200px',
              background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '5%',
              width: '250px',
              height: '250px',
              background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
              filter: 'blur(50px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />

          {/* Main content */}
          <Grid container spacing={0} alignItems="center" justifyContent="center" direction="column">
            {/* Profile Image */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 5, mt: 2 }}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    animation: 'pulse 4s infinite',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -5,
                    left: -5,
                    right: -5,
                    bottom: -5,
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: '50%',
                    opacity: 0.7,
                    animation: 'rotate 10s linear infinite',
                  },
                  '@keyframes pulse': {
                    '0%': { opacity: 0.5 },
                    '50%': { opacity: 0.8 },
                    '100%': { opacity: 0.5 },
                  },
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Chirag Patel"
                  sx={{
                    width: { xs: 220, md: 280 },
                    height: { xs: 220, md: 280 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    border: `4px solid ${theme.palette.background.paper}`,
                    boxShadow: `0 0 20px ${theme.palette.primary.main}80`,
                    zIndex: 2,
                  }}
                />
              </Box>
            </Grid>

            {/* Name and Title */}
            <Grid item xs={12} md={10} sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h6"
                className="glow-text"
                sx={{
                  fontFamily: 'Roboto Mono',
                  color: theme.palette.primary.main,
                  mb: 2,
                  letterSpacing: 1,
                }}
              >
                HELLO, I'M
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  lineHeight: 1.2,
                  textAlign: 'center',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
                }}
              >
                Chirag Patel
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Roboto Mono',
                  color: theme.palette.text.secondary,
                  mb: 3,
                  letterSpacing: 0.5,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Third Year Undergraduate, CSE | IIT Gandhinagar
              </Typography>
            </Grid>

            {/* Personal Details */}
            <Grid item xs={12} md={8} sx={{ mb: 5 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 3,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  p: 3,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 200, 83, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CakeIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Date of Birth</Typography>
                    <Typography variant="body1">August 6, 2004</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 200, 83, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Location</Typography>
                    <Typography variant="body1">Gujarat, India</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 200, 83, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: theme.palette.primary.main }}>☎</Box>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Phone</Typography>
                    <Typography variant="body1">+91 9313692958</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 200, 83, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Email</Typography>
                    <Typography variant="body1">chiragkumar.patel@iitgn.ac.in</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Action Buttons */}
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/projects"
                  className="shine-border"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    fontWeight: 500,
                    px: 3,
                    py: 1.5,
                    borderRadius: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/contact"
                  className="shine-border"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    fontWeight: 500,
                    px: 3,
                    py: 1.5,
                    borderRadius: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Terminal Section */}
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mt: 4 }}>

            {/* Terminal Box */}
            <Box
              sx={{
                position: 'relative',
                height: { xs: '200px', md: '200px' },
                width: '100%',
                maxWidth: '450px',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                background: 'rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px ${theme.palette.primary.main}40`,
              }}
            >
              {/* Terminal-like header */}
              <Box
                sx={{
                  height: '30px',
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                }}
              >
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: theme.palette.error.main }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: theme.palette.warning.main }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: theme.palette.success.main }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    color: theme.palette.text.secondary,
                    ml: 2,
                  }}
                >
                  quant-terminal
                </Typography>
              </Box>

              {/* Terminal content */}
              <Box
                sx={{
                  p: 2,
                  height: 'calc(100% - 30px)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="terminal-content"
              >
                <Box sx={{ flexGrow: 1 }}>
                  {terminalText.map((line, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: line.includes('Alpha') ? theme.palette.primary.main : theme.palette.text.primary,
                        mb: 1,
                        fontWeight: line.includes('Alpha') ? 700 : 400,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                  {currentLine < terminalLines.length && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          color: theme.palette.text.primary,
                        }}
                      >
                        {showCursor ? '█' : ' '}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
