// Passing in the props from Header.js
export default function Nav({ selectedItem, handleItemClick }) {
  return (
    <nav>
      <div className="name">
        <h1>Martin Lynch</h1>
      </div>
      <ul>
        {/* When the item is clicked, the state is updated to the value of the item. */}
        <li onClick={() => handleItemClick("about")}>About Me</li>
        <li onClick={() => handleItemClick("portfolio")}>Portfolio</li>
        <li onClick={() => handleItemClick("contact")}>Contact</li>
        <li onClick={() => handleItemClick("resume")}>Resume</li>
      </ul>
    </nav>
  );
}
