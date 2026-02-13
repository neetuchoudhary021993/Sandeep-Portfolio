import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface NavbarProps {
  onNavClick: (id: string) => void;
}

export const Navbar = ({ onNavClick }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    handleMenuClose();
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
            onClick={() => handleNavClick('home')}
          >
            Sandeep Kumar
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item, idx) => (
              <Button
                key={`nav-${idx}`}
                color="inherit"
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              {anchorEl ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navItems.map((item, idx) => (
                <MenuItem
                  key={`menu-${idx}`}
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
