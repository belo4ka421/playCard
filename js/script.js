const firstCard = document.querySelector(".card_first");
const secondCard = document.querySelector(".card_second");
const glass = document.querySelector(".glass");
const lvlValue = document.querySelector(".lvl_value");
const staticsTrue = document.querySelector(".statistics_true-value");
const staticsFalse = document.querySelector(".statistics_false-value");
const progressBar = document.querySelector(".progress_bar");

// Функция рандома
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Функция диапазона рандома
function setCards() {
  firstCard.innerHTML = getRandom(1, 9);
  secondCard.innerHTML = getRandom(1, 9);

  const firstNum = +firstCard.innerHTML;
  const secondNum = +secondCard.innerHTML;

  if (firstNum === secondNum) {
    setCards();
    return;
  }
}

// Слушатель первой карточки
firstCard.addEventListener("click", function () {
  const firstNum = +firstCard.innerHTML;
  const secondNum = +secondCard.innerHTML;

  // Подсвечивание нужным цветом карточки
  if (firstNum > secondNum) {
    firstCard.classList.add("true");

    progressBar.style.width =
      Number(progressBar.style.width.replace("px", "").replace("%", "")) +
      9 +
      "%";
    if (progressBar.style.width === "90%") {
      progressBar.style.width = "0%";
      lvlValue.innerHTML++;
    }

    staticsTrue.innerHTML++;
  } else {
    firstCard.classList.add("false");

    progressBar.style.width =
      Number(progressBar.style.width.replace("px", "").replace("%", "")) -
      9 +
      "%";
    if (progressBar.style.width === "90%") {
      progressBar.style.width = "0%";
      lvlValue.innerHTML++;
    }

    staticsFalse.innerHTML++;
  }

  // Добавление стекла на карточке
  glass.classList.add("glass-active");

  // Удаление цвета и стекла на карточке
  setTimeout(() => {
    setCards();
    firstCard.classList.remove("true");
    firstCard.classList.remove("false");
    glass.classList.remove("glass-active");
  }, 200);
});

// Слушатель второй карточки
secondCard.addEventListener("click", function () {
  const firstNum = +firstCard.innerHTML;
  const secondNum = +secondCard.innerHTML;

  if (firstNum < secondNum) {
    secondCard.classList.add("true");
    progressBar.style.width =
      Number(progressBar.style.width.replace("px", "").replace("%", "")) +
      9 +
      "%";
    if (progressBar.style.width === "90%") {
      progressBar.style.width = "0%";
      lvlValue.innerHTML++;
    }

    staticsTrue.innerHTML++;
  } else {
    secondCard.classList.add("false");
    progressBar.style.width =
      Number(progressBar.style.width.replace("px", "").replace("%", "")) -
      9 +
      "%";
    if (progressBar.style.width === "90%") {
      progressBar.style.width = "0%";
      lvlValue.innerHTML++;
    }

    staticsFalse.innerHTML++;
  }
  glass.classList.add("glass-active");
  setTimeout(() => {
    setCards();
    secondCard.classList.remove("true");
    secondCard.classList.remove("false");
    glass.classList.remove("glass-active");
  }, 200);
});
setCards();
