///////////////////////////////////////////////////////////////NAVBAR TRANSITION
const header = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GALLERY PAGE

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
