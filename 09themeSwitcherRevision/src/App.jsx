import { useEffect, useState } from "react";
import "./App.css";
import  { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import React from "react";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  function lightTheme(){
    setThemeMode("light")
  }
  
  function darkTheme(){
    
    setThemeMode("dark")
  }

  useEffect(
    () => {
        const html = document.querySelector("html")

        html.classList.remove("light", "dark");
        html.classList.add(themeMode);
    }
  , [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
