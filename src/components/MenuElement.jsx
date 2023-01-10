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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Bungee Spice',
              fontWeight: 700,
              fontSize: '2rem',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
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
                    textAlign="center"
                    sx={{textDecoration: 'none'}}
                    >
                    <Link to={pages.link} sx={{underline: "none"}} >{pages.name}</Link>
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
            }}
          >
            Lego4All
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((pages) => (
              <Button
                key={pages}
                onClick={handleCloseNavMenu}
                component="a"
                sx={{
                  my: 2,
                  fontFamily: 'Bungee Spice',
                  fontSize: '1.5rem',
                  color: 'white',
                  display: 'block',
                  underline: 'none'
                }}
              >
                <Link to={pages.link} underline="none">{pages.name}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' }, textDecoration: 'none' }}>
            <Button
              component="a"
              fontFamily="Bungee Spice"
              sx={{
                my: 2,
                fontFamily: 'Bungee Spice',
                fontSize: '1rem',
                color: 'white',
                display: 'block',
                underline: 'none'
              }}
              >
              <Link to="/admin" underline='none'>Admin</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

/*
    <div className='buttons'>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" className='buttonGroup'>
        <Button className='button' size='large'>
          <Link to='/home' className="home">LEGO4ALL</Link>
        </Button>
        <Button className='button' size='small'>
          <Link to='/legos' className="links">Lego Sets</Link>
        </Button>
        <Button className='button' size='small'>
          <Link to='/register' className="links">Register here</Link>
        </Button>
      </ButtonGroup>
      <Button variant="outlined" color="error" className='button' id='adminButton' size='small'>
          <Link to='/admin' className="adminLink">Admin</Link>
      </Button>
    </div>
  );
}
*/

export default ResponsiveAppBar;