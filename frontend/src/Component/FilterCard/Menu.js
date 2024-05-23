
import React from "react";

function Menu({ menuItem, loading }) {
  if (loading) return <>Loading</>; // use your loading state or component

  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <img
                src={item.image}
                alt={item.subtitle}
                width="300"
                height="300"
              />
              <div className="itemContent">
                <h2>{item.subtitle}</h2>
                <span>{item.title}</span>
                <h6> Quantity - {item.quantity}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
