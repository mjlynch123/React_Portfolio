import React, { useState } from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Nav from "./Nav";

export default function Header() {
  // Setting default state to "home"
  const [selectedItem, setSelectedItem] = useState("about");

  //   When the item is clicked, the state is updated to the value of the item.
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <header>
        <Nav selectedItem={selectedItem} handleItemClick={handleItemClick} />
      </header>

      {/* Calling the components that are selected */}
      {selectedItem === "about" && <About />}
      {selectedItem === "portfolio" && <Portfolio />}
      {selectedItem === "contact" && <Contact />}
      {selectedItem === "resume" && <Resume />}
    </>
  );
}
