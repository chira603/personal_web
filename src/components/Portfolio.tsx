import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  details: string;
}

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const [category, setCategory] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Projects based on Chirag's background
  const projects: Project[] = [
    {
      id: 1,
      title: 'Quantitative Trading Model',
      description: 'A statistical arbitrage model for equity markets using machine learning techniques.',
      image: 'placeholder',
      category: 'trading',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
      demoUrl: '#',
      codeUrl: '#',
      details: 'Developed a statistical arbitrage model that identifies mispriced securities in equity markets. The model uses machine learning algorithms to detect patterns and anomalies in price movements. Implemented rigorous backtesting framework to validate performance across different market conditions with risk management constraints.'
    },
    {
      id: 2,
      title: 'Market Data Analysis Platform',
      description: 'A comprehensive platform for analyzing financial market data and visualizing patterns.',
      image: 'placeholder',
      category: 'data',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      demoUrl: '#',
      codeUrl: '#',
      details: 'Created a data analysis platform that processes and visualizes financial market data. The platform includes tools for time series analysis, correlation studies, and anomaly detection. It provides interactive visualizations that help identify trading opportunities and market inefficiencies.'
    },
    {
      id: 3,
      title: 'Algorithmic Trading Strategy',
      description: 'A momentum-based trading strategy with adaptive parameters for changing market conditions.',
      image: 'placeholder',
      category: 'trading',
      technologies: ['Python', 'NumPy', 'Pandas', 'Statsmodels'],
      demoUrl: '#',
      codeUrl: '#',
      details: 'Designed and implemented a momentum-based trading strategy that adapts to changing market conditions. The algorithm uses statistical methods to identify trends and adjust position sizing based on volatility. Incorporated risk management techniques to limit drawdowns during adverse market conditions.'
    },
    {
      id: 4,
      title: 'Financial Data API Integration',
      description: 'A library for seamless integration with various financial data providers and exchanges.',
      image: 'placeholder',
      category: 'development',
      technologies: ['Python', 'RESTful APIs', 'JSON', 'WebSockets'],
      codeUrl: '#',
      details: 'Developed a comprehensive library that integrates with multiple financial data providers and exchanges. The library standardizes data formats and provides a unified interface for accessing market data. It includes robust error handling and rate limiting features to ensure reliable data collection.'
    },
    {
      id: 5,
      title: 'Portfolio Optimization Tool',
      description: 'A tool for optimizing investment portfolios using modern portfolio theory and machine learning.',
      image: 'placeholder',
      category: 'trading',
      technologies: ['Python', 'SciPy', 'Pandas', 'Matplotlib'],
      demoUrl: '#',
      codeUrl: '#',
      details: 'Created a portfolio optimization tool that uses modern portfolio theory and machine learning techniques to construct efficient portfolios. The tool allows users to specify risk constraints and return objectives. It includes visualization components to help understand risk-return tradeoffs and portfolio composition.'
    },
    {
      id: 6,
      title: 'Market Regime Detection System',
      description: 'A system that identifies different market regimes using unsupervised learning techniques.',
      image: 'placeholder',
      category: 'data',
      technologies: ['Python', 'Scikit-learn', 'Clustering Algorithms', 'Pandas'],
      demoUrl: '#',
      details: 'Developed a market regime detection system that uses unsupervised learning to identify different market states. The system analyzes multiple factors including volatility, correlation, and trend strength to classify market conditions. This information is used to adapt trading strategies to current market dynamics.'
    },
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Generate a placeholder gradient based on project id
  const getPlaceholderStyle = (id: number) => {
    const colors = [
      'linear-gradient(135deg, #00C853 0%, #009624 100%)',
      'linear-gradient(135deg, #2196F3 0%, #0069C0 100%)',
      'linear-gradient(135deg, #6200EA 0%, #3700B3 100%)',
      'linear-gradient(135deg, #FF6D00 0%, #C43C00 100%)',
      'linear-gradient(135deg, #00BFA5 0%, #008E76 100%)',
      'linear-gradient(135deg, #F50057 0%, #C51162 100%)',
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0A0A0A 100%)`,
      }}
    >
      <Box>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto Mono',
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            MY WORK
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Recent Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto',
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Here are some of my recent projects in trading systems, financial data analysis,
            and market visualization tools.
          </Typography>

          <Tabs
            value={category}
            onChange={handleCategoryChange}
            centered
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
              },
              '& .MuiTab-root': {
                fontFamily: 'Roboto Mono',
                fontWeight: 500,
                color: theme.palette.text.secondary,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Tab label="All" value="all" />
            <Tab label="Quantitative Models" value="trading" />
            <Tab label="Data Analysis" value="data" />
            <Tab label="Development" value="development" />
          </Tabs>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 30px rgba(0, 200, 83, 0.1)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: getPlaceholderStyle(project.id),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Roboto Mono',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontFamily: 'Roboto',
                      textAlign: 'center',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, justifyContent: 'center' }}>
                    {project.technologies.map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          backgroundColor: 'rgba(0, 200, 83, 0.1)',
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          fontFamily: 'Roboto Mono',
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => handleOpenDialog(project)}
                    sx={{
                      fontFamily: 'Roboto Mono',
                      mt: 1,
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            backgroundImage: 'none',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                fontFamily: 'Roboto Mono',
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {selectedProject.title}
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box
                sx={{
                  height: 250,
                  background: getPlaceholderStyle(selectedProject.id),
                  borderRadius: 1,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    px: 2,
                  }}
                >
                  {selectedProject.title}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto',
                  mb: 3,
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}
              >
                {selectedProject.details}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 600,
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3, justifyContent: 'center' }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      backgroundColor: 'rgba(0, 200, 83, 0.1)',
                      color: theme.palette.primary.main,
                      fontSize: '0.875rem',
                      fontFamily: 'Roboto Mono',
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
              {selectedProject.demoUrl && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LaunchIcon />}
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: 'Roboto Mono',
                    mr: 1,
                  }}
                >
                  Live Demo
                </Button>
              )}
              {selectedProject.codeUrl && (
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: 'Roboto Mono',
                  }}
                >
                  View Code
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Portfolio;
