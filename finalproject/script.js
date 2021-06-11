const husky = document.getElementById("husky");
const paper = document.getElementById("paper");
const score = document.getElementById("score");

function jump() {
  husky.classList.add("jump-animation");
  setTimeout(() =>
    husky.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!husky.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const huskyTop = parseInt(window.getComputedStyle(husky)
    .getPropertyValue('top'));
  const paperLeft = parseInt(window.getComputedStyle(paper)
    .getPropertyValue('left'));
  score.innerText++;

  if (paperLeft < 0) {
    paper.style.display = 'none';
  } else {
    paper.style.display = ''
  }

  if (paperLeft < 50 && paperLeft > 0 && huskyTop > 150) {
       
   alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);

