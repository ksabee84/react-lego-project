import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './menuelement.css';

const pages = [
  { name: 'Lego Sets', 
    link: '/legos',
  },
  { name: 'Contact', 
    link: '/contact',
  },
  {
    name: 'Admin',
    link: '/admin',
  } 
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id='appBar' position="fixed" sx={{ backgroundImage: 'linear-gradient(to right, rgba(3,138,255,1), rgba(255,0,0,1))' }}>
      <Container id='appBarContainer' maxWidth="xl">
        <Toolbar id='toolbar' disableGutters>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Bungee Spice',
              fontWeight: 700,
              fontSize: '2rem',
              letterSpacing: '.3rem',
              color: 'yellow',
              textDecoration: 'none',
              textShadow: 'black 2px 2px'
            }}
          >
            Lego4All
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              {pages.map((pages) => (
                <MenuItem key={pages} onClick={handleCloseNavMenu}>
                  <Typography
                    color="inherit"
                    variant="contained"
                    textAlign="center"
                    fontFamily= "Bungee Spice"
                    sx={{ textDecoration: 'none', textShadow: 'black 1px 1px' }}
                    >
                    <Link to={pages.link} style={{textDecoration: "none"}} >{pages.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Bungee Spice',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textShadow: 'black 2px 2px'
            }}
          >
            Lego4All
          </Typography>
          <Box id='menuButtonsDiv' sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((pages) => (
              <Button className='menuButtonDiv'
                key={pages}
                onClick={handleCloseNavMenu}
                component="a"
                sx={{
                  width: '142px',
                  height: '50px',
                  my: '10px',
                  fontFamily: 'Bungee Spice',
                  fontSize: '1.2rem',
                  color: 'white',
                  mx: '20px',
                  textShadow: 'black 2px 2px'
                }}
              >
                <Link to={pages.link} style={{ textDecoration: 'none', marginTop: '10px' }} >{pages.name}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;