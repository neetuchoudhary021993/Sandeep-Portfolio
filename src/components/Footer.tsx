import { Box, Container, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          © 2026 Sandeep Kumar. All rights reserved. Built with React & Material-UI
        </Typography>
      </Container>
    </Box>
  );
};
