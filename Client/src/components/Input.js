import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegSave, FaPlus, FaTrash } from "react-icons/fa";
import Menu from "./Menu";

export default function Input({ closeInputBox, setOrders }) {
  const [form, setForm] = useState({
    clientName: "",
    pax: "",
    menuName: "",
    platters: [],
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD PLATTER
  const addPlatter = () => {
    setForm((prev) => ({
      ...prev,
      platters: [...prev.platters, { pax: "", type: "" }],
    }));
  };

  // REMOVE PLATTER
  const removePlatter = (index) => {
    const updated = [...form.platters];
    updated.splice(index, 1);

    setForm({
      ...form,
      platters: updated,
    });
  };

  // UPDATE PLATTER
  const handlePlatterChange = (index, field, value) => {
    const updated = [...form.platters];
    updated[index][field] = value;

    setForm({
      ...form,
      platters: updated,
    });
  };

  // SAVE TO PAPERWORK
  const handleSave = () => {
    const paxNumber = Number(form.pax);

    if (!form.clientName || !form.menuName || !paxNumber) return;

    const menuData = Menu?.[form.menuName]?.(paxNumber);
    if (!menuData) return;

    const newOrder = {
      id: Date.now(),
      clientName: form.clientName,
      pax: paxNumber,
      menuName: form.menuName,
      items: menuData.items,
      platters: form.platters.map((p) => ({
        platterName: p.type,
        platterCount: Number(p.pax),
      })),
    };

    setOrders((prev) => [...prev, newOrder]);

    closeInputBox();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2">
            <h2 className="text-2xl font-bold">Add Menu</h2>

            <IoMdClose
              onClick={closeInputBox}
              className="text-2xl cursor-pointer hover:text-red-500"
            />
          </div>

          {/* NAME */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Client Name</label>
            <input
              name="clientName"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl uppercase"
            />
          </div>

          {/* PAX */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Number of People</label>
            <input
              name="pax"
              type="number"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl"
            />
          </div>

          {/* MENU */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Menu</label>

            <select
              name="menuName"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl">
              <option value="">Select Menu</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="ITALIAN">ITALIAN</option>
              <option value="DELUXE">DELUXE</option>
              <option value="LIGHT">LIGHT</option>
              <option value="ASIAN">ASIAN</option>
            </select>
          </div>

          {/* PLATTERS */}
          <div className="mt-6">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Platters ? </h3>

              <button
                onClick={addPlatter}
                className="bg-black text-white px-4 py-2 rounded-md flex flex-row items-center gap-3">
                <FaPlus /> Add Platter
              </button>
            </div>

            {form.platters.length === 0 ?
              <p className="text-sm text-gray-400 text-center py-4">
                No platters added
              </p>
            : <div className="space-y-4">
                {form.platters.map((platter, index) => (
                  <div key={index} className="border p-4 rounded-xl bg-gray-50">
                    <div className="flex justify-between mb-3">
                      <span>Platter {index + 1}</span>

                      <button onClick={() => removePlatter(index)}>
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>

                    <input
                      type="number"
                      placeholder="Pax"
                      value={platter.pax}
                      onChange={(e) =>
                        handlePlatterChange(index, "pax", e.target.value)
                      }
                      className="border w-full p-2 mb-2 rounded"
                    />

                    <select
                      value={platter.type}
                      onChange={(e) =>
                        handlePlatterChange(index, "type", e.target.value)
                      }
                      className="border w-full p-2 rounded">
                      <option value="">Select Type</option>
                      <option value="Fruit">Fruit</option>
                      <option value="Seafood">Seafood</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                  </div>
                ))}
              </div>
            }
          </div>

          {/* SAVE */}
          <button
            onClick={handleSave}
            className="w-full mt-8 bg-black text-white p-3 rounded-xl flex items-center justify-center gap-2">
            <FaRegSave />
            Save Menu
          </button>
        </div>
      </div>
    </div>
  );
}
