import { useState } from "react";

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [age, setAge] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const currentDate = new Date(
      `${currentYear}-${currentMonth}-${currentDay}`
    );
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
    const ageInDays = Math.floor(ageInMilliseconds / 86400000);
    setAge(`${ageInYears} years and ${ageInDays % 365} days`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Age Calculator</h2>
        <form>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="birth-year"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Birth Year
              </label>
              <input
                type="number"
                id="birth-year"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="birth-month"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Birth Month
              </label>
              <input
                type="number"
                id="birth-month"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="birth-day"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Birth Day
              </label>
              <input
                type="number"
                id="birth-day"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="current-year"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Current Year
              </label>
              <input
                type="number"
                id="current-year"
                value={currentYear}
                onChange={(e) => setCurrentYear(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="current-month"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Current Month
              </label>
              <input
                type="number"
                id="current-month"
                value={currentMonth}
                onChange={(e) => setCurrentMonth(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
              <label
                htmlFor="current-day"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Current Day
              </label>
              <input
                type="number"
                id="current-day"
                value={currentDay}
                onChange={(e) => setCurrentDay(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleCalculate}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate Age
          </button>
          <p className="text-lg font-bold mt-4">Your age is: {age} years old</p>
        </form>
      </div>
    </div>
  );
};

export default AgeCalculator;
