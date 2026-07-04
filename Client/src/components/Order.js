import React from "react";

const Order = ({ clientName, menuName, pax, items = [] }) => {
  const slices = items.filter((item) => item.name === "slice");

  const totalQty = slices.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="uppercase p-2 m-4">
      {/* TITLE ONCE */}
      {slices.length > 0 && (
        <>
          <h1 className="font-bold mb-2">SLICES</h1>

          {/* ALL ORDERS BELOW TITLE */}
          {slices.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span>
                {item.clientName || clientName} {menuName}/{pax}
              </span>

              <span>{item.qty}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Order;
