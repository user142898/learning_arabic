
    const words = [

     
        {"ru": "Учёба", "ar": "دِرَاسَة", "audio": "audio/دراسة.mp3"},
        {"ru": "Учебник", "ar": "مُقرر", "audio": "audio/مقرر.mp3"},
        {"ru": "Словарь", "ar": "قاموس", "audio": "audio/قاموس.mp3"},
        {"ru": "Профессия", "ar": "مِهْنَة", "audio": "audio/مهنة.mp3"},
        {"ru": "Специальность", "ar": "تَخَصص", "audio": "audio/تخصص.mp3"},
        {"ru": "Школа", "ar": "مَدْرَسَة", "audio": "audio/مدرسة.mp3"},
        {"ru": "Университет", "ar": "جَامِعَة", "audio": "audio/جامعة.mp3"},
        {"ru": "Профессор(лит.)/учитель в школе(разг.)", "ar": "أُسْتَاذ", "audio": "audio/أستاذ.mp3"},
        {"ru": "Учитель", "ar": "مُدَرِّس", "audio": "audio/مدرس.mp3"},
        {"ru": "Улем (учёный)", "ar": "عَالِم", "audio": "audio/عَالِم.mp3"},
        {"ru": "Врач", "ar": "طَبِيب", "audio": "audio/طبيب.mp3"},
        {"ru": "Инженер", "ar": "مُهَنْدِس", "audio": "audio/مهندس.mp3"},
        {"ru": "Адвокат", "ar": "مُحامِ", "audio": "audio/محام.mp3"},
        {"ru": "Фермер", "ar": "مُزَارِع", "audio": "audio/مزارع.mp3"},
        {"ru": "Рабочий", "ar": "عَامِل", "audio": "audio/عامل.mp3"},
        {"ru": "Медсестра", "ar": "مُمَرِّضَة", "audio": "audio/ممرضة.mp3"},
        {"ru": "Журналист", "ar": "صَحَفِي", "audio": "audio/صحفي.mp3"},
        {"ru": "Переводчик", "ar": "مُتَرْجِم", "audio": "audio/مترجم.mp3"},
        {"ru": "Пекарь", "ar": "خَبَّاز", "audio": "audio/خباز.mp3"},
        {"ru": "Продавец", "ar": "بائِع", "audio": "audio/بائع.mp3"},
        {"ru": "Плотник", "ar": "نَجَّار", "audio": "audio/نجار.mp3"},
        {"ru": "Водитель", "ar": "سَائِق", "audio": "audio/سائق.mp3"},
        {"ru": "Повар", "ar": "طَبَّاخ", "audio": "audio/طباخ.mp3"},
        {"ru": "Бухгалтер", "ar": "مُحَاسِب", "audio": "audio/محاسب.mp3"},
        {"ru": "Фотограф", "ar": "مُصَوِّر", "audio": "audio/مصور.mp3"},
        {"ru": "Художник", "ar": "فَنَّان", "audio": "audio/فنان.mp3"},
        {"ru": "Певец", "ar": "مُغَنِّي", "audio": "audio/مغني.mp3"},
        {"ru": "Парикмахер", "ar": "حَلَّاق", "audio": "audio/حلاق.mp3"},
        {"ru": "Корреспондент", "ar": "مُرَاسِل", "audio": "audio/مراسل.mp3"},
        {"ru": "Пилот", "ar": "طَيَّار", "audio": "audio/طيار.mp3"},
        {"ru": "Солдат", "ar": "جُنْدِي", "audio": "audio/جندي.mp3"},
        {"ru": "Директор", "ar": "مُدِير", "audio": "audio/مدير.mp3"},
        {"ru": "Пожарный", "ar": "إِطفائِي", "audio": "audio/إطفائي.mp3"},
        {"ru": "Следователь", "ar": "مُحَقِّق", "audio": "audio/محقق.mp3"},
        {"ru": "Архитектор", "ar": "مِعْمَارِي", "audio": "audio/معماري.mp3"},
        {"ru": "Медбрат", "ar": "مُمَرِّض", "audio": "audio/ممرض.mp3"},
        {"ru": "Инспектор", "ar": "مُفَتِّش", "audio": "audio/مفتش.mp3"},
        {"ru": "Ассистент", "ar": "مُسَاعِد", "audio": "audio/مساعد.mp3"},
        {"ru": "Сотрудник", "ar": "مُوَظَّف", "audio": "audio/موظف.mp3"},
        {"ru": "Консультант", "ar": "مُسْتَشَار", "audio": "audio/مستشار.mp3"},
        {"ru": "Строитель", "ar": "بَنّاء", "audio": "audio/بَنّاء.mp3"},
        {"ru": "Писатель", "ar": "كاتِب", "audio": "audio/كاتب.mp3"},
        {"ru": "Президент", "ar": "رَئِيس", "audio": "audio/رئيس.mp3"},
        {"ru": "Риэлтор", "ar": "سِمسار", "audio": "audio/سمسار.mp3"},
        {"ru": "Техник", "ar": "فَنِّي", "audio": "audio/فني.mp3"},
        {"ru": "Охранник", "ar": "حَارِس", "audio": "audio/حارس.mp3"},
        {"ru": "Продюсер", "ar": "مُنْتِج", "audio": "audio/منتج.mp3"},
        {"ru": "Исследователь", "ar": "بَاحِث", "audio": "audio/باحث.mp3"},
        {"ru": "Актёр", "ar": "مُمَثل", "audio": "audio/ممثل.mp3"},
        {"ru": "Официант", "ar": "نادِل", "audio": "audio/نادل.mp3"},
        {"ru": "Танцор", "ar": "راقِص", "audio": "audio/راقص.mp3"},
        {"ru": "Уборщик", "ar": "عامِل نَظافَة", "audio": "audio/عامل_نظافة.mp3"},
        {"ru": "Пастух", "ar": "راعي", "audio": "audio/راعي.mp3"},
        {"ru": "Ветеринар", "ar": "بَيْطَري", "audio": "audio/بيطري.mp3"},
        {"ru": "Ювелир", "ar": "صائغ", "audio": "audio/صائغ.mp3"},
        {"ru": "Шпион", "ar": "جاسوس", "audio": "audio/جاسوس.mp3"},
        {"ru": "Вор", "ar": "سارِق", "audio": "audio/سارق.mp3"},
        {"ru": "Убийца", "ar": "قاتِل", "audio": "audio/قاتل.mp3"},
        {"ru": "Мошенник", "ar": "مُحتال", "audio": "audio/محتال.mp3"}
     
      
      
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

