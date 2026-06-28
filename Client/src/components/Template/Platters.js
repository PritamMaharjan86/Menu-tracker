import React from "react";

const Platters = ({ title, orders }) => {
  const isEmpty = !orders || orders.length === 0;

  return (
    <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-3 border-b pb-2">{title}</h3>

      {isEmpty ?
        <p className="text-sm text-gray-400 text-center py-4">
          No orders for this section
        </p>
      : <div className="space-y-3">
          {orders.map((order, i) => (
            <div key={i} className="flex items-center text-sm gap-2">
              {/* LEFT */}
              <div className="font-medium w-[220px] text-center">
                <span className="text-gray-800 uppercase">
                  {order.clientName}
                </span>

                <span className="text-sm text-gray-500 ml-2">
                  {order.menuName} / {Number(order.pax)}
                </span>
              </div>

              {/* RIGHT - MULTIPLE PLATTERS IN ONE LINE */}
              <div className="font-medium text-center uppercase">
                {order.items && order.items.length > 0 ?
                  order.items
                    ?.map((p) => `${p.platterCount} X ${p.platterName}`)
                    .join(", ")
                : "-"}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Platters;
