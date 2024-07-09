// Find the banner
let banner = document.getElementById("banner");

// Change the text
banner.innerHTML = "Wow, it's a banner!";

// Find the button
let button = document.getElementById("click1");

// Make it do something when clicked
button.onclick = function() {
  alert("You clicked the button!");
};

let banner = document.getElementById("banner");
let button = document.getElementById("colorButton");

button.onclick = function() {
  let colors = ["red", "blue", "green", "yellow", "purple"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  banner.style.backgroundColor = randomColor;
};