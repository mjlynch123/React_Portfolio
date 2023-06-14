import React, { useState } from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/martin-lynch-838976123/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/mjlynch123"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a
          href="https://codepen.io/mjlynch123"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-codepen"></i>
        </a>
        <p>Designed and developed Martin Lynch</p>
      </div>
    </footer>
  );
}
