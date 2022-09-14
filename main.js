const loadText = document.querySelector(".loading");
const backgroundImage = document.querySelector(".background");

let loadProgress = 0;
let blurTime = setInterval(() => blurImage(), 100);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurImage = () => {
  loadProgress++;
  if (loadProgress > 99) {
    clearInterval(blurTime);
  }
  loadText.innerHTML = `${loadProgress}%`;
  loadText.style.opacity = scale(loadProgress, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(
    loadProgress,
    0,
    100,
    30,
    0
  )}px)`;
};
