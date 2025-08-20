const hero = document.querySelector(".hero");
const icon = document.querySelectorAll(".icon");
const facebook = document.querySelector("#facebook");
const instagram = document.querySelector("#instagram");
const linkedin = document.querySelector("#linkedin");
const tiktok = document.querySelector("#tiktok");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const landing = document.querySelector("#landing");
const slider = document.querySelector(".slider");
const introOne = document.querySelector(".intro1");
const introTwo = document.querySelector(".intro2");
const introThree = document.querySelector(".intro3");
const textSlowed = document.querySelector(".text_scorrevole");
const text = document.querySelector(".pressText");
const activePage = document.querySelector(".activePage");
const about = document.querySelector("#about");
const contatti = document.querySelector("#contatti");
const experience = document.querySelector("#experience");
const press = document.querySelector(".press");
const pressIcon = document.querySelector(".pressIcon");
const screen = document.querySelector(".fullScreen");
const second = document.querySelectorAll(".secondMessage");
const overlay = document.querySelector(".overlayScreen");
const info = document.querySelectorAll(".info");
let outline = document.querySelector(".outline");
let cursor = document.querySelector(".cursor");
let h1 = document.querySelectorAll("h1");
const skiller = document.querySelector(".skills");
const history = document.querySelector(".history");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursor.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;
});

h1.forEach((item) => {
  item.addEventListener("mouseover", () => {
    outline.classList.add("hover");
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    outline.classList.remove("hover");
    cursor.classList.remove("hover");
  });
});

var tl = new TimelineMax();
tl.fromTo(hero, 0.8, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(hero, 0.8, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
  .fromTo(landing, 0.9, { borderRadius: 0 }, { borderRadius: 30, ease: Power2.easeInOut })
  .fromTo(slider, 0.9, { width: "0%" }, { width: "100%", ease: Power2.easeInOut }, "-=1.1")
  .fromTo(logo, 0.3, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(menu, 0.3, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(introOne, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(introTwo, 0.6, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1.1")
  .fromTo(introThree, 0.7, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1.1")
  .fromTo(textSlowed, 1, { opacity: 0, y: "100" }, { opacity: 1, y: "0", ease: Power2.easeInOut }, "-=1.1")
  .fromTo(facebook, 0.2, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(instagram, 0.2, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(tiktok, 0.1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  .fromTo(linkedin, 0.1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    icon.forEach((icons) => {
      icons.classList.add("pathActive");
    });
  } else {
    icon.forEach((icons) => {
      icons.classList.remove("pathActive");
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".scroll-text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 70%",
      end: "center 83%",
      scrub: true,
      ease: Power4.easeInOut,
    },
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    press.classList.add("visibile");
  } else {
    press.classList.remove("visibile");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    overlay.classList.add("visibile");
  } else {
    overlay.classList.remove("visibile");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    outline.classList.add("block");
  } else {
    outline.classList.remove("block");
  }
});

pressIcon.addEventListener("touchstart", function (e) {
  screen.classList.add("openScreen");
});

pressIcon.addEventListener("touchend", function (e) {
  screen.classList.remove("openScreen");
  skiller.classList.remove("noHide");
});

function addClasse(event) {
  event.stopPropagation();
  event.preventDefault();
  second.forEach((seconds) => {
    seconds.classList.add("activeSecond");
  });
  skiller.classList.add("noHide");
  history.classList.add("noHide");
}

function removeClasse(event) {
  event.stopPropagation();
  event.preventDefault();
  second.forEach((seconds) => {
    seconds.classList.remove("activeSecond");
  });
  skiller.classList.remove("noHide");
  history.classList.remove("noHide");
}

pressIcon.addEventListener("touchstart", addClasse);
pressIcon.addEventListener("touchend", removeClasse);

const observerElements = (elements, className) => {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const pid = entry.target.getAttribute("data-pid");
        const targetElement = document.querySelector(`[data-pid="${pid}"]`);
        if (targetElement) {
          targetElement.classList.toggle(className, entry.isIntersecting);
        }
      });
    },
    { threshold: 1, rootMargin: "25%" }
  );

  elements.forEach((el) => observer.observe(el));
};

observerElements(about, "activePage");
observerElements(experience, "activePage");
observerElements(contatti, "activePage");

let index = 0;

const activeStep = () => {
  if (index > 0) {
    info[(index - 1) % info.length].classList.remove("active");
  }
  info[index % info.length].classList.add("active");
  index++;
};

setInterval(activeStep, 2200);
