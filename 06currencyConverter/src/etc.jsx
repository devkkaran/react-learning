import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(null); // Default to 0
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // Custom hook fetching currency data
  console.log(currencyInfo);

  const options = Object.keys(currencyInfo || {}); // Avoid errors if currencyInfo is undefined

  const swap = () => {
    const temp = from; // Temporarily store "from" currency
    setFrom(to);
    setTo(temp);
    setAmount(convertedAmount); // Set amount with the converted value
  };

  const convert = () => {
    if (amount && currencyInfo[to.toLowerCase().trim()]) {
      setConvertedAmount(amount * currencyInfo[to.toLowerCase().trim()]);
      // let converValue = amount * currencyInfo[to.toLowerCase().trim()];
      // setConvertedAmount(converValue);


      console.log(` Amount: ${amount}`);
      console.log(`${to}`);
      console.log(`${to.toLowerCase().trim()}`);
      console.log(`${to.toLowerCase().trim().length}`);
      console.log(`${ currencyInfo[to.toLowerCase().trim()]}`);
      console.log(`Converted Amount: ${convertedAmount}`);
    } else {
      console.log("Invalid amount or missing currency information.");
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://imageio.forbes.com/specials-images/imageserve/635baebc4ff6bcaf46003fad/Global-economy--currency-exchange-rates-panel-with-data--maps--charts/960x0.jpg?format=jpg&width=960')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(selectCurrency) => setTo(selectCurrency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
