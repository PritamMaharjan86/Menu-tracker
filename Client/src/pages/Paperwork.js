import React, { useState } from "react";
import Input from "../Components/Input";
import Table from "../Components/Template/Table";
import PlatterSection from "../Components/Template/PlatterSelection";
import CulturalMenu from "../Components/Template/CulturalMenu";
import Menu from "../Components/Menu";

const Paperwork = () => {
  const [showInput, setShowInput] = useState(false);

  // MOVE ORDERS INTO STATE (IMPORTANT FIX)
  const [orders, setOrders] = useState([]);

  const totals = orders.reduce((acc, order) => acc, {
    ham: 0,
    egg: 0,
    beef: 0,
    salmon: 0,
    chicken: 0,
    tuna: 0,
    platters: 0,
    savoury: 0,
  });

  const sectionMap = {
    macaron: "MACARONS",
    fruit: "FRUITS",
    slice: "SLICES",
    meatball: "MEATBALLS",
    scone: "SCONES",
    cream: "CREAM",
    biscuit: "BISCUITS",
    savouryMuffin: "MUFFIN",
    club: "CLUB",
    ribbon: "RIBBON",
  };

  const grouped = {};

  orders.forEach((order) => {
    const menuData = Menu[order.menu]?.(Number(order.pax));
    if (!menuData) return;

    Object.entries(menuData.items || {}).forEach(([key, value]) => {
      const section = sectionMap[key] || "OTHER";

      if (!grouped[section]) grouped[section] = [];

      grouped[section].push({
        client: order.name,
        menu: order.menu,
        pax: order.pax,
        itemName: key,
      });
    });
  });

  return (
    <div className="p-4">
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowInput(true)}
          className="bg-black text-white px-4 py-2 rounded-xl">
          Add Menu
        </button>
      </div>
      {showInput && (
        <Input
          closeInputBox={() => setShowInput(false)}
          setOrders={setOrders}
        />
      )}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center">Paperwork</h2>
      <Table orders={orders} totals={totals} />
      <PlatterSection
        title="FRUITS"
        data={grouped.FRUITS}
        calculation={(item) => item.pax / 25}
        type="LARGE"
      />
      <PlatterSection
        title="MACARONS"
        data={grouped.MACARONS}
        calculation={(item) => item.pax}
        type="PCS"
      />
      <PlatterSection
        title="SLICES"
        data={grouped.SLICES}
        calculation={(item) => item.pax / 10}
        type="LARGE"
      />
      <PlatterSection
        title="MEATBALLS"
        data={grouped.MEATBALLS}
        calculation={(item) => item.pax / 25}
        type="BAGS"
      />
      {/* SCONES */}{" "}
      {grouped.SCONES && (
        <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
          {" "}
          {/* ONLY ONE TITLE */}{" "}
          <h3 className="font-bold text-lg mb-4 border-b pb-2">SCONES</h3>{" "}
          {/* HEADER ROW */}{" "}
          <div className="grid grid-cols-5 text-sm font-bold text-gray-800 mb-3 text-center">
            {" "}
            <span>MENU</span> <span>SCONES</span> <span>CREAM</span>{" "}
            <span>BISCUIT</span> <span>MUFFIN</span>{" "}
          </div>{" "}
          {/* DATA */}{" "}
          <div className="space-y-3">
            {" "}
            {grouped.SCONES.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 text-center items-center text-sm">
                {" "}
                {/* MENU */}{" "}
                <span className="font-medium text-gray-500">
                  {" "}
                  <span className="text-gray-800 mr-3 uppercase">
                    {item.client}
                  </span>{" "}
                  {item.menu} / {item.pax}{" "}
                </span>{" "}
                {/* SCONES */}{" "}
                <span>{((item.pax * 1.5) / 24).toFixed(1)} LARGE</span>{" "}
                {/* CREAM */} <span>{(item.pax / 24).toFixed(1)} LARGE</span>{" "}
                {/* BISCUIT */} <span>{item.pax} PCS</span> {/* MUFFIN */}{" "}
                <span>{item.pax * 1.5} PCS EACH</span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>
      )}
      <CulturalMenu orders={orders} />
    </div>
  );
};

export default Paperwork;
