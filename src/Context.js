import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState = {

    transactions: []





}
export const GlobalState = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function del(id) {
        dispatch({

            type: 'DELETE_TRANSACTION',
            payload: id




        })

    }

    function addTransaction(transaction) {
        dispatch({

            type: 'ADD_TRANSACTION',
            payload: transaction




        })

    }

    return (

        <GlobalState.Provider value={{
            transactions: state.transactions,
            del,
            addTransaction
        }}>


            {children}
        </GlobalState.Provider>




    )




    }
