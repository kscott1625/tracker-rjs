import React from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5, & > div, & > button {
    margin-top: 30px;
  }
`;
const NewTransaction = () => {
  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField label="Enter Expense" />
      <TextField label="Enter Amount" />
      <Button variant="contained">ADD</Button>
    </Container>
  );
};

export default NewTransaction;
