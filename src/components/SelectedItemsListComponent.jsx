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

const SelectedItemsListComponent = (props) => {
  return(
    <>
      <Box sx={{ width: '60vw', mx: 'auto' }}>
        <Stack spacing={1}>
          <Item content={props.content}>{props.content}</Item>
        </Stack>
      </Box>
  </>
  )
}

export default SelectedItemsListComponent;