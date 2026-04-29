let bars = document.getElementById("bars");
let barsmenu = document.getElementById("barsmenu");
let overlay = document.getElementById("overlay");

function barS() {
  if (barsmenu.style.display === "none") {
    barsmenu.style.display = "flex";

    barsmenu.classList.remove("animate__fadeOutUpBig");
    barsmenu.classList.add("animate__fadeInDown");
    overlay.classList.remove("hidden");

  } else {
    barsmenu.classList.remove("animate__fadeInDown");
    barsmenu.classList.add("animate__fadeOutUpBig");

    setTimeout(() => {
      barsmenu.style.display = "none";
      overlay.classList.add("hidden");
    }, 700);
  }
}

