document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const back = document.querySelector('#back');
    const concept = document.querySelector('.concept');
    const immagine = document.querySelector('.immagine');
    const translateOne = document.querySelector('.translate1');
    const mbMob = document.querySelector('.mbMob');
    const itemProjects = document.querySelectorAll('.itemProject');
    let split = SplitText.create("#textOne", { type: "words, chars" });
    let splitTwo = SplitText.create("#textTwo", { type: "words, chars, lines" });

      gsap.from(split.chars, {
        duration: 0.5, 
        x: 60,       // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.03 // 0.05 seconds between each
      });

      gsap.fromTo("#textRight", 
        { yPercent: 40, opacity: 0, duration: 0.4 }, 
        { yPercent: 0, opacity: 1, duration: 0.4, delay: 1.2 });

    /*---LENIS----*/
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    gsap.ticker.lagSmoothing(0);
    /*---LENIS----*/

    gsap.fromTo(back, 
        { yPercent: 55, scale: 2, autoAlpha: 0, opacity: 0, ease: "power2.inOut" },
        { yPercent: 0, autoAlpha: 1, scale: 1, opacity: 1, duration: 0.5, delay: 1, }
    );

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: back,
            start: 'top top',
            end: '+=900',
            scrub: true, 
            invalidateOnRefresh: true
        }
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: concept,
          start: 'top 3%',
          end: '+=300',
          pin: true,
          scrub: true,
          }
      })

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#wrapText",
        start: 'top 50%',
        toggleActions: 'play none none none',
        once: true,
      }
    })

 gsap.fromTo(".backAbout", 
        { yPercent: 55, scale: 2, autoAlpha: 0, ease: "power2.inOut" },
        { yPercent: 0, autoAlpha: 1, scale: 1, duration: 0.5, delay: 0.3, }
    );

 gsap.fromTo(".contact", 
        { yPercent: 55, scale: 2, autoAlpha: 0, ease: "power2.inOut" },
        { yPercent: 0, autoAlpha: 1, scale: 1, duration: 0.5, delay: 0.3, }
    );

  gsap.from(itemProjects, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wrapProject",
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
      duration: 1,
  }
  });


tl.fromTo(back, { scale: 1, yPercent: 0, duration: 0.2, opacity: 1}, { scale: 1.6, yPercent: 30, 
duration: 2, opacity: 0});
tl2.fromTo(immagine, { width: '100vw', height: '0%', duration: 2, objectFit: 'cover',}, { width: '100vw', height: '100vh', duration: 3, ease: 'none'});
tl2.fromTo(mbMob, { marginBottom: '160', opacity: 1, duration: 3, ease:"none"}, { marginBottom: '0', opacity: 1, duration: 1, ease: 'none'});
tl2.fromTo(translateOne, { yPercent: -20 }, { yPercent: 0, ease: "none",})
tl3.from(splitTwo.words, { duration: 0.2, x: 60, autoAlpha: 0, opacity:0,  stagger: 0.03, ease: 'power2.out'})
tl3.fromTo("#textRight", { duration: 0.2, yPercent: 60, autoAlpha: 0, opacity: 0, ease: "power2.out" }, { autoAlpha: 1, opacity: 1, yPercent: 0, autoAlpha: 1, ease: "power2.out"  })
tl3.fromTo("#btnOrange", { duration: 0.2, yPercent: 60, autoAlpha: 0, opacity: 0, ease: "power2.out" }, { autoAlpha: 1, opacity: 1, yPercent: 0, autoAlpha: 1, ease: "power2.out", delay: 0.01 })


