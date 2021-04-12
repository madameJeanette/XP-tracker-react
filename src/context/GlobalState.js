import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initialState = {
  tasks: [
      { id: 1, text: 'Groen: Zaaien', amount: 20 },
      { id: 2, text: 'Groen: Schoffelen 1', amount: 3 },
      { id: 3, text: 'Nederlands: Spelling2', amount: 10 },
      { id: 4, text: 'Rekenen: Optellen', amount: 15 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children}) => {
 const [state, dispatch] = useReducer(AppReducer, initialState)

 return(<GlobalContext.Provider value={{tasks:state.tasks}}>
   {children}
 </GlobalContext.Provider>)
}