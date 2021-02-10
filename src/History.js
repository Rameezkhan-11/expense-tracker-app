import  React, { useContext } from "react";
import {GlobalState} from './Context';
import  List  from "./List";
function History (){
const {transactions} = useContext(GlobalState);


  return(

    <>
    <h3>History</h3>
    <ul  className="list">

    {transactions.map(transactions =>(<List key={transactions.id} transactions = {transactions} />))}
     
    </ul>

</>


)




}
export default History;