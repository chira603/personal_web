import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme, useMediaQuery, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Journey: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Journey timeline data
  const journeyEvents = [
    {
      year: '2004',
      title: 'Born in Gujarat, India',
      description: 'Born on August 6, 2004, in Gujarat, India to a loving family. My early years were filled with curiosity and joy as I began to explore the world around me.',
      icon: <ChildCareIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2005-2010',
      title: 'Early School Years',
      description: 'Started my educational journey with enthusiasm. Enjoyed numerous family vacations and fun activities during holidays. Began showing strong academic aptitude from an early age.',
      icon: <MenuBookIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2010-2015',
      title: 'Academic Excellence & Sports',
      description: 'Consistently achieved above 95% scores in academics. Developed a passion for cricket and played regularly with friends and in school competitions. Balanced studies with extracurricular activities.',
      icon: <SportsBaseballIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2015',
      title: 'Completed 10th Grade',
      description: 'Graduated from 10th grade with outstanding scores. Made the important decision to pursue JEE Advanced for engineering admission, setting a clear path for my future academic journey.',
      icon: <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2015-2017',
      title: 'JEE Preparation Journey',
      description: 'Dedicated two years to rigorous preparation for JEE Advanced. Despite the challenging preparation schedule, maintained academic excellence in 11th and 12th grades, demonstrating strong time management skills.',
      icon: <MenuBookIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2018',
      title: 'Joined IIT Gandhinagar',
      description: 'Successfully cleared JEE Advanced and secured admission to the prestigious Indian Institute of Technology (IIT) Gandhinagar. Began a new chapter in my life with excitement and determination to excel in engineering.',
      icon: <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2018-2022',
      title: 'College Life & Achievements',
      description: 'Embraced college life fully by participating in various activities. Played frisbee at the college level and contributed to winning the General Championship (GC). Developed interest in quantitative finance while maintaining strong academic performance.',
      icon: <SportsEsportsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2021',
      title: 'First Steps in Quantitative Finance',
      description: 'Began exploring the world of algorithmic trading and quantitative finance. Completed relevant coursework and self-study to build a strong foundation in financial mathematics and programming for trading applications.',
      icon: <WorkIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2022',
      title: 'Joined WorldQuant',
      description: 'Started working as a Quantitative Research Consultant at WorldQuant. Applied my skills to develop and backtest trading algorithms, analyze market data, and create models that can generate consistent returns across different market conditions.',
      icon: <WorkIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: '2022',
      title: 'Professional Certifications',
      description: 'Enhanced my professional credentials by obtaining NISM Equity And Derivative Certification and SEBI Investor examination Certification. These certifications provided valuable knowledge about market regulations and trading practices.',
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      year: 'Present',
      title: 'Continuing Growth',
      description: 'Currently focused on expanding my knowledge in quantitative finance and machine learning applications in trading. Constantly learning new techniques and strategies to improve trading algorithms and stay at the forefront of the industry.',
      icon: <WorkIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
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
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
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
          bottom: '10%',
          right: '5%',
          width: '350px',
          height: '350px',
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
            MY STORY
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
            My Journey
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
              From my childhood days filled with fun, vacations, and academic excellence to becoming a Quantitative Research Consultant at WorldQuant.
              This timeline captures my journey through school years with consistent 95%+ scores, sports achievements in cricket and frisbee,
              JEE Advanced preparation after 10th grade, and my professional growth at IIT Gandhinagar and beyond.
            </Typography>
          </Box>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative', mt: 10 }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: 20, md: '50%' },
              width: 4,
              background: `linear-gradient(to bottom, rgba(0, 200, 83, 0.1), rgba(0, 200, 83, 0.5), rgba(0, 200, 83, 0.1))`,
              transform: { xs: 'none', md: 'translateX(-50%)' },
              zIndex: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: -3,
                right: -3,
                bottom: 0,
                background: `linear-gradient(to bottom, rgba(0, 200, 83, 0), rgba(0, 200, 83, 0.2), rgba(0, 200, 83, 0))`,
                filter: 'blur(5px)',
              },
            }}
          />

          {/* Timeline events */}
          {journeyEvents.map((event, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: 10,
                '&:last-child': {
                  mb: 0,
                },
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 20, md: '50%' },
                  top: 0,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.background.paper,
                  border: `4px solid ${theme.palette.primary.main}`,
                  transform: { xs: 'translateX(-50%)', md: 'translate(-50%, 0)' },
                  zIndex: 1,
                  boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    right: -8,
                    bottom: -8,
                    borderRadius: '50%',
                    border: `2px solid ${theme.palette.primary.main}40`,
                    animation: 'pulse 2s infinite',
                  },
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(0.8)', opacity: 0.8 },
                    '50%': { transform: 'scale(1.2)', opacity: 0 },
                    '100%': { transform: 'scale(0.8)', opacity: 0 },
                  },
                }}
              />

              <Grid container spacing={4}>
                {/* Year and Title - Left side on desktop, top on mobile */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                    pl: { xs: 6, md: index % 2 === 0 ? 0 : 4 },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    order: { xs: 1, md: index % 2 === 0 ? 1 : 2 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' }, mb: 2, gap: 2 }}>
                    {index % 2 !== 0 && !isMobile && (
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                        {event.icon}
                      </Box>
                    )}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {event.year}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 600,
                        }}
                      >
                        {event.title}
                      </Typography>
                    </Box>
                    {index % 2 === 0 && !isMobile && (
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
                        {event.icon}
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderColor: `${theme.palette.primary.main}50`,
                        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2), 0 0 10px ${theme.palette.primary.main}30`,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                        fontSize: '1.05rem',
                      }}
                    >
                      {event.description}
                    </Typography>
                  </Box>
                </Grid>

                {/* Image - Right side on desktop, bottom on mobile */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    pl: { xs: 6, md: index % 2 === 0 ? 4 : 0 },
                    pr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    order: { xs: 2, md: index % 2 === 0 ? 2 : 1 },
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: 220,
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      backgroundColor: 'rgba(18, 18, 18, 0.6)',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.4s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${theme.palette.primary.main}60`,
                        borderColor: theme.palette.primary.main,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
                        opacity: 0.7,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        p: 3,
                        textAlign: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          mb: 3,
                          width: 80,
                          height: 80,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 200, 83, 0.1)',
                          border: `1px dashed ${theme.palette.primary.main}50`,
                          boxShadow: `0 0 15px ${theme.palette.primary.main}30`,
                        }}
                      >
                        <Box sx={{ fontSize: 40, color: theme.palette.primary.main }}>
                          {event.icon}
                        </Box>
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {event.year}
                      </Typography>

                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {event.title}
                      </Typography>

                      <Box
                        sx={{
                          mt: 1,
                          width: '40px',
                          height: '4px',
                          background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
                          borderRadius: '2px',
                        }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Journey;
