let pass = prompt("Enter our favorite thing to eat hehe 💕");

if(pass !== "pizza") {
  alert("Wrong password 😝");
  window.location.href = "https://google.com";
}
function goYes() {
  window.location.href = "yes.html";
}
function moveNo() {
  let btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}
function showLove() {
  alert("Will you be my Valentine? 💖");
}
