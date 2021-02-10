import React, { useContext } from 'react';
import { GlobalProvider} from './Context';



function List ({transactions}){
    const {del} = useContext(GlobalProvider);
    
    const sign = transactions.amount < 0 ? '-' : '+';
    
return(


    <li className= {transactions.amount < 0 ? 'minus' : 'plus'}>
    {transactions.text} <span>{sign}${Math.abs (transactions.amount)}</span><button onClick={() =>del(transactions.id)} className="delete-btn">x</button>
  </li> 

)



}
export default List;