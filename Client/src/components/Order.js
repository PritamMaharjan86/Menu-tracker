import React from "react";

const Order = ({ clientName, menuName, pax, items = [] }) => {
  return (
    <div className="uppercase border-t p-2 m-4">
      <table className="w-full border-collapse table-fixed">
        <thead className="border-b">
          {/* Header row */}
          <tr>
            <th
              colSpan={3}
              className="text-left bg-yellow-300 py-1 px-2 text-md font-bold">
              {clientName} {menuName}/{pax}
            </th>
          </tr>

          {/* Column titles */}
          <tr>
            <th className="text-center py-2">Items</th>
            <th className="text-center py-2">Quantity</th>
            <th className="text-center py-2">Serving</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="text-center py-1 text-sm">{item.name}</td>

              <td className="text-center py-1 text-sm">{item.qty}</td>

              <td className="text-center py-1 text-sm">{item.serving}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
