/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/Frogs.css";

const Frogs = ({ name, image, description, handleSubmit }) => {
  return (
    <form className={styles.Frogs} onSubmit={handleSubmit}>
      <label htmlFor="fname">
        Name:
        <input
          defaultValue={name}
          name="fname"
          id="fname"
          placeholder="Desert rain frog"
        />
      </label>
      <label htmlFor="fimage">
        Image:
        <input
          defaultValue={image}
          name="fimage"
          id="fimage"
          placeholder="https://bit.ly/3jSq7r9"
        />
      </label>
      <label htmlFor="fdescription">
        Description:
        <input
          defaultValue={description}
          name="fdescription"
          id="fdescription"
          placeholder="A species of frog in the family Brevicipitidae."
        />
      </label>
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
