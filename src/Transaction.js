import React,{useState,useContext} from "react";
import {GlobalState} from './Context';

function Transaction (){
    const [text,setText] = useState('');

    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalState);
    
    const onSubmit = e =>{
      e.preventDefault()
      const newTransaction  ={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount : +amount
      }

      addTransaction(newTransaction);
    }
    return(
       
        
        <>



      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" id="text" value={text} onChange={(t) => setText(t.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label 
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(t)=> setAmount(t.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>


        </>

    )






}
export default Transaction;