window.onload = function () {
    const words = [
        
        
        { "ru": "Папа", "ar": "بابا", "audio": "../audio/بابا.mp3" },
        { "ru": "Мама", "ar": "ماما", "audio": "../audio/ماما.mp3" },
        { "ru": "Отец", "ar": "أَب", "audio": "../audio/أب.mp3" },
        { "ru": "Мать", "ar": "أُم", "audio": "../audio/أم.mp3" },
        { "ru": "Отец (более формально)", "ar": "وَالِد", "audio": "../audio/والد.mp3" },
        { "ru": "Мать (более формально)", "ar": "وَالِدَة", "audio": "../audio/والدة.mp3" },
        { "ru": "Рождение (ребенка)", "ar": "وِلَادَة", "audio": "../audio/ولادة.mp3" },
        { "ru": "Родители", "ar": "أَهل", "audio": "../audio/أهل.mp3" },
        { "ru": "Ребёнок", "ar": "طِفْل", "audio": "../audio/طفل.mp3" },
        { "ru": "Младенец", "ar": "مَوْلُود", "audio": "../audio/مولود.mp3" },
        { "ru": "Несовершеннолетний", "ar": "حَدَث", "audio": "../audio/حدث.mp3" },
        { "ru": "Совершеннолетний", "ar": "بالِغ", "audio": "../audio/بالغ.mp3" },
        { "ru": "Родословная", "ar": "نَسَب", "audio": "../audio/نسب.mp3" },
        { "ru": "Потомство", "ar": "ذُرِّيَّة", "audio": "../audio/ذرية.mp3" },
        { "ru": "Сын", "ar": "إبن", "audio": "../audio/إبن.mp3" },
        { "ru": "Дочь", "ar": "إبنة", "audio": "../audio/ابنة.mp3" },
        { "ru": "Пасынок", "ar": "إبْنٌ بِالتَّبَنِّي", "audio": "../audio/ابن_بالتبني.mp3" },
        { "ru": "Падчерица", "ar": "بِنتٌ بِالتَبنّي", "audio": "../audio/بنت_بالتبني.mp3" },
        { "ru": "Сирота", "ar": "يَتِيم", "audio": "../audio/يتيم.mp3" },
        { "ru": "Брат", "ar": "أَخ", "audio": "../audio/أخ.mp3" },
        { "ru": "Близнец", "ar": "تَوأَم", "audio": "../audio/توأم.mp3" },
        { "ru": "Сестра", "ar": "أُخت", "audio": "../audio/أخت.mp3" },
        { "ru": "Дедушка", "ar": "جَد", "audio": "../audio/جد.mp3" },
        { "ru": "Бабушка", "ar": "جَدةَ", "audio": "../audio/جدة.mp3" },
        { "ru": "Внук", "ar": "حَفيد", "audio": "../audio/حفيد.mp3" },
        { "ru": "Внучка", "ar": "حفيدة", "audio": "../audio/حفيدة.mp3" },
        { "ru": "Дядя (со стороны отца)", "ar": "عَم", "audio": "../audio/عم.mp3" },
        { "ru": "Тётя (со стороны отца)", "ar": "عَمة", "audio": "../audio/عمة.mp3" },
        { "ru": "Дядя (со стороны матери)", "ar": "خال", "audio": "../audio/خال.mp3" },
        { "ru": "Тётя (со стороны матери)", "ar": "خالة", "audio": "../audio/خالة.mp3" },
        { "ru": "Двоюродный брат (по отцу)", "ar": "ابنُ العمّ", "audio": "../audio/ابن_العم.mp3" },
        { "ru": "Двоюродная сестра (по отцу)", "ar": "بنتُ العمّ", "audio": "../audio/بنت_العم.mp3" },
        { "ru": "Двоюродный брат (по матери)", "ar": "ابنُ الخال", "audio": "../audio/ابن_الخال.mp3" },
        { "ru": "Двоюродная сестра (по матери)", "ar": "بنتُ الخال", "audio": "../audio/بنت_الخال.mp3" },
        { "ru": "Отчим", "ar": "زَوْجُ الْأُم", "audio": "../audio/زوج_الأم.mp3" },
        { "ru": "Мачеха", "ar": "زَوْجَةُ الْأَب", "audio": "../audio/زوجة_الأب.mp3" },
        { "ru": "Родственник", "ar": "قَرِيب", "audio": "../audio/قريب.mp3" },
        { "ru": "Родственница", "ar": "قَرِيبَة", "audio": "../audio/قريبة.mp3" },
        { "ru": "Семья с дедушками и бабушками", "ar": "أَهْل", "audio": "../audio/اهل.mp3" },
        { "ru": "Фамилия/Семья (ближайшие родственники(отец, мать, братья)", "ar": "عَائِلَة", "audio": "../audio/عائلة.mp3" },
        { "ru": "Имя", "ar": "إِسم", "audio": "../audio/إسم.mp3" },
        { "ru": "Отчество (имя отца)", "ar": "إِسم الأَب", "audio": "../audio/إسم_الأب.mp3" },
        { "ru": "Отчество (имя дедушки)", "ar": "إسم الجَد", "audio": "../audio/إسم_الجد.mp3" },
        { "ru": "Помолвка", "ar": "خِطْبَة", "audio": "../audio/خطبة.mp3" },
        { "ru": "Обручённый", "ar": "خَطِيب", "audio": "../audio/خطيب.mp3" },
        { "ru": "Обручённая", "ar": "خَطِيبَة", "audio": "../audio/خطيبة.mp3" },
        { "ru": "Свадьба", "ar": "زِفاف", "audio": "../audio/زفاف.mp3" },
        { "ru": "Жених", "ar": "عَريس", "audio": "../audio/عريس.mp3" },
        { "ru": "Невеста", "ar": "عَروس", "audio": "../audio/عروس.mp3" },
        { "ru": "Брак", "ar": "زَوُاج", "audio": "../audio/زواج.mp3" },
        { "ru": "Религиозный брак", "ar": "نِكاح", "audio": "../audio/نكاح.mp3" },
        { "ru": "Муж", "ar": "زَوج", "audio": "../audio/زوج.mp3" },
        { "ru": "Жена", "ar": "زَوجة", "audio": "../audio/زوجة.mp3" },
        { "ru": "Зять", "ar": "صِهْر", "audio": "../audio/صهر.mp3" },
        { "ru": "Невестка", "ar": "كِنّة", "audio": "../audio/كنة.mp3" },
        { "ru": "Свёкор/Тесть", "ar": "حَمْو", "audio": "../audio/حمو.mp3" },
        { "ru": "Свекровь/Тёща", "ar": "حَمَاة", "audio": "../audio/حماة.mp3" },
        { "ru": "Деверь", "ar": "سِلْف", "audio": "../audio/سلف.mp3" },
        { "ru": "Все мужчины со стороны жены/мужа", "ar": "نَسِيب", "audio": "../audio/نسيب.mp3" },
        { "ru": "Все женщины со стороны жены/мужа", "ar": "نَسِيبة", "audio": "../audio/نسيبة.mp3" },
        { "ru": "Все родственники со стороны жены/мужа", "ar": "نَسَائِب", "audio": "../audio/نسائب.mp3" },
        { "ru": "Развод", "ar": "طَلَاق", "audio": "../audio/طلاق.mp3" },
        { "ru": "Похороны", "ar": "جَنَازَة", "audio": "../audio/جنازة.mp3" },
        { "ru": "Кладбище", "ar": "مَقْبَرَة", "audio": "../audio/مقبرة.mp3" },
        { "ru": "Могила", "ar": "قَبْر", "audio": "../audio/قبر.mp3" },
        { "ru": "Гроб", "ar": "تَابُوت", "audio": "../audio/تابوت.mp3" },
        { "ru": "Саван", "ar": "كَفَن", "audio": "../audio/كفن.mp3" },
        { "ru": "Вдовец", "ar": "أَرمل", "audio": "../audio/أرمل.mp3" },
        { "ru": "Вдова", "ar": "أَرمَلة", "audio": "../audio/أرملة.mp3" },
      
        
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
