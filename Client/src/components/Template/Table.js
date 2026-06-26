import React from "react";

const Table = ({ orders, totals }) => {
  return (
    <div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-center">SANDWICH</th>
            <th className="border p-2 text-center">NAME</th>
            <th className="border p-2 text-center">HAM</th>
            <th className="border p-2 text-center">EGG</th>
            <th className="border p-2 text-center">BEEF</th>
            <th className="border p-2 text-center">SALMON</th>
            <th className="border p-2 text-center">CHICKEN</th>
            <th className="border p-2 text-center">TUNA</th>
            <th className="border p-2 text-center">PLATTER</th>
            <th className="border p-2 text-center">SAVOURY</th>
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

          {/* LUNCH BOX */}
          <tr className="bg-gray-100 font-bold">
            <td className="border p-2 text-left" colSpan="10">
              LUNCH BOXES
            </td>
          </tr>

          <tr>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
            <td className="border p-2 text-center"></td>
          </tr>

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
