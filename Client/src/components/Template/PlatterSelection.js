import React from "react";

const PlatterSelection = ({ title, data, calculation, type }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-3 border-b pb-2">{title}</h3>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center text-sm gap-2">
            {/* LEFT */}
            <div className="font-medium w-[220px] text-center">
              {item.client} {item.menu} / {item.pax}
            </div>

            {/* RIGHT */}
            <div className="font-medium text-center">
              {calculation(item)} {type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatterSelection;
