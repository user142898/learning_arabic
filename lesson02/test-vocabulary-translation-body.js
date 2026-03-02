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
    let hasAnswered = false;
    let correctCount = 0;
    let wrongCount = 0;

    const optionsContainer = document.getElementById("options");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");
    const wordButton = document.getElementById("word-button");

    const nextButton = document.createElement("button");
    nextButton.textContent = "🌿 Дальше";
    nextButton.className = "next-button";

    document
        .getElementById("next-button-container")
        .appendChild(nextButton);

    nextButton.onclick = () => {
        hasAnswered = false;
        nextButton.style.display = "none";
        renderQuestion();
    };

    function updateScore() {
        scoreBox.textContent = `✅: ${correctCount} | ❌: ${wrongCount}`;
    }

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function getOptions(correct) {
        const list = [correct];
        while (list.length < 9 && list.length < words.length) {
            const w = getRandomWord();
            if (!list.includes(w)) list.push(w);
        }
        return shuffle(list);
    }

    function renderQuestion() {
        correctWord = getRandomWord();
        const options = getOptions(correctWord);

        optionsContainer.innerHTML = "";
        resultBox.textContent = "";
        resultBox.className = "center";

        wordButton.textContent = correctWord.ar;
        wordButton.onclick = () => new Audio(correctWord.audio).play();

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option.ru;
            btn.lang = "ru";
            btn.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selected) {
        if (hasAnswered) return;
        hasAnswered = true;

        document
            .querySelectorAll("#options button")
            .forEach(b => b.disabled = true);

        if (selected === correctWord) {
            resultBox.textContent = "✅ Верно!";
            resultBox.classList.add("result-correct");
            correctCount++;
        } else {
            resultBox.textContent =
                `❌ Неверно. Правильный ответ: ${correctWord.ru}`;
            resultBox.classList.add("result-wrong");
            wrongCount++;
        }

        updateScore();
        nextButton.style.display = "inline-block";
    }

    renderQuestion();
    updateScore();
};