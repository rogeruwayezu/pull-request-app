function changeColor(box) {
  console.log(box);
  // .style["CSS-ATTRIBUTE"] can change the styling of the element
  box.style["background-color"] = "blue";
}

function addText(box) {
  box.innerHTML = "Hello!";
}

function addClass(box) {
  box.className += " light";
}

function readText() {
  var boxWithText = document.getElementById("textbox");
  alert(boxWithText.innerHTML);
}