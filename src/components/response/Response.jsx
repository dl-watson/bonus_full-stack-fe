import React from "react";
import PropTypes from "prop-types";
import ReactJson from "react-json-view";

const Response = ({ response }) => {
  return (
    <div data-testid="response-view">
      <ReactJson crossorigin src={response} />
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.object.isRequired,
};

export default Response;
