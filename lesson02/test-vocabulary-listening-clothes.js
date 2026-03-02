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
