"use strict";

// mmorpg
// shooter
// sailing
// permadeath
// superhero
// pixel

function removeLoadingPage() {
  document.querySelector(".loadingPage").classList.add("d-none");
  document.querySelector("body").classList.remove("overflow-hidden");
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "297ed6d252msh3ceda297d15c01cp1677edjsnc1a9edd2ded4",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

// GET DATA BY CATEGORY
const handleClick = function () {
  document.querySelectorAll(".gameCard").forEach((ele) => {
    ele.addEventListener("click", (e) => {
      localStorage.setItem(
        "gameId",
        $(e.target).parents(".gameCard").attr("id")
      );
    });
  });
};

async function getDataByCat(cat) {
  console.log("Iam active");
  const data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
    options
  );
  const res = await data.json();
  removeLoadingPage();
  displayData(res);
  handleClick();
}

function displayData(arr) {
  let cartona = ``;
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <div class=" col-md-4 col-lg-3 pe-3"  >
    
    <a class="card text-decoration-none bg-transparent h-100 gameCard link-light" id=${arr[i].id} href="details.html">
    <div class="card-body p-3">
        <img src="${arr[i].thumbnail}" class="card-img-top d-block w-100" alt="${arr[i].title}">
        <h5 class="card-title d-flex justify-content-between align-items-center mt-3">
            ${arr[i].title}
            <span class="py-2 px-3 fs-6 dark-blue-bg rounded-3">Free</span>
        </h5>
        <p class="card-text text-center">${arr[i].short_description}</p>
    </div>
    <ul class="d-flex justify-content-between list-unstyled px-3 py-2 mb-0">
        <li class="bg-costimise-dark py-1 px-2 rounded-3">${arr[i].platform}</li>
    </ul>
</a>

</div>
        `;
  }
  if (document.querySelector(".gameSection")) {
    document.querySelector(".gameSection").innerHTML = cartona;
  }
}

// GET DATA OF DETAILS

async function getDetails(id) {
  const data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );

  const res = await data.json();
  // console.log("Iam active 2");

  return new Promise((resolve, reject) => {
    resolve(res);
  });
}

function displayDetails(obj) {
  let cartona = `
  <div class="row mt-4 pb-4">
  <picture class="col-lg-4 mb-3">
      <img src="${obj.thumbnail}" class="w-100" alt="${obj.title}">
  </picture>
  <article class="col-lg-8">
      <h1 class ="mb-4">Title : ${obj.title}</h1>

      <p class="d-flex align-items-center gap-3 fs-3 ">Platform :
          <span class="bg-white-blue py-2 px-2 rounded-3 d-flex align-items-center text-white px-3 fs-4">${obj.platform}</span>
      </p>
      <p class="d-flex align-items-center gap-3 fs-3">Status :
          <span class="bg-white-blue py-2 px-2 rounded-3 d-flex align-items-center text-white px-3 fs-4">${obj.status}</span>
      </p>

      <p class="my-4 fs-4 lh-lg">
    ${obj.description}
      </p>
      <button class="btn btn-lg fs-4 btn-outline-primary">Show Game</button>
  </article>
</div>
    `;

  document.querySelector(".details-container").innerHTML += cartona;
}
