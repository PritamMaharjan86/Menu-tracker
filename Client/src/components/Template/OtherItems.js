import React from "react";

const OtherItems = ({ title, data, calculation, type }) => {
  const isEmpty = !data || data.length === 0;

  return (
    <div className="mt-10 border rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-lg mb-3 border-b pb-2">{title}</h3>
      {isEmpty ?
        <p className="text-sm text-gray-400 text-center py-4">
          No orders for this section
        </p>
      : <div className="space-y-3">
          {data.map((item, i) => (
            <div key={i} className="flex items-center text-sm gap-2">
              {/* LEFT */}
              <div className="font-medium w-[220px] text-center">
                <span className="font-medium text-gray-800 leading-snug uppercase">
                  {item.clientName}{" "}
                </span>
                <span className="text-sm text-gray-500 ml-2 ">
                  {" "}
                  {item.menuName} / {item.pax}
                </span>
              </div>

              {/* RIGHT */}
              <div className="font-medium text-center">
                {calculation(item)} {type}
              </div>
              {/* <div className="flex flex-row items-center gap-5 border p-2 rounded-md">
                <button>Delete</button>
                <button>Edit</button>
              </div> */}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default OtherItems;
