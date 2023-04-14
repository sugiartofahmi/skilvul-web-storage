export const allDataCookie = (data) => {
  document.cookie == ""
    ? (document.cookie = JSON.stringify([data]))
    : (document.cookie = JSON.stringify([
        ...JSON.parse(document.cookie),
        data,
      ]));
  return JSON.parse(document.cookie);
};

export const newDataCookie = (data) => {
  document.cookie = JSON.stringify([data]);
  return JSON.parse(document.cookie);
};
