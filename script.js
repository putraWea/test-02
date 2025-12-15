// const button = document.getElementById("hapus");
// const button2 = document.getElementById("change");
// const box = document.getElementById("box");

// button.addEventListener("click", () => {
//   box.classList.remove("box2");
// });

// button2.addEventListener("click", () => {
//   box.classList.add("box2");
// });

// // coba

// const buttons = document.querySelectorAll(".button-test button");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const color = btn.dataset.color;

//     // hapus semua warna dulu
//     box.classList.remove("red", "yellow", "green");

//     // tambahkan warna sesuai tombol
//     box.classList.add(color);
//   });
// });

const hero_btn_prev = document.getElementById("hero-btn-prev");
const hero_btn_next = document.getElementById("hero-btn-next");
const hero = document.getElementById("hero");

let index = 0;
const backgrounds = ["assets/image/home/slide-1.jpg", "assets/image/home/slide-2.jpg"];

function handleHeroslide(direction) {
  if (direction == "next") {
    index = (index + 1) % backgrounds.length;
  } else {
    index = (index - 1 + backgrounds.length) % backgrounds.length;
  }

  hero.style.setProperty("--hero-bg", `url(${backgrounds[index]})`);
}

hero_btn_next.addEventListener("click", () => handleHeroslide("next"));
hero_btn_prev.addEventListener("click", () => handleHeroslide("prev"));
