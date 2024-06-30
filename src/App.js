import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";




function App() {

  const [input, setInput] = useState('');
  const [budget, setBudget] = useState([]);
  const [field, setField] = useState(true);


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    setBudget([...budget, input]);
    setInput('');
    setField(false);
  }


  const detectKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }



  return (
    <div className="App">
      <span>Expense Tracker</span>


      <div className="income">

        {field && (<input
          type="number"
          className="data"
          placeholder="Enter your budget"
          value={input}
          onChange={(e) => handleChange(e)}
          onKeyUp={detectKey}
        />)}
 
        <span> My Budget:
          {budget.map((input, index) => ( <div key={index}>{input}</div>
          ))}
        </span>

      </div>
    </div>
  );
}

export default App;
