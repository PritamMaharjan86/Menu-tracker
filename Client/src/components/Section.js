import React from "react";

const Section = ({ orders = [] }) => {
  return (
    <div className="border rounded-lg">
      {/*loop through every order */}
      {orders.map((item, index) => (
        <div key={index} className="flex flex-row gap-10 items-center py-1 m-3">
          <span className="font-medium text-md">
            {item.clientName} {item.menuName}/{item.pax}
          </span>

          <span className="font-normal text-sm">
            {item.qty} {item.serving}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Section;
