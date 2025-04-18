import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, useTheme, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Journey', to: '/journey' },
    { name: 'Education', to: '/education' },
    { name: 'Experience', to: '/experience' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Responsibilities', to: '/responsibilities' },
    { name: 'Passions', to: '/passions' },
    { name: 'Certificates', to: '/certificates' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com', label: 'GitHub' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#050505',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: 'Roboto Mono',
                fontWeight: 700,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box component="span" sx={{ color: theme.palette.primary.main, mr: 0.5 }}>
                &lt;
              </Box>
              CHIRAG
              <Box component="span" sx={{ color: theme.palette.primary.main, ml: 0.5 }}>
                /&gt;
              </Box>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Quantitative Research Consultant at WorldQuant | Junior at IIT Gandhinagar
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <MuiLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {social.icon}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Roboto Mono',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="nav"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {navItems.map((item, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={item.to}
                  sx={{
                    fontFamily: 'Roboto',
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Roboto Mono',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                color: theme.palette.text.secondary,
                mb: 2,
                lineHeight: 1.8,
              }}
            >
              Subscribe to receive updates on new projects, trading insights, and market analysis.
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >
              <Box
                component="input"
                placeholder="Your email"
                sx={{
                  flex: 1,
                  p: 1.5,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: theme.palette.text.primary,
                  fontFamily: 'Roboto',
                  outline: 'none',
                  '&:focus': {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              />
              <Box
                component="button"
                type="submit"
                sx={{
                  p: 1.5,
                  border: 'none',
                  borderRadius: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontFamily: 'Roboto Mono',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Subscribe
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Roboto',
              color: theme.palette.text.secondary,
            }}
          >
            © {currentYear} Chirag Patel. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Roboto',
              color: theme.palette.text.secondary,
            }}
          >
            Designed with{' '}
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              ❤
            </Box>{' '}
            by Chirag
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
