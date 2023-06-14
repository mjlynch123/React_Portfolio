import React, { useState } from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";

export default function Nav() {
  // Setting default state to "home"
  const [selectedItem, setSelectedItem] = useState("about");

  //   When the item is clicked, the state is updated to the value of the item.
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
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

      {/* Calling the components that are selected */}
      {selectedItem === "about" && <About />}
      {selectedItem === "portfolio" && <Portfolio />}
      {selectedItem === "contact" && <Contact />}
      {selectedItem === "resume" && <Resume />}
    </>
  );
}
