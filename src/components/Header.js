import React from "react";
import teaImage from "./../img/tea.png";

function Header() {
  const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
  };

  const imageStyle = {
    width: '300px',
    height: 'auto',
  };

  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    marginTop: '10px',
  };

  return (
    <div style={headerStyle}>
      <img src={teaImage} alt="Tea" style={imageStyle} />
      <h1 style={titleStyle}>Welcome to the Tea Shop Tracker</h1>
    </div>
  );
}

export default Header;