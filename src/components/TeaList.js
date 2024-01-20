import React from "react";
import Tea from "./Tea.js";
import PropTypes from "prop-types";

function TeaList(props) {
  if (!props.teaList) {
    return<p>Loading...</p>
  }
  return (
    <>
      <hr />
      {props.teaList.map((tea) =>
        <Tea
          whenTeaClicked={props.onTeaSelection}
          names={tea.names}
          location={tea.location}
          issue={tea.issue}
          urgency={tea.urgency}
          id={tea.id}
          key={tea.id} />
      )}
    </>
  )
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
}

export default TeaList;