///////////////////////////////////////////////////////////////NAVBAR TRANSITION
const header = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// const map = document.querySelector("#map");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navItems.forEach((item) => (item.style.color = "black"));

    // navLogo.classList.remove("hide");
  } else {
    navItems.forEach((item) => (item.style.color = "#fff"));
    // navLogo.classList.add("hide");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

///////////////////////////////////////////////////////////////NAVLINK TRANSITION

function mouseHover(e) {
  e.target.style.color = "#444";
}
function mouseOut(e) {
  e.target.style.color = "#fff";
}

navItems.forEach(function (el) {
  el.addEventListener("mouseover", mouseHover, false);
  el.addEventListener("mouseout", mouseOut, false);
});

///////////////////////////////////////////////////////////////NAV TOGGLE MENU

const toggleBtn = document.querySelector(".toggle-btn");

const navbarLinks = document.querySelectorAll(".nav-item");

toggleBtn.addEventListener("click", (e) => {
  navbarLinks.forEach((el) => el.classList.toggle("active"));
});

////////////////////////////////////////////////////////////////////////////////GALLERY PAGE

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("gallery-active");
  })
);

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("gallery-active");
  });
}

////////////////////////////////////////////////////////////////////////////////CONTACT PAGE

async function initMap() {
  // The location of Killaloe
  const killaloe = { lat: 52.80883432484582, lng: -8.44750810395629 };
  // The map, centered at Killaloe
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: killaloe,
  });
  // The marker, positioned at Killaloe
  const marker = new google.maps.Marker({
    position: killaloe,
    map: map,
  });
}

// const promise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Promise has been fullfilled");
//   } else {
//     reject("Error: Operation has failed");
//   }
// });

// console.log(promise);
// promise.then((data) => console.log(data)).catch((err) => console.log(err));

///////////////////////////////////////////////////////////////////////////////GOOGLE MAPS MODAL

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

////////////////////////////AOPEN AND CLOSE MODAL EVENT LISTENERS

btnShowModal.addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});
