import React, { useEffect, useState } from "react";

export default function CheckoutItems({ itemData = [] }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(itemData);
  }, [itemData]);

  return (
    <>
      <ul className="list-group">
        {data.map((listitem) => (
          <li className="list-group-item ">
            <img
              src={listitem.image}
              style={{ height: 40, width: 40 }}
              alt=""
            />
            {listitem.name}
          </li>
        ))}
      </ul>
    </>
  );
}
