import React, { useState } from "react";

export default function Nav({ selectedItem, handleItemClick }) {
  return (
    <nav>
      <div className="name">
        <h1>Martin Lynch</h1>
      </div>
      <ul>
        <li onClick={() => handleItemClick("about")}>About Me</li>
        <li onClick={() => handleItemClick("portfolio")}>Portfolio</li>
        <li onClick={() => handleItemClick("contact")}>Contact</li>
        <li onClick={() => handleItemClick("resume")}>Resume</li>
      </ul>
    </nav>
  );
}
