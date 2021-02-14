import React from "react";
import PropTypes from "prop-types";

const Frogs = ({ name, image, description, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={name} />
      <input defaultValue={image} />
      <input defaultValue={description} />
      <button>Submit</button>
    </form>
  );
};

Frogs.propTypes = {};

export default Frogs;
