import './App.css';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './components/input'
import Buttons from './components/buttons';
import Menu from './components/menu';



export default function App() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [client, setClient] = useState('');
  const [items, setItems] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [saveDisabled, setSavedisabled] = useState(true);
  const [editDisabled, setEditdisabled] = useState(true);
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const formattedDate = tomorrowDate.toLocaleDateString();
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const tomorrowDay = daysOfWeek[tomorrowDate.getDay()];


  const handlePrint = () => {
    window.print();
  };

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

        case "E":
          toast.success("Added to menu");
          newItem = {
            id: items.length + 1,
            name: (client) + " " + (name) + '/' + (number),
            pax: (number),
            category: "Category E"
          };
          break;

      case "ITALIAN":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category F"
        };
        break;

      case "GREEK DELUXE":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category G"
        };
        break;

      case "GREEK LIGHT":
        toast.success("Added to menu");
        newItem = {
          id: items.length + 1,
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          category: "Category H"
        };
        break;

        case "ASIAN":
          toast.success("Added to menu");
          newItem = {
            id: items.length + 1,
            name: (client) + " " + (name) + '/' + (number),
            pax: (number),
            category: "Category I"
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
      
      <h2 style={{}}>MENU FORECAST</h2>
     

      <Input
        handleClient={handleClient}
        handleName={handleName}
        handleNumber={handleNumber}
        field={field}
        name={name}
        client={client}
        number={number}
      />

      <Buttons
        handleAdd={handleAdd}
        handleAddItem={handleAddItem}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handlePrint={handlePrint}
        saveDisabled={saveDisabled}
        isDisabled={isDisabled}
        editDisabled={editDisabled}
      />



      <div className='menu'>
        <p style={{fontWeight:'bold', fontSize:'18px'}}>{`${formattedDate}`}</p>
        <p style={{fontWeight:'bold', fontSize:'18px', marginBottom:'20px'}}>{`${tomorrowDay}`}</p>

        <ToastContainer />

        <Menu
          items={items}
        />

      </div>
    </div>
  );

}