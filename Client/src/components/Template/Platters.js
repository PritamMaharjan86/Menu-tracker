import React from "react";

const Platters = ({ title, data }) => {
  const safeData = Array.isArray(data) ? data : [];
  const isEmpty = safeData.length === 0;

  return (
    <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-3 border-b pb-2">{title}</h3>

      {isEmpty ?
        <p className="text-sm text-gray-400 text-center py-4">
          No orders for this section
        </p>
      : <div className="space-y-3">
          {safeData.map((item, i) => (
            <div key={i} className="flex items-center text-sm gap-2">
              {/* LEFT */}
              <div className="font-medium w-[220px] text-center">
                <span className="text-gray-800 uppercase">
                  {item.clientName}
                </span>

                <span className="text-sm text-gray-500 ml-2">
                  {item.menuName} / {Number(item.pax)}
                </span>
              </div>

              {/* RIGHT - MULTIPLE PLATTERS IN ONE LINE */}
              <div className="font-medium text-center uppercase">
                {item.items && item.items.length > 0 ?
                  item.items
                    ?.map((p) => `${p.platterCount} X ${p.platterName}`)
                    .join(", ")
                : "-"}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Platters;
