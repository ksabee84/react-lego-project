import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartBadgeComponent(props) {
  return (
    <IconButton aria-label="cart">
      <Link to='/register' >
        <StyledBadge badgeContent={props.badgeContent} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </Link>
    </IconButton>
  );
}
