import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function RowAndColumnSpacing({card}) {
  return (
    <Box sx={{ width: '100%', marginTop: '40px' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {card}
      </Grid>
    </Box>
  );
}