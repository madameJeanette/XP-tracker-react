import React, {useState} from 'react'

export const AddTask = () => {
  const [text, setText] = useState('')
  const [amount,setAmount] = useState(0)
 
 
  return (
    <>
         <h3>Voeg een nieuwe taak toe</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Taak</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Aantal XP punten</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Voeg taak toe</button>
      </form>
    </>
   
  )
}
