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
        {"ru": "Мошенник", "ar": "مُحتال", "audio": "../audio/محتال.mp3"}
    
    
    
    
        
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