
import { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBillAmountChange = (e) => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleTipPercentageChange = (e) => {
    setTipPercentage(parseFloat(e.target.value));
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(parseFloat(e.target.value));
  };

  const calculateTip = (e) => {
    e.preventDefault();
    const tip = (billAmount * tipPercentage) / 100;
    setTipAmount(tip);
    setTotalAmount(billAmount + tip);
  };

  const calculatePerPerson = () => {
    const perPerson = totalAmount / numberOfPeople;
    return perPerson.toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Tip Calculator</h1>
      <form>
        <label className="block mb-2">
          Bill Amount:
          <input
            type="number"
            value={billAmount}
            onChange={handleBillAmountChange}
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Tip Percentage:
          <input
            type="number"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Number of People:
          <input
            type="number"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg text-gray-700"
          />
        </label>
        <button
          onClick={calculateTip}
          className="bg-orange-500 hover:bg-orange-700  text-white font-bold py-2 px-4 rounded"
        >
          Calculate Tip
        </button>
      </form>
      <div className="mt-4">
        <p className="bg-gray-300 my-1 px-4 rounded-lg">
          Tip Amount: ₹{tipAmount.toFixed(2)}
        </p>
        <p className="bg-gray-300 my-1 px-4 rounded-lg">
          Total Amount: ₹{totalAmount.toFixed(2)}
        </p>
        <p className="bg-gray-300 my-1 px-4 rounded-lg">
          Per Person: ₹{calculatePerPerson()}
        </p>
      </div>
    </div>
  );
};

export default TipCalculator;
