import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import financeImage from '../assets/images/finance.jpg';
import cricketImage from '../assets/images/cricket.jpg';
import frisbeeImage from '../assets/images/frisbee.jpg';
import spiritualImage from '../assets/images/spiritual.jpg';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsIcon from '@mui/icons-material/Sports';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ExploreIcon from '@mui/icons-material/Explore';

const Passions: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Passions data
  const passions = [
    {
      title: 'Finance & Trading',
      icon: <ShowChartIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description: "Passionate about quantitative finance, algorithmic trading, and market analysis. I have deep knowledge of stock markets (Nifty 50, Bank Nifty, Fin Nifty), Forex Trading (Currency Market), and commodities like Gold. I ranked in the top 150 in Stockrush, an online trading competition at IIT Gandhinagar.",
      image: financeImage,
      color: '#00c853',
    },
    {
      title: 'Cricket',
      icon: <SportsCricketIcon sx={{ fontSize: 50, color: '#2196f3' }} />,
      description: "Cricket has been my favorite sport since childhood. I've played regularly throughout school and continue to enjoy both playing and watching the game. The strategic aspects of cricket particularly fascinate me, and I actively participate in cricket events at IIT Gandhinagar.",
      image: cricketImage,
      color: '#2196f3',
    },
    {
      title: 'Frisbee',
      icon: <SportsIcon sx={{ fontSize: 50, color: '#ff9800' }} />,
      description: "Discovered frisbee during my time at IIT Gandhinagar and quickly became passionate about it. I won first position in the Frisbee tournament of Intramurals 2.0 and earned a Gold medal in Frisbee in the General Championship, combining teamwork with athletic skill.",
      image: frisbeeImage,
      color: '#ff9800',
    },
    {
      title: 'Tour & Travel',
      icon: <ExploreIcon sx={{ fontSize: 50, color: '#e91e63' }} />,
      description: "I love exploring new places, experiencing different cultures, and creating memories through travel. From scenic landscapes to historical sites, traveling broadens my perspective and provides a refreshing break from routine. I enjoy planning trips, discovering hidden gems, and documenting my journeys through photography.",
      image: 'tour.jpg',
      color: '#e91e63',
    },
    {
      title: 'Spiritual Knowledge',
      icon: <SelfImprovementIcon sx={{ fontSize: 50, color: '#9c27b0' }} />,
      description: "I find balance through exploring spiritual knowledge and practices. This interest helps me maintain perspective, reduce stress, and approach challenges with a calm and focused mindset.",
      image: spiritualImage,
      color: '#9c27b0',
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
            WHAT DRIVES ME
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
            My Passions
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
              Beyond my professional work, I am passionate about several areas that keep me balanced and energized.
              From the analytical world of finance to the physical engagement of sports and the inner peace of spiritual knowledge,
              these interests shape who I am and how I approach life challenges.
            </Typography>
          </Box>
        </Box>

        {/* Passions Grid */}
        <Grid container spacing={4}>
          {passions.map((passion, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${passion.color}60`,
                    borderColor: passion.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${passion.color}, transparent)`,
                    opacity: 0.7,
                  },
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: `${passion.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${passion.color}50`,
                        boxShadow: `0 0 15px ${passion.color}30`,
                      }}
                    >
                      {passion.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: passion.color,
                      }}
                    >
                      {passion.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: '1.05rem',
                    }}
                  >
                    {passion.description}
                  </Typography>

                  {/* Image */}
                  <Box
                    sx={{
                      height: 200,
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: `1px solid ${passion.color}30`,
                    }}
                  >
                    <Box
                      component="img"
                      src={typeof passion.image === 'string' ? passion.image : passion.image}
                      alt={passion.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
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

export default Passions;
