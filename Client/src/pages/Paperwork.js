import React, { useState } from "react";
import Input from "../components/Input";
import Table from "../components/Template/Sandwich";
import OtherItems from "../components/Template/OtherItems";
import CulturalMenu from "../components/Template/CulturalMenu";
import Platters from "../components/Template/Platters";
import Menu from "../components/Menu";
import { FaPlus } from "react-icons/fa";

const Paperwork = () => {
  const [date, setDate] = useState("");
  const [showInput, setShowInput] = useState(false);

  // MOVE ORDERS INTO STATE
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
    const menuData = Menu[order.menuName]?.(Number(order.pax));

    // to send these items to its own space rather than in the platter section
    const specialSections = {
      FRUITS: "FRUITS",
      MACARONS: "MACARONS",
      SLICES: "SLICES",
      MEATBALLS: "MEATBALLS",
      SCONES: "SCONES",
    };

    if (order.platters && order.platters.length > 0) {
      order.platters.forEach((platter) => {
        const platterType = platter.platterName?.toUpperCase();

        // IF SPECIAL ITEM → SEND TO OWN SECTION
        if (specialSections[platterType]) {
          const section = specialSections[platterType];

          if (!grouped[section]) grouped[section] = [];

          grouped[section].push({
            clientName: order.clientName,
            menuName: order.menuName,
            pax: platter.platterCount,
          });
        }

        // NORMAL PLATTERS
        else {
          if (!grouped.PLATTERS) grouped.PLATTERS = [];

          grouped.PLATTERS.push({
            id: order.id,
            clientName: order.clientName,
            menuName: order.menuName,
            pax: order.pax,
            items: [platter],
          });
        }
      });
    }
    if (!menuData) return;

    Object.entries(menuData.items || {}).forEach(([key, value]) => {
      const section = sectionMap[key] || "OTHER";

      if (!grouped[section]) grouped[section] = [];

      grouped[section].push({
        clientName: order.clientName,
        menuName: order.menuName,
        pax: order.pax,
        itemName: key,
      });
    });
  });

  const isEmpty = !orders || orders.length === 0;

  const dayName =
    date ?
      new Date(date).toLocaleDateString("en-AU", {
        weekday: "long",
      })
    : "";

  return (
    <div className="p-4">
      <div className="flex flex-row justify-between items-center">
        {/* DATE INPUT */}

        <div className="flex flex-row items-center">
          <span className="font-bold text-lg mr-3">Date : </span>
          {date && (
            <span className="text-lg text-gray-800 font-bold mr-2">
              {dayName}
            </span>
          )}

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent font-bold text-lg cursor-pointer"
          />
        </div>

        <button
          onClick={() => setShowInput(true)}
          className="bg-black text-white px-4 py-2 rounded-md flex flex-row items-center gap-2">
          <FaPlus />
        </button>
      </div>

      {showInput && (
        <Input
          closeInputBox={() => setShowInput(false)}
          setOrders={setOrders}
        />
      )}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center">PAPERWORK</h2>
      <Table orders={orders} totals={totals} />
      <OtherItems
        title="FRUITS"
        orders={grouped.FRUITS || []}
        calculation={(item) => item.pax / 25}
        type="LARGE"
      />
      <OtherItems
        title="MACARONS"
        orders={grouped.MACARONS || []}
        calculation={(item) => item.pax}
        type="PCS"
      />
      <OtherItems
        title="SLICES"
        orders={grouped.SLICES || []}
        calculation={(item) => item.pax / 10}
        type="LARGE"
      />
      <OtherItems
        title="MEATBALLS"
        orders={grouped.MEATBALLS || []}
        calculation={(item) => item.pax / 25}
        type="BAGS"
      />

      <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
        <h3 className="font-bold text-lg mb-4 border-b pb-2">SCONES</h3>

        {/* HEADER ROW */}
        <div className="grid grid-cols-5 text-sm font-bold text-gray-800 mb-3 text-center">
          <span>MENU</span>
          <span>SCONES</span>
          <span>CREAM</span>
          <span>BISCUIT</span>
          <span>MUFFIN</span>
        </div>

        {/* DATA */}
        <div className="space-y-3">
          {isEmpty ?
            <p className="text-sm text-gray-400 text-center py-4">
              No orders for this section
            </p>
          : (grouped.SCONES || []).map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 text-center items-center text-sm ">
                {/* MENU */}
                <span className="font-medium text-gray-500">
                  <span className="text-gray-800 mr-3 uppercase">
                    {item.clientName}
                  </span>
                  {item.menuName} / {item.pax}
                </span>

                {/* SCONES */}
                <span>{((item.pax * 1.5) / 24).toFixed(1)} LARGE</span>

                {/* CREAM */}
                <span>{(item.pax / 24).toFixed(1)} LARGE</span>

                {/* BISCUIT */}
                <span>{item.pax} PCS</span>

                {/* MUFFIN */}
                <span>{item.pax * 1.5} PCS EACH</span>
              </div>
            ))
          }
        </div>
      </div>

      <Platters
        title="PLATTERS"
        orders={grouped.PLATTERS || []}
        platterCount={(item) => item.items?.[0]?.platterCount}
        platterName={(item) => item.items?.[0]?.platterName}
      />
      <CulturalMenu orders={orders} />
    </div>
  );
};

export default Paperwork;
