import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTeaForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      inventory: parseInt(event.target.inventory.value),
      id: v4()
    })

    // alternatively we could do this
    // const newTicket = {
    //   names: event.target.names.value,
    //   location: event.target.location.value,
    //   issue: event.target.issue.value,
    //   urgency: parseInt(event.target.urgency.value),
    //   id: v4()
    // }
    // props.onNewTicketCreation(newTicket);
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Submit New Tea" />
    </>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm;