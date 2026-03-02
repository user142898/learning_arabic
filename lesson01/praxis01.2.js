window.onload = function () {
    const arabicLetters = [
      { letter: "ا", type: "lunar", audio: "letter01/letter01.mp3", image: "letter01/letter01.png"},
      { letter: "ب", type: "lunar", audio: "letter02/letter02.mp3", image: "letter02/letter02.png"},
      { letter: "ت", type: "solar", audio: "letter03/letter03.mp3", image: "letter03/letter03.png"},
      { letter: "ث", type: "solar", audio: "letter04/letter04.mp3", image: "letter04/letter04.png"},
      { letter: "ج", type: "lunar", audio: "letter05/letter05.mp3", image: "letter05/letter05.png"},
      { letter: "ح", type: "lunar", audio: "letter06/letter06.mp3", image: "letter06/letter06.png"},
      { letter: "خ", type: "lunar", audio: "letter07/letter07.mp3", image: "letter07/letter07.png"},
      { letter: "د", type: "solar", audio: "letter08/letter08.mp3", image: "letter08/letter08.png"},
      { letter: "ذ", type: "solar", audio: "letter09/letter09.mp3", image: "letter09/letter09.png"},
      { letter: "ر", type: "solar", audio: "letter10/letter10.mp3", image: "letter10/letter10.png"},
      { letter: "ز", type: "solar", audio: "letter11/letter11.mp3", image: "letter11/letter11.png"},
      { letter: "س", type: "solar", audio: "letter12/letter12.mp3", image: "letter12/letter12.png"},
      { letter: "ش", type: "solar", audio: "letter13/letter13.mp3", image: "letter13/letter13.png"},
      { letter: "ص", type: "solar", audio: "letter14/letter14.mp3", image: "letter14/letter14.png"},
      { letter: "ض", type: "solar", audio: "letter15/letter15.mp3", image: "letter15/letter15.png"},
      { letter: "ط", type: "solar", audio: "letter16/letter16.mp3", image: "letter16/letter16.png"},
      { letter: "ظ", type: "solar", audio: "letter17/letter17.mp3", image: "letter17/letter17.png"},
      { letter: "ع", type: "lunar", audio: "letter18/letter18.mp3", image: "letter18/letter18.png"},
      { letter: "غ", type: "lunar", audio: "letter19/letter19.mp3", image: "letter19/letter19.png"},
      { letter: "ف", type: "lunar", audio: "letter20/letter20.mp3", image: "letter20/letter20.png"},
      { letter: "ق", type: "lunar", audio: "letter21/letter21.mp3", image: "letter21/letter21.png"},
      { letter: "ك", type: "lunar", audio: "letter22/letter22.mp3", image: "letter22/letter22.png"},
      { letter: "ل", type: "solar", audio: "letter23/letter23.mp3", image: "letter23/letter23.png"},
      { letter: "م", type: "lunar", audio: "letter24/letter24.mp3", image: "letter24/letter24.png"},
      { letter: "ن", type: "solar", audio: "letter25/letter25.mp3", image: "letter25/letter25.png"},
      { letter: "ه", type: "lunar", audio: "letter26/letter26.mp3", image: "letter26/letter26.png"},
      { letter: "و", type: "lunar", audio: "letter27/letter27.mp3", image: "letter27/letter27.png"},
      { letter: "ي", type: "lunar", audio: "letter28/letter28.mp3", image: "letter28/letter28.png"}
    ];
  
    let correctLetter = null;
  let correctType = null;
  let correctCount = 0;
  let wrongCount = 0;

  const optionsContainer = document.getElementById("options");
  const resultBox = document.getElementById("result");
  const scoreBox = document.getElementById("score");
  const lettersContainer = document.getElementById("letters-container");

  // Функция для обновления счета
  function updateScore() {
    scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
  }

  // Функция для получения случайной буквы
  function getRandomLetter() {
    return arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
  }

  // Функция для генерации вариантов ответов
  function generateAnswerOptions(correctType) {
    const options = correctType === "lunar"
      ? ["лунная", "солнечная"]
      : ["солнечная", "лунная"];
    return options.sort(() => Math.random() - 0.5);
  }

  // Функция для воспроизведения аудио
  function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
  }

  // Функция для старта теста
  function startTest() {
    const randomLetter = getRandomLetter();
    correctLetter = randomLetter.letter;
    correctType = randomLetter.type;

    // Вставляем изображение в контейнер
    lettersContainer.innerHTML = '';  // Очищаем контейнер перед добавлением
    const imgElement = document.createElement("img");
    imgElement.src = `../img/${randomLetter.image}`;
    imgElement.alt = `Буква ${randomLetter.letter}`;
    imgElement.style.maxWidth = "100px"; // Ограничиваем размер изображения
    lettersContainer.appendChild(imgElement);

    document.getElementById("play-audio").onclick = function () {
      playAudio(randomLetter.audio);
    };

    optionsContainer.innerHTML = "";
    resultBox.textContent = "";

    const answers = generateAnswerOptions(correctType);

    answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = `${answer.charAt(0).toUpperCase() + answer.slice(1)}`;
      button.style.fontSize = "1.2em";
      button.style.padding = "10px";
      button.onclick = function () {
        if (
          (answer === "лунная" && correctType === "lunar") ||
          (answer === "солнечная" && correctType === "solar")
        ) {
          resultBox.textContent = "✅ Верно!";
          correctCount++;
        } else {
          resultBox.textContent = `❌ Неверно. Буква "${correctLetter}" — ${correctType === "lunar" ? "лунная" : "солнечная"}.`;
          wrongCount++;
        }
        updateScore();
        setTimeout(startTest, 1500);
      };
      optionsContainer.appendChild(button);
    });
  }

  // Обработчик сброса счета
  document.getElementById("resetScore").onclick = function () {
    correctCount = 0;
    wrongCount = 0;
    updateScore();
  };

  updateScore();
  startTest();
};