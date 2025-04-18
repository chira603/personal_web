import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Responsibilities: React.FC = () => {
  const theme = useTheme();

  // Responsibilities data
  const responsibilitiesData = [
    {
      title: 'Marketing Executive',
      organization: 'Blithchron\'23, annual cultural fest, IIT Gandhinagar',
      period: 'February 2022',
      description: [
        'Collaborated with team of 12 students to brain storm marketing strategies and crowd-pulling activities to for Blithchron\'23.',
        'Demonstrated responsibility by managing budgets, meeting deadlines, and maintaining professionalism throughout the event.'
      ],
      color: theme.palette.primary.main,
    },
    {
      title: 'Hospitality Coordinator',
      organization: 'Inter IIT Sports Meet',
      period: 'August - December 2023',
      description: [
        'Successfully managed logistics, including accommodation, transportation, and meals for participants and guests.'
      ],
      color: '#2196f3',
    },
    {
      title: 'Organizing Member',
      organization: 'General Championship, IIT Gandhinagar',
      period: 'March - April 2025',
      description: [
        'Responsible for planning and coordinating sports events and competitions as part of the General Championship.',
        'Managing team registrations, scheduling, and ensuring smooth execution of events.'
      ],
      color: '#9c27b0',
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
          top: '15%',
          left: '10%',
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
          right: '5%',
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
            LEADERSHIP ROLES
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
            Positions of Responsibility
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
              Beyond academics, I've taken on leadership roles that have helped me develop organizational,
              communication, and management skills while contributing to the campus community.
            </Typography>
          </Box>
        </Box>

        {/* Responsibilities Cards */}
        <Grid container spacing={4} justifyContent="center">
          {responsibilitiesData.map((responsibility, index) => (
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
                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${responsibility.color}60`,
                    borderColor: responsibility.color,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(to right, transparent, ${responsibility.color}, transparent)`,
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
                        backgroundColor: `${responsibility.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        border: `1px dashed ${responsibility.color}50`,
                        boxShadow: `0 0 15px ${responsibility.color}30`,
                      }}
                    >
                      {index === 0 ? (
                        <GroupsIcon sx={{ fontSize: 30, color: responsibility.color }} />
                      ) : (
                        <EventIcon sx={{ fontSize: 30, color: responsibility.color }} />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 600,
                          color: responsibility.color,
                        }}
                      >
                        {responsibility.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 500,
                          fontSize: '1rem',
                        }}
                      >
                        {responsibility.organization}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CalendarTodayIcon sx={{ fontSize: 20, color: theme.palette.text.secondary, mr: 1 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {responsibility.period}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2, borderColor: `${responsibility.color}30` }} />

                  <List sx={{ py: 0 }}>
                    {responsibility.description.map((item, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <ArrowRightIcon sx={{ color: responsibility.color }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: 'Roboto',
                                color: theme.palette.text.secondary,
                                lineHeight: 1.6,
                              }}
                            >
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Responsibilities;
