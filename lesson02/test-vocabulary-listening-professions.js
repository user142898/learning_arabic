window.onload = function () {
    const words = [
        
        
        {"ru": "Учёба", "ar": "دِرَاسَة", "audio": "../audio/دراسة.mp3"},
        {"ru": "Учебник", "ar": "مُقرر", "audio": "../audio/مقرر.mp3"},
        {"ru": "Словарь", "ar": "قاموس", "audio": "../audio/قاموس.mp3"},
        {"ru": "Профессия", "ar": "مِهْنَة", "audio": "../audio/مهنة.mp3"},
        {"ru": "Специальность", "ar": "تَخَصص", "audio": "../audio/تخصص.mp3"},
        {"ru": "Школа", "ar": "مَدْرَسَة", "audio": "../audio/مدرسة.mp3"},
        {"ru": "Университет", "ar": "جَامِعَة", "audio": "../audio/جامعة.mp3"},
        {"ru": "Профессор(лит.)/учитель в школе(разг.)", "ar": "أُسْتَاذ", "audio": "../audio/أستاذ.mp3"},
        {"ru": "Учитель", "ar": "مُدَرِّس", "audio": "../audio/مدرس.mp3"},
        {"ru": "Улем (учёный)", "ar": "عَالِم", "audio": "../audio/عَالِم.mp3"},
        {"ru": "Врач", "ar": "طَبِيب", "audio": "../audio/طبيب.mp3"},
        {"ru": "Инженер", "ar": "مُهَنْدِس", "audio": "../audio/مهندس.mp3"},
        {"ru": "Адвокат", "ar": "مُحامِ", "audio": "../audio/محام.mp3"},
        {"ru": "Фермер", "ar": "مُزَارِع", "audio": "../audio/مزارع.mp3"},
        {"ru": "Рабочий", "ar": "عَامِل", "audio": "../audio/عامل.mp3"},
        {"ru": "Медсестра", "ar": "مُمَرِّضَة", "audio": "../audio/ممرضة.mp3"},
        {"ru": "Журналист", "ar": "صَحَفِي", "audio": "../audio/صحفي.mp3"},
        {"ru": "Переводчик", "ar": "مُتَرْجِم", "audio": "../audio/مترجم.mp3"},
        {"ru": "Пекарь", "ar": "خَبَّاز", "audio": "../audio/خباز.mp3"},
        {"ru": "Продавец", "ar": "بائِع", "audio": "../audio/بائع.mp3"},
        {"ru": "Плотник", "ar": "نَجَّار", "audio": "../audio/نجار.mp3"},
        {"ru": "Водитель", "ar": "سَائِق", "audio": "../audio/سائق.mp3"},
        {"ru": "Повар", "ar": "طَبَّاخ", "audio": "../audio/طباخ.mp3"},
        {"ru": "Бухгалтер", "ar": "مُحَاسِب", "audio": "../audio/محاسب.mp3"},
        {"ru": "Фотограф", "ar": "مُصَوِّر", "audio": "../audio/مصور.mp3"},
        {"ru": "Художник", "ar": "فَنَّان", "audio": "../audio/فنان.mp3"},
        {"ru": "Певец", "ar": "مُغَنِّي", "audio": "../audio/مغني.mp3"},
        {"ru": "Парикмахер", "ar": "حَلَّاق", "audio": "../audio/حلاق.mp3"},
        {"ru": "Корреспондент", "ar": "مُرَاسِل", "audio": "../audio/مراسل.mp3"},
        {"ru": "Пилот", "ar": "طَيَّار", "audio": "../audio/طيار.mp3"},
        {"ru": "Солдат", "ar": "جُنْدِي", "audio": "../audio/جندي.mp3"},
        {"ru": "Директор", "ar": "مُدِير", "audio": "../audio/مدير.mp3"},
        {"ru": "Пожарный", "ar": "إِطفائِي", "audio": "../audio/إطفائي.mp3"},
        {"ru": "Следователь", "ar": "مُحَقِّق", "audio": "../audio/محقق.mp3"},
        {"ru": "Архитектор", "ar": "مِعْمَارِي", "audio": "../audio/معماري.mp3"},
        {"ru": "Медбрат", "ar": "مُمَرِّض", "audio": "../audio/ممرض.mp3"},
        {"ru": "Инспектор", "ar": "مُفَتِّش", "audio": "../audio/مفتش.mp3"},
        {"ru": "Ассистент", "ar": "مُسَاعِد", "audio": "../audio/مساعد.mp3"},
        {"ru": "Сотрудник", "ar": "مُوَظَّف", "audio": "../audio/موظف.mp3"},
        {"ru": "Консультант", "ar": "مُسْتَشَار", "audio": "../audio/مستشار.mp3"},
        {"ru": "Строитель", "ar": "بَنّاء", "audio": "../audio/بَنّاء.mp3"},
        {"ru": "Писатель", "ar": "كاتِب", "audio": "../audio/كاتب.mp3"},
        {"ru": "Президент", "ar": "رَئِيس", "audio": "../audio/رئيس.mp3"},
        {"ru": "Риэлтор", "ar": "سِمسار", "audio": "../audio/سمسار.mp3"},
        {"ru": "Техник", "ar": "فَنِّي", "audio": "../audio/فني.mp3"},
        {"ru": "Охранник", "ar": "حَارِس", "audio": "../audio/حارس.mp3"},
        {"ru": "Продюсер", "ar": "مُنْتِج", "audio": "../audio/منتج.mp3"},
        {"ru": "Исследователь", "ar": "بَاحِث", "audio": "../audio/باحث.mp3"},
        {"ru": "Актёр", "ar": "مُمَثل", "audio": "../audio/ممثل.mp3"},
        {"ru": "Официант", "ar": "نادِل", "audio": "../audio/نادل.mp3"},
        {"ru": "Танцор", "ar": "راقِص", "audio": "../audio/راقص.mp3"},
        {"ru": "Уборщик", "ar": "عامِل نَظافَة", "audio": "../audio/عامل_نظافة.mp3"},
        {"ru": "Пастух", "ar": "راعي", "audio": "../audio/راعي.mp3"},
        {"ru": "Ветеринар", "ar": "بَيْطَري", "audio": "../audio/بيطري.mp3"},
        {"ru": "Ювелир", "ar": "صائغ", "audio": "../audio/صائغ.mp3"},
        {"ru": "Шпион", "ar": "جاسوس", "audio": "../audio/جاسوس.mp3"},
        {"ru": "Вор", "ar": "سارِق", "audio": "../audio/سارق.mp3"},
        {"ru": "Убийца", "ar": "قاتِل", "audio": "../audio/قاتل.mp3"},
        {"ru": "Мошенник", "ar": "مُحتال", "audio": "../audio/محتال.mp3"},
    
    
        
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
