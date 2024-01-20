import React from "react";
import PropTypes from "prop-types";
import ReuseableForm from "./ReuseableForm";

function EditTeaForm(props) {
  const { tea } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      urgency: parseInt(event.target.urgency.value),
      id: tea.id
    })
  }
  return (
    <>
      <ReuseableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Tea" />
    </>
  )
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
}

export default EditTeaForm;