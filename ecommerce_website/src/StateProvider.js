import React, { createContext, useReducer, useContext } from "react";

//prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer]
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull information form the data layer
export const useStateValue = () => useContext(StateContext);
