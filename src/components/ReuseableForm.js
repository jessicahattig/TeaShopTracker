import React from "react";
import PropTypes from "prop-types";

function ReuseableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name of Tea"
          required />
        <br />
        <input
          type="text"
          name="flavor"
          placeholder="Flavor Description"
          required />
        <br />
        <textarea
          name="price"
          placeholder="Price"
          required />
        <br />
        <label htmlFor="Inventory">Inventory: </label>
        <input
          type="number"
          name="inventory"
          min="1"
          max="100"
          defaultValue="1"
          placeholder="Inventory"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReuseableForm;