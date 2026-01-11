gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.08
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
});

const videoContainer = document.querySelector("#video-container");
const play = document.querySelector("#play");

videoContainer.addEventListener("mouseenter", () => gsap.to(play, { scale: 1, opacity: 1, duration: 0.3 }));
videoContainer.addEventListener("mouseleave", () => gsap.to(play, { scale: 0, opacity: 0, duration: 0.3 }));

gsap.to("#nav", {
  y: -100,
  scrollTrigger: {
    trigger: "#page1",
    scroller: ".main",
    start: "top -10%",
    scrub: true
  }
});

gsap.from(".product-card", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#products",
    scroller: ".main",
    start: "top 70%"
  }
});

gsap.from("#footer h1, #footer p, #footer a", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#footer",
    scroller: ".main",
    start: "top 80%"
  }
});

gsap.from("#page1 h1", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
  stagger: 0.3
});

gsap.from("#video-container", {
  scale: 0.9,
  opacity: 0,
  delay: 1.3,
  duration: 0.5
});

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    gsap.fromTo(button, { scale: 1 }, { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 });
    alert("Product added to cart 🛒");
  });
});

gsap.to(".slide-track", {
  xPercent: -50,
  repeat: -1,
  ease: "linear",
  duration: 20
});
