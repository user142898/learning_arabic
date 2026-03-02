window.onload = function () {
    const words = [
      
        { "ru": "Аллах", "ar": "ٱللَّه", "audio": "../audio/الله.mp3" },
        { "ru": "Бог", "ar": "إِلٰه", "audio": "../audio/إله.mp3" },
        { "ru": "Человек (религ.)", "ar": "إِنسان", "audio": "../audio/إنسان.mp3" },
        { "ru": "Человек", "ar": "شَخْص", "audio": "../audio/شخص.mp3" },
        { "ru": "Мужчина", "ar": "رَجُل", "audio": "../audio/رجل.mp3" },
        { "ru": "Женщина", "ar": "مَرأَة", "audio": "../audio/مرأة.mp3" },
        { "ru": "Жизнь", "ar": "حَياة", "audio": "../audio/حياة.mp3" },
        { "ru": "Смерть", "ar": "مَوْت", "audio": "../audio/موت.mp3" },
        { "ru": "Дух (Связан с Аллахом)", "ar": "رُوحٌ", "audio": "../audio/روح.mp3" },
        { "ru": "Душа (добрая/злая/спокойная)", "ar": "نَفْسٌ", "audio": "../audio/نفس.mp3" },
        { "ru": "Дыхание", "ar": "تَنَفُّسٌ", "audio": "../audio/تنفس.mp3" },
        { "ru": "Единобожие", "ar": "تَوْحِيد", "audio": "../audio/توحيد.mp3" },
        { "ru": "Ширк (многобожие)", "ar": "شِرك", "audio": "../audio/شرك.mp3" },
        { "ru": "Вера", "ar": "إِيمَان", "audio": "../audio/إيمان.mp3" },
        { "ru": "Прославление (Аллаха)", "ar": "تَسْبِيح", "audio": "../audio/تسبيح.mp3" },
        { "ru": "Упоминание (Аллаха)", "ar": "ذِّكْر", "audio": "../audio/ذكر.mp3" },
        { "ru": "Поклонение", "ar": "عِبَادَة", "audio": "../audio/عبادة.mp3" },
        { "ru": "Видение, откровение (сон от Аллаха)", "ar": "رُؤْيَة", "audio": "../audio/رؤية.mp3" },
        { "ru": "Мечта(сон от шайтана)", "ar": "حُلم", "audio": "../audio/حلم.mp3" },
        { "ru": "Послание", "ar": "رِسَالَة", "audio": "../audio/رسالة.mp3" },
        { "ru": "Благочестие, набожность", "ar": "تَقْوَى", "audio": "../audio/تقوى.mp3" },
        { "ru": "Обязанность, обязательный долг", "ar": "فَرِيضَة", "audio": "../audio/فريضة.mp3" },
        { "ru": "Покаяние", "ar": "تَوْبَة", "audio": "../audio/توبة.mp3" },
        { "ru": "Прощение", "ar": "مَغْفِرَة", "audio": "../audio/مغفرة.mp3" },
        { "ru": "Наказание, мучение", "ar": "عَذَاب", "audio": "../audio/عذاب.mp3" },
        { "ru": "Хорошие поступки", "ar": "حَسَنات", "audio": "../audio/حسنات.mp3" },
        { "ru": "Плохие поступки", "ar": "سَيِّئات", "audio": "../audio/سيئات.mp3" },
        { "ru": "Харам (запрещённое)", "ar": "حَرَام", "audio": "../audio/حرام.mp3" },
        { "ru": "Халяль (дозволенное)", "ar": "حَلَال", "audio": "../audio/حلال.mp3" },
        { "ru": "Фард (обязательное к выполнению действие)", "ar": "فَرض", "audio": "../audio/فرض.mp3" },
        { "ru": "Мубах (не запрещённое действие)", "ar": "مُبَاح", "audio": "../audio/مباح.mp3" },
        { "ru": "Макрух (нежелательное действие, но не запрещённое)", "ar": "مَكْروه", "audio": "../audio/مكروه.mp3" },
        { "ru": "Стыд(разг)/недостаток/изъян", "ar": "عَيْب", "audio": "../audio/عيب.mp3" },
        { "ru": "Ангел", "ar": "مَلَك", "audio": "../audio/ملك.mp3" },
        { "ru": "Шайтан (демон)", "ar": "شَيْطَان", "audio": "../audio/شيطان.mp3" },
        { "ru": "Джинн (бес)", "ar": "جِن", "audio": "../audio/جن.mp3" },
        { "ru": "Иблис (дьявол)", "ar": "إِبليس", "audio": "../audio/إبليس.mp3" },
        { "ru": "Колдун", "ar": "ساحِر", "audio": "../audio/ساحر.mp3" },
        { "ru": "Судьба, предопределение", "ar": "قَدَر", "audio": "../audio/قَدَر.mp3" },
        { "ru": "Судный день", "ar": "يَوْمُ ٱلْقِيَامَةِ", "audio": "../audio/يوم_القيامة.mp3" },
        { "ru": "Рай", "ar": "جَنَّة", "audio": "../audio/جنة.mp3" },
        { "ru": "Ад", "ar": "جَهَنَّم", "audio": "../audio/جهنم.mp3" },
        { "ru": "Пророк", "ar": "نَبِي", "audio": "../audio/نبي.mp3" },
        { "ru": "Коран", "ar": "قُرْآن", "audio": "../audio/قرآن.mp3" },
        { "ru": "Сура", "ar": "سُورَة", "audio": "../audio/سورة.mp3" },
        { "ru": "Аят", "ar": "آيَة", "audio": "../audio/آية.mp3" },
        { "ru": "Джуз (часть Корана)", "ar": "جُزْء", "audio": "../audio/جزء.mp3" },
        { "ru": "Хадис (изречения пророка)", "ar": "حَدِيث", "audio": "../audio/حديث.mp3" },
        { "ru": "Сунна (традиции пророка)", "ar": "سُنَّة", "audio": "../audio/سُنَّة.mp3" },
        { "ru": "Проповедь (хутба)", "ar": "خُطْبَة", "audio": "../audio/خُطْبَة.mp3" },
        { "ru": "Ислам (покорность)", "ar": "إِسْلَام", "audio": "../audio/إسلام.mp3" },
        { "ru": "Шахада (свидетельство о вере)", "ar": "شَهَادَة", "audio": "../audio/شهادة.mp3" },
        { "ru": "Мусульманин", "ar": "مُسْلِم", "audio": "../audio/مسلم.mp3" },
        { "ru": "Верующий", "ar": "مُؤْمِن", "audio": "../audio/مؤمن.mp3" },
        { "ru": "Неверующий", "ar": "كَافِر", "audio": "../audio/كافر.mp3" },
        { "ru": "Лицемер", "ar": "مُنافق", "audio": "../audio/منافق.mp3" },
        { "ru": "Умма (община)", "ar": "أُمَّة", "audio": "../audio/أمة.mp3" },
        { "ru": "Сподвижники (пророка Мухаммеда)", "ar": "صَحَابَة", "audio": "../audio/صحابة.mp3" },
        { "ru": "Последователи (сподвижников)", "ar": "تابِعِيين", "audio": "../audio/تابعيين.mp3" },
        { "ru": "Мухаджиры (беженцы)", "ar": "مُهاجِرين", "audio": "../audio/مهاجرين.mp3" },
        { "ru": "Ансары (сторонники)", "ar": "أَنصار", "audio": "../audio/أنصار.mp3" },
        { "ru": "Суннит", "ar": "سُنِّي", "audio": "../audio/سني.mp3" },
        { "ru": "Шиит", "ar": "شِيعِي", "audio": "../audio/شيعي.mp3" },
        { "ru": "Фикх (знание закона)", "ar": "فِقْه", "audio": "../audio/فقه.mp3" },
        { "ru": "Шариат (закон)", "ar": "شَرِيعَة", "audio": "../audio/شريعة.mp3" },
        { "ru": "Фетва (решение на основе ислама)", "ar": "فَتْوَى", "audio": "../audio/فتوى.mp3" },
        { "ru": "Иджма (единогласное мнение)", "ar": "إِجْمَاع", "audio": "../audio/إجماع.mp3" },
        { "ru": "Кияс (измерение)(суждение по аналогии)", "ar": "قِيَاس", "audio": "../audio/قياس.mp3" },
        { "ru": "Святой (покровитель)", "ar": "وَلِي", "audio": "../audio/ولي.mp3" },
        { "ru": "Имамат (пост лидерства в исламе)", "ar": "إِمَامَة", "audio": "../audio/إمامة.mp3" },
        { "ru": "Имам (религиозный лидер)", "ar": "إِمَام", "audio": "../audio/إمام.mp3" },
        { "ru": "Халифат", "ar": "خِلَافَة", "audio": "../audio/خلافة.mp3" },
        { "ru": "Халиф", "ar": "خَلِيفَة", "audio": "../audio/خليفة.mp3" },
        { "ru": "Муфтий", "ar": "مُفتي", "audio": "../audio/مفتي.mp3" },
        { "ru": "Мечеть", "ar": "مَسْجِد", "audio": "../audio/مسجد.mp3" },
        { "ru": "Муэдзин", "ar": "مُؤَذِّن", "audio": "../audio/مؤذن.mp3" },
        { "ru": "Призыв к молитве (Азан)", "ar": "أَذَان", "audio": "../audio/أَذَان.mp3" },
        { "ru": "Дуа (молитва)", "ar": "دُعَاء", "audio": "../audio/دُعَاء.mp3" },
        { "ru": "Молитва (намаз)", "ar": "صَلَاة", "audio": "../audio/صلاة.mp3" },
        { "ru": "Кибла (направление молитвы)", "ar": "قِبْلَة", "audio": "../audio/قبلة.mp3" },
        { "ru": "Утренняя молитва (Фаджр)", "ar": "صَلَاةُ ٱلْفَجْر", "audio": "../audio/صلاة_الفجر.mp3" },
        { "ru": "Полуденная молитва (Зухр)", "ar": "صَلَاةُ ٱلظُّهْر", "audio": "../audio/صلاة_الظهر.mp3" },
        { "ru": "Послеполуденная молитва (Аср)", "ar": "صَلَاةُ ٱلْعَصْر", "audio": "../audio/صلاة_العصر.mp3" },
        { "ru": "Вечерняя молитва (Магриб)", "ar": "صَلَاةُ ٱلْمَغْرِب", "audio": "../audio/صلاة_المغرب.mp3" },
        { "ru": "Ночная молитва (‘Иша)", "ar": "صَلَاةُ ٱلْعِشَاء", "audio": "../audio/صلاة_العشاء.mp3" },
        { "ru": "Поясной поклон (руку’)", "ar": "رُكُوع", "audio": "../audio/ركوع.mp3" },
        { "ru": "Земной поклон (суджуд)", "ar": "سُجُود", "audio": "../audio/سجود.mp3" },
        { "ru": "Заключительное приветствие (таслим)", "ar": "تَسْلِيم", "audio": "../audio/تسليم.mp3" },
        { "ru": "Очищение (тахара)", "ar": "طَهَارَة", "audio": "../audio/طهارة.mp3" },
        { "ru": "Омовение (вуду)(перед молитвой)", "ar": "وُضُوء", "audio": "../audio/وضوء.mp3" },
        { "ru": "Большое омовение (гусль)", "ar": "غُسْل", "audio": "../audio/غسل.mp3" },
        { "ru": "Тайаммум (сухое омовение)", "ar": "تَيَمُّم", "audio": "../audio/تيمم.mp3" },
        { "ru": "Милостыня", "ar": "صَدَقَة", "audio": "../audio/صدقة.mp3" },
        { "ru": "Милостыня (обязательный закят)", "ar": "زَكَاة", "audio": "../audio/زكاة.mp3" },
        { "ru": "Пост", "ar": "صَوْم", "audio": "../audio/صوم.mp3" },
        { "ru": "Праздник разговения (Ид аль-Фитр)", "ar": "عِيدُ ٱلْفِطْر", "audio": "../audio/عيد_الفطر.mp3" },
        { "ru": "Праздник жертвоприношения (Ид аль-Адха)", "ar": "عِيدُ ٱلْأَضْحَى", "audio": "../audio/عيد_الأضحى.mp3" },
        { "ru": "Ночь могущества (Ляйлат аль-Кадр)", "ar": "لَيْلَةُ ٱلْقَدْر", "audio": "../audio/ليلة_القدر.mp3" },
        { "ru": "Хадж (паломничество)", "ar": "حَج", "audio": "../audio/حج.mp3" },
        { "ru": "Ихрам", "ar": "إِحْرَام", "audio": "../audio/إحرام.mp3" },
        { "ru": "Кааба", "ar": "كَعبَة", "audio": "../audio/كعبة.mp3" },
        { "ru": "Таваф (обход Каабы)", "ar": "طَوَاف", "audio": "../audio/طواف.mp3" },
        { "ru": "Мекка", "ar": "مَكّة", "audio": "../audio/مكة.mp3" },
        { "ru": "Медина", "ar": "المَدينَة المُنَوَرة", "audio": "../audio/المدينة_المنورة.mp3" },
        { "ru": "Хиджра (Побег из Мекки в Медину)", "ar": "هِجْرَة", "audio": "../audio/هجرة.mp3" }
        
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