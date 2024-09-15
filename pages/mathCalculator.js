
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval can be dangerous, use a math library for production
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4 border border-grey-300 rounded-sm">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 mb-2 border border-hidden"
            placeholder="Question"
          />
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-2 border border-hidden"
            placeholder="Answer"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {["0", ".", "Clear", "+"].map((value) => (
            <button
              key={value}
              onClick={() =>
                value === "Clear" ? handleClear() : handleClick(value)
              }
              // className="p-4 bg-blue-500 text-white rounded"
              className={
                value === "Clear"
                  ? "p-4 bg-red-600 text-white rounded"
                  : "p-4 bg-blue-500 text-white rounded"
              }
            >
              {value}
            </button>
          ))}
          <button
            onClick={handleCalculate}
            className="col-span-4 p-2 text-4xl bg-green-500 text-white rounded"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
