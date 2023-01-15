import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const SelectedItemsComponent = (props) => {
  return(
    <>
      <Box sx={{ width: '15vw', marginLeft: '10px' }}>
        <Stack spacing={1}>
          <Item content={props.content}>{props.content}</Item>
        </Stack>
      </Box>
  </>
  )
}

export default SelectedItemsComponent;