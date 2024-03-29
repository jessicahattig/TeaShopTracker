import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  // inline styling example
  const teaStyles = {
    fontFamily: 'sans-serif'
  }

  return (
    <>
      <div style={teaStyles}
        onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Flavor: {props.flavor}</p>
        <p>Cost for One Tea Serving: {props.price}</p>
        <p>Inventory: {props.inventory}</p>
        <hr />
      </div>
    </>
  );
}

Tea.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  urgency: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenTeaClicked: PropTypes.func
}

export default Tea;