import React, { useState } from "react";

const useFrogs = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { name, image, description, handleSubmit };
};
