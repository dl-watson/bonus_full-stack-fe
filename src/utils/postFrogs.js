import axios from "axios";
const url = "https://limitless-peak-54463.herokuapp.com/frogs";

const postFrogs = (name, image, description) => {
  const body = { name, image, description };
  return axios.post(url, body).then((res) => res.data);
};

export default postFrogs;
