// drum buttons
const btns = document.querySelectorAll("button.drum");

// functions
const playSound = (key) => {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
};

const animateBtn = (currentKey) => {
  let activeBtn = document.querySelector(`.${currentKey}`);

  if (activeBtn) {
    activeBtn.classList.add("pressed");

    setTimeout(() => {
      activeBtn.classList.remove("pressed");
    }, 100);
  }
};

// when clicking on drum btn
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let k = btn.innerText;
    playSound(k);
    animateBtn(k);
  });
});

// when pressing on keyboard
document.addEventListener("keyup", (e) => {
  let k = e.key;
  playSound(k);
  animateBtn(k);
});
