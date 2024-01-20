import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingEdit, onClickingUpdateUrgency } = props;

  function handleDecrementingUrgency(){
    onClickingUpdateUrgency(tea, -1);
  }
  
  function handleIncrementingUrgency(){
    onClickingUpdateUrgency(tea, 1);
  }

  return (
    <>
      <h3>{tea.location}</h3>
      <h3>{tea.names}</h3>
      <p><em>{tea.issue}</em></p>
      <p>urgency: {tea.urgency}</p>
      <button onClick={handleIncrementingUrgency}>Increase Urgency</button>
      <button onClick={handleDecrementingUrgency}>Decrease Urgency</button>
      <br />
      <button onClick={() => onClickingEdit(tea.id)}>Edit Tea</button>
      <button onClick={() => onClickingDelete(tea.id)}>Close Tea</button>
      <br />
    </>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrement: PropTypes.func
}

export default TeaDetail;