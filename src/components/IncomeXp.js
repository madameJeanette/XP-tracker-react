import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeXp = () => {
  const { tasks } = useContext(GlobalContext)
// Update the balance, income and expense

  const amounts = tasks.map(task => task.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    

  // const expense = (
  //   amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  //   -1
  // )

  return (
    <div className="inc-xp-container">
      <div>
      <h4> XP Behaald</h4>
      <p className="xp plus"> {income}</p>
    </div> 
    {/* <div>
      <h4> XP Betaald</h4>
      <p className="xp minus"> {expense}</p>
    </div> */}
</div>

  )
}

export default IncomeXp
