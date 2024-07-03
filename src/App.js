import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';


export default function App() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [items, setItems] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);





  const handleChange = (e) => {
    const name = e.target.value;
    if (/^[a-zA-Z]?$/.test(name)) { // Only allow digits
      setName(name);
    }

    const number = e.target.value;
    if (/^\d{0,3}$/.test(number)) {
      setNumber(number);
    }

  };

  const handleAddItem = () => {
    setField(false);
    setIsDisabled(false);

    const newItem = {
      id: items.length + 1, // You can use a more robust ID generation method
      name: (name) + (number * 2) // Example name generation
    };
    setItems([...items, newItem]);
  };


  const handleEdit = () => {
    setField(true);
    setIsDisabled(true);
  }








  return (
    <div className="App">
      <span>Celeste Menu</span>


      <div className="display">

        {field && (<input
          type="text"
          className="data"
          placeholder="Enter menu name"
          value={name}
          onChange={(e) => handleChange(e)}
        />)}
        {field && (<input
          type="number"
          className="data"
          placeholder="Enter menu number"
          value={number}
          onChange={(e) => handleChange(e)}
        />)}


        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button onClick={handleAddItem}>Save</Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button disabled={isDisabled} onClick={handleEdit}>Edit</Button>
        </Box>

      </div>

      <div className='menu'>
        <div>
          <span>Scones</span>
          <div>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
        </div>
        <span>Platters</span>
        <span>Fruits</span>
        <span>Slices</span>
        <span>Meatballs</span>

      </div>

    </div>

  );

}