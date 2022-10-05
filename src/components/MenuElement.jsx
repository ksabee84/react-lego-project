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
          <Link to='/home' className="links">Home</Link>
        </Button>
        <Button className='button' size='large'>
          <Link to='/legos' className="links">Lego Sets</Link>
        </Button>
        <Button className='button' size='large'>
          <Link to='/contact' className="links">Contact Us</Link>
        </Button>
        <Button className='button' size='small'>
          <Link to='/admin' className="links">Admin</Link>
        </Button>
      </ButtonGroup>
      <CustomizedBadges className="basketIcon" />
    </div>
  );
}

export default BasicButtonGroup;