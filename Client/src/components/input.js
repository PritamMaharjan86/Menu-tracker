import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegSave, FaPlus, FaTrash } from "react-icons/fa";
import Menu from "./Menu";

export default function Input({ closeInputBox, setOrders }) {
  const [form, setForm] = useState({
    name: "",
    pax: "",
    menu: "",
    platters: [],
  });

  const [hasPlatter, setHasPlatter] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add platter
  const addPlatter = () => {
    setForm({
      ...form,
      platters: [
        ...form.platters,
        {
          pax: "",
          type: "",
        },
      ],
    });
  };

  // Remove platter
  const removePlatter = (index) => {
    const updated = [...form.platters];
    updated.splice(index, 1);

    setForm({
      ...form,
      platters: updated,
    });

    if (updated.length === 0) {
      setHasPlatter(false);
    }
  };

  // Update platter fields
  const handlePlatterChange = (index, field, value) => {
    const updated = [...form.platters];
    updated[index][field] = value;

    setForm({
      ...form,
      platters: updated,
    });
  };

  // SAFE SAVE FUNCTION
  const handleSave = () => {
    const paxNumber = Number(form.pax);

    const menuData = Menu?.[form.menu]?.(paxNumber);

    if (!menuData) return;

    const newOrder = {
      id: Date.now(),
      name: form.name,
      pax: paxNumber,
      menu: form.menu,
      ...menuData,
    };

    setOrders((prev) => [...prev, newOrder]);
    closeInputBox();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2 z-10">
            <h2 className="text-2xl font-bold">Add Menu</h2>

            <IoMdClose
              onClick={closeInputBox}
              className="text-2xl cursor-pointer hover:text-red-500 transition"
            />
          </div>

          {/* CLIENT NAME */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Client Name</label>

            <input
              name="name"
              placeholder="Enter client name"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 uppercase"
            />
          </div>

          {/* PAX */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Number of People</label>

            <input
              name="pax"
              type="number"
              placeholder="Enter pax"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* MENU */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Menu</label>

            <select
              name="menu"
              onChange={handleChange}
              className="border w-full p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Menu</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>

          {/* PLATTERS */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Platters</h3>

              {!hasPlatter && (
                <button
                  onClick={() => {
                    setHasPlatter(true);
                    addPlatter();
                  }}
                  className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
                  Add Platter
                </button>
              )}
            </div>

            {hasPlatter && (
              <div className="space-y-4">
                {form.platters.map((platter, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">Platter {index + 1}</h4>

                      <button
                        onClick={() => removePlatter(index)}
                        className="text-red-500">
                        <FaTrash />
                      </button>
                    </div>

                    <input
                      type="number"
                      placeholder="Platter Pax"
                      value={platter.pax}
                      onChange={(e) =>
                        handlePlatterChange(index, "pax", e.target.value)
                      }
                      className="border w-full p-3 rounded-xl mb-3"
                    />

                    <select
                      value={platter.type}
                      onChange={(e) =>
                        handlePlatterChange(index, "type", e.target.value)
                      }
                      className="border w-full p-3 rounded-xl">
                      <option value="">Select Platter</option>
                      <option value="Fruit Platter">Fruit Platter</option>
                      <option value="Seafood Platter">Seafood Platter</option>
                      <option value="Dessert Platter">Dessert Platter</option>
                      <option value="Cheese Platter">Cheese Platter</option>
                    </select>
                  </div>
                ))}

                <button
                  onClick={addPlatter}
                  className="w-full bg-blue-600 text-white p-3 rounded-xl">
                  <FaPlus /> Add Another Platter
                </button>
              </div>
            )}
          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-3 mt-8 w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition font-medium">
            <FaRegSave />
            Save Menu
          </button>
        </div>
      </div>
    </div>
  );
}
