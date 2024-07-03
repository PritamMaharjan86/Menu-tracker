import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';


export default function App() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [client, setClient] = useState('');
  const [items, setItems] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [saveDisabled, setSavedisabled] = useState(false);
  const [editDisabled, setEditdisabled] = useState(true);





  const handleName = (e) => {
    const name = e.target.value;
    if (/^[a-zA-Z]?$/.test(name)) { // Only allow digits
      setName(name);
    }
  };

  const handleNumber = (e) => {
    const number = e.target.value;
    if (/^\d{0,3}$/.test(number)) {
      setNumber(number);
    }
  };

  const handleClient = (e) => {
    const client = e.target.value;
    if (/^[a-zA-Z]*$/.test(client)) {
      setClient(client);
    }
  };

  const handleAddItem = () => {
    setField(false);
    setIsDisabled(false);
    setSavedisabled(true);
    setEditdisabled(false);


    const newItem = {
      id: items.length + 1, // You can use a more robust ID generation method
      name: (client) + " " + (name) + '/' + (number) // Example name generation
    };
    setItems([...items, newItem]);
  };


  const handleEdit = () => {
    setField(true);
    setIsDisabled(true);
    setSavedisabled(false);
    setEditdisabled(true);
    
    setItems(prevItems => prevItems.slice(0, -1));
  }


  const handleAdd = () => {
    setSavedisabled(false);
    setField(true);
    setEditdisabled(true);
    setClient('');
    setName('');
    setNumber('');
  }


  return (
    <div className="App">
      <span>Celeste Menu</span>


      <div className="display">

        {field && (<input

          className="data"
          placeholder="Enter client number"
          value={client}
          onChange={(e) => handleClient(e)}
        />)}
        {field && (<input
          type="text"
          className="data"
          placeholder="Enter menu name"
          value={name}
          onChange={(e) => handleName(e)}
        />)}
        {field && (<input
          type="number"
          className="data"
          placeholder="Enter menu number"
          value={number}
          onChange={(e) => handleNumber(e)}
        />)}



        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button disabled={saveDisabled} onClick={handleAddItem}>Save</Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button disabled={editDisabled} onClick={handleEdit}>Edit</Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          <Button disabled={isDisabled} onClick={handleAdd}>Add</Button>
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

        <div>
          <span>Savoury</span>
          <div>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </div>
        </div>

      </div>

    </div>

  );

}