import React from "react";

const Table = ({ orders, totals }) => {
  return (
    <div>
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
    </div>
  );
};

export default Table;
