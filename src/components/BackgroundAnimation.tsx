import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

interface BackgroundAnimationProps {
  children: React.ReactNode;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ children }) => {
  // Define animations
  const floatingGlow = keyframes`
    0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
    50% { transform: translateY(-15px) rotate(5deg); opacity: 0.8; }
    100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
  `;

  const shimmer = keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  `;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(0, 200, 83, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
          animation: `${floatingGlow} 15s ease-in-out infinite`,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '35%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(255, 61, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
          animation: `${floatingGlow} 18s ease-in-out infinite reverse`,
          zIndex: 0,
        }
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '150px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 200, 83, 0.7), transparent)',
          backgroundSize: '200% 100%',
          animation: `${shimmer} 8s linear infinite`,
          transform: 'rotate(30deg)',
          zIndex: 1,
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 61, 0, 0.7), transparent)',
          backgroundSize: '200% 100%',
          animation: `${shimmer} 6s linear infinite`,
          transform: 'rotate(-20deg)',
          zIndex: 1,
          opacity: 0.7,
        }}
      />

      {/* Additional decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '25%',
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.7), transparent)',
          backgroundSize: '200% 100%',
          animation: `${shimmer} 10s linear infinite`,
          transform: 'rotate(60deg)',
          zIndex: 1,
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          right: '30%',
          width: '120px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.7), transparent)',
          backgroundSize: '200% 100%',
          animation: `${shimmer} 12s linear infinite`,
          transform: 'rotate(-45deg)',
          zIndex: 1,
          opacity: 0.6,
        }}
      />

      {/* Content */}
      {children}
    </Box>
  );
};

export default BackgroundAnimation;
