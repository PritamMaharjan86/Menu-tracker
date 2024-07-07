import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [client, setClient] = useState('');
  const [items, setItems] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [saveDisabled, setSavedisabled] = useState(true);
  const [editDisabled, setEditdisabled] = useState(true);



  useEffect(() => {
    checkFormValidity();
  }, [client, name, number]);



  const handleName = (e) => {
    const name = e.target.value.toUpperCase();
    if (/^[a-zA-Z\s]*$/.test(name)) { // Only allow digits
      setName(name);
      checkFormValidity();

    }
  };

  const handleNumber = (e) => {
    const number = e.target.value;
    if (/^\d{0,3}$/.test(number)) {
      setNumber(number);
      checkFormValidity();

    }
  };

  const handleClient = (e) => {
    const client = e.target.value.toUpperCase();
    if (/^[a-zA-Z]*$/.test(client)) {
      setClient(client);
      checkFormValidity();

    }
  };

  const checkFormValidity = () => {
    if (client.trim() !== '' && name.trim() !== '' && number.trim() !== '') {
      setSavedisabled(false);
    } else {
      setSavedisabled(true);
    }
  };

  const handleAddItem = () => {
    setField(false);
    setIsDisabled(false);
    setSavedisabled(true);
    setEditdisabled(false);


    let newItem;

    switch (name) {

      case "A":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category A"

        };
        break;
      case "B":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category B"
        };
        break;
      case "C":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category C"
        };
        break;

      case "D":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category D"
        };
        break;

      case "ITALIAN":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category E"
        };
        break;

      case "GREEK DELUXE":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category F"
        };
        break;

      case "GREEK LIGHT":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category G"
        };
        break;

      default:
        toast.error("Menu name not found");
        return null;
    }
    setItems([...items, newItem]);
  };


  const handleDelete = () => {

  }


  const handleEdit = () => {
    setField(true);
    setIsDisabled(true);
    setSavedisabled(false);
    setEditdisabled(true);

    setItems(prevItems => prevItems.slice(0, -1));
  }


  const handleAdd = () => {
    setIsDisabled(true);
    setSavedisabled(false);
    setField(true);
    setEditdisabled(true);
    setClient('');
    setName('');
    setNumber('');

  }




  return (
    <div className="App">
      <h2 style={{}}>Celeste Menu</h2>


      <div className="display">

        {field && (<input

          className="data"
          placeholder="Enter client name"
          value={client}
          onChange={(e) => handleClient(e)}
          required
        />)}
        {field && (<input
          type="text"
          className="data"
          placeholder="Enter menu name"
          value={name}
          onChange={(e) => handleName(e)}
          required
        />)}
        {field && (<input
          type="number"
          className="data"
          placeholder="Enter menu number"
          value={number}
          onChange={(e) => handleNumber(e)}
          required
        />)}

      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup spacing="0.6rem" aria-label="spacing button group">
          <Button sx={{
            backgroundColor: '#4CAF50',
            color: '#FFFFFF',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            textTransform: 'uppercase', // Uppercase text for style consistency 
            ':hover': {
              backgroundColor: '#388E3C', // Darker blue on hover
            },

          }}
            disabled={saveDisabled} onClick={handleAddItem}>Save</Button>

          <Button sx={{
            backgroundColor: '#2196F3',
            color: '#FFFFFF',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            textTransform: 'uppercase', // Uppercase text for style consistency 
            ':hover': {
              backgroundColor: '#1976D2', // Darker blue on hover
            },
          }}
            disabled={editDisabled} onClick={handleEdit}>Edit</Button>

          <Button sx={{
            backgroundColor: '#2196F3',
            color: '#FFFFFF',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            textTransform: 'uppercase', // Uppercase text for style consistency 
            ':hover': {
              backgroundColor: '#1976D2', // Darker blue on hover
            },
          }}
            disabled={isDisabled} onClick={handleAdd}>Add</Button>

          <Button sx={{
            backgroundColor: '#FF5722',
            color: '#FFFFFF',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            textTransform: 'uppercase', // Uppercase text for style consistency 
            ':hover': {
              backgroundColor: '#E64A19', // Darker blue on hover
            },
          }}
            onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </div>

      <div className='menu'>

        <ToastContainer />

        <div>
          <span className='title'>Club Sandwiches</span>
          <div>
            {items
              .filter(item => item.category === "Category C")
              .map(item => (
                <li key={item.id}>{item.name}
                  {(item.pax <= 10) ? (
                    <span> 1 platters sandwich </span>
                  ) : (

                    <span> {Math.round(item.pax / 10)}large platters</span>

                  )}
                </li>
              ))}
          </div>

          <div>
            {items
              .filter(item => item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name}
                  {(item.pax <= 25) ? (
                    <span> 1 platters sandwich </span>
                  ) : (

                    <span> {Math.round(item.pax / 25)}large platters</span>

                  )}
                </li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Ribbon Sandwiches</span>
          <div>
            {items
              .filter(item => item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name}
                  {(item.pax <= 25) ? (
                    <span> 1 platters sandwich </span>
                  ) : (

                    <span> {Math.round(item.pax / 25)}large platters</span>

                  )}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Macarons</span>
          <div>
            {items
              .filter(item => item.category === "Category C" || item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name} {item.pax * 1 + "pcs"}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Savoury</span>
          <div>
            {items
              .filter(item => item.category === "Category B" || item.category === "Category C")
              .map(item => (
                <li key={item.id}>{item.name}
                  {(item.pax <= 10) ? (
                    <span> 1 platters </span>
                  ) : (

                    <span> {Math.round(item.pax / 10)}large platters</span>

                  )}</li>
              ))}
          </div>
        </div>


        <div>
          <span className='title'>Scones</span>
          <div>
            {items
              .filter(item => item.category === 'Category A')
              .map(item => (
                <li key={item.id}>
                  {item.name} {Math.round(item.pax * 1.5) + "each"}
                  {item.pax < 30 ? (
                    <span> {Math.round((item.pax * 1.5) / 15)}small platters </span>
                  ) : (

                    <span> {Math.round((item.pax * 1.5) / 24)} large platters</span>

                  )}
                </li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Savoury Muffin</span>
          <div>
            {items
              .filter(item => item.category === "Category A")
              .map(item => (
                <li key={item.id}>{item.name} {Math.round(item.pax * 1.5) + " bacon puff"}, {Math.round(item.pax * 1.5) + " spinach puff"}</li>
              ))}
          </div>
        </div>



        <div>
          <span className='title'>Fruits</span>
          <div>
            {items
              .filter(item => item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name}
                  {(item.pax <= 30) ? (
                    <span> 1 large platter</span>
                  ) : (

                    <span> {Math.round(item.pax / 30)}large platters</span> //Math.round is for getting answer in round figure

                  )}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Slice</span>
          <div>
            {items
              .filter(item => item.category === "Category B")
              .map(item => (
                <li key={item.id}>{item.name}{(item.pax < 20) ? (
                  <span> 1 small platter</span>
                ) : (

                  <span> {Math.round(item.pax / 20)}large platters</span> //Math.round is for getting answer in round figure

                )}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Meatballs</span>
          <div>
            {items
              .filter(item => item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name}{(item.pax < 25) ? (
                  <span> 1 platter</span>
                ) : (
                  <span> {Math.round(item.pax / 25)} platters</span> //Math.round is for getting answer in round figure

                )}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Samosa Savoury</span>
          <div>
            {items
              .filter(item => item.category === "Category D")
              .map(item => (
                <li key={item.id}>{item.name}{(item.pax <= 15) ? (
                  <span> 1 platter</span>
                ) : (
                  <span> {Math.round(item.pax / 15)} platters</span> //Math.round is for getting answer in round figure

                )}</li>
              ))}
          </div>
        </div>

        <div>
          <span className='title'>Cultural Menu</span>
          <div>
            {items
              .filter(item => item.category === "Category E")
              .map(item => (
                <li key={item.id}>{item.name}{(item.pax <= 50) ? (
                  <span> 1 antipasto platter (mortadella, prosciutto di Parma and calabrese salami, provolone, pecorino, olives and gardinera), 1 foccacia, grissini, oilve oil, vinegar, {item.pax * 2} calamari, {item.pax * 2} fish, {item.pax} chipolata, {item.pax} pastizzi, {item.pax} mushroom aranchini, {item.pax} pumpkin aranchini, {item.pax} cannoli, {Math.round(item.pax / 30)} bags meatballs</span>
                ) : (
                  <span> {Math.round(item.pax / 50)} antipasto platter (mortadella, prosciutto di Parma and calabrese salami, provolone, pecorino, olives and gardinera), {Math.round(item.pax / 50)} foccacia, grissini, oilve oil, vinegar, {item.pax * 2} calamari, {item.pax * 2} fish, {item.pax} chipolata, {item.pax} pastizzi, {item.pax} mushroom aranchini, {item.pax} pumpkin aranchini, {item.pax} cannoli, {Math.round(item.pax / 30)} bags meatballs </span> //Math.round is for getting answer in round figure

                )}</li>
              ))}
          </div>

          <div>
            {items
              .filter(item => item.category === "Category F")
              .map(item => (
                <li key={item.id}>{item.name}{(item.pax <= 50) ? (
                  <span> 1 mezze platter (Greek dolmades, kalamata olives, kesseri, kefalograviera and feta cheese),{Math.round(item.pax / 10)} olives bread, 2 pita breads, oilve oil, balsamic vinegar, {item.pax * 3} calamari, {item.pax * 3} fish, {item.pax} octopus, {item.pax} spanokopita, {item.pax} tiropita, {item.pax / 2} paximathia, {item.pax /2 } koulouria, {Math.round(item.pax / 50)} greek salad</span>
                ) : (
                  <span> {Math.round(item.pax / 50)} mezze platter (Greek dolmades, kalamata olives, kesseri, kefalograviera and feta cheese), {Math.round(item.pax / 10)} olives bread, {Math.round(item.pax / 20)} pita breads, oilve oil, balsamic vinegar, {item.pax * 3} calamari, {item.pax * 3} fish, {item.pax} octopus, {item.pax} spanokopita, {item.pax} tiropita, {item.pax / 2} paximathia, {item.pax /2 } koulouria, {Math.round(item.pax / 50)} greek salad</span> //Math.round is for getting answer in round figure

                )}</li>
              ))}
          </div>
        </div>


      </div>

    </div>

  );

}