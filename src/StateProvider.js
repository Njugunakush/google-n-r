import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// children
export const StateProvider = ({ reducer, intitialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, intitialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);