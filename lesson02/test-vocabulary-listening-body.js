window.onload = function () {
    const words = [
        
        
        { "ru": "Тело", "ar": "جِسم", "audio": "../audio/جسم.mp3" },
        { "ru": "Голова", "ar": "رَأْس", "audio": "../audio/رأس.mp3" },
        { "ru": "Волосы", "ar": "شَعْر", "audio": "../audio/شعر.mp3" },
        { "ru": "Лицо", "ar": "وَجْه", "audio": "../audio/وجه.mp3" },
        { "ru": "Лоб", "ar": "جَبهَة", "audio": "../audio/جبهة.mp3" },
        { "ru": "Бровь", "ar": "حَاجِب", "audio": "../audio/حاجب.mp3" },
        { "ru": "Веко", "ar": "جَفْن", "audio": "../audio/جفن.mp3" },
        { "ru": "Глаз", "ar": "عَيْن", "audio": "../audio/عين.mp3" },
        { "ru": "Зрачок (разг.)", "ar": "بُؤبُؤ", "audio": "../audio/بؤبؤ.mp3" },
        { "ru": "Ресницы", "ar": "رُموش", "audio": "../audio/رموش.mp3" },
        { "ru": "Щека", "ar": "خَد", "audio": "../audio/خد.mp3" },
        { "ru": "Нос", "ar": "أَنْف", "audio": "../audio/أنف.mp3" },
        { "ru": "Ухо", "ar": "أُذُن", "audio": "../audio/أذن.mp3" },
        { "ru": "Рот", "ar": "فَم", "audio": "../audio/فم.mp3" },
        { "ru": "Губа", "ar": "شِفه", "audio": "../audio/شفه.mp3" },
        { "ru": "Язык", "ar": "لِسَان", "audio": "../audio/لسان.mp3" },
        { "ru": "Десна", "ar": "لِثَة", "audio": "../audio/لثة.mp3" },
        { "ru": "Зуб", "ar": "سِن", "audio": "../audio/سن.mp3" },
        { "ru": "Усы", "ar": "شارِب", "audio": "../audio/شارب.mp3" },
        { "ru": "Борода", "ar": "لِحيَة", "audio": "../audio/لحية.mp3" },
        { "ru": "Шея", "ar": "عُنُق", "audio": "../audio/عنق.mp3" },
        { "ru": "Горло", "ar": "حَلْق", "audio": "../audio/حلق.mp3" },
        { "ru": "Голос", "ar": "صَوْت", "audio": "../audio/صوت.mp3" },
        { "ru": "Плечо", "ar": "كَتِف", "audio": "../audio/كتف.mp3" },
        { "ru": "Подмышка", "ar": "إِبط", "audio": "../audio/إبط.mp3" },
        { "ru": "Рука (целиком)", "ar": "ذِرَاع", "audio": "../audio/ذراع.mp3" },
        { "ru": "Локоть", "ar": "مِرْفَق", "audio": "../audio/مرفق.mp3" },
        { "ru": "Запястье", "ar": "مِعْصَم", "audio": "../audio/معصم.mp3" },
        { "ru": "Ладонь (кисть руки)", "ar": "يَد", "audio": "../audio/يد.mp3" },
        { "ru": "Кулак", "ar": "قَبضَة", "audio": "../audio/قبضة.mp3" },
        { "ru": "Палец", "ar": "إِصْبَع", "audio": "../audio/إصبع.mp3" },
        { "ru": "Ноготь", "ar": "ظِفْر", "audio": "../audio/ظفر.mp3" },
        { "ru": "Грудь", "ar": "صَدْر", "audio": "../audio/صدر.mp3" },
        { "ru": "Спина", "ar": "ظَهْر", "audio": "../audio/ظهر.mp3" },
        { "ru": "Бедро", "ar": "خاصِرَة", "audio": "../audio/خاصرة.mp3" },
        { "ru": "Нога", "ar": "قَدَم", "audio": "../audio/قدم.mp3" },
        { "ru": "Колено", "ar": "رُكْبَة", "audio": "../audio/ركبة.mp3" },
        { "ru": "Лодыжка", "ar": "كَاحِل", "audio": "../audio/كاحل.mp3" },
        { "ru": "Пятка", "ar": "كَعْب", "audio": "../audio/كعب.mp3" },
        { "ru": "Кость", "ar": "عَظمَة", "audio": "../audio/عظمة.mp3" },
        { "ru": "Ребро", "ar": "ضِلْع", "audio": "../audio/ضلع.mp3" },
        { "ru": "Сердце", "ar": "قَلْب", "audio": "../audio/قلب.mp3" },
        { "ru": "Лёгкое", "ar": "رِئَة", "audio": "../audio/رئة.mp3" },
        { "ru": "Печень", "ar": "كَبِد", "audio": "../audio/كبد.mp3" },
        { "ru": "Желудок", "ar": "مِعْدَة", "audio": "../audio/معدة.mp3" },
        { "ru": "Кровь", "ar": "دَم", "audio": "../audio/دم.mp3" },
        { "ru": "Здоровье", "ar": "صِحَّة", "audio": "../audio/صحة.mp3" },
        { "ru": "Болезнь", "ar": "مَرَض", "audio": "../audio/مرض.mp3" },
        { "ru": "Кашель", "ar": "سُعال", "audio": "../audio/سعال.mp3" },
        { "ru": "Насморк", "ar": "سَيَلان الأَنف", "audio": "../audio/سيلان_الأنف.mp3" },
        { "ru": "Температура", "ar": "حَرارَة", "audio": "../audio/حرارة.mp3" },
        { "ru": "Давление", "ar": "ضَغط", "audio": "../audio/ضغط.mp3" },
        { "ru": "Боль", "ar": "أَلَم", "audio": "../audio/ألم.mp3" },
        { "ru": "Рана", "ar": "جَرح", "audio": "../audio/جرح.mp3" },
        { "ru": "Перелом", "ar": "كَسر", "audio": "../audio/كسر.mp3" },
        { "ru": "Лекарство", "ar": "دَواء", "audio": "../audio/دواء.mp3" }
      
        
    ];

    let correctWord = null;
    let hasAnswered = false; // Флаг для отслеживания, был ли выбран ответ

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 Дальше";
    nextButton.className = "next-button"; // добавляем стиль из CSS
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



    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function getRandomOptions(correct) {
        const options = [correct];
        while (options.length < 9) {
            const random = getRandomWord();
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
        correctWord = getRandomWord();
        const options = getRandomOptions(correctWord);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.textContent = opt.ru;
        btn.lang = "ru";
      

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

        if (selected === correctWord) {
            resultBox.textContent = "✅ Верно!";
            resultBox.style.color = "green";
            resultBox.style.fontFamily = "Nautilus Pompilius";
            handleAnswer(true);
        } else {
            resultBox.textContent =
                `❌ Неверно. Правильный ответ: ${correctWord.ru}`;
            resultBox.style.color = "red";
            resultBox.style.fontFamily = "Nautilus Pompilius";
            handleAnswer(false);
        }


        nextButton.style.display = "inline-block"; // Показать кнопку "Дальше"
    }

    document.getElementById("play-audio").onclick = function () {
        if (correctWord) {
            new Audio(correctWord.audio).play();
        }
    };

    renderQuestion();
    updateScore();
};
