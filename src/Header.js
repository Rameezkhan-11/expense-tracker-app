import React,{useContext} from 'react';
import './App.css'
import {GlobalState} from './Context';

function Header(){
    const {transactions} = useContext(GlobalState);
return(
    <>  
        <h1>Expense Tracker App</h1>
        

    </>
)



}
export default Header;