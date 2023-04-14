const btnNew = document.getElementById("new-data");
const btnAll = document.getElementById("all-data");

const getData = () => ({
  firstName: document.getElementById("first-name").value,
  lastName: document.getElementById("last-name").value,
  gender: document.getElementById("gender").value,
  address: document.getElementById("address").value,
  storage: document.getElementById("storage").value,
});

btnAll.addEventListener("click", () => {
  console.log(getData());
});
