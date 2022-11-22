import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import CustomizedBadges from './CartBadgeComponent';
import './menuelement.css';

const BasicButtonGroup = () => {
  return (
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
        <Button className='button' size='small'>
          <Link to='/contact' className="links">Contact Us</Link>
        </Button>
        <Button className='button' size='small'>
          <Link to='/admin' className="adminLink">Admin</Link>
        </Button>
      </ButtonGroup>
      <CustomizedBadges className="basketIcon" />
    </div>
  );
}

export default BasicButtonGroup;