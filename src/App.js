import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  const handleCalculate = (opr) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let calculatedResult = 0;
      if(opr == '+'){
        calculatedResult = num1 + num2;
      }
      else if(opr == '-'){
        calculatedResult = num1 - num2;
      }
      else if(opr == '*'){
        calculatedResult = num1 * num2;
      }
      else if(opr == '/'){
        calculatedResult = num1 / num2;
      }
      setMessage('Success !')
      setMessageClass('success')
      setResult(`Result: ${calculatedResult}`);
    } else {
      setMessage('Error !')
      setMessageClass('error')
      setResult('Please enter valid numbers');
    }
  };

  return (
    <div className="App">
      <h1 >React Calculator</h1>
      <div className='numbox'>
        <label></label>
        <input type="text" value={number1} onChange={handleNumber1Change} placeholder='Num 1'/>
      </div>
      <div className='numbox'>
        <label></label>
        <input type="text" value={number2} onChange={handleNumber2Change} placeholder='Num 2'/>
      </div>
      <div>
        <button onClick={() => handleCalculate('+')}>+</button>
        <button onClick={() => handleCalculate('-')}>-</button>
        <button onClick={() => handleCalculate('*')}>*</button>
        <button onClick={() => handleCalculate('/')}>/</button>
      </div>
      <div className={messageClass}>{message}</div>
      <div>{result}</div>
    </div>
  );
}

export default App;
