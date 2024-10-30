import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return <footer>© {date} ToDo App.</footer>;
}

export default Footer;
