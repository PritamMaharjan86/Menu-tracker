import React, { useState } from "react";
import Input from "../components/Input";
import Sandwich from "../components/Sandwich";
import Menu from "../components/Menu";

const Paperwork = () => {
  const [form, setForm] = useState({
    clientName: "",
    menuName: "",
    pax: "",
  });

  const calculatedItems = Menu(form.menuName, form.pax);

  return (
    <div>
      <Input form={form} setForm={setForm} />

      <Sandwich
        clientName={form.clientName}
        menuName={form.menuName}
        pax={form.pax}
        items={calculatedItems}
      />
    </div>
  );
};

export default Paperwork;
