import React from "react";

const OtherItems = ({ title, orders, calculation, type }) => {
  const isEmpty = !orders || orders.length === 0;

  return (
    <div className="mt-10 p-4 ">
      {/* TITLE */}
      <h3 className="font-bold text-lg mb-3 border-b pb-2">{title}</h3>

      {/* EMPTY */}
      {isEmpty ?
        <p className="text-sm text-gray-400 text-center py-4">
          No orders for this section
        </p>
      : <div className="space-y-3">
          {orders.map((order, i) => (
            <div key={i} className="flex items-center text-sm gap-2">
              {/* LEFT */}
              <div className="font-medium w-[220px] text-center">
                <span className="font-medium text-gray-800 leading-snug uppercase">
                  {order.clientName}
                </span>

                <span className="text-sm text-gray-500 ml-2">
                  {order.menuName} / {order.pax}
                </span>
              </div>

              {/* RIGHT */}
              <div className="font-medium text-center uppercase">
                {typeof calculation === "function" ? calculation(order) : 0}{" "}
                {type}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default OtherItems;
