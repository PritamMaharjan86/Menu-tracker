import React from "react";
import Menu from "../Menu";

const CulturalMenu = ({ orders }) => {
  const allowedMenus = ["ASIAN", "ITALIAN", "DELUXE", "LIGHT"]; //to only allow this menu in cultural section

  const excludedItems = ["club", "ribbon", "fruit", "macaron", "slice"]; //to exclude in cultural section

  const isEmpty = !orders || orders.length === 0; //to check if there is orders or not

  return (
    <div className="mt-10 border rounded-xl p-6 bg-white shadow-sm">
      {/*title */}
      <h3 className="font-bold text-lg mb-4 border-b pb-2">CULTURAL MENU</h3>

      {/*if there is no orders*/}
      {isEmpty ?
        <p className="text-sm text-gray-400 text-center py-4">
          No orders for this section
        </p>
      : <div className="space-y-3">
          {/* filter orders */}
          {orders
            .filter((order) => allowedMenus.includes(order.menuName))
            .map((order, i) => {
              //to get menu data from menu
              const menuData = Menu[order.menuName]?.(Number(order.pax));

              if (!menuData) return null; //if there is no menu

              //remove excluded items
              const filteredItems = Object.entries(menuData.items || {}).filter(
                ([key]) => !excludedItems.includes(key.toLowerCase()),
              );

              if (filteredItems.length === 0) return null; //if nothing is left then skip the order

              return (
                <div
                  key={i}
                  className="grid grid-cols-[220px_1fr] gap-4 items-center border-b pb-2">
                  {/* LEFT: CLIENT + MENU */}
                  <div className="font-medium text-sm text-gray-800 leading-snug uppercase">
                    {order.clientName}
                    {"  "}
                    <span className="text-sm text-gray-500 ml-2">
                      {order.menuName} / {order.pax}
                    </span>
                  </div>

                  {/* RIGHT INLINE ITEMS */}
                  <div className="text-sm text-gray-700 flex flex-wrap gap-2">
                    {filteredItems.map(([key, value]) => (
                      <span key={key} className="whitespace-nowrap">
                        <span className="font-semibold uppercase">{value}</span>{" "}
                        x <span className="uppercase">{key}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      }
    </div>
  );
};

export default CulturalMenu;
