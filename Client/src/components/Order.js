import React from "react";
import Section from "./Section";

const Order = ({ orders = [] }) => {
  const groupedItems = {};
  const culturalOrders = [];
  const sconeOrders = [];

  orders.forEach((order) => {
    // Cultural menus
    const isCultural =
      order.menuName === "DELUXE" ||
      order.menuName === "ITALIAN" ||
      order.menuName === "ASIAN" ||
      order.menuName === "LIGHT";

    const isScones = order.menuName === "A";

    if (isCultural) {
      culturalOrders.push(order);
    } else if (isScones) {
      sconeOrders.push(order);
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
                <span key={i} className="mr-2 tracking-tight text-sm">
                  <span className="font-semibold">
                    {item.qty} {item.serving}
                  </span>
                  {""} X {item.name}
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

      {sconeOrders.length > 0 && (
        <div className="mb-6">
          <h1 className="font-bold text-lg mb-3">SCONES</h1>

          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 w-64"></th>
                <th className="text-center p-2">Scones</th>
                <th className="text-center p-2">Creams</th>
                <th className="text-center p-2">Biscuits</th>
                <th className="text-center p-2">Muffins</th>
              </tr>
            </thead>

            <tbody>
              {sconeOrders.map((order, index) => {
                const scone = order.items.find((item) => item.name === "scone");
                const cream = order.items.find((item) => item.name === "cream");
                const biscuit = order.items.find(
                  (item) => item.name === "biscuit",
                );
                const muffin = order.items.find(
                  (item) => item.name === "muffin",
                );

                return (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      {order.clientName} {order.menuName}/{order.pax}
                    </td>
                    <td className="text-center p-2">
                      {scone ? `${scone.qty} ${scone.serving}` : "-"}
                    </td>
                    <td className="text-center p-2">
                      {cream ? `${cream.qty} ${cream.serving}` : "-"}
                    </td>
                    <td className="text-center p-2">
                      {biscuit ? `${biscuit.qty} ${biscuit.serving}` : "-"}
                    </td>
                    <td className="text-center p-2">
                      {muffin ? `${muffin.qty} ${muffin.serving}` : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
