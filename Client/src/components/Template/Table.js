import React from "react";
import Menu from "../Menu";

const Table = ({ orders }) => {
  const clubRows = [];
  const ribbonRows = [];
  const savouryRows = [];

  const functionSet = new Set();

  let totalHam = 0;
  let totalEgg = 0;
  let totalBeef = 0;
  let totalSalmon = 0;
  let totalChicken = 0;
  let totalTuna = 0;
  let totalPlatter = 0;
  let totalSavoury = 0;

  orders.forEach((order) => {
    const menuData = Menu[order.menu]?.(Number(order.pax));

    if (!menuData?.items) return;

    const items = menuData.items;

    // SAVOURY (MENU B ONLY)
    if (items.savouryPlatter && order.menu === "B") {
      functionSet.add("savoury");

      savouryRows.push({
        id: order.id,
        name: order.name,
        menu: order.menu,
        pax: order.pax,
        items,
        platters: Math.ceil(order.pax / 10),
      });
    }

    // CLUB
    if (items.club) {
      functionSet.add("club");

      clubRows.push({
        id: order.id,
        name: order.name,
        menu: order.menu,
        pax: order.pax,
        items,
        platters: Math.ceil(order.pax / 10),
      });
    }

    // RIBBON
    if (items.ribbon) {
      functionSet.add("ribbon");

      ribbonRows.push({
        id: order.id,
        name: order.name,
        menu: order.menu,
        pax: order.pax,
        items,
        platters: Math.ceil(order.pax / 30),
      });
    }

    // TOTALS
    totalHam += items.ham || 0;
    totalEgg += items.egg || 0;
    totalBeef += items.beef || 0;
    totalSalmon += items.salmon || 0;
    totalChicken += items.chicken || 0;
    totalTuna += items.tuna || 0;
    totalPlatter += items.platter || 0;
    totalSavoury += items.savouryPlatter || 0;
  });

  const lunchBoxTotal = functionSet.size * 2;

  return (
    <div>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-yellow-400">
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
          {clubRows.length > 0 && (
            <>
              <tr className="bg-gray-100 font-bold">
                <td colSpan="10" className="border p-2 text-left">
                  CLUBS
                </td>
              </tr>

              {clubRows.map((o) => (
                <tr key={o.id}>
                  <td></td>

                  <td className="border p-2 text-center uppercase">
                    {o.name} {o.menu} / {o.pax}
                  </td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 1}</td>

                  <td className="border p-2 text-center">{o.platters * 1}</td>

                  <td className="border p-2 text-center">{o.platters * 3}</td>

                  <td className="border p-2 text-center">{o.platters * 1}</td>

                  <td className="border p-2 text-center">{o.platters}</td>

                  <td className="border p-2 text-center">{o.pax / 10 || 0}</td>
                </tr>
              ))}
            </>
          )}

          {/* RIBBONS */}
          {ribbonRows.length > 0 && (
            <>
              <tr className="bg-gray-100 font-bold">
                <td colSpan="10" className="border p-2 text-left">
                  RIBBONS
                </td>
              </tr>

              {ribbonRows.map((o) => (
                <tr key={o.id}>
                  <td></td>

                  <td className="border p-2 text-center uppercase">
                    {o.name} {o.menu} / {o.pax}
                  </td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters * 2}</td>

                  <td className="border p-2 text-center">{o.platters}</td>

                  <td className="border p-2 text-center">-</td>
                </tr>
              ))}
            </>
          )}

          {/* SAVOURY */}
          {savouryRows.length > 0 && (
            <>
              <tr className="bg-gray-100 font-bold">
                <td colSpan="10" className="border p-2 text-left">
                  SAVOURY
                </td>
              </tr>

              {savouryRows.map((o) => (
                <tr key={o.id}>
                  <td></td>

                  <td className="border p-2 text-center uppercase">
                    {o.name} {o.menu} / {o.pax}
                  </td>

                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>
                  <td className="border p-2 text-center">-</td>

                  <td className="border p-2 text-center">
                    {Math.ceil(o.pax / 10)}
                  </td>
                </tr>
              ))}
            </>
          )}

          {/* LUNCH BOX */}
          {(clubRows.length > 0 ||
            ribbonRows.length > 0 ||
            savouryRows.length > 0) && (
            <tr className="bg-gray-200 text-black font-medium">
              <td className="border p-2 text-left font-bold">LUNCH BOX</td>

              <td className="border p-2 text-center">-</td>

              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>

              <td className="border p-2 text-center">{lunchBoxTotal}</td>

              <td className="border p-2 text-center">-</td>
            </tr>
          )}

          {/* TOTAL */}
          <tr className="bg-green-500 font-bold">
            <td className="border p-2 text-left">TOTAL</td>

            <td className="border p-2 text-center">-</td>

            <td className="border p-2 text-center">{totalHam}</td>
            <td className="border p-2 text-center">{totalEgg}</td>
            <td className="border p-2 text-center">{totalBeef}</td>
            <td className="border p-2 text-center">{totalSalmon}</td>
            <td className="border p-2 text-center">{totalChicken}</td>
            <td className="border p-2 text-center">{totalTuna}</td>
            <td className="border p-2 text-center">{totalPlatter}</td>
            <td className="border p-2 text-center">{totalSavoury}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
