"use strict";

const exit = document.querySelector(".exit-icon");

if (localStorage.getItem("gameId")) {
  getDetails(localStorage.getItem("gameId")).then((e) => displayDetails(e));
}
