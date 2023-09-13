import { useState } from 'react';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  font-size: 36px;
  text-align: center;
  color: navy;
  text-transform: uppercase;
`;

const Component = styled(Box)` display:flex; background:white; width:800px; padding:10px; margin: auto;& > div {
  height: 70vh;
  width: 50%;
  padding: 10px;
}`


function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Pet', amount: -20 },
    { id: 2, text: 'Pet', amount: 40 },
    { id: 3, text: 'Pet', amount: -50 },
    { id: 4, text: 'Pet', amount: -70 },
  ]);
  return (
    <Box className="App">
      <Header>My Budget</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions}/>
          <NewTransaction setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