ScrollTrigger.matchMedia({

  "(min-width: 769px)": function() {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapInfo',
        start: 'top 5%',
        end: 'bottom 20%',
        pin: true, 
        scrub: true,
      }
    });

    gsap.set(".slick2", { zIndex: 10 });

    tl4.fromTo(".slick1", { xPercent: 100, autoAlpha: 0 }, 
                          { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
    tl4.fromTo(".slick3", { xPercent: -100, autoAlpha: 0 }, 
                          { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" }, "<");
    tl4.to([".slick1", ".slick2", ".slick3"], 
           { scale: 0.95, duration: 0.6, ease: "power2.inOut" });
  },

  "(min-width: 601px) and (max-width: 768px)": function() {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapInfo',
        start: 'top 20%',
        end: '+=950',
        pin: true, 
        scrub: true,
      }
    });

    tl4.fromTo(".slick1", { yPercent: 0, autoAlpha: 1 }, { yPercent: 0, autoAlpha: 1 });
    tl4.fromTo(".slick2", { yPercent: 10, autoAlpha: 1 }, { yPercent: -100, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
    tl4.fromTo(".slick3", { yPercent: -100, autoAlpha: 0 }, { yPercent: -200, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
  },

  // Mobile
  "(max-width: 600px)": function() {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapInfo',
        start: 'top 10%',
        end: '+=600',
        pin: true,
        scrub: true,
      }
    });

     tl4.fromTo(".slick1", { yPercent: 0, autoAlpha: 1 }, { yPercent: 0, autoAlpha: 1 });
    tl4.fromTo(".slick2", { yPercent: 10, autoAlpha: 1 }, { yPercent: -100, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
    tl4.fromTo(".slick3", { yPercent: -100, autoAlpha: 0 }, { yPercent: -200, autoAlpha: 1, duration: 0.6, ease: "power3.out" });

  }
});


/*----HAMBUERGERMENU------*/
const hamburger = document.querySelector('.hamburger');
const tendina = document.querySelector('.tendina');
const logo = document.querySelector('.logotype');
const voiceElems = document.querySelectorAll('.voice');
const arrowMobile = document.querySelector('.arrowMobile');
let scrollY = 0;
function blockScroll() {
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
}
function enableScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scrollY);
}
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  tendina.classList.toggle('openMenu');

  setTimeout(() => {
    if (tendina.classList.contains('openMenu')) {
      blockScroll();
      logo.classList.add('colorBlack');
      hamburger.classList.add('hamburger-dark');
      arrowMobile.classList.add('expanded');
      voiceElems.forEach((item, index) => {
        item.addEventListener('click', () => {
            voiceElems.forEach(v => v.classList.remove('visibility'));
              tendina.classList.remove('openMenu');
              logo.classList.remove('colorBlack');
              hamburger.classList.remove('hamburger-dark', 'is-active');
              arrowMobile.classList.remove('expanded');
              enableScroll();
        })
        setTimeout(() => {
          item.classList.add('visibility');
        }, index * 100);
      });

    } else {
      enableScroll();
      logo.classList.remove('colorBlack');
      hamburger.classList.remove('hamburger-dark');
      arrowMobile.classList.remove('expanded');
      voiceElems.forEach(item => {
        item.classList.remove('visibility');
      });
    }
  }, 10);
});


/*----HAMBUERGERMENU------*/

window.addEventListener("load", () => {
        ScrollTrigger.refresh();
});

/*----ACTIVE DARK MODE------*/

const toggle = document.querySelector('.toggle');
const toggleHandler = document.querySelector('.toggle__handler');
const input = document.querySelector('input[type="checkbox"]');

// Funzione per aggiornare lo stato del toggle
function applyTheme(theme){
    if(theme === 'light'){
      toggle.classList.add('activeToggle');
      toggleHandler.classList.add('activeToggleHandler');
      document.body.classList.add('lightMode');
      document.querySelector('.partnerShip').style.background = '#edd3b1';
      input.checked = true;
    } else {
      toggle.classList.remove('activeToggle');
      toggleHandler.classList.remove('activeToggleHandler');
      document.body.classList.remove('lightMode');
      document.querySelector('.partnerShip').style.background = '#141414';
      input.checked = false;
    }
}
/*----SALVARE IL CAMBIAMENTO IN LOCALE------*/
const saveTheme = localStorage.getItem('theme') || 'dark';
applyTheme(saveTheme);

input.addEventListener('change', () => {
  const newTheme = input.checked ? 'light': 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
})

});
