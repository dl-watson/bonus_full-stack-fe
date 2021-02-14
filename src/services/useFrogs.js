import React, { useState } from "react";
import postFrogs from "../utils/postFrogs";

const useFrogs = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState({});

  const handleSubmit = (e) => {
    const { fname, fimage, fdescription } = e.target;

    e.preventDefault();

    setName(fname.value);
    setImage(fimage.value);
    setDescription(fdescription.value);
  };

  if ((name, image, description)) {
    postFrogs(name, image, description).then((res) => setResponse(res));
  }

  return { name, image, description, response, handleSubmit };
};

export default useFrogs;
