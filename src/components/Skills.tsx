import React from 'react';
import { Box, Typography, Container, Grid, useTheme, Paper, Divider } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsIcon from '@mui/icons-material/Sports';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

const Skills: React.FC = () => {
  const theme = useTheme();

  // Sports Skills
  const sportsSkills = [
    {
      title: 'Cricket',
      description: 'Played cricket throughout school and continue to enjoy both playing and watching the game. Actively participate in cricket events at IIT Gandhinagar.',
      icon: <SportsCricketIcon sx={{ fontSize: 40 }} />,
      color: '#2196f3',
    },
    {
      title: 'Frisbee',
      description: 'Won first position in the Frisbee tournament of Intramurals 2.0 and earned a Gold medal in Frisbee in the General Championship.',
      icon: <SportsIcon sx={{ fontSize: 40 }} />,
      color: '#ff9800',
    },
  ];

  // Technical Skills
  const technicalSkills = [
    {
      title: 'Web Development with AI',
      description: 'Building modern web applications using AI-assisted development tools and frameworks.',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      color: '#00c853',
    },
    {
      title: 'Algorithmic Trading',
      description: 'Developing and implementing quantitative trading strategies using mathematical models and algorithms.',
      icon: <CandlestickChartIcon sx={{ fontSize: 40 }} />,
      color: '#9c27b0',
    },
    {
      title: 'Competitive Programming',
      description: 'Basic knowledge of algorithms, data structures, and problem-solving techniques for competitive programming.',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: '#f44336',
    },
    {
      title: 'Machine Learning',
      description: 'Fundamentals of machine learning algorithms, models, and applications in data analysis.',
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      color: '#2196f3',
    },
    {
      title: 'Market Analysis',
      description: 'Analyzing financial markets using technical and fundamental analysis techniques.',
      icon: <BarChartIcon sx={{ fontSize: 40 }} />,
      color: '#ff9800',
    },
  ];

  // Trading Skills
  const tradingSkills = [
    {
      title: 'Indian Stock Market',
      description: 'Deep knowledge of Indian stock markets including Nifty 50, Bank Nifty, and Fin Nifty.',
      icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
      color: '#00c853',
    },
    {
      title: 'Forex Trading',
      description: 'Experience in foreign currency market trading and analysis.',
      icon: <CurrencyExchangeIcon sx={{ fontSize: 40 }} />,
      color: '#2196f3',
    },
    {
      title: 'Crypto Trading',
      description: 'Understanding of cryptocurrency markets, trading strategies, and blockchain technology.',
      icon: <CurrencyBitcoinIcon sx={{ fontSize: 40 }} />,
      color: '#9c27b0',
    },
  ];

  // Other Skills
  const otherSkills = [
    {
      title: 'Spiritual Science',
      description: 'Knowledge of spiritual principles and practices that help maintain perspective and inner balance.',
      icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
      color: '#9c27b0',
    },
    {
      title: 'Psychological Knowledge',
      description: 'Understanding of human behavior, cognitive processes, and emotional intelligence.',
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      color: '#f44336',
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
            MY EXPERTISE
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
            Skills & Abilities
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
              My diverse skill set spans technical expertise, trading knowledge, sports achievements, and personal development.
              These complementary abilities allow me to approach challenges from multiple perspectives.
            </Typography>
          </Box>
        </Box>

        {/* Sports Skills */}
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
          Sports Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {sportsSkills.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${skill.color}60`,
                    borderColor: skill.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
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
                        backgroundColor: `${skill.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${skill.color}50`,
                        boxShadow: `0 0 15px ${skill.color}30`,
                      }}
                    >
                      <Box sx={{ color: skill.color }}>{skill.icon}</Box>
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: skill.color,
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {skill.description}
                  </Typography>

                  <Divider sx={{ my: 2, borderColor: `${skill.color}30` }} />

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
                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Technical Skills */}
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
          Technical Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {technicalSkills.map((skill, index) => (
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${skill.color}60`,
                    borderColor: skill.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
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
                        backgroundColor: `${skill.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${skill.color}50`,
                        boxShadow: `0 0 15px ${skill.color}30`,
                      }}
                    >
                      <Box sx={{ color: skill.color }}>{skill.icon}</Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: skill.color,
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {skill.description}
                  </Typography>

                  <Divider sx={{ my: 2, borderColor: `${skill.color}30` }} />

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
                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Trading Skills */}
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
          Trading Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {tradingSkills.map((skill, index) => (
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${skill.color}60`,
                    borderColor: skill.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
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
                        backgroundColor: `${skill.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${skill.color}50`,
                        boxShadow: `0 0 15px ${skill.color}30`,
                      }}
                    >
                      <Box sx={{ color: skill.color }}>{skill.icon}</Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: skill.color,
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {skill.description}
                  </Typography>

                  <Divider sx={{ my: 2, borderColor: `${skill.color}30` }} />

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
                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Other Skills */}
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
          Personal Development
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {otherSkills.map((skill, index) => (
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${skill.color}60`,
                    borderColor: skill.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
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
                        backgroundColor: `${skill.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${skill.color}50`,
                        boxShadow: `0 0 15px ${skill.color}30`,
                      }}
                    >
                      <Box sx={{ color: skill.color }}>{skill.icon}</Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        color: skill.color,
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {skill.description}
                  </Typography>

                  <Divider sx={{ my: 2, borderColor: `${skill.color}30` }} />

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
                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
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

export default Skills;
