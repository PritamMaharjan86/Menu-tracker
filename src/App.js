import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";




function App() {

  const [budget, setBudget] = useState('');


  const handleChange = (e) => {
    setBudget(e.target.value);
  }

  const handleSubmit = () => {
    alert(`The name you entered was: ${budget}`)
  }


  const detectKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }



  return (
    <div className="App">
      <span>Expense Tracker</span>

      <div className="tab">
        <div className="income">

          <input
            type="number"
            className="data"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => handleChange(e)}
            onKeyUp={detectKey}
          ></input>


          <span>Budget:{budget}</span>


        </div>

      </div>
    </div>
  );
}

export default App;
