import { getData } from "./getData.js";
import { renderData } from "./renderData.js";
import { allDataLocal, newDataLocal } from "./useLocalStorage.js";
import { allDataSession, newDataSession } from "./useSessionStorage.js";
import { allDataCookie, newDataCookie } from "./useCookie.js";
const btnNew = document.getElementById("new-data");
const btnAll = document.getElementById("all-data");
const session = document.getElementById("session");
const local = document.getElementById("local");
const cookie = document.getElementById("cookie");
const storage = document.getElementById("storage");

btnAll.addEventListener("click", () => {
  storage.value == "local"
    ? (local.innerHTML = renderData(allDataLocal(getData())))
    : storage.value == "session"
    ? (session.innerHTML = renderData(allDataSession(getData())))
    : storage.value == "cookie" &&
      (cookie.innerHTML = renderData(allDataCookie(getData())));
});
btnNew.addEventListener("click", () => {
  storage.value == "local"
    ? (local.innerHTML = renderData(newDataLocal(getData())))
    : storage.value == "session"
    ? (session.innerHTML = renderData(newDataSession(getData())))
    : storage.value == "cookie" &&
      (cookie.innerHTML = renderData(newDataCookie(getData())));
});

(() => {
  localStorage.getItem("data") != null &&
    (local.innerHTML = renderData(JSON.parse(localStorage.getItem("data"))));

  sessionStorage.getItem("data") != null &&
    (session.innerHTML = renderData(
      JSON.parse(sessionStorage.getItem("data"))
    ));

  document.cookie != "" &&
    (cookie.innerHTML = renderData(JSON.parse(document.cookie)));
})();
