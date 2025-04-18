import React from 'react';
import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import profileImage from '../assets/images/profile.png';

const About: React.FC = () => {
  const theme = useTheme();

  const infoCards = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Quantitative Research',
      description: 'Quantitative Research Consultant at WorldQuant with expertise in algorithmic trading strategies and market analysis.',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Academic Excellence',
      description: 'Junior at IIT Gandhinagar with a strong foundation in mathematics, computer science, and financial engineering.',
    },
    {
      icon: <ShowChartIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Professional Certifications',
      description: 'NISM Equity And Derivative Certified and SEBI Investor examination Certified with practical market knowledge.',
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(180deg, #0A0A0A 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Box>
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
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
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto Mono',
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Chirag Patel
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
            Junior at IIT Gandhinagar and Quantitative Research Consultant at WorldQuant. I combine my academic knowledge
            with practical market expertise to develop innovative algorithmic trading strategies. With certifications in
            Equity, Derivatives, and SEBI regulations, I bring a comprehensive understanding of financial markets to my work.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8, mt: 10 }}>
          {infoCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2,
                  backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{card.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {card.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 4,
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
            My Journey
          </Typography>

          {/* Timeline */}
          <Box sx={{ position: 'relative', mt: 8 }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: 20, md: '50%' },
                width: 4,
                backgroundColor: 'rgba(0, 200, 83, 0.2)',
                transform: { xs: 'none', md: 'translateX(-50%)' },
                zIndex: 0,
              }}
            />

            {/* Timeline items */}
            <Grid container spacing={4}>
              {/* IIT Gandhinagar */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    position: 'relative',
                    mb: 8,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pr: { xs: 0, md: 4 },
                      textAlign: { xs: 'left', md: 'right' },
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      IIT Gandhinagar
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      2020 - Present
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                      }}
                    >
                      My journey began at IIT Gandhinagar, where I developed a passion for applying mathematical principles to financial markets.
                      As a student of mathematics and computer science, I was fascinated by how quantitative models could predict market behavior
                      and identify profitable trading opportunities.
                    </Typography>
                  </Box>

                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 20, md: '50%' },
                      top: 0,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.background.paper,
                      border: `4px solid ${theme.palette.primary.main}`,
                      transform: { xs: 'translateX(-50%)', md: 'translate(-50%, 0)' },
                      zIndex: 1,
                      boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
                    }}
                  />

                  {/* Image on the right for desktop, below text for mobile */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pl: { xs: 0, md: 4 },
                      mt: { xs: 3, md: 0 },
                      ml: { xs: 5, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        height: 250,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.3)',
                          zIndex: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                          textAlign: 'center',
                          width: '100%',
                          px: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'Roboto Mono',
                            fontWeight: 600,
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          }}
                        >
                          IIT Gandhinagar
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'Roboto',
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          }}
                        >
                          Building a strong foundation in mathematics and computer science
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#1E1E1E',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontFamily: 'Roboto Mono',
                            color: theme.palette.primary.main,
                          }}
                        >
                          IIT Gandhinagar
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* WorldQuant */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    position: 'relative',
                    mb: 8,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pr: { xs: 0, md: 4 },
                      textAlign: { xs: 'left', md: 'right' },
                      order: { xs: 1, md: 2 },
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      WorldQuant
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      2022 - Present
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                      }}
                    >
                      This passion led me to WorldQuant, where I now work as a Quantitative Research Consultant. I develop and backtest
                      algorithmic trading strategies using statistical methods and machine learning techniques. My work involves analyzing
                      large datasets, identifying patterns, and creating models that can generate consistent returns across different market conditions.
                    </Typography>
                  </Box>

                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 20, md: '50%' },
                      top: 0,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.background.paper,
                      border: `4px solid ${theme.palette.primary.main}`,
                      transform: { xs: 'translateX(-50%)', md: 'translate(-50%, 0)' },
                      zIndex: 1,
                      boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
                    }}
                  />

                  {/* Image on the left for desktop, below text for mobile */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pl: { xs: 0, md: 0 },
                      pr: { xs: 0, md: 4 },
                      mt: { xs: 3, md: 0 },
                      ml: { xs: 5, md: 0 },
                      order: { xs: 2, md: 1 },
                    }}
                  >
                    <Box
                      sx={{
                        height: 250,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.3)',
                          zIndex: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                          textAlign: 'center',
                          width: '100%',
                          px: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'Roboto Mono',
                            fontWeight: 600,
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          }}
                        >
                          WorldQuant
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'Roboto',
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          }}
                        >
                          Developing quantitative trading strategies and financial models
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#1E1E1E',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontFamily: 'Roboto Mono',
                            color: theme.palette.primary.main,
                          }}
                        >
                          WorldQuant
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Certifications */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pr: { xs: 0, md: 4 },
                      textAlign: { xs: 'left', md: 'right' },
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Professional Certifications
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      2021 - 2022
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                      }}
                    >
                      To strengthen my knowledge in financial markets, I obtained the NISM Equity And Derivative Certification and
                      SEBI Investor examination Certification. These certifications have provided me with comprehensive knowledge
                      of market regulations, trading practices, and risk management techniques.
                    </Typography>
                  </Box>

                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 20, md: '50%' },
                      top: 0,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.background.paper,
                      border: `4px solid ${theme.palette.primary.main}`,
                      transform: { xs: 'translateX(-50%)', md: 'translate(-50%, 0)' },
                      zIndex: 1,
                      boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
                    }}
                  />

                  {/* Certifications on the right */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      pl: { xs: 0, md: 4 },
                      mt: { xs: 3, md: 0 },
                      ml: { xs: 5, md: 0 },
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        flex: 1,
                        textAlign: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3), 0 0 10px ${theme.palette.primary.main}40`,
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        NISM
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        Equity & Derivatives Certified
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        p: 3,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        flex: 1,
                        textAlign: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3), 0 0 10px ${theme.palette.primary.main}40`,
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        SEBI
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          color: theme.palette.text.secondary,
                        }}
                      >
                        Investor Examination Certified
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
