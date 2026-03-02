window.onload = function () {
    const words = [
        
        
      { "ru": "Время", "ar": "وَقْت", "audio": "../audio/وقت.mp3" },
      { "ru": "Вчера", "ar": "أَمس", "audio": "../audio/أمس.mp3" },
      { "ru": "Позавчера", "ar": "قَبلَ أَمس", "audio": "../audio/قبل_أمس.mp3" },
      { "ru": "Сегодня", "ar": "اليَوم", "audio": "../audio/اليوم.mp3" },
      { "ru": "Завтра", "ar": "غَداً", "audio": "../audio/غدا.mp3" },
      { "ru": "Послезавтра", "ar": "بَعدَ غَد", "audio": "../audio/بعد_غد.mp3" },
      { "ru": "Секунда", "ar": "ثَانِيَة", "audio": "../audio/ثانية.mp3" },
      { "ru": "Минута", "ar": "دَقِيقَة", "audio": "../audio/دقيقة.mp3" },
      { "ru": "Час", "ar": "سَاعَة", "audio": "../audio/ساعة.mp3" },
      { "ru": "День", "ar": "يَوْم", "audio": "../audio/يوم.mp3" },
      { "ru": "Неделя", "ar": "أُسبوع", "audio": "../audio/أسبوع.mp3" },
      { "ru": "Месяц", "ar": "شَهْر", "audio": "../audio/شهر.mp3" },
      { "ru": "Год", "ar": "سَنَة", "audio": "../audio/سَنَة.mp3" },
      { "ru": "Календарь", "ar": "تَقْوِيم", "audio": "../audio/تقويم.mp3" },
      { "ru": "Зима", "ar": "شِتَاء", "audio": "../audio/شتاء.mp3" },
      { "ru": "Весна", "ar": "رَبِيع", "audio": "../audio/ربيع.mp3" },
      { "ru": "Лето", "ar": "صَيْف", "audio": "../audio/صيف.mp3" },
      { "ru": "Осень", "ar": "خَرِيف", "audio": "../audio/خريف.mp3" },
      { "ru": "Рассвет", "ar": "فَجْر", "audio": "../audio/فجر.mp3" },
      { "ru": "Утро", "ar": "صَبَاح", "audio": "../audio/صباح.mp3" },
      { "ru": "Полдень", "ar": "ظُهْر", "audio": "../audio/ظُهْر.mp3" },
      { "ru": "Вечер", "ar": "مَسَاء", "audio": "../audio/مساء.mp3" },
      { "ru": "Закат", "ar": "غُرُوب", "audio": "../audio/غروب.mp3" },
      { "ru": "Ночь", "ar": "لَيْل", "audio": "../audio/ليل.mp3" },
      { "ru": "Полночь", "ar": "مُنْتَصَف اللَيْل", "audio": "../audio/منتصف_الليل.mp3" },
      { "ru": "Воскресенье", "ar": "أحَد", "audio": "../audio/أحد.mp3" },
      { "ru": "Понедельник", "ar": "إثْنَيْن", "audio": "../audio/ٱثْنَيْن.mp3" },
      { "ru": "Вторник", "ar": "ثُلَاثَاء", "audio": "../audio/ثلاثاء.mp3" },
      { "ru": "Среда", "ar": "أَرْبِعَاء", "audio": "../audio/أربعاء.mp3" },
      { "ru": "Четверг", "ar": "خَمِيس", "audio": "../audio/خميس.mp3" },
      { "ru": "Пятница", "ar": "جُمُعَة", "audio": "../audio/جمعة.mp3" },
      { "ru": "Суббота", "ar": "سَبْت", "audio": "../audio/سبت.mp3" },
      { "ru": "Январь", "ar": "يناير", "audio": "../audio/يناير.mp3" },
      { "ru": "Февраль", "ar": "فبراير", "audio": "../audio/فبراير.mp3" },
      { "ru": "Март", "ar": "مارس", "audio": "../audio/مارس.mp3" },
      { "ru": "Апрель", "ar": "أبريل", "audio": "../audio/أبريل.mp3" },
      { "ru": "Май", "ar": "مايو", "audio": "../audio/مايو.mp3" },
      { "ru": "Июнь", "ar": "يونيو", "audio": "../audio/يونيو.mp3" },
      { "ru": "Июль", "ar": "يوليو", "audio": "../audio/يوليو.mp3" },
      { "ru": "Август", "ar": "أغسطس", "audio": "../audio/أغسطس.mp3" },
      { "ru": "Сентябрь", "ar": "سبتمبر", "audio": "../audio/سبتمبر.mp3" },
      { "ru": "Октябрь", "ar": "أكتوبر", "audio": "../audio/أكتوبر.mp3" },
      { "ru": "Ноябрь", "ar": "نوفمبر", "audio": "../audio/نوفمبر.mp3" },
      { "ru": "Декабрь", "ar": "ديسمبر", "audio": "../audio/ديسمبر.mp3" },
      { "ru": "Мухаррам", "ar": "مُحَرَّم", "audio": "../audio/محرم.mp3" },
      { "ru": "Сафар", "ar": "صَفَر", "audio": "../audio/صَفَر.mp3" },
      { "ru": "Раби-аль-авваль", "ar": "رَبِيعُ الْأَوَّل", "audio": "../audio/ربيع_الأول.mp3" },
      { "ru": "Раби-аль-ахир", "ar": "رَبِيعُ الآخِر", "audio": "../audio/ربيع_الآخر.mp3" },
      { "ru": "Джумада-аль-уля", "ar": "جُمَادى الأُولى", "audio": "../audio/جمادى_الأولى.mp3" },
      { "ru": "Джумада-аль-ахира", "ar": "جُمَادى الآخِرَة", "audio": "../audio/جمادى_الآخرة.mp3" },
      { "ru": "Раджаб", "ar": "رَجَب", "audio": "../audio/رجب.mp3" },
      { "ru": "Шабан", "ar": "شَعْبَان", "audio": "../audio/شعبان.mp3" },
      { "ru": "Рамадан", "ar": "رَمَضَان", "audio": "../audio/رمضان.mp3" },
      { "ru": "Шавваль", "ar": "شَوَّال", "audio": "../audio/شوال.mp3" },
      { "ru": "Зу-ль-каада", "ar": "ذُو القِعدَة", "audio": "../audio/ذو_القعدة.mp3" },
      { "ru": "Зу-ль-хиджа", "ar": "ذُو الحِجَة", "audio": "../audio/ذو_الحجة.mp3" }
    
            
        
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
