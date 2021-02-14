import React, { useEffect, useState } from "react";
import postFrogs from "../utils/postFrogs";

const useFrogs = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState({});

  const handleSubmit = (e) => {
    const { elements } = e.target;

    e.preventDefault();

    setName(elements.fname.value);
    setImage(elements.fimage.value);
    setDescription(elements.fdescription.value);
  };

  useEffect(() => {
    if ((name, image, description)) {
      postFrogs(name, image, description).then((res) => setResponse(res));
    }
  }, [name, image, description]);

  return { name, image, description, response, handleSubmit };
};

export default useFrogs;
