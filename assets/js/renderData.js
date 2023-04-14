export const renderData = (data) => {
  return data
    .map(
      (el) =>
        `<li>
        <h1>${el.firstName}</h1>
        <h1>${el.lastName}</h1>
        <h1>${el.gender}</h1>
        <h1>${el.address}</h1>
      </li>`
    )
    .join(" ");
};
