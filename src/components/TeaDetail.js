import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingEdit, onClickingUpdateInventory } = props;

  function handleDecrementingInventory(){
    onClickingUpdateInventory(tea, -1);
  }
  
  function handleIncrementingInventory(){
    onClickingUpdateInventory(tea, 1);
  }

  return (
    <>
      <h3>{tea.name}</h3>
      <h3>{tea.flavor}</h3>
      <p><em>{tea.price}</em></p>
      <p>Inventory: {tea.inventory}</p>
      <button onClick={handleIncrementingInventory}>Increase Inventory</button>
      <button onClick={handleDecrementingInventory}>Decrease Inventory</button>
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