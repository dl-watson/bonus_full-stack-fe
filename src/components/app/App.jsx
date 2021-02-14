import React from "react";
import Frogs from "./frogs/Frogs";
import Response from "../response/Response";
import useFrogs from "../../services/useFrogs";

const App = () => {
  const { name, image, description, response, handleSubmit } = useFrogs();

  return (
    <>
      <Frogs
        name={name}
        image={image}
        description={description}
        handleSubmit={handleSubmit}
      />
      <br />
      <Response response={response} />
    </>
  );
};

export default App;
