import React, { useState } from 'react';

import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import DataTable from './components/DataTable/DataTable';
function App() {
  const [resultData, setResultData] = useState([]);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    const yearlyData = [];

    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResultData(yearlyData);
  };

  const clearTableHandler = () => {
    setUserInput(null);
    setResultData(null);
  };

  return (
    <div>
      <Header />
      <InputForm
        onSubmitForm={calculateHandler}
        onResetForm={clearTableHandler}
      />
      {!userInput && <p className="message">Please enter your data</p>}
      {userInput && (
        <DataTable
          results={resultData}
          initialInvestment={userInput.currentSavings}
        />
      )}
    </div>
  );
}

export default App;
