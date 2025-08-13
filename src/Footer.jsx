import React from "react";

//renders a footer element

const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <footer className="footer">
      <p className="footer p">Copyright : {year}</p>
    </footer>
  );
}
export default Footer;
