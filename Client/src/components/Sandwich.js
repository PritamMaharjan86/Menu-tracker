import React from "react";

const Sandwich = ({ clientName, menuName, pax, items }) => {
  return (
    <div className="mt-10 uppercase">
      <hr />

      {items.map((item, index) => (
        <div key={index}>
          <span className="font-bold">{item.name}</span> - {item.qty}{" "}
          {item.serving}
        </div>
      ))}
    </div>
  );
};

export default Sandwich;
