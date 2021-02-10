import React,{useState} from "react";

function Transaction (){
    const [text,setText] = useState('');

    const [amount, setAmount] = useState(0);
    return(
       
        
        <>



      <h3>Add new transaction</h3>
      <form>
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