import React from "react";

const Input = ({ form, setForm }) => {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <input
        type="text"
        placeholder="Client Name"
        value={form.clientName}
        className="p-2 border rounded-lg text-gray-800 uppercase"
        onChange={(e) => setForm({ ...form, clientName: e.target.value })}
      />

      <input
        type="number"
        placeholder="Pax"
        value={form.pax}
        className="p-2 border rounded-lg text-gray-800 uppercase "
        onChange={(e) => setForm({ ...form, pax: Number(e.target.value) })}
      />

      <select
        value={form.menuName}
        className="px-5 py-2  border rounded-lg text-gray-800 uppercase "
        onChange={(e) => setForm({ ...form, menuName: e.target.value })}>
        <option value="">Select Menu</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>

      <button className="border rounded-lg shadow shadow-gray-300 px-5 py-2 ">
        Add
      </button>
    </div>
  );
};

export default Input;
