import React from "react";
import Section from "./Section";

const Order = ({ orders = [] }) => {
  const groupedItems = {};
  const culturalOrders = [];

  orders.forEach((order) => {
    // Cultural menus
    const isCultural =
      order.menuName?.toLowerCase().includes("deluxe") ||
      order.menuName?.toLowerCase().includes("italian") ||
      order.menuName?.toLowerCase().includes("asian") ||
      order.menuName?.toLowerCase().includes("light");

    if (isCultural) {
      culturalOrders.push(order);
    } else {
      // Normal menu grouping
      order.items.forEach((item) => {
        if (!groupedItems[item.name]) {
          groupedItems[item.name] = [];
        }

        groupedItems[item.name].push({
          ...item,
          clientName: order.clientName,
          menuName: order.menuName,
          pax: order.pax,
        });
      });
    }
  });

  return (
    <div className="uppercase p-2 m-4">
      {/* NORMAL ITEMS */}

      {Object.entries(groupedItems).map(([itemName, itemOrders]) => (
        <div key={itemName} className="mb-6">
          <h1 className="font-bold text-lg">{itemName}</h1>

          <Section orders={itemOrders} />
        </div>
      ))}

      {/* CULTURAL SECTION */}

      {culturalOrders.length > 0 && (
        <div className="mb-6">
          <h1 className="font-bold text-lg mb-3">CULTURAL</h1>

          {culturalOrders.map((order, index) => (
            <div key={index} className="border rounded-lg p-3 mb-4">
              <h2 className="font-semibold mb-2">
                {order.clientName} {order.menuName}/{order.pax}
              </h2>

              {order.items.map((item, i) => (
                <span key={i} className="mr-2 tracking-wide">
                  {item.name} x{" "}
                  <span className="font-semibold">
                    {item.qty} {item.serving}
                  </span>{" "}
                  {i !== order.items.length - 1 && (
                    <>
                      <span>,</span>
                    </>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
