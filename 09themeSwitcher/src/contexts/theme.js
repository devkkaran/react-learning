import React, {createContext, useContext} from "react"

 const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

});

//  export default ThemeContext

 export const ThemeProvider = ThemeContext.Provider

 export default function useTheme(){
    return useContext(ThemeContext);
 }