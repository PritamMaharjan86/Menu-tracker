import React from "react";

const CulturalMenu = ({ menuDetail, client, menu, pax }) => {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-2 border-b pb-1">Cultural</h3>
      <div className="text-sm space-y-1 flex flex-col justify-evenly gap-10">
        <p className="flex flex-row items-center gap-10">
          <span>
            {client} {menu} / {pax}
          </span>{" "}
          - <span className="w-1/2 leading-relaxed">{menuDetail}</span>
        </p>
      </div>
    </div>
  );
};

export default CulturalMenu;
