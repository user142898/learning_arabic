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