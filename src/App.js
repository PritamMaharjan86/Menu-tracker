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
  const [platter, setPlatter] = useState('');
  const [items, setItems] = useState([]);
  const [field, setField] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [saveDisabled, setSavedisabled] = useState(true);
  const [editDisabled, setEditdisabled] = useState(true);
  const [extraDisabled, setExtradisabled] = useState(true);
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
  }, [client, name, number, platter]);



  const handleName = (e) => {
    const name = e.target.value.toUpperCase();
    if (/^[a-zA-Z\s]*$/.test(name)) { // Only allow  digits
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

  const handlePlatter = (e) => {
    const platter = e.target.value.toUpperCase();
    if (/^[a-zA-Z\s]*$/.test(platter)) { // Only allow  digits
      setPlatter(platter);
      checkFormValidity();

    }
  };

  const checkFormValidity = () => {
    if (client.trim() !== '' && name.trim() !== '' && number.trim() !== '' && platter.trim() !== '') {
      setSavedisabled(true);
      setExtradisabled(false);

    } else if (client.trim() !== '' && name.trim() !== '' && number.trim() !== '') {
      setExtradisabled(true);
      setSavedisabled(false);
    }
    else {
      setSavedisabled(true);
      setExtradisabled(true);
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

  const handleExtra = () => {
    setField(false);
    setIsDisabled(false);
    setSavedisabled(true);
    setEditdisabled(false);
    setExtradisabled(true);

    let newItem;
   


    switch (platter) {

      case "CLUB":    
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category CL"

        };
        break;

      case "RIBBON":
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category RB"

        };
        break;

      case "FRUIT":
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category FR"

        };
        break;

      case "SCONES":
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category SC"

        };
        break;

      case "MEATBALL":    
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category MT"

        };
        break;

      case "SLICE":
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category SL"

        };
        break;

      case "MACARONS":
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number),
          pax: (number),
          add: (platter),
          category: "Category MC"

        };
        break;


      default:
        newItem = {
          id: items.length + 1, // You can use a m0ore robust ID generation method
          name: (client) + " " + (name) + '/' + (number) ,
          pax: (number),
          add: (platter),
          category: "Category P"}


    }
    setItems([...items, newItem]);
 
    toast.success("Added to menu");

  }


  const handleEdit = () => {
    setField(true);
    setExtradisabled(true);
    setIsDisabled(true);
    setSavedisabled(true);
    setEditdisabled(true);

    setItems(prevItems => prevItems.slice(0, -1));
  }


  const handleAdd = () => {
    setIsDisabled(true);
    setSavedisabled(false);
    setExtradisabled(false);
    setField(true);
    setEditdisabled(false);
    setClient('');
    setName('');
    setNumber('');
    setPlatter('');

  }



  return (
    <div className="App">

      <h2 style={{}}>MENU FORECAST</h2>


      <Input
        handleClient={handleClient}
        handleName={handleName}
        handleNumber={handleNumber}
        handlePlatter={handlePlatter}
        field={field}
        name={name}
        client={client}
        number={number}
        platter={platter}
      />

      <Buttons
        handleAdd={handleAdd}
        handleAddItem={handleAddItem}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handlePrint={handlePrint}
        handleExtra={handleExtra}
        saveDisabled={saveDisabled}
        isDisabled={isDisabled}
        editDisabled={editDisabled}
        extraDisabled={extraDisabled}
      />



      <div className='menu'>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{`${formattedDate}`}</p>
        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>{`${tomorrowDay}`}</p>

        <ToastContainer />

        <Menu
          items={items}
        />

      </div>
    </div>
  );

}