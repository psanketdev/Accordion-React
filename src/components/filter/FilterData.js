import React from "react";

export default function FilterData({ items }) {
  return (
    <ul className="filter-data">
      {items.map((ele) => {
        const { id, name, discription, price, other } = ele;
        return (
          <li className="card" key={id}>
            <h4>{name}</h4>
            <p>{discription}</p>
            <div>
              <span>
                Price: <b>{price}</b>
              </span>
              <button>Order Now</button>
            </div>
            <span>{other}</span>
          </li>
        );
      })}
    </ul>
  );
}
