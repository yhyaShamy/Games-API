"use strict";

const navList = document.querySelectorAll("nav li");

navList.forEach((items) => {
  // To remove "active" from others
  items.addEventListener("click", function () {
    navList.forEach((otherItems) => {
      otherItems.classList.remove("active");
    });

    items.classList.add("active");
  });
});

// Display data
getDataByCat("mmorpg");

navList.forEach((items) => {
  items.addEventListener("click", function () {
    const activeDataValue =
      document.getElementsByClassName("active")[0].innerHTML;
    // Render data when user select category
    getDataByCat(activeDataValue);
  });
});
