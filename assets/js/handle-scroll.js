function handelScroll() {
  let allScroll = document.querySelectorAll(".scroll");
  allScroll.forEach((scroll, idx) => {
    let eleScroll = scroll.getBoundingClientRect().top;
    if (eleScroll <= window.innerHeight) {
      setTimeout(() => {
        scroll.classList.remove("scroll");
      }, idx * 200);
    }
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  handelScroll();
});

window.addEventListener("scroll", handelScroll);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      scrollObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px"
});

const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.06}s`;
  scrollObserver.observe(item);
});

document.querySelectorAll(".scroll").forEach((item) => scrollObserver.observe(item));
