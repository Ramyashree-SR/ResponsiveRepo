import { Box, Divider, Grid, Stack } from '@mui/material'
import React from 'react'

export const MuiWork = () => {
  return (
    <>
    <Stack sx={{
        margin:"10px",border:'0px solid'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
    <Box sx={{backgroundColor:"primary.main",
    padding:"16px",
    color:"white",
    height:"100px",
    width:"100px",
    '&:hover':{backgroundColor:'primary.light'}
}}>
       Aparanji
    </Box>
    <Box display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}>
       Bangara
    </Box>
    </Stack>
    <Grid container my={4}>
        <Grid item xs={12} sm={6}>
        <Box   bgcolor='warning.light' p={2}>Item 1</Box>
        </Grid>
        <Grid  item xs={12} sm={6} >
        <Box   bgcolor='warning.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box  bgcolor='warning.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box  bgcolor='warning.light' p={2}>Item 4</Box>
        </Grid>
    </Grid>
    </>
  )
}