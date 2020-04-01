import React from 'react';
import { Typography, Box } from '@material-ui/core';

export function AboutMe(){
  return(
    <Box>
      <Typography variant="h5" component="h1">
        About me
      </Typography>
      <Typography variant="body1" component="p">
        Hi! i'm João Neto Castro, a passionate programmer.
        My main goal is to give value to the world, and i
        can help you make your dream app/website become a 
        reality.
      </Typography>
    </Box>

  );
}
