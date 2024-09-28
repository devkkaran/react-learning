import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState("light"); // amuk samaye aapnne khyal nathi hoto ke aa objcet mathi lidhe varibble ni functionality shu che mate tene tej namthi method declare karid do

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card
              webseriesName="Suits "
              src="https://v3img.voot.com/v3Storage/assets/16x9-1715353645099.jpg"
            />
            <Card
              webseriesName="The Night Manager"
                src="https://i.ytimg.com/vi/6QJQysiUxKc/maxresdefault.jpg"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
