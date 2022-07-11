import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function CustomizedCard(props) {
  return (
    <Card sx={{ height:"220", width:"300px", margin:"16px", borderStyle:"solid", borderColor:" #e4e4e4", display:"inline-block;"  }}>
      <CardMedia
        component="img"
        height="220"
        image={props.item.images.original.url}
        alt="green iguana"
      />
    </Card>
  );
}

// #caa9a9