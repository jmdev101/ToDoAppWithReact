import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>© {date} ToDo App.</p>
    </footer>
  );
}

export default Footer;
