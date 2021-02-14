const postFrogs = (data) => {
  return fetch("https://limitless-peak-54463.herokuapp.com/frogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export default postFrogs;
