import React from "react";

const PlatterSection = ({ client, menu, pax, numberOfItems, type, title }) => {
  return (
    <div>
      <div className="border rounded-xl p-4 bg-white shadow-sm">
        <h3 className="font-bold text-lg mb-2 border-b pb-1">{title}</h3>
        <div className="text-sm">
          <p className="flex flex-row items-center gap-2">
            <span>
              {client} {menu} / {pax}
            </span>{" "}
            -{" "}
            <span>
              {numberOfItems} X {type}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatterSection;
