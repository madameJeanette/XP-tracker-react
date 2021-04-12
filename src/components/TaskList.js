import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TaskList = () => {
  const { tasks } = useContext(GlobalContext)
 

  return (
    <>
      <h3>Geschiedenis</h3>
      <ul className="list">
        {tasks.map(task => ( <li className="minus">
          {task.text} <span>{task.amount}</span><button className="delete-btn">x</button>
        </li>))}
       
      </ul>
    </>
  )
}
