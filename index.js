// Detecting Button pressed

var numOfButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numOfButtons; i++){

  document.querySelectorAll(".animal")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

  });
}


// Detecting Keybord press
document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){

  switch (key) {

    case "a":
      var camel = new Audio("css/audio-files/camel.mp3");
      camel.play();
      break;
    case "s":
      var cat = new Audio("css/audio-files/cat.mp3");
      cat.play();
      break;
    case "d":
      var dog = new Audio("css/audio-files/dog.mp3");
      dog.play();
      break;
    case "j":
      var dolphin = new Audio("css/audio-files/dolphin.mp3");
      dolphin.play();
      break;
    case "k":
      var horse = new Audio("css/audio-files/horse.mp3");
      horse.play();
      break;
    case "l":
      var penguin= new Audio("css/audio-files/penguin.mp3");
      penguin.play();
      break;
    default: console.log(key);
  }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 150);

}
