const boldButtonClicked = document.getElementById("bold-button");
boldButtonClicked.addEventListener("click", function (e) {
  const textBold = document.getElementById("textarea-field");
  if (boldButtonClicked !== e.target) {
    console.log(e);
    textBold.style.textDecoration = "none";
  } else {
    textBold.style.fontWeight = "bold";
  }
});
