"use strict";

var page = 1
const max = 7
const img = document.getElementById("slide-img")

const next = (_) => {
  console.log("next: page", page)
  page++
  if (page > max) page = 1
  img.src = "img/Slide" + page + ".jpg"
}

document.body.addEventListener("click", next)

console.log("This is just a slide show for my parents on their 50th anniversary.")
console.log("See https://github.com/jarppe/sirkka-ja-matti-50v-yhdessa")
