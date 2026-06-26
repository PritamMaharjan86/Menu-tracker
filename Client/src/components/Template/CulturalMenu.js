import React from "react";
import Menu from "../Menu";

const CulturalMenu = ({ orders }) => {
  const allowedMenus = ["ASIAN", "ITALIAN", "DELUXE", "LIGHT"];

  // ❌ items to exclude from cultural display
  const excludedItems = ["sandwich", "ribbon", "fruit", "macaron"];

  return (
    <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-4 border-b pb-2">CULTURAL MENU</h3>

      <div className="space-y-3">
        {orders
          .filter((order) => allowedMenus.includes(order.menu))
          .map((order, i) => {
            const menuData = Menu[order.menu]?.(Number(order.pax));

            if (!menuData) return null;

            // filter out unwanted items
            const filteredItems = Object.entries(menuData.items || {}).filter(
              ([key]) => !excludedItems.includes(key.toLowerCase()),
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={i} className="grid grid-cols-2 gap-4 mt-6">
                {/* CLIENT + MENU */}
                <div className="font-medium">
                  {order.name} {order.menu} / {order.pax}
                </div>

                {/* ITEMS */}
                <div className="text-sm flex flex-wrap gap-2">
                  {filteredItems.map(([key, value]) => (
                    <span key={key}>
                      {value} x <span className="uppercase">{key}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CulturalMenu;
