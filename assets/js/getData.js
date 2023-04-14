export const getData = () => ({
  firstName: document.getElementById("first-name").value,
  lastName: document.getElementById("last-name").value,
  gender: document.getElementById("gender").value,
  address: document.getElementById("address").value,
});
