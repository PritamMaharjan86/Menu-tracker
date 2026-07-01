import React from "react";

const Input = ({ form, setForm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Client Name"
        value={form.clientName}
        onChange={(e) => setForm({ ...form, clientName: e.target.value })}
      />

      <input
        type="number"
        placeholder="Pax"
        value={form.pax}
        onChange={(e) => setForm({ ...form, pax: Number(e.target.value) })}
      />

      <select
        value={form.menuName}
        onChange={(e) => setForm({ ...form, menuName: e.target.value })}>
        <option value="">Select Menu</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>
    </div>
  );
};

export default Input;
