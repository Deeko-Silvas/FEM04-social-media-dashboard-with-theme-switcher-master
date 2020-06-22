var toggle = document.querySelector(".outer-toggle");
var bodyDiv = document.querySelector("body");

toggle.onclick = function() {
    bodyDiv.classList.toggle("dark");
    bodyDiv.classList.toggle("light");
}