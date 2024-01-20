import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReuseableForm from "./ReuseableForm";

function NewTeaForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      urgency: parseInt(event.target.urgency.value),
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
      <ReuseableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Submit New Tea" />
    </>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm;