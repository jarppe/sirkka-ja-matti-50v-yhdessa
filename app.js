"use strict";

console.log("This is just a slide show for my parents on their 50th anniversary.")
console.log("See https://github.com/jarppe/sirkka-ja-matti-50v-yhdessa for code.")

const byId = id => document.getElementById(id)

var page = 1
const max = 12

const pad = n => n.toString().padStart(2, "0")

const showPage = pageNum => byId("slide-img").src = "img/Slide" + pad(pageNum) + ".jpg"

const next = direction => {
  return () => {
    page += direction;
    if (page <= 0) page = max
    if (page > max) page = 1
    showPage(page)
  }
}

const goForward = next(+1)
const goBack = next(-1)
const goStart = () => {
  page = 1;
  showPage(page)
}

byId("forward").addEventListener("click", goForward)
byId("back").addEventListener("click", goBack)

const keyCodes = {
  "ArrowLeft": goBack,
  "ArrowRight": goForward,
  "Space": goForward,
  "Enter": goForward,
  "Escape": goStart
}

document.addEventListener("keydown", e => {
  let handler = keyCodes[e.code]
  if (handler) {
    e.preventDefault()
    handler()
  }
})

var timeoutHandle = null

const showGuides = () => byId("guides").className = "show"
const hideGuides = () => byId("guides").className = "hide"

const mousemove = _ => {
  if (timeoutHandle) {
    clearTimeout(timeoutHandle)
  } else {
    showGuides()
  }
  timeoutHandle = setTimeout(() => { timeoutHandle = null; hideGuides(); }, 1000)
}

hideGuides()
document.body.addEventListener("mousemove", mousemove)
