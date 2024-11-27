// Kung Fu Panda Slideshow / Gallery

//Global Variables
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

let imgContainerEl = document.getElementById("img-container");

for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += `<img src = "images/${imgPaths[i]}">`;
}

//Create image gallery

// let imgIndex = 0;

// //Event Listeners
// document.getElementById("next").addEventListener("click", nextSlide);
// document.getElementById("prev").addEventListener("click", prevSlide);
// document.getElementById("random").addEventListener("click", randSlide);

// //Event Function
// function nextSlide() {
//   //Increment index, loop if necessary
//   imgIndex++;
//   if (imgIndex == imgPaths.length) {
//     imgIndex = 0;
//   }

//   //Display new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// function prevSlide() {
//   //Increment index, loop if necessary
//   imgIndex--;
//   if (imgIndex == -1) {
//     imgIndex = imgPaths.length - 1;
//   }

//   //Display new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// function randSlide() {
//   //Get a random index; int between 0 and length of array
//   imgIndex = Math.randomInt(0, imgPaths.length);

//   //Display new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }
