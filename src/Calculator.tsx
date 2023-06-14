import React, { useState } from 'react';
import './Calculator.css';
import './CalculatorDark.css';

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult(null);
    }
  };

  const clearInput = () => {
    setResult(null);
    setInput('');
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const calculatorClassName = isDarkMode ? 'calculator dark' : 'calculator';

  return (
    <div className={calculatorClassName}>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={clearInput}>Clear</button>
        </div>
      </div>

      {result !== null && <div className="result">Result: {result}</div>}

      <div className="theme-toggle">
        <label htmlFor="theme-toggle">Toggle Theme</label>
        <input
          id="theme-toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Calculator;
