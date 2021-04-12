import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { tasks } = useContext(GlobalContext)

  const amounts = tasks.map(task => task.amount)
  console.log(amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0)


  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}XP</h1>
    </>
  )
}
