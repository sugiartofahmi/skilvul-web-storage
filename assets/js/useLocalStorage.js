export const allDataLocal = (data) => {
  localStorage.getItem("data") == null
    ? localStorage.setItem("data", JSON.stringify([data]))
    : localStorage.setItem(
        "data",
        JSON.stringify([...JSON.parse(localStorage.getItem("data")), data])
      );

  return JSON.parse(localStorage.getItem("data"));
};

export const newDataLocal = (data) => {
  localStorage.setItem("data", JSON.stringify([data]));
  return JSON.parse(localStorage.getItem("data"));
};
