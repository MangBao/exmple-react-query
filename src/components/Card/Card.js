import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DefaultCard({items, btnUpdate, btnRemove}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => btnRemove}>Delete</Button>
        <Button size="small" onClick={() => btnUpdate}>Update</Button>
      </CardActions>
    </Card>
  );
}