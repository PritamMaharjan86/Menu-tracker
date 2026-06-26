import React, { useState } from "react";
import Input from "../Components/Input";
import Table from "../Components/Template/Table";
import PlatterSection from "../Components/Template/PlatterSelection";
import CulturalMenu from "../Components/Template/CulturalMenu";

const Paperwork = () => {
  const [showInput, setShowInput] = useState(false);

  const orders = [
    {
      id: 1,
      name: "JOHN",
      items: {
        ham: 10,
        egg: 10,
        beef: 5,
        salmon: 5,
        chicken: 15,
        tuna: 5,
        platter: 5,
        savoury: 3,
      },
      platters: {},
      category: "CLUBS",
    },
    {
      id: 2,
      name: "MIKE",
      items: {
        ham: 5,
        egg: 2,
        beef: 3,
        salmon: 0,
        chicken: 8,
        tuna: 1,
        platter: 5,
        savoury: 0,
      },
      platters: {},
      category: "RIBBONS",
    },
    {
      id: 3,
      name: "JOHN",
      items: {
        ham: 10,
        egg: 10,
        beef: 5,
        salmon: 5,
        chicken: 15,
        tuna: 5,
        platter: 5,
        savoury: 3,
      },
      platters: {},

      category: "CLUBS",
    },
  ];

  // TOTALS
  const totals = orders.reduce(
    (acc, order) => {
      acc.ham += order.items.ham;
      acc.egg += order.items.egg;
      acc.beef += order.items.beef;
      acc.salmon += order.items.salmon;
      acc.chicken += order.items.chicken;
      acc.tuna += order.items.tuna;
      acc.platters += order.items.platter;
      acc.savoury += order.items.savoury;
      return acc;
    },
    {
      ham: 0,
      egg: 0,
      beef: 0,
      salmon: 0,
      chicken: 0,
      tuna: 0,
      platters: 0,
      savoury: 0,
    },
  );

  return (
    <div className="p-4">
      {/* BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowInput(true)}
          className="bg-black text-white px-4 py-2 rounded-xl">
          Add Menu
        </button>
      </div>

      {/* MODAL */}
      {showInput && <Input closeInputBox={() => setShowInput(false)} />}

      {/* TITLE */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
        Production Sheet
      </h2>

      {/* TABLE */}
      <Table orders={orders} totals={totals} />

      {/* BEAUTIFUL BOTTOM SECTION */}
      <div className="mt-10 grid grid-row gap-6">
        <PlatterSection
          client="JOHN"
          menu="ASIAN"
          pax={30}
          numberOfItems={2}
          type="LARGE"
          itemName=""
          title="FRUITS"
        />

        <PlatterSection
          client="JOHN"
          menu="ASIAN"
          pax={30}
          numberOfItems={30}
          type="PCS"
          itemName=""
          title="MACARONS"
        />

        <PlatterSection
          client="HARRY"
          menu="ITALIAN"
          pax={50}
          numberOfItems={1.5}
          type="BAGS"
          itemName=""
          title="MEATBALLS"
        />
      </div>

      <div className="mt-10 grid grid-row gap-6">
        <div className="border rounded-xl p-4 bg-white shadow-sm ">
          <h3 className="font-bold text-lg mb-3 border-b pb-1">SCONES</h3>

          <div className="text-sm space-y-2">
            <div className="flex flex-row justify-around">
              {/* Row 1 - EMPTY */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32">MENU</span>
                <span className="w-32 font-medium">Harry A/20</span>
              </p>

              {/* Row 2 - SCONES */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">SCONES</span>
                <span className="w-32 font-medium"> 2 X LARGE</span>
              </p>

              {/* Row 3 - CREAM */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">CREAM</span>
                <span className="w-32 font-medium">1 X LARGE</span>
              </p>

              {/* Row 4 - BISCUITS */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-32 font-medium">BISCUITS</span>
                <span className="w-32 font-medium">30 PCS</span>
              </p>

              {/* Row 5 - SAVOURY MUFFINS */}
              <p className="flex flex-col items-center gap-2">
                <span className="w-40 font-medium">SAVOURY MUFFINS</span>
                <span className="w-32 font-medium">45 EACH</span>
              </p>
            </div>
          </div>
        </div>

        <PlatterSection
          client="HARRY"
          menu="ITALIAN"
          pax={50}
          numberOfItems={1.5}
          type="PCS"
          itemName="BACON QUICHE"
          title="PLATTERS"
        />

        {/*Cultural menu */}
        <CulturalMenu
          client="Robin"
          menu="Greek Deluxe"
          pax="50"
          menuDetail="1 TRADITIONAL CURED MEATS (MORTADELLA, PROSCUITTO DI PARMA &
            CALABRESE SALAMI) ITALIAN CHEESE (PROVOLONE & PECORINO) OLIVES &
            GIARDINERA. FOCCACIA, GRISSINI, PORK CHIPOLATA 50 W/ SALSA ROSSA,
            CALAMARI RINGS 100, PASTIZZI 50, MUSHROOM ARANCHINI 50, PUMPKIN
            ARANCHINI 50, MEATBALL 2 BAGS W/NAPOLI SAUCE, FISH 100, CANNOLI 50,
            1 TARTARE SAUCE + OLIVE OIL + BALSAMIC VINEGAR"
        />
      </div>
    </div>
  );
};

export default Paperwork;
