import { useState } from "react";
import "./App.css";
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: 'Devkaran',
    email: 'devkarankvaghasiya@gmail.com'
  }

  let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4"> Tailwind test</h1>
      <Card userName= 'Chris Hemsworth' />
      <Card userName= 'Devkaran' btnText = 'Click Me! ' src= "https://avatars.githubusercontent.com/u/108357431?v=4"/>



    </>
  );
}

export default App;
