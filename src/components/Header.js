import React from "react";
import teaImage from "./../img/tea.png"

function Header() {
  return (
    <>
      <img src={teaImage} alt="Tea" />
      <h1>Welcome to the Tea Shop Tracker</h1>
    </>

  );
}

export default Header;