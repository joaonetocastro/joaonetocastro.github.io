import React from 'react';
import { Box, Typography, Button , Link} from '@material-ui/core';

export function DownloadMyCV(){
  return(
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" component="h1">
        Download my CV here!
      </Typography>
      <Link target="_blank" href="/docs/cv_joao_neto_castro.pdf" underline="none">
        <Button color="secondary" variant="contained" style={{margin:15}}>
          Download my CV
        </Button>
      </Link>
    </Box>
  );
}