let numOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

// consturture function
// function HouseKeeping(name,age,exp,area){
//   this.name = name;
//   this.age = age;
//   this.exp = exp;
//   this.area = area;
//   this.clean = function(){
//     alert("Cleaning is ongoing.....");
//   }
// }

// var houseKeeping1 = new HouseKeeping("Jhon",25,3,'"Kitchen","Living Room","Bathroom"');
// console.log(houseKeeping1.name);
