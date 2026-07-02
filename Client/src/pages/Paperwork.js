import React, { useState } from "react";
import Input from "../components/Input";
import Order from "../components/Order";
import Menu from "../components/Menu";

const Paperwork = () => {
  const [form, setForm] = useState({
    clientName: "",
    menuName: "",
    pax: "",
  });

  const [orders, setOrders] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); //stop page from reloading after form submit

    if (!form.menuName || !form.pax) return; //to check if the form is left empty then stop function

    const items = Menu(form.menuName, form.pax);

    const newOrder = {
      clientName: form.clientName,
      menuName: form.menuName,
      pax: form.pax,
      items,
    };

    setOrders((prev) => [...prev, newOrder]);

    setForm({
      clientName: "",
      menuName: "",
      pax: "",
    });
  };

  return (
    <div>
      <Input form={form} setForm={setForm} handleSubmit={handleSubmit} />

      {orders.map((order, index) => (
        <Order
          key={index}
          clientName={order.clientName}
          menuName={order.menuName}
          pax={order.pax}
          items={order.items}
        />
      ))}
    </div>
  );
};

export default Paperwork;
