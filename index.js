var random_1 = Math.floor(Math.random() * 6) + 1;
var random_2 = Math.floor(Math.random() * 6) + 1;
var img_link1 = "images/dice" + random_1 + ".png";
var img_link2 = "images/dice" + random_2 + ".png";
document.querySelector("img.img1").setAttribute("src", img_link1);
document.querySelector("img.img2").setAttribute("src", img_link2);
// or 
// image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", img_link1);
// document.querySelectprAll("img")[1].setAttribute("src", img_link2);
if (random_1 > random_2) {
    document.querySelector("div h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (random_2 > random_1) {
    document.querySelector("div h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("div h1").innerHTML = "🏳️ Draw!";
}