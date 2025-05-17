import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

// Define a wrapper component for MUI Grid that handles the item prop
const Grid = (props) => {
  // Pass all props directly to MuiGrid
  return <MuiGrid {...props} />;
};

export default Grid; 