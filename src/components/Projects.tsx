import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tabs,
  Tab
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import BarChartIcon from '@mui/icons-material/BarChart';

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

const Projects: React.FC = () => {
  const theme = useTheme();
  const [category, setCategory] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Real projects based on Chirag's CV
  const projects: Project[] = [
    {
      id: 1,
      title: 'Hand-Gloves',
      description: "Made hand gloves that can recognize the gestures of mute people, to let them express feelings under a budget of just 15K.",
      image: 'placeholder',
      category: 'development',
      technologies: ['Signal Processing', 'Machine Learning', 'Hardware'],
      details: "Made hand gloves that can recognize the gestures of mute people, to let them express feelings under a budget of just 15K. Applied knowledge of signal processing and Machine Learning for appropriate labels for identified gestures. This project was completed under the guidance of Prof. Udit Bhatia at IIT Gandhinagar as a course project during June-July 2023."
    },
    {
      id: 2,
      title: 'Data Narrative of Tennis Major Tournament',
      description: "Analysed the data of Tennis Major Tournament USA for analysis of players' performance under different external conditions.",
      image: 'placeholder',
      category: 'data',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Pandas', 'scikit-learn', 'SciPy'],
      details: "Analysed the data of Tennis Major Tournament USA for analysis of players' performance under different external conditions. Visualized data points, curves, and graphs using NumPy, Matplotlib, Pandas, scikit-learn, and SciPy. This project was completed under the guidance of Prof. Shanmuganathan Raman at IIT Gandhinagar as a course project during March-April 2023."
    },
    {
      id: 3,
      title: 'Financial Portfolio and Investment Strategy',
      description: "Developed ordinary differential equations based on EMA (20 Days) of trailing stock price and Simpson's 1/3 rule.",
      image: 'placeholder',
      category: 'trading',
      technologies: ['Python', 'NumPy', 'Pandas', 'Differential Equations', 'Newton Raphson Method'],
      details: "Developed ordinary differential equations based on EMA (20 Days) of trailing stock price and Simpson's 1/3 rule. Got comprehensive insights into short-term trends using EMA and tracked historical performance using Simpson's 1/3 rule. Used Newton Raphson method to solve the obtained equation. This project was completed under the guidance of Prof. Akshaa Vatwani at IIT Gandhinagar as a course project during June-September 2023."
    },
    {
      id: 4,
      title: 'Quantitative Trading Strategies',
      description: "Formulated quantitative strategies to trade the S&P 500 and Russell 3000 for maximizing Sharpe and minimizing turnover.",
      image: 'placeholder',
      category: 'trading',
      technologies: ['Fast Expression Language', 'Quantitative Analysis', 'Statistical Methods'],
      details: "As a Research Consultant at Worldquant LLC, formulated quantitative strategies to trade the S&P 500 and Russell 3000 for maximizing Sharpe and minimizing turnover. Derived complex formulas and programmed them in Worldquant's hallmark Fast Expression Language. This work has been ongoing since October 2023."
    },
    {
      id: 5,
      title: 'Stock Trading App Growth Strategy',
      description: "Developed and executed Go To Market / Growth strategy of a stock trading based tech app.",
      image: 'placeholder',
      category: 'development',
      technologies: ['Market Analysis', 'Growth Strategy', 'B2B Tech'],
      details: "As an Intern at Stockz11, developed and executed Go To Market / Growth strategy of a stock trading based tech app. Built excellent proof of work for future growth-marketing role applications in the B2B tech ecosystem. This internship was completed during December 2023 to January 2024."
    },
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'trading':
        return <BarChartIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />;
      case 'data':
        return <DataObjectIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />;
      case 'development':
        return <CodeIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0A0A0A 100%)`,
      }}
    >
      <Box>
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
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
            Projects
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
            A collection of my academic and professional projects spanning finance, data analysis, and development.
            These projects showcase my technical skills, problem-solving abilities, and diverse interests.
          </Typography>
        </Box>

        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 1.5,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <Tab label="All" value="all" />
            <Tab label="Trading & Finance" value="trading" />
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
                  backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {getCategoryIcon(project.category)}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Roboto Mono',
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {project.category === 'trading' ? 'Finance & Trading' :
                     project.category === 'data' ? 'Data Analysis' : 'Development'}
                  </Typography>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Roboto Mono',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      color: theme.palette.text.secondary,
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 200, 83, 0.1)',
                          color: theme.palette.primary.main,
                          fontFamily: 'Roboto Mono',
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    onClick={() => handleOpenDialog(project)}
                    sx={{
                      fontFamily: 'Roboto Mono',
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 200, 83, 0.08)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                  {project.codeUrl && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(0, 200, 83, 0.08)',
                        },
                      }}
                    >
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(0, 200, 83, 0.08)',
                        },
                      }}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 600,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {selectedProject.title}
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    color: theme.palette.text.secondary,
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  {selectedProject.details}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Roboto Mono',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          backgroundColor: 'rgba(0, 200, 83, 0.1)',
                          color: theme.palette.primary.main,
                          fontFamily: 'Roboto Mono',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
                {selectedProject.codeUrl && (
                  <Button
                    startIcon={<GitHubIcon />}
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontFamily: 'Roboto Mono',
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    View Code
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button
                    startIcon={<LaunchIcon />}
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                      fontFamily: 'Roboto Mono',
                    }}
                  >
                    View Demo
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </Box>
  );
};

export default Projects;
