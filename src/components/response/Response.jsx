import React from "react";
import PropTypes from "prop-types";
import ReactJson from "react-json-view";

const Response = ({ response }) => {
  return (
    <>
      <ReactJson crossorigin src={response} />
    </>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired,
};

export default Response;
