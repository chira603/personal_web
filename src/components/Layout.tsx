import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Responsibilities', path: '/responsibilities' },
  { name: 'Passions', path: '/passions' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'background.default', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontFamily: 'Roboto Mono',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'text.primary'
          }}
        >
          <Box component="span" sx={{ color: 'primary.main', mr: 0.5 }}>&lt;</Box>
          CHIRAG
          <Box component="span" sx={{ color: 'primary.main', ml: 0.5 }}>/&gt;</Box>
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              mb: 1,
              borderLeft: location.pathname === item.path ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
              backgroundColor: location.pathname === item.path ? 'rgba(0, 200, 83, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(0, 200, 83, 0.1)',
              }
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontFamily: 'Roboto Mono',
                fontWeight: location.pathname === item.path ? 700 : 500,
                color: location.pathname === item.path ? 'primary.main' : 'text.primary'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 200, 83, 0.2)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
        borderBottom: '1px solid rgba(0, 200, 83, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 200, 83, 0.5), transparent)',
          zIndex: -1,
        }
      }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', height: { xs: 56, md: 64 }, px: { xs: 0 } }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Roboto Mono',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: { xs: '1rem', md: '1.25rem' },
                textDecoration: 'none',
                color: 'text.primary'
              }}
            >
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  mr: 0.5,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                &lt;
              </Box>
              CHIRAG
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  ml: 0.5
                }}
              >
                /&gt;
              </Box>
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{
                      mx: { md: 0.5, lg: 1 },
                      px: { md: 1.5, lg: 2 },
                      py: 1.5,
                      fontFamily: 'Roboto Mono',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                      color: location.pathname === item.path ? 'primary.main' : 'inherit',
                      position: 'relative',
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      '&::after': location.pathname === item.path ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 5,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '50%',
                        height: '3px',
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(0, 200, 83, 0.5)'
                      } : {},
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0, 200, 83, 0.08)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{
        flexGrow: 1,
        pt: { xs: 7, md: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 30% 20%, rgba(0, 200, 83, 0.03) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255, 61, 0, 0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }
      }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
