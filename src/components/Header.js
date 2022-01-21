import React from "react";
import "./../App.css";

export default function Header() {
  return (
    <div
      class=" d-flex shadow-sm rounded p-3 border-bottom"
      style={{ backgroundColor: "#271b84" }}
    >
      <div class="container">
        <img src="./logo192.png" alt="..." width={50} height={50} />
        <h2 class="d-inline align-middle p-3 text-light textFont">Lummo Pay</h2>
      </div>
    </div>
  );
}
