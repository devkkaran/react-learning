import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setcharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // ref Hook
  const passwordRef = useRef(null);

  // useCallback  Hook for manage password generator
  const passwordGenerator = useCallback(() => {
    // use callback karyyo atle projectt ne optimize karyu
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // aa badhi apni dependencies che agar aama kai change tthaayy to method ne optimize karo

  // useCallback  Hook of copyPassword
  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select(); // select thayelu batave
    passwordRef.current?.setSelectRange(0, 2); // range select batave

    window.navigator.clipboard.writeText(password); // copy to clipboard
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]); // aama kai pan chdchaad ho to pharithi run kari do

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3   my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToclipboard}
            className="outline-none bg-yellow-400 text-black px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numbarInput"
            onChange={() => {
              setNumberAllowed((pre) => !pre);
            }}
          />
          <label htmlFor="numbarInput">Numbers </label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charactersInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charactersInput">Characters </label>
        </div>
      </div>
    </>
  );
}

export default App;
