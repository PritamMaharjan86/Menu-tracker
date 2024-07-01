import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';




function App() {

  const [input, setInput] = useState('');
  const [budget, setBudget] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);


  const handleChange = (e) => {
    setInput(e.target.value);
    
  }

  const handleSubmit = () => {
    setBudget([...budget, input]);
    setInput('');
    setField(false);
    setIsDisabled(false);
  }

  const handleEdit = () => {
    setInput('');
    setField(true);
    setBudget(['']);
    setIsDisabled(true);
  }


  const detectKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }





  return (
    <div className="App">
      <span>Expense Tracker</span>


      <div className="display">

        {field && (<input
          type="number"
          className="data"
          placeholder="Enter your budget"
          value={input}
          onChange={(e) => handleChange(e)}
          onKeyUp={detectKey}
        />)}
        Budget: {budget.map((input, index) => (<div key={index}>{input}</div>
        ))}


        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button disabled={isDisabled} onClick={handleEdit}>Edit</Button>
        </Box>

      </div>

    </div>

  );
}

export default App;
