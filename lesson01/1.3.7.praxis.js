
    const words = [

     
        {"ru": "Животное", "ar": "حَيَوَان", "audio": "audio/حيوان.mp3"},
        {"ru": "Питомец", "ar": "أليف", "audio": "audio/أليف.mp3"},
        {"ru": "Хищник", "ar": "مُفتَرس", "audio": "audio/مفترس.mp3"},
        {"ru": "Птица", "ar": "طائر", "audio": "audio/طائر.mp3"},
        {"ru": "Жук/Насекомое", "ar": "حَشَرَة", "audio": "audio/حشرة.mp3"},
        {"ru": "Рыба", "ar": "سَمَكَة", "audio": "audio/سمكة.mp3"},
        {"ru": "Кот", "ar": "قِط", "audio": "audio/قط.mp3"},
        {"ru": "Пёс", "ar": "كَلْب", "audio": "audio/كلب.mp3"},
        {"ru": "Конь", "ar": "حِصَان", "audio": "audio/حصان.mp3"},
        {"ru": "Лошадь", "ar": "فَرَس", "audio": "audio/فرس.mp3"},
        {"ru": "Верблюд", "ar": "جَمَل", "audio": "audio/جمل.mp3"},
        {"ru": "Верблюдица", "ar": "ناقَة", "audio": "audio/ناقة.mp3"},
        {"ru": "Бык", "ar": "ثَوْر", "audio": "audio/ثور.mp3"},
        {"ru": "Корова", "ar": "بَقَرَة", "audio": "audio/بقرة.mp3"},
        {"ru": "Телёнок", "ar": "عِجل", "audio": "audio/عجل.mp3"},
        {"ru": "Общее для козёл/коза/козлёнок", "ar": "مَاعِز", "audio": "audio/ماعز.mp3"},
        {"ru": "Козёл", "ar": "تَيس", "audio": "audio/تيس.mp3"},
        {"ru": "Коза", "ar": "مِعزَة", "audio": "audio/معزة.mp3"},
        {"ru": "Козлёнок", "ar": "جديْ", "audio": "audio/جديْ.mp3"},
        {"ru": "Общее для баран/овца/ягненок", "ar": "خَرُوف", "audio": "audio/خروف.mp3"},
        {"ru": "Баран", "ar": "كَبش", "audio": "audio/كبش.mp3"},
        {"ru": "Овца", "ar": "غَنَم", "audio": "audio/غنم.mp3"},
        {"ru": "Ягненок", "ar": "حَمَل", "audio": "audio/حمل.mp3"},
        {"ru": "Осёл", "ar": "حِمَار", "audio": "audio/حمار.mp3"},
        {"ru": "Кролик/заяц", "ar": "أَرْنَب", "audio": "audio/ارنب.mp3"},
        {"ru": "Кабан", "ar": "خِنْزِير", "audio": "audio/خنزير.mp3"},
        {"ru": "Свинья", "ar": "خِنْزِيرة", "audio": "audio/خنزيرة.mp3"},
        {"ru": "Общее для петух/курица/цыплёнок/курятина", "ar": "دَجَاج", "audio": "audio/دجاج.mp3"},
        {"ru": "Петух", "ar": "دِيك", "audio": "audio/ديك.mp3"},
        {"ru": "Курица", "ar": "دَجَاجَة", "audio": "audio/دجاجة.mp3"},
        {"ru": "Цыплёнок", "ar": "كَتكوت", "audio": "audio/كتكوت.mp3"},
        {"ru": "Цыплёнок", "ar": "صوص", "audio": "audio/صوص.mp3"},
        {"ru": "Гусь", "ar": "إِوَز", "audio": "audio/اوز.mp3"},
        {"ru": "Утка", "ar": "بَطَّة", "audio": "audio/بطة.mp3"},
        {"ru": "Павлин", "ar": "طَاوُوس", "audio": "audio/طاووس.mp3"},
        {"ru": "Лебедь/пеликан", "ar": "بَجَعَة", "audio": "audio/بجعة.mp3"},
        {"ru": "Голубка", "ar": "حَمَامَة", "audio": "audio/حمامة.mp3"},
        {"ru": "Попугай", "ar": "بَبَّغَاء", "audio": "audio/ببغاء.mp3"},
        {"ru": "Слон", "ar": "فِيل", "audio": "audio/فيل.mp3"},
        {"ru": "Бегемот", "ar": "فَرَسُ النَّهْر", "audio": "audio/فرس_النهر.mp3"},
        {"ru": "Носорог", "ar": "وَحِيد القَرْن", "audio": "audio/وحيد_القرن.mp3"},
        {"ru": "Носорог(научн.)", "ar": "كَرْكَدَن", "audio": "audio/كركدن.mp3"},
        {"ru": "Жираф", "ar": "زَرَافَة", "audio": "audio/زرافة.mp3"},
        {"ru": "Медведь", "ar": "دُبّ", "audio": "audio/دب.mp3"},
        {"ru": "Волк", "ar": "ذِئْب", "audio": "audio/ذئب.mp3"},
        {"ru": "Лис", "ar": "ثَعْلَب", "audio": "audio/ثعلب.mp3"},
        {"ru": "Лев", "ar": "أَسَد", "audio": "audio/اسد.mp3"},
        {"ru": "Тигр", "ar": "نَمِر", "audio": "audio/نمر.mp3"},
        {"ru": "Гепард", "ar": "فَهْد", "audio": "audio/فهد.mp3"},
        {"ru": "Газель", "ar": "غَزَال", "audio": "audio/غزال.mp3"},
        {"ru": "Антилопа", "ar": "ظَبِي", "audio": "audio/ظبي.mp3"},
        {"ru": "Кенгуру", "ar": "كَنْغَر", "audio": "audio/كنغر.mp3"},
        {"ru": "Тюлень/морж", "ar": "فَقْمَة", "audio": "audio/فقمة.mp3"},
        {"ru": "Енот", "ar": "رَاكُون", "audio": "audio/راكون.mp3"},
        {"ru": "Крот", "ar": "آكل النَمل", "audio": "audio/اكل_النمل.mp3"},
        {"ru": "Белка/Бурундук", "ar": "سِنجاب", "audio": "audio/سنجاب.mp3"},
        {"ru": "Хомяк", "ar": "هَمتارو", "audio": "audio/همتارو.mp3"},
        {"ru": "Ёж", "ar": "قُنْفُذ", "audio": "audio/قنفذ.mp3"},
        {"ru": "Крыс", "ar": "جِرذ", "audio": "audio/جرذ.mp3"},
        {"ru": "Крыса", "ar": "عِرسَة", "audio": "audio/عرسة.mp3"},
        {"ru": "Мышь", "ar": "فَأْر", "audio": "audio/فأر.mp3"},
        {"ru": "Летучая мышь", "ar": "خُفَّاش", "audio": "audio/خفاش.mp3"},
        {"ru": "Крокодил", "ar": "تِمْسَاح", "audio": "audio/تمساح.mp3"},
        {"ru": "Черепаха", "ar": "سُلْحَفَاة", "audio": "audio/سلحفاة.mp3"},
        {"ru": "Пингвин", "ar": "بَطْرِيق", "audio": "audio/بطريق.mp3"},
        {"ru": "Лягушка", "ar": "ضِفْدَع", "audio": "audio/ضفدع.mp3"},
        {"ru": "Змей", "ar": "ثُعْبان", "audio": "audio/ثعبان.mp3"},
        {"ru": "Змея", "ar": "أَفْعَى", "audio": "audio/افعى.mp3"},
        {"ru": "Ящерица", "ar": "سَحْلِيَّة", "audio": "audio/سحلية.mp3"},
        {"ru": "Червь", "ar": "دُودَة", "audio": "audio/دودة.mp3"},
        {"ru": "Орёл/стервятник", "ar": "نَسْر", "audio": "audio/نسر.mp3"},
        {"ru": "Сокол/ястреб", "ar": "صَقْر", "audio": "audio/صقر.mp3"},
        {"ru": "Сова", "ar": "بُومَة", "audio": "audio/بومة.mp3"},
        {"ru": "Ворон", "ar": "غُرَاب", "audio": "audio/غراب.mp3"},
        {"ru": "Акула", "ar": "قِرْش", "audio": "audio/قرش.mp3"},
        {"ru": "Дельфин", "ar": "دُولْفِين", "audio": "audio/دولفين.mp3"},
        {"ru": "Кит", "ar": "حُوت", "audio": "audio/حوت.mp3"},
        {"ru": "Краб", "ar": "سَرَطَانُ", "audio": "audio/سرطان.mp3"},
        {"ru": "Креветка", "ar": "رُبْيَان", "audio": "audio/روبيان.mp3"},
        {"ru": "Осьминог", "ar": "أُخْطُبُوط", "audio": "audio/أخطبوط.mp3"},
        {"ru": "Скорпион", "ar": "عَقْرَب", "audio": "audio/عقرب.mp3"},
        {"ru": "Пчела", "ar": "نَحْلَة", "audio": "audio/نحلة.mp3"},
        {"ru": "Оса", "ar": "دَبُّور", "audio": "audio/دبور.mp3"},
        {"ru": "Комар", "ar": "بَعُوضَة", "audio": "audio/بعوضة.mp3"},
        {"ru": "Муха", "ar": "ذُبَابَة", "audio": "audio/ذبابة.mp3"},
        {"ru": "Бабочка", "ar": "فَرَاشَة", "audio": "audio/فراشة.mp3"},
        {"ru": "Муравей", "ar": "نَمْلَة", "audio": "audio/نملة.mp3"},
        {"ru": "Паук", "ar": "عَنْكَبُوت", "audio": "audio/عنكبوت.mp3"},
        {"ru": "Саранча", "ar": "جَرَادَة", "audio": "audio/جرادة.mp3"},
        {"ru": "Кузнечик", "ar": "جُندُب", "audio": "audio/جندب.mp3"},
        {"ru": "Таракан", "ar": "صَرْصُور", "audio": "audio/صرصور.mp3"},
        {"ru": "Светлячок", "ar": "يَرَاعة", "audio": "audio/يراعة.mp3"},
        
          {
            "ru": "Лапа/Коготь",
            "ar": "مَخلَب",
            "audio": "audio/مخلب.mp3"
          },
          {
            "ru": "Хвост",
            "ar": "ذَيل",
            "audio": "audio/ذيل.mp3"
          },
          {
            "ru": "Клюв",
            "ar": "مِنقَار",
            "audio": "audio/منقار.mp3"
          },
          {
            "ru": "Перо",
            "ar": "رِيشَة",
            "audio": "audio/ريشة.mp3"
          },
          {
            "ru": "Крыло",
            "ar": "جَناح",
            "audio": "audio/جناح.mp3"
          },
          {
            "ru": "Загон для животных/сарай",
            "ar": "زَريبَة",
            "audio": "audio/زريبة.mp3"
          },
          {
            "ru": "Клетка",
            "ar": "قَفَص",
            "audio": "audio/قفص.mp3"
          },
          {
            "ru": "Аквариум",
            "ar": "حَوْض سَمَك",
            "audio": "audio/حوض_سمك.mp3"
          },
          {
            "ru": "Корм",
            "ar": "طَعام حَيَوانات",
            "audio": "audio/طعام_حيوانات.mp3"
          },
          {
            "ru": "Прививка",
            "ar": "لُقاح",
            "audio": "audio/لقاح.mp3"
          },
          {
            "ru": "Зоопарк",
            "ar": "حَديقَة حَيَوانات",
            "audio": "audio/حديقة_حيوانات.mp3"
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

