
    const words = [

        {
          "ru": "Одежда",
          "ar": "مَلَابِس",
          "audio": "audio/ملابس.mp3"
        },
        {
          "ru": "Головной убор",
          "ar": "قُبَّعَة",
          "audio": "audio/قبعة.mp3"
        },
        {
          "ru": "Ободок для арафатки (для арабских мужчин)",
          "ar": "عِقَال",
          "audio": "audio/عقال.mp3"
        },
        {
          "ru": "Шемаг (традиционный головной убор арабов)",
          "ar": "شُمَاغ",
          "audio": "audio/شماغ.mp3"
        },
        {
          "ru": "Тарбуш (традиционная шапка дервиша)",
          "ar": "طَرْبُوش",
          "audio": "audio/طربوش.mp3"
        },
        {
          "ru": "Хиджаб",
          "ar": "حِجَاب",
          "audio": "audio/حجاب.mp3"
        },
        {
          "ru": "Химар (женский головной убор, закрывающий шею)",
          "ar": "خِمَار",
          "audio": "audio/خمار.mp3"
        },
        {
          "ru": "Никаб",
          "ar": "نِقَاب",
          "audio": "audio/نقاب.mp3"
        },
        {
          "ru": "Бурка (покрытие, полностью закрывающее тело, включая лицо)",
          "ar": "بُرْقُع",
          "audio": "audio/برقع.mp3"
        },
        {
          "ru": "Шаль",
          "ar": "شَال",
          "audio": "audio/شال.mp3"
        },
        {
          "ru": "Рубашка",
          "ar": "قَمِيص",
          "audio": "audio/قميص.mp3"
        },
        {
          "ru": "Пиджак/жакет",
          "ar": "سُتْرَة",
          "audio": "audio/سترة.mp3"
        },
        {
          "ru": "Галстук/резинка для волос",
          "ar": "رَبطَة",
          "audio": "audio/ربطة.mp3"
        },
        {
          "ru": "Костюм",
          "ar": "بَدلَة",
          "audio": "audio/بدلة.mp3"
        },
        {
          "ru": "Форма",
          "ar": "زِي",
          "audio": "audio/زي.mp3"
        },
        {
          "ru": "Халат",
          "ar": "روب حَمّام",
          "audio": "audio/روب_حمام.mp3"
        },
        {
          "ru": "Нижнее бельё",
          "ar": "مَلابِس داخِلِيَة",
          "audio": "audio/ملابس_داخلية.mp3"
        },
        {
          "ru": "Бюстгалтер",
          "ar": "حَمالَة صَدر",
          "audio": "audio/حمالة_صدر.mp3"
        },
        {
          "ru": "Трусы/кальсоны",
          "ar": "كلسون",
          "audio": "audio/كلسون.mp3"
        },
        {
          "ru": "Дишдаша (традиционная арабская одежда для мужчин)",
          "ar": "دِشْدَاشَة",
          "audio": "audio/دشداشة.mp3"
        },
        {
          "ru": "Платье",
          "ar": "فُسْتَان",
          "audio": "audio/فستان.mp3"
        },
        {
          "ru": "Абая",
          "ar": "عَبائَة",
          "audio": "audio/عبائة.mp3"
        },
        {
          "ru": "Подштанники (под дишдашу)",
          "ar": "سِرْوَال",
          "audio": "audio/سروال.mp3"
        },
        {
          "ru": "Штаны",
          "ar": "بِنْطَال",
          "audio": "audio/بنطال.mp3"
        },
        {
          "ru": "Ремень",
          "ar": "حِزَام",
          "audio": "audio/حزام.mp3"
        },
        {
          "ru": "Чулки",
          "ar": "فيزون",
          "audio": "audio/فيزون.mp3"
        },
        {
          "ru": "Носки",
          "ar": "جَوارِب",
          "audio": "audio/جوارب.mp3"
        },
        {
          "ru": "Верхняя одежда",
          "ar": "مِعْطَف",
          "audio": "audio/معطف.mp3"
        },
        {
          "ru": "Обувь",
          "ar": "حِذَاء",
          "audio": "audio/حذاء.mp3"
        },
        {
          "ru": "Тапочки/сланцы",
          "ar": "حَفايَة",
          "audio": "audio/حفاية.mp3"
        },
        {
          "ru": "Пуговица",
          "ar": "زر",
          "audio": "audio/زر.mp3"
        },
        {
          "ru": "Карман",
          "ar": "جَيب",
          "audio": "audio/جيب.mp3"
        },
        {
          "ru": "Ткань",
          "ar": "قِماش",
          "audio": "audio/قماش.mp3"
        },
        {
          "ru": "Шёлк",
          "ar": "حَرير",
          "audio": "audio/حرير.mp3"
        },
        {
          "ru": "Хлопок",
          "ar": "قُطن",
          "audio": "audio/قطن.mp3"
        },
        {
          "ru": "Лён",
          "ar": "كِتّان",
          "audio": "audio/كتّان.mp3"
        },
        {
          "ru": "Шерсть",
          "ar": "صوف",
          "audio": "audio/صوف.mp3"
        }
    
      
      
    ]
    

    
// Функция для случайного перемешивания массива (алгоритм Фишера-Йейтса)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // меняем местами элементы
    }
}

// Перемешиваем массив слов
shuffleArray(words);

// Теперь words содержит случайно перемешанные элементы
console.log(words);

    let correctAnswers = 0;
let wrongAnswers = 0;

function updateScore() {
  document.getElementById("correctCount").textContent = correctAnswers;
  document.getElementById("wrongCount").textContent = wrongAnswers;
}


    let currentIndex = 0;
    let currentWord = null;

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function loadWord() {
      document.getElementById("resultText").style.display = "none";
      document.getElementById("nextBtn").style.display = "none";
      document.getElementById("options").innerHTML = "";

      currentWord = words[currentIndex];
      document.getElementById("wordBtn").textContent = currentWord.ar;

      let options = shuffle([...words]).slice(0, 18);
      if (!options.includes(currentWord)) {
        options.pop();
        options.push(currentWord);
      }
      options = shuffle(options);

      options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.ru;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(btn, option);
        document.getElementById("options").appendChild(btn);
      });
    }

    function playAudio() {
      if (currentWord && currentWord.audio) {
        new Audio(currentWord.audio).play();
      }
    }

    function checkAnswer(button, selected) {
        const buttons = document.querySelectorAll(".option-btn");
        buttons.forEach(btn => btn.disabled = true);
      
        if (selected.ru === currentWord.ru) {
          button.style.backgroundColor = "#a8f0a1";
          document.getElementById("resultText").textContent = "Верно!";
          correctAnswers++;
        } else {
          button.style.backgroundColor = "#f8a8a8";
          const correctBtn = Array.from(buttons).find(b => b.textContent === currentWord.ru);
          if (correctBtn) correctBtn.style.backgroundColor = "#a8f0a1";
          document.getElementById("resultText").textContent = `Неверно. Правильный ответ: ${currentWord.ru}`;
          wrongAnswers++;
        }
      
        updateScore();
        document.getElementById("resultText").style.display = "block";
        document.getElementById("nextBtn").style.display = "inline-block";
      }
      
   

    function nextWord() {
      currentIndex++;
      if (currentIndex >= words.length) {
        alert("Тест завершён!");
        currentIndex = 0;
      }
      loadWord();
    }

    loadWord();

