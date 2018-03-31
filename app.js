"use strict";

var page = 1,
    max = 7;


const next = (_) => {
  console.log("next: page", page);
  page++;
  if (page > max) page = 1;
  let img = document.getElementById("slide-img");
  img.src = "img/Slide" + page + ".jpg";
}

document.getElementById("slide").addEventListener("click", next);
