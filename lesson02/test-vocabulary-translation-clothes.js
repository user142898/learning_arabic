window.onload = function () {
    const words = [
      
        {
            "ru": "Одежда",
            "ar": "مَلَابِس",
            "audio": "../audio/ملابس.mp3"
          },
          {
            "ru": "Головной убор",
            "ar": "قُبَّعَة",
            "audio": "../audio/قبعة.mp3"
          },
          {
            "ru": "Ободок для арафатки (для арабских мужчин)",
            "ar": "عِقَال",
            "audio": "../audio/عقال.mp3"
          },
          {
            "ru": "Шемаг (традиционный головной убор арабов)",
            "ar": "شُمَاغ",
            "audio": "../audio/شماغ.mp3"
          },
          {
            "ru": "Тарбуш (традиционная шапка дервиша)",
            "ar": "طَرْبُوش",
            "audio": "../audio/طربوش.mp3"
          },
          {
            "ru": "Хиджаб",
            "ar": "حِجَاب",
            "audio": "../audio/حجاب.mp3"
          },
          {
            "ru": "Химар (женский головной убор, закрывающий шею)",
            "ar": "خِمَار",
            "audio": "../audio/خمار.mp3"
          },
          {
            "ru": "Никаб",
            "ar": "نِقَاب",
            "audio": "../audio/نقاب.mp3"
          },
          {
            "ru": "Бурка (покрытие, полностью закрывающее тело, включая лицо)",
            "ar": "بُرْقُع",
            "audio": "../audio/برقع.mp3"
          },
          {
            "ru": "Шаль",
            "ar": "شَال",
            "audio": "../audio/شال.mp3"
          },
          {
            "ru": "Рубашка",
            "ar": "قَمِيص",
            "audio": "../audio/قميص.mp3"
          },
          {
            "ru": "Пиджак/жакет",
            "ar": "سُتْرَة",
            "audio": "../audio/سترة.mp3"
          },
          {
            "ru": "Галстук/резинка для волос",
            "ar": "رَبطَة",
            "audio": "../audio/ربطة.mp3"
          },
          {
            "ru": "Костюм",
            "ar": "بَدلَة",
            "audio": "../audio/بدلة.mp3"
          },
          {
            "ru": "Форма",
            "ar": "زِي",
            "audio": "../audio/زي.mp3"
          },
          {
            "ru": "Халат",
            "ar": "روب حَمّام",
            "audio": "../audio/روب_حمام.mp3"
          },
          {
            "ru": "Нижнее бельё",
            "ar": "مَلابِس داخِلِيَة",
            "audio": "../audio/ملابس_داخلية.mp3"
          },
          {
            "ru": "Бюстгалтер",
            "ar": "حَمالَة صَدر",
            "audio": "../audio/حمالة_صدر.mp3"
          },
          {
            "ru": "Трусы/кальсоны",
            "ar": "كلسون",
            "audio": "../audio/كلسون.mp3"
          },
          {
            "ru": "Дишдаша (традиционная арабская одежда для мужчин)",
            "ar": "دِشْدَاشَة",
            "audio": "../audio/دشداشة.mp3"
          },
          {
            "ru": "Платье",
            "ar": "فُسْتَان",
            "audio": "../audio/فستان.mp3"
          },
          {
            "ru": "Абая",
            "ar": "عَبائَة",
            "audio": "../audio/عبائة.mp3"
          },
          {
            "ru": "Подштанники (под дишдашу)",
            "ar": "سِرْوَال",
            "audio": "../audio/سروال.mp3"
          },
          {
            "ru": "Штаны",
            "ar": "بِنْطَال",
            "audio": "../audio/بنطال.mp3"
          },
          {
            "ru": "Ремень",
            "ar": "حِزَام",
            "audio": "../audio/حزام.mp3"
          },
          {
            "ru": "Чулки",
            "ar": "فيزون",
            "audio": "../audio/فيزون.mp3"
          },
          {
            "ru": "Носки",
            "ar": "جَوارِب",
            "audio": "../audio/جوارب.mp3"
          },
          {
            "ru": "Верхняя одежда",
            "ar": "مِعْطَف",
            "audio": "../audio/معطف.mp3"
          },
          {
            "ru": "Обувь",
            "ar": "حِذَاء",
            "audio": "../audio/حذاء.mp3"
          },
          {
            "ru": "Тапочки/сланцы",
            "ar": "حَفايَة",
            "audio": "../audio/حفاية.mp3"
          },
          {
            "ru": "Пуговица",
            "ar": "زر",
            "audio": "../audio/زر.mp3"
          },
          {
            "ru": "Карман",
            "ar": "جَيب",
            "audio": "../audio/جيب.mp3"
          },
          {
            "ru": "Ткань",
            "ar": "قِماش",
            "audio": "../audio/قماش.mp3"
          },
          {
            "ru": "Шёлк",
            "ar": "حَرير",
            "audio": "../audio/حرير.mp3"
          },
          {
            "ru": "Хлопок",
            "ar": "قُطن",
            "audio": "../audio/قطن.mp3"
          },
          {
            "ru": "Лён",
            "ar": "كِتّان",
            "audio": "../audio/كتّان.mp3"
          },
          {
            "ru": "Шерсть",
            "ar": "صوف",
            "audio": "../audio/صوف.mp3"
          }
        
        
    
        
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