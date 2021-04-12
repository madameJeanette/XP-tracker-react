import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTask = () => {
  const [text, setText] = useState('')
  const [amount,setAmount] = useState(0)
 
  const { addTask } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();
      
    const newTask = {
      id: Math.floor(Math.random() * 100000000), //Look for better alternative > uuid?
      text,
      amount: 10 //+amount
    }
    
    addTask(newTask)
  }
  return (
    <>
         <h3>Voeg een nieuwe taak toe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Taak</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div className="form-control">
          {/* <label htmlFor="amount"> + 10 XP punten</label> */}
         {/* <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />  */}
        </div>
        <button className="btn">Voeg taak toe</button>
      </form>
    </>
   
  )
}
