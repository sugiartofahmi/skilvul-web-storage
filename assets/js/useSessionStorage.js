export const allDataSession = (data) => {
  sessionStorage.getItem("data") == null
    ? sessionStorage.setItem("data", JSON.stringify([data]))
    : sessionStorage.setItem(
        "data",
        JSON.stringify([...JSON.parse(sessionStorage.getItem("data")), data])
      );

  return JSON.parse(sessionStorage.getItem("data"));
};

export const newDataSession = (data) => {
  sessionStorage.setItem("data", JSON.stringify([data]));
  return JSON.parse(sessionStorage.getItem("data"));
};
