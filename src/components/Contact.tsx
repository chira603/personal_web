import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);

    // Show success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      title: 'Email',
      value: 'chiragkumar.patel@iitgn.ac.in',
      link: 'mailto:chirag.patel@iitgn.ac.in',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      title: 'LinkedIn',
      value: 'Chirag Patel',
      link: 'https://www.linkedin.com/in/chirag-patel-9797b7251/',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      title: 'Location',
      value: 'Gandhinagar, Gujarat, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/chirag-patel-9797b7251/',
      name: 'LinkedIn',
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/chira603',
      name: 'GitHub',
    },
    
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: '#0A0A0A',
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
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Contact Me
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
            This is my professional contact information.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 600,
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 3,
                    }}
                  >
                    <Box sx={{ mr: 2 }}>{info.icon}</Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Roboto Mono',
                          color: theme.palette.text.secondary,
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          variant="body1"
                          component="a"
                          href={info.link}
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: 500,
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                            '&:hover': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {info.value}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: 500,
                          }}
                        >
                          {info.value}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 600,
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Follow Me
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    sx={{
                      color: theme.palette.text.primary,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Roboto Mono',
                  fontWeight: 600,
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Send Me a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                      InputProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                      InputProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                      InputProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      InputLabelProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                      InputProps={{
                        sx: { fontFamily: 'Roboto' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        fontFamily: 'Roboto Mono',
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
