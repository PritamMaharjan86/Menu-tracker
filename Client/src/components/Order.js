import React from "react";
import Section from "./Section";

const Order = ({ orders = [] }) => {
  //group items
  const groupedItems = {};

  //for each loop to go through every order
  orders.forEach((order) => {
    //create array if item type doesn't exist
    order.items.forEach((item) => {
      if (!groupedItems[item.name]) {
        groupedItems[item.name] = [];
      }

      //to push the item into correct group with its info
      groupedItems[item.name].push({
        ...item,
        clientName: order.clientName,
        menuName: order.menuName,
        pax: order.pax,
      });
    });
  });

  return (
    <div className="uppercase p-2 m-4">
      {/* loop through group items */}
      {Object.entries(groupedItems).map(([itemName, itemOrders]) => (
        <div key={itemName} className="mb-6">
          <h1 className="font-bold text-lg">{itemName}</h1>

          <Section orders={itemOrders} />
        </div>
      ))}
    </div>
  );
};

export default Order;
