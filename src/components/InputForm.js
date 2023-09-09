import React, { useState } from 'react';

function InputForm(props) {
  const [formData, setFormData] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  });

  const formChangeHandler = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [inputId]: +inputValue,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm(formData);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setFormData({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    });
    props.onResetForm();
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="currentSavings">Current Savings ($)</label>
          <input
            type="number"
            id="currentSavings"
            value={formData.currentSavings}
            onChange={formChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={formData.yearlyContribution}
            onChange={formChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expectedReturn"
            value={formData.expectedReturn}
            onChange={formChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={formChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InputForm;
