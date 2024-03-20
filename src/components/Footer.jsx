import React from 'react';
import { Typography, Box } from '@mui/material';


const Footer = () => {
    return (
        <Box textAlign="center" pt={4} pb={2}>
        <Typography variant="h6">Website created by <a href="https://www.linkedin.com/in/sol-gonz%C3%A1lez-8967b5139/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd2ff'}}>Maria Sol Gonzalez</a> for penultimate project in <a href="https://adaitw.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd2ff'}}>ADA ITW</a></Typography>
      </Box>
      );
}
export default Footer