import React, { useState } from "react";
import Input from "./components/Input";

const Paperwork = () => {
  const [showInput, setShowInput] = useState(false);

  const orders = [
    {
      id: 1,
      name: "JOHN",
      items: {
        ham: 10,
        egg: 10,
        beef: 5,
        salmon: 5,
        chicken: 15,
        tuna: 5,
        platter: 5,
        savoury: 3,
      },
      platters: {},
      category: "CLUBS",
    },
    {
      id: 2,
      name: "MIKE",
      items: {
        ham: 5,
        egg: 2,
        beef: 3,
        salmon: 0,
        chicken: 8,
        tuna: 1,
        platter: 5,
        savoury: 0,
      },
      platters: {},
      category: "RIBBONS",
    },
    {
      id: 3,
      name: "JOHN",
      items: {
        ham: 10,
        egg: 10,
        beef: 5,
        salmon: 5,
        chicken: 15,
        tuna: 5,
        platter: 5,
        savoury: 3,
      },
      platters: {},

      category: "CLUBS",
    },
  ];

  // TOTALS
  const totals = orders.reduce(
    (acc, order) => {
      acc.ham += order.items.ham;
      acc.egg += order.items.egg;
      acc.beef += order.items.beef;
      acc.salmon += order.items.salmon;
      acc.chicken += order.items.chicken;
      acc.tuna += order.items.tuna;
      acc.platters += order.items.platter;
      acc.savoury += order.items.savoury;
      return acc;
    },
    {
      ham: 0,
      egg: 0,
      beef: 0,
      salmon: 0,
      chicken: 0,
      tuna: 0,
      platters: 0,
      savoury: 0,
    },
  );

  return (
    <div className="p-4">
      {/* BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowInput(true)}
          className="bg-black text-white px-4 py-2 rounded-xl">
          Add Menu
        </button>
      </div>

      {/* MODAL */}
      {showInput && <Input closeInputBox={() => setShowInput(false)} />}

      {/* TITLE */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
        Sandwich Production Sheet
      </h2>

      {/* TABLE */}
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-center">Sandwich</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Ham</th>
            <th className="border p-2 text-center">Egg</th>
            <th className="border p-2 text-center">Beef</th>
            <th className="border p-2 text-center">Salmon</th>
            <th className="border p-2 text-center">Chicken</th>
            <th className="border p-2 text-center">Tuna</th>
            <th className="border p-2 text-center">Platters</th>
            <th className="border p-2 text-center">Savoury</th>
          </tr>
        </thead>

        <tbody>
          {/* CLUBS */}
          <tr className="bg-gray-100 font-bold">
            <td className="border p-2 text-left" colSpan="10">
              CLUBS
            </td>
          </tr>

          {orders
            .filter((o) => o.category === "CLUBS")
            .map((o) => (
              <tr key={o.id}>
                <td className="border p-2 text-center"></td>
                <td className="border p-2 text-center">{o.name}</td>
                <td className="border p-2 text-center">{o.items.ham}</td>
                <td className="border p-2 text-center">{o.items.egg}</td>
                <td className="border p-2 text-center">{o.items.beef}</td>
                <td className="border p-2 text-center">{o.items.salmon}</td>
                <td className="border p-2 text-center">{o.items.chicken}</td>
                <td className="border p-2 text-center">{o.items.tuna}</td>
                <td className="border p-2 text-center">{o.items.platter}</td>
                <td className="border p-2 text-center">{o.items.savoury}</td>
              </tr>
            ))}

          {/* RIBBONS */}
          <tr className="bg-gray-100 font-bold">
            <td className="border p-2 text-left" colSpan="10">
              RIBBONS
            </td>
          </tr>

          {orders
            .filter((o) => o.category === "RIBBONS")
            .map((o) => (
              <tr key={o.id}>
                <td className="border p-2 text-center"></td>
                <td className="border p-2 text-center">{o.name}</td>
                <td className="border p-2 text-center">{o.items.ham}</td>
                <td className="border p-2 text-center">{o.items.egg}</td>
                <td className="border p-2 text-center">{o.items.beef}</td>
                <td className="border p-2 text-center">{o.items.salmon}</td>
                <td className="border p-2 text-center">{o.items.chicken}</td>
                <td className="border p-2 text-center">{o.items.tuna}</td>
                <td className="border p-2 text-center">{o.items.platter}</td>
                <td className="border p-2 text-center">{o.items.savoury}</td>
              </tr>
            ))}

          {/* TOTAL */}
          <tr className="bg-black text-white font-bold">
            <td className="border p-2 text-center">TOTAL</td>
            <td className="border p-2 text-center">-</td>
            <td className="border p-2 text-center">{totals.ham}</td>
            <td className="border p-2 text-center">{totals.egg}</td>
            <td className="border p-2 text-center">{totals.beef}</td>
            <td className="border p-2 text-center">{totals.salmon}</td>
            <td className="border p-2 text-center">{totals.chicken}</td>
            <td className="border p-2 text-center">{totals.tuna}</td>
            <td className="border p-2 text-center">{totals.platters}</td>
            <td className="border p-2 text-center">{totals.savoury}</td>
          </tr>
        </tbody>
      </table>

      {/* BEAUTIFUL BOTTOM SECTION */}
      <div className="mt-10 grid grid-cols-2 gap-6">
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Fruits</h3>
          <div className="text-sm">
            <p className="flex flex-row items-center gap-2">
              <span>JOHN ASIAN / 25</span> - <span>2 X LARGE</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span>ASHLEY D / 100</span> - <span>5 X LARGE</span>
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Macarons</h3>
          <div className="text-sm space-y-1">
            <p className="flex flex-row items-center gap-2">
              <span>JOHN ASIAN / 25</span> - <span>40 PCS</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span>ASHLEY D / 100</span> - <span>100 PCS</span>
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Slices</h3>
          <div className="text-sm space-y-1">
            <p className="flex flex-row items-center gap-2">
              <span>JOHN ASIAN / 25</span> - <span>2 X LARGE</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span>ASHLEY D / 100</span> - <span>5 X LARGE</span>
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Meatballs</h3>
          <div className="text-sm space-y-1">
            <p className="flex flex-row items-center gap-2">
              <span>JOHN ASIAN / 25</span> - <span>2 BAGS</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span>ASHLEY D / 100</span> - <span>5 BAGS</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-row gap-6">
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-3 border-b pb-1">Scones</h3>

          <div className="text-sm space-y-2">
            <div className="flex flex-row">
              {/* Row 1 - EMPTY */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32">Menu</span>
                <span className="w-32 font-medium">Harry A/20</span>
              </p>

              {/* Row 2 - SCONES */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">Scones</span>
                <span className="w-32 font-medium"> 2 X LARGE</span>
              </p>

              {/* Row 3 - CREAM */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">Cream</span>
                <span className="w-32 font-medium">1 X LARGE</span>
              </p>

              {/* Row 4 - BISCUITS */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">Biscuits</span>
                <span className="w-32 font-medium">30 PCS</span>
              </p>

              {/* Row 5 - SAVOURY MUFFINS */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">Savoury Muffins</span>
                <span className="w-32 font-medium">45 EACH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Platters</h3>
          <div className="text-sm space-y-1">
            <p className="flex flex-row items-center gap-2">
              <span>JOHN ASIAN / 25</span> - <span>2 X LARGE</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span>ASHLEY D / 100</span> - <span>5 X LARGE</span>
            </p>
          </div>
        </div>

        <div className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2 border-b pb-1">Cultural</h3>
          <div className="text-sm space-y-1 flex flex-col justify-evenly gap-10">
            <p className="flex flex-row items-center gap-10">
              <span>JOHN ASIAN / 25</span> -{" "}
              <span className="w-1/2 leading-relaxed">
                25 X FISH, 25 X DIMSIM, 25 X PRAWN CUTLET, 50 X SPRING ROLL, 25
                X SATAY CHICKEN, 25 X GYOZA{" "}
              </span>
            </p>
            <p className="flex flex-row items-center gap-10">
              <span>JOHN ITALIAN / 50</span> -{" "}
              <span className="w-1/2 leading-relaxed">
                1 TRADITIONAL CURED MEATS (MORTADELLA, PROSCUITTO DI PARMA &
                CALABRESE SALAMI) ITALIAN CHEESE (PROVOLONE & PECORINO) OLIVES &
                GIARDINERA. FOCCACIA, GRISSINI, PORK CHIPOLATA 50 W/ SALSA
                ROSSA, CALAMARI RINGS 100, PASTIZZI 50, MUSHROOM ARANCHINI 50,
                PUMPKIN ARANCHINI 50, MEATBALL 2 BAGS W/NAPOLI SAUCE, FISH 100,
                CANNOLI 50, 1 TARTARE SAUCE + OLIVE OIL + BALSAMIC VINEGAR{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paperwork;
