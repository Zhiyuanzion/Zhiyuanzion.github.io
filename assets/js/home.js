(function () {
  const background = document.querySelector("[data-home-background]");
  if (!background) return;

  let images = [];
  try {
    images = JSON.parse(background.dataset.backgrounds || "[]");
  } catch (error) {
    images = [];
  }

  if (!images.length) return;

  let index = 0;
  const show = (next) => {
    background.style.backgroundImage = `url("${images[next]}")`;
    background.classList.add("is-visible");
  };

  show(index);
  if (images.length < 2) return;

  window.setInterval(() => {
    background.classList.remove("is-visible");
    window.setTimeout(() => {
      index = (index + 1) % images.length;
      show(index);
    }, 500);
  }, 8000);
}());
