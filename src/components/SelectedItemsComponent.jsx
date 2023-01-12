import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const SelectedItemsComponent = (props) => {
  return(
    <div>
      <Box sx={{ width: '60%', my: '10px', mx: 'auto' }}>
        <Stack spacing={2}>
          <Item>Item 1</Item>
        </Stack>
      </Box>
  </div>
  )
}

export default SelectedItemsComponent;