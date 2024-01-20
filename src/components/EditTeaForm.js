import React from "react";
import PropTypes from "prop-types";
import ReuseableForm from "./ReuseableForm";

function EditTeaForm(props) {
  const { tea } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      inventory: parseInt(event.target.inventory.value),
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