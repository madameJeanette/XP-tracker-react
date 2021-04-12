import React from 'react'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeXp } from './components/IncomeXp'
import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask'

import { GlobalProvider } from './context/GlobalState'
import './App.css'

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
       <Balance />
       <IncomeXp />
       <TaskList />
       <AddTask />
     </div>
    </GlobalProvider>
  );
}

export default App;
