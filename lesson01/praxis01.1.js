window.onload = function () {
    const arabicLetters = [
        { letter: "ا", name: "letter01", audio: "letter01/letter01.mp3" },
        { letter: "ب", name: "letter02", audio: "letter02/letter02.mp3" },
        { letter: "ت", name: "letter03", audio: "letter03/letter03.mp3" },
        { letter: "ث", name: "letter04", audio: "letter04/letter04.mp3" },
        { letter: "ج", name: "letter05", audio: "letter05/letter05.mp3" },
        { letter: "ح", name: "letter06", audio: "letter06/letter06.mp3" },
        { letter: "خ", name: "letter07", audio: "letter07/letter07.mp3" },
        { letter: "د", name: "letter08", audio: "letter08/letter08.mp3" },
        { letter: "ذ", name: "letter09", audio: "letter09/letter09.mp3" },
        { letter: "ر", name: "letter10", audio: "letter10/letter10.mp3" },
        { letter: "ز", name: "letter11", audio: "letter11/letter11.mp3" },
        { letter: "س", name: "letter12", audio: "letter12/letter12.mp3" },
        { letter: "ش", name: "letter13", audio: "letter13/letter13.mp3" },
        { letter: "ص", name: "letter14", audio: "letter14/letter14.mp3" },
        { letter: "ض", name: "letter15", audio: "letter15/letter15.mp3" },
        { letter: "ط", name: "letter16", audio: "letter16/letter16.mp3" },
        { letter: "ظ", name: "letter17", audio: "letter17/letter17.mp3" },
        { letter: "ع", name: "letter18", audio: "letter18/letter18.mp3" },
        { letter: "غ", name: "letter19", audio: "letter19/letter19.mp3" },
        { letter: "ف", name: "letter20", audio: "letter20/letter20.mp3" },
        { letter: "ق", name: "letter21", audio: "letter21/letter21.mp3" },
        { letter: "ك", name: "letter22", audio: "letter22/letter22.mp3" },
        { letter: "ل", name: "letter23", audio: "letter23/letter23.mp3" },
        { letter: "م", name: "letter24", audio: "letter24/letter24.mp3" },
        { letter: "ن", name: "letter25", audio: "letter25/letter25.mp3" },
        { letter: "هـ", name: "letter26", audio: "letter26/letter26.mp3" },
        { letter: "و", name: "letter27", audio: "letter27/letter27.mp3" },
        { letter: "ي", name: "letter28", audio: "letter28/letter28.mp3" },
    ];

    let correctLetter = null;
    let hasAnswered = false; // Флаг для отслеживания, был ли выбран ответ

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");

    const nextButton = document.createElement("button");
    nextButton.textContent = "➡️ Дальше";
    nextButton.style.display = "none";
    nextButton.style.marginTop = "20px";
    nextButton.style.fontSize = "1.3em";
    nextButton.style.fontFamily = "'Nautilus Pompilius', sans-serif";
    nextButton.onclick = () => {
        renderQuestion();
        nextButton.style.display = "none";
        hasAnswered = false; // Сброс флага после нового вопроса
        
    };
    document.getElementById("next-button-container").appendChild(nextButton);


    // Счётчики
    let correctCount = 0;
    let wrongCount = 0;

    function updateScore() {
        const scoreBox = document.getElementById("score");
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
        updateScore();
    }

    document.getElementById("resetScore").onclick = () => {
        correctCount = 0;
        wrongCount = 0;
        updateScore();
    };

    function getRandomLetter() {
        return arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
    }

    function getRandomOptions(correct) {
        const options = [correct];
        while (options.length < 9) {
            const random = getRandomLetter();
            if (!options.includes(random)) {
                options.push(random);
            }
        }
        return shuffle(options);
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function renderQuestion() {
        correctLetter = getRandomLetter();
        const options = getRandomOptions(correctLetter);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.letter;
            btn.setAttribute("lang", "ar");  // Добавляем атрибут lang="ar" для кнопок с арабским текстом
            btn.style.fontFamily = "'Times New Roman', sans-serif"; // Применяем шрифт Times New Roman
            btn.style.fontSize = "2.5em"; // Увеличиваем размер шрифта
            btn.style.margin = "15px"; // Увеличиваем отступы между кнопками
            btn.style.padding = "15px 30px"; // Увеличиваем внутренние отступы (внутренний отступ по вертикали и горизонтали)

            btn.onclick = () => checkAnswer(opt);
            optionsContainer.appendChild(btn);
        });
    }

    // Функция проверки ответа
    function checkAnswer(selected) {
        if (hasAnswered) return; // Если ответ уже выбран, ничего не делаем

        // Отключаем все кнопки после того, как был выбран ответ
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach(button => button.disabled = true); // Отключаем все кнопки

        hasAnswered = true; // Устанавливаем флаг, что ответ уже выбран

        if (selected === correctLetter) {
            resultBox.textContent = "✅ Верно!";
            resultBox.style.color = "green";
            handleAnswer(true);
        } else {
            resultBox.textContent = `❌ Неверно. Правильная буква: ${correctLetter.letter}`;
            resultBox.style.color = "red";
            handleAnswer(false);
        }

        nextButton.style.display = "inline-block"; // Показать кнопку "Дальше"
    }

    document.getElementById("play-audio").onclick = function () {
        if (correctLetter) {
            new Audio(correctLetter.audio).play();
        }
    };

    renderQuestion();
    updateScore();
};
