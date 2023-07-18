// const boldButtonClicked = document.getElementById("bold-button");
// const textArea = document.getElementById("textarea-field");

// boldButtonClicked.addEventListener("click", function (e) {
//   let isClicked = e.target;
//   if (isClicked === true) {
//     textArea.classList.add("click-active");
//   } else {
//     textArea.classList.remove("click-inactive");
//   }
// });

// function checkClicked(isClicked) {}

// if (boldButtonClicked !== e.target) {
//   console.log(e.target);
//   textArea.style.textDecoration = "none";
// } else {
//   textArea.style.fontWeight = "bold";
// }

const textArea = document.getElementById("textarea-field");
function fontBold() {
  if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
}
