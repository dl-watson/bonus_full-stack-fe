import React from "react";
import PropTypes from "prop-types";

const Frogs = ({ name, image, description, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={name} name="fname" />
      <input defaultValue={image} name="fimage" />
      <input defaultValue={description} name="fdescription" />
      <button>Submit</button>
    </form>
  );
};

Frogs.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Frogs;
