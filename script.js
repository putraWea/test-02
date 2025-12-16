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

// NEXT DAN PREV HERO START
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
// NEXT DAN PREV HERO END

//UNTUK NAVBAR START
// Gunakan querySelector untuk mengambil satu elemen secara langsung
const navbar = document.querySelector(".container-navbar");
let timerDisplay; // Variabel untuk menyimpan timer
let isAtTop = true; //penanda apakah posisi saat ini di paling atas

window.onscroll = () => {
  if (window.scrollY > 0) {
    if (isAtTop) {
      navbar.style.setProperty("display", "none");
      navbar.classList.remove("nav-down");

      // 1. Bersihkan timer sebelumnya agar tidak bentrok
      clearTimeout(timerDisplay);

      // 2. Set timer untuk munculkan kembali setelah 3 detik (3000ms)
      timerDisplay = setTimeout(() => {
        navbar.style.setProperty("display", "flex");
        navbar.classList.add("nav-down");
      }, 300);

      navbar.style.setProperty("--container-nav", "rgba(21, 20, 20, 0.51)");

      isAtTop = false; //ubah penanda agar animasi tidak di ulang-ulang saat scroll terus ke bawah
    }
  } else {
    navbar.classList.remove("nav-down");
    navbar.style.setProperty("--container-nav", "rgba(21, 20, 20, 0)");

    isAtTop = true; //kembalikan penanda ke true agar siap di animasikan lagi saat turun nanti
  }
};
//UNTUK NAVBAR END
