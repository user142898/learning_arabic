
    const words = [

      {"ru": "Дом", "ar": "بَيْت", "audio": "audio/بيت.mp3"},
      {"ru": "Дом", "ar": "مَنْزِل", "audio": "audio/منزل.mp3"},
      {"ru": "Жильё", "ar": "سَكَن", "audio": "audio/سكن.mp3"},
      {"ru": "Дворец", "ar": "قَلعَة", "audio": "audio/قلعة.mp3"},
      {"ru": "Шатёр", "ar": "خَيمَة", "audio": "audio/خيمة.mp3"},
      {"ru": "Опорный столб шатра", "ar": "واسِط", "audio": "audio/واسط.mp3"},
      {"ru": "Квартира", "ar": "شَقَّة", "audio": "audio/شقة.mp3"},
      {"ru": "Стена", "ar": "جِدَار", "audio": "audio/جدار.mp3"},
      {"ru": "Дверь", "ar": "بَاب", "audio": "audio/باب.mp3"},
      {"ru": "Окно", "ar": "نَافِذَة", "audio": "audio/نافذة.mp3"},
      {"ru": "Пол", "ar": "أَرضِية", "audio": "audio/أرضية.mp3"},
      {"ru": "Потолок", "ar": "سَقْف", "audio": "audio/سقف.mp3"},
      {"ru": "Крыша", "ar": "سَطح", "audio": "audio/سطح.mp3"},
      {"ru": "Подвал", "ar": "قَبْو", "audio": "audio/قبو.mp3"},
      {"ru": "Этаж", "ar": "طَابِق", "audio": "audio/طابق.mp3"},
      {"ru": "Лестница", "ar": "دَرَج", "audio": "audio/درج.mp3"},
      {"ru": "Перила", "ar": "دَرابزين", "audio": "audio/درابزين.mp3"},
      {"ru": "Замо́к", "ar": "قِفل", "audio": "audio/قفل.mp3"},
      {"ru": "Ключ", "ar": "مُفْتَاح", "audio": "audio/مفتاح.mp3"},
      {"ru": "Гараж", "ar": "كَراج", "audio": "audio/كراج.mp3"},
      {"ru": "Комната", "ar": "غُرْفَة", "audio": "audio/غرفة.mp3"},
{"ru": "Кухня", "ar": "مَطْبَخ", "audio": "audio/مطبخ.mp3"},
{"ru": "Спальня", "ar": "غُرفَةُ نَوم", "audio": "audio/غرفة_نوم.mp3"},
{"ru": "Гостиная", "ar": "مَضافَة", "audio": "audio/مضافة.mp3"},
{"ru": "Детская", "ar": "غُرفَة اطفال", "audio": "audio/غرفة_اطفال.mp3"},
{"ru": "Библиотека", "ar": "مَكْتَبَة", "audio": "audio/مكتبة.mp3"},
{"ru": "Кладовая/Склад", "ar": "مُسْتَوْدَع", "audio": "audio/مستودع.mp3"},
{"ru": "Ванная (комната)", "ar": "حَمَّام", "audio": "audio/حمام.mp3"},
{"ru": "Туалет/унитаз", "ar": "مِرْحَاض", "audio": "audio/مرحاض.mp3"},
{"ru": "Мебель", "ar": "أَثَاث", "audio": "audio/أثاث.mp3"},
{"ru": "Стол", "ar": "طَاوِلَة", "audio": "audio/طاولة.mp3"},
{"ru": "Стул", "ar": "كُرْسِيّ", "audio": "audio/كرسي.mp3"},
{"ru": "Шкаф", "ar": "خِزَانَة", "audio": "audio/خزانة.mp3"},
{"ru": "Гардероб", "ar": "دُولَاب", "audio": "audio/دولاب.mp3"},
{"ru": "Полка", "ar": "رَف", "audio": "audio/رف.mp3"},
{"ru": "Кровать", "ar": "سَرِير", "audio": "audio/سرير.mp3"},
{"ru": "Диван", "ar": "أَريكَة", "audio": "audio/أريكة.mp3"},
{"ru": "Кресло", "ar": "كَنَبَة", "audio": "audio/كنبة.mp3"},
{"ru": "Вешалка", "ar": "علّاقَة", "audio": "audio/علاقة.mp3"},
{"ru": "Электрическая розетка", "ar": "مَقْبَس كَهْرَبَائِيّ", "audio": "audio/مقبس_كهربائي.mp3"},
{"ru": "Лампа", "ar": "مِصباح", "audio": "audio/مصباح.mp3"},
{"ru": "Зеркало", "ar": "مِرْآة", "audio": "audio/مرآة.mp3"},
{"ru": "Расчёска", "ar": "فِرشاة شعر", "audio": "audio/فرشاة_شعر.mp3"},
{"ru": "Бритва", "ar": "شَفرَة حِلاقَة", "audio": "audio/شفرة_حلاقة.mp3"},
{"ru": "Мыло", "ar": "صابُون", "audio": "audio/صابون.mp3"},
{"ru": "Шампунь", "ar": "شامبو", "audio": "audio/شامبو.mp3"},
{"ru": "Зубная паста", "ar": "مَعجون أَسنان", "audio": "audio/معجون_أسنان.mp3"},
{"ru": "Зубная щётка", "ar": "فُرشاةُ أَسنان", "audio": "audio/فرشاة_أسنان.mp3"},
{"ru": "Одеяло", "ar": "بَطَّانِيَّة", "audio": "audio/بطانية.mp3"},
{"ru": "Простыня", "ar": "شَرشَف", "audio": "audio/شرشف.mp3"},
{"ru": "Подушка", "ar": "وِسَادَة", "audio": "audio/وسادة.mp3"},
{"ru": "Полотенце", "ar": "مِنشَفَة", "audio": "audio/منشفة.mp3"},
{"ru": "Занавеска", "ar": "سِتَارَة", "audio": "audio/ستارة.mp3"},
{"ru": "Ковёр", "ar": "سِجَّاد", "audio": "audio/سجاد.mp3"},
{"ru": "Зонт", "ar": "مِظَلَّة", "audio": "audio/مظلة.mp3"},
{"ru": "Чайник", "ar": "إِبريق", "audio": "audio/إبريق.mp3"},
{"ru": "Кастрюля", "ar": "قِدر", "audio": "audio/قدر.mp3"},
{"ru": "Сковорода", "ar": "مِقلاة", "audio": "audio/مقلاة.mp3"},
{"ru": "Миска", "ar": "زبدية", "audio": "audio/زبدية.mp3"},
{"ru": "Половник", "ar": "مِغرَفَة", "audio": "audio/مغرفة.mp3"},
{"ru": "Тарелка", "ar": "صَحْن", "audio": "audio/صحن.mp3"},
{"ru": "Ложка", "ar": "مِلعَقَة", "audio": "audio/ملعقة.mp3"},
{"ru": "Вилка", "ar": "شَوكَة", "audio": "audio/شوكة.mp3"},
{"ru": "Нож", "ar": "سِكّين", "audio": "audio/سكين.mp3"},
{"ru": "Душ", "ar": "دُشّ", "audio": "audio/دش.mp3"},
{"ru": "Ванна", "ar": "بانيو", "audio": "audio/بانيو.mp3"},
{"ru": "Бассейн", "ar": "مَسْبَح", "audio": "audio/مسبح.mp3"},
{"ru": "Раковина в ванной/умывальник", "ar": "مَغْسَلَة", "audio": "audio/مغسلة.mp3"},
{"ru": "Раковина на кухне/таз", "ar": "حَوض", "audio": "audio/حوض.mp3"},
{"ru": "Кран", "ar": "صُنبور", "audio": "audio/صنبور.mp3"},
{"ru": "Холодильник", "ar": "ثَلَّاجَة", "audio": "audio/ثلاجة.mp3"},
{"ru": "Стиральная машина", "ar": "غَسَّالَة", "audio": "audio/غسالة.mp3"},
{"ru": "Посудомоечная машина", "ar": "مَغْسَلَة الصُّحُون", "audio": "audio/مغسلة_الصحون.mp3"},
{"ru": "Пылесос", "ar": "مِكنَسَة كَهرُبائِية", "audio": "audio/مكنسة_كهربائية.mp3"},
{"ru": "Утюг", "ar": "مَكوى", "audio": "audio/مكوى.mp3"},
{"ru": "Вентилятор", "ar": "مِرْوَحَة", "audio": "audio/مروحة.mp3"},
{"ru": "Кондиционер", "ar": "مُكَيِّف", "audio": "audio/مكيف.mp3"},
{"ru": "Обогреватель/камин", "ar": "مِدفَأَة", "audio": "audio/مدفأة.mp3"},
{"ru": "Плита(камин)", "ar": "مَوْقِد", "audio": "audio/موقد.mp3"},
{"ru": "Микроволновка", "ar": "ميكروويف", "audio": "audio/ميكروويف.mp3"},
{"ru": "Турка для кофе", "ar": "بَكرَج", "audio": "audio/بكرج.mp3"},
{"ru": "Тостер", "ar": "محمصة", "audio": "audio/محمصة.mp3"},
{"ru": "Телевизор", "ar": "تِلفاز", "audio": "audio/تلفاز.mp3"},
{"ru": "Телефон", "ar": "هاتِف", "audio": "audio/هاتف.mp3"},
{"ru": "Радио", "ar": "رَادْيُو", "audio": "audio/راديو.mp3"},
{"ru": "Сад", "ar": "حَدِيقَة", "audio": "audio/حديقة.mp3"},
{"ru": "Цветок", "ar": "وَردة", "audio": "audio/وردة.mp3"},
{"ru": "Дерево", "ar": "شَجَرَة", "audio": "audio/شجرة.mp3"},
{"ru": "Трава", "ar": "عُشب", "audio": "audio/عشب.mp3"},
{"ru": "Ремонт", "ar": "صِيانَة", "audio": "audio/صيانة.mp3"},
{"ru": "Уборка", "ar": "تَنْظِيف", "audio": "audio/تنظيف.mp3"},
{"ru": "Стирка", "ar": "غَسِيل", "audio": "audio/غسيل.mp3"},
{"ru": "Мусор", "ar": "مُهْمَلَات", "audio": "audio/مهملات.mp3"},
{"ru": "Мусор(разг.)", "ar": "زبّالَة", "audio": "audio/زبالة.mp3"},
{"ru": "Салфетка", "ar": "مِنديل", "audio": "audio/منديل.mp3"},
{"ru": "Тряпка", "ar": "خِرقَة", "audio": "audio/خرقة.mp3"},
{"ru": "Губка", "ar": "إِسفِنجَة", "audio": "audio/إسفنجة.mp3"},
{"ru": "Ведро", "ar": "دَلو", "audio": "audio/دلو.mp3"},


  {
    "ru": "Таз",
    "ar": "حَوض",
    "audio": "audio/حوض.mp3"
  },
  {
    "ru": "Веник",
    "ar": "مِكنَسَة",
    "audio": "audio/مكنسة.mp3"
  },
  {
    "ru": "Совок/лопата",
    "ar": "مِجرَفَة",
    "audio": "audio/مجرفة.mp3"
  },
  {
    "ru": "Швабра",
    "ar": "مِمسَحَة",
    "audio": "audio/ممسحة.mp3"
  },
  {
    "ru": "Порошок (для стирки)",
    "ar": "مَسحوق غَسيل",
    "audio": "audio/مسحوق_غسيل.mp3"
  },
  {
    "ru": "Пила",
    "ar": "مِنْشار",
    "audio": "audio/منشار.mp3"
  },
  {
    "ru": "Молоток",
    "ar": "مِطْرَقَة",
    "audio": "audio/مطرقة.mp3"
  },
  {
    "ru": "Отвёртка",
    "ar": "مِفَك",
    "audio": "audio/مفك.mp3"
  },
  {
    "ru": "Документ",
    "ar": "مُستَنَد",
    "audio": "audio/مستند.mp3"
  },
  {
    "ru": "Бумага",
    "ar": "وَرَقَة",
    "audio": "audio/ورقة.mp3"
  },
  {
    "ru": "Книга",
    "ar": "كِتاب",
    "audio": "audio/كتاب.mp3"
  },
  {
    "ru": "Тетрадь",
    "ar": "دَفتَر",
    "audio": "audio/دفتر.mp3"
  },
  {
    "ru": "Ножницы",
    "ar": "مِقَص",
    "audio": "audio/مقص.mp3"
  },
  {
    "ru": "Ручка",
    "ar": "قَلَم حِبر",
    "audio": "audio/قلم_حبر.mp3"
  },
  {
    "ru": "Карандаш",
    "ar": "قَلم رَصاص",
    "audio": "audio/قلم_رصاص.mp3"
  },
  {
    "ru": "Линейка",
    "ar": "مِسطَرَة",
    "audio": "audio/مسطرة.mp3"
  },
  {
    "ru": "Степлер",
    "ar": "مَكبَس",
    "audio": "audio/مكبس.mp3"
  },
  {
    "ru": "Игла",
    "ar": "إِبرَة",
    "audio": "audio/إبرة.mp3"
  },
  {
    "ru": "Нитка",
    "ar": "خَيط",
    "audio": "audio/خيط.mp3"
  },
  {
    "ru": "Игрушка",
    "ar": "لُعبَة",
    "audio": "audio/لعبة.mp3"
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

