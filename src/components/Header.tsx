import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const pages = ['Home', 'Services', 'About Us', 'Doctors', 'Testimonials', 'Contact'];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="secondary" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecoration: 'none',
            }}
          >
            DENT<span style={{ color: theme.palette.text.primary }}>SMILE</span>
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile logo */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecoration: 'none',
            }}
          >
            DENT<span style={{ color: theme.palette.text.primary }}>SMILE</span>
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'text.primary', display: 'block', mx: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Contact button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<LocalPhoneIcon />}
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                fontWeight: 600
              }}
            >
              Book Appointment
            </Button>
            {isMobile && (
              <IconButton color="primary" aria-label="call us">
                <LocalPhoneIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 