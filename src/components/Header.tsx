import React, { useState, useEffect } from 'react';
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
  Slide,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' },
];

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find the section that is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileOpen) setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'background.default', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: 'Roboto Mono',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box component="span" sx={{ color: 'primary.main', mr: 0.5 }}>&lt;</Box>
          TRADER
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
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              mb: 1,
              borderLeft: item.id === activeSection ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
              backgroundColor: item.id === activeSection ? 'rgba(0, 200, 83, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(0, 200, 83, 0.1)',
              }
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontFamily: 'Roboto Mono',
                fontWeight: item.id === activeSection ? 700 : 500,
                color: item.id === activeSection ? 'primary.main' : 'text.primary'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(18, 18, 18, 0.8)'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: { xs: 56, md: 64 } }}>
          <Typography
            variant="h6"
            component="div"
            onClick={() => scrollToSection('home')}
            sx={{
              fontFamily: 'Roboto Mono',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: { xs: '1rem', md: '1.25rem' }
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
            TRADER
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
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  mx: { md: 0.5, lg: 1 },
                  px: { md: 1.5, lg: 2 },
                  fontFamily: 'Roboto Mono',
                  fontWeight: item.id === activeSection ? 700 : 500,
                  color: item.id === activeSection ? 'primary.main' : 'inherit',
                  position: 'relative',
                  '&::after': item.id === activeSection ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30%',
                    height: '3px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '2px'
                  } : {},
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(0, 200, 83, 0.08)'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

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
    </AppBar>
    </HideOnScroll>
  );
};

export default Header;
