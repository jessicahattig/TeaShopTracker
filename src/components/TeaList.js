import React from "react";
import Tea from "./Tea.js";
import PropTypes from "prop-types";

function TeaList(props) {
  const teaListStyles = {
    display: 'flex',
    fontFamily: 'sans-serif',
  };

  const teaStyles = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginRight: '20px',
  };

  if (!props.teaList || props.teaList.length === 0) {
    return<p>There is no tea in inventory.</p>
  }
  return (
    <>
      <hr />
      <div style={teaListStyles}>
        {props.teaList.map((tea) => (
          <div key={tea.id} style={teaStyles}>
          <Tea
            whenTeaClicked={props.onTeaSelection}
            name={tea.name}
            flavor={tea.flavor}
            price={tea.price}
            inventory={tea.inventory}
            id={tea.id}
            key={tea.id} 
            />
            </div>
        ))}
      </div>
    </>
  )
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
}

export default TeaList;