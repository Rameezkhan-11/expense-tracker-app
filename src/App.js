import React, { useContext } from 'react';
import './App.css'
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import  History  from "./History";
import Transaction from './Transaction';
import {GlobalProvider} from './Context';

function App() {
  return (
    <GlobalProvider>
    
    <Header />
      <div className= "conntainer">
        
    <Balance />
    <IncomeExpense />
    <History />
    <Transaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
