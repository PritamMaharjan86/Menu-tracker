//import library
import { useState } from "react";
import Menu from "./Menu";

//import icons
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FiSave } from "react-icons/fi";

export default function Input({ closeInputBox, setOrders }) {
  const [form, setForm] = useState({
    clientName: "",
    pax: "",
    menuName: "",
    platters: [],
  });

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // adding platter
  const addPlatter = () => {
    setForm((prev) => ({
      ...prev,
      platters: [...prev.platters, { pax: "", type: "" }],
    }));
  };

  // remove platter
  const removePlatter = (index) => {
    const updated = [...form.platters];
    updated.splice(index, 1);

    setForm({
      ...form,
      platters: updated,
    });
  };

  // update platter
  const handlePlatterChange = (index, field, value) => {
    const updated = [...form.platters];
    updated[index][field] = value;

    setForm({
      ...form,
      platters: updated,
    });
  };

  // save menu
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

  const PLATTER_TYPES = [
    "PARTY PIES",
    "MEATBALLS",
    "SLICES",
    "FRUITS",
    "SAUSAGE ROLLS",
    "BACON QUICHE",
    "BACON PUFF",
    "SPINACH PUFF",
    "SPRING ROLLS",
    "MUSHROOM ARANCINI",
    "NUGGETS & CHIPS",
    "CALAMARI",
    "SUSHI",
    "ANTIPASTO BOARD",
    "GRISSINI & FOCACCIA",
    "GOURMET BISCUITS",
    "GF BROWNIES",
    "SATAY CHICKEN",
    "SPANOKOPITA",
    "TIROPITA",
    "PREMIUM TARTLET",
    "VEG SAVOURY",
    "VEGAN SAVOURY",
    "GARLIC BREAD",
    "FISH",
    "RICE PAPER ROLLS",
    "PIES & SAUSAGE ROLLS",
    "GF SAVOURY",
    "DIM SIM",
    "PUMPKIN ARANCINI",
    "WEDGES",
    "HOT CHIPS",
    "ASSORTED BISCUITS",
    "PRAWN CUTLET",
    "MINI PIES",
  ];

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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Is there platters for this menu?
              </h3>

              <button
                onClick={addPlatter}
                className="bg-black text-white px-4 py-2 rounded-md flex flex-row items-center gap-3">
                <FaPlus />
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
                      <option value="PARTY PIES">PARTY PIES</option>
                      <option value="MEATBALLS">MEATBALLS</option>
                      <option value="SLICES">SLICES</option>
                      <option value="FRUITS">FRUITS</option>
                      <option value="SAUSAGE ROLLS">SAUSAGE ROLLS</option>
                      <option value="BACON QUICHE">BACON QUICHE</option>
                      <option value="BACON PUFF">BACON PUFF</option>
                      <option value="SPINACH PUFF">SPINACH PUFF</option>
                      <option value="SPRING ROLLS">SPRING ROLLS</option>
                      <option value="MUSHROOM ARANCINI">
                        MUSHROOM ARANCINI
                      </option>
                      <option value="NUGGETS & CHIPS">NUGGETS & CHIPS</option>
                      <option value="CALAMARI">CALAMARI</option>
                      <option value="SUSHI">SUSHI</option>
                      <option value="ANTIPASTO BOARD, GRISSINI & FOCACCIA">
                        ANTIPASTO BOARD, GRISSINI & FOCACCIA
                      </option>
                      <option value="DELUXE MEZZE, OLIVE BREAD">
                        DELUXE MEZZE, OLIVE BREAD
                      </option>
                      <option value="LIGHT MEZZE, OLIVE BREAD">
                        LIGHT MEZZE, OLIVE BREAD
                      </option>
                      <option value="MACARONS">MACARONS</option>
                      <option value="FRUITS">FRUITS</option>
                      <option value="MEATBALLS">MEATBALLS</option>
                      <option value="SLICES">SLICES</option>
                      <option value="SCONES">SCONES</option>
                      <option value="GOURMET BISCUITS">GOURMET BISCUITS</option>
                      <option value="GF BROWNIES">GF BROWNIES</option>
                      <option value="SATAY CHICKEN">SATAY CHICKEN</option>
                      <option value="SPANOKOPITA">SPANOKOPITA</option>
                      <option value="TIROPITA">TIROPITA</option>
                      <option value="PREMIUM TARTLET">PREMIUM TARTLET</option>
                      <option value="VEG SAVOURY">VEG SAVOURY</option>
                      <option value="VEGAN SAVOURY">VEGAN SAVOURY</option>
                      <option value="GARLIC BREAD">GARLIC BREAD</option>
                      <option value="FISH">FISH</option>
                      <option value="RICE PAPER ROLLS">RICE PAPER ROLLS</option>
                      <option value="PIES & SAUSAGE ROLLS">
                        PIES & SAUSAGE ROLLS
                      </option>
                      <option value="GF SAVOURY">GF SAVOURY</option>
                      <option value="DIM SIM">DIM SIM</option>
                      <option value="PUMPKIN ARANCINI">PUMPKIN ARANCINI</option>
                      <option value="WEDGES">WEDGES</option>
                      <option value="HOT CHIPS">HOT CHIPS</option>
                      <option value="ASSORTED BISCUITS">
                        ASSORTED BISCUITS
                      </option>
                      <option value="PRAWN CUTLET">PRAWN CUTLET</option>
                      <option value="MINI PIES">MINI PIES</option>
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
            <FiSave />
            Save Menu
          </button>
        </div>
      </div>
    </div>
  );
}
