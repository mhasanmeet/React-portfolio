import React from "react";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false }
const themeReducer = (state, action) => {
    switch (action.type){
        case "Toggle": 
            return {darkMode: !state.darkMode}
        default: 
            return state;
    }
}

const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return(
        <ThemeContext.Provider value={(state, dispatch)}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;