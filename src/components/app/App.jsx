import React from "react";
import Frogs from "./frogs/Frogs";
import useFrogs from "../../services/useFrogs";

const App = () => {
  const { name, image, description, handleSubmit } = useFrogs();

  return (
    <div>
      <Frogs
        name={name}
        image={image}
        description={description}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
