'use client';
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(100);
  const [increment, setIncrement] = useState(10.5);
  const [salary, setSalary] = useState(100000);

  const incrementCounter = () => {
    setCounter(counter + increment);
  };

  return (
    <div>
      <h1>About Hook</h1>
      <p>Counter Value: {counter}</p>
      <p>Salary: {salary}</p>
      <button onClick={incrementCounter}>
        Increment Counter by {increment}
      </button>
    </div>
  );
};

export default Counter;
