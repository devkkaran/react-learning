import { useState } from "react";
import "./App.css";

function App() {
    // let counter = 15;

let [counter, setaddValue] = useState(15);

    const addValue = () => {
      // console.log("Value Added", Math.random());
      setaddValue(counter + 1)
      // setaddValue(preCounter => preCounter + 1)   // This is Interview Question for Java Script Fibre Algorithm
      // setaddValue(preCounter => preCounter + 1)
      // setaddValue(preCounter => preCounter + 1)
      // setaddValue(preCounter => preCounter + 1)
    }

    const removeValue = () => {
      // setaddValue(counter - 1);
      // console.log(setaddValue(counter - 1));
      
      if(counter > 0){
        setaddValue(counter -= 1);
        
      }else{
        alert('The limit is Exceed');
        setaddValue(counter = 0);
        
      }


    }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}> Add Value</button>
      <br />
      <button onClick= {removeValue}> Remove Value! {counter}</button>
    </>
  );
}

export default App;
