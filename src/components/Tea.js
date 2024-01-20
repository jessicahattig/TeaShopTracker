import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  // inline styling example
  const ticketStyles = {
    fontFamily: 'sans-serif'
  }

  return (
    <>
      <div style={ticketStyles}
        onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.names}</h3>
        <p>urgency: {props.urgency}</p>
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
  whenTicketClicked: PropTypes.func
}

export default Tea;