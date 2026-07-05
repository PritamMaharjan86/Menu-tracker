import React from "react";

const Section = ({ orders = [] }) => {
  return (
    <div>
      {/*loop through every order */}
      {orders.map((item, index) => (
        <div key={index} className="flex flex-row gap-10 items-center py-1 m-5">
          <span className="font-normal text-sm">
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
