
    const words = [
      { "ru": "Аллах", "ar": "ٱللَّه", "audio": "../lesson01/audio/الله.mp3" },
      { "ru": "Бог", "ar": "إِلٰه", "audio": "../lesson01/audio/إله.mp3" },
      { "ru": "Человек (религ.)", "ar": "إِنسان", "audio": "../lesson01/audio/إنسان.mp3" },
      { "ru": "Человек", "ar": "شَخْص", "audio": "../lesson01/audio/شخص.mp3" },
      { "ru": "Мужчина", "ar": "رَجُل", "audio": "../lesson01/audio/رجل.mp3" },
      { "ru": "Женщина", "ar": "مَرأَة", "audio": "../lesson01/audio/مرأة.mp3" },
      { "ru": "Жизнь", "ar": "حَياة", "audio": "../lesson01/audio/حياة.mp3" },
      { "ru": "Смерть", "ar": "مَوْت", "audio": "../lesson01/audio/موت.mp3" },
      { "ru": "Дух (Связан с Аллахом)", "ar": "رُوحٌ", "audio": "../lesson01/audio/روح.mp3" },
      { "ru": "Душа (добрая/злая/спокойная)", "ar": "نَفْسٌ", "audio": "../lesson01/audio/نفس.mp3" },
      { "ru": "Дыхание", "ar": "تَنَفُّسٌ", "audio": "../lesson01/audio/تنفس.mp3" },
      { "ru": "Единобожие", "ar": "تَوْحِيد", "audio": "../lesson01/audio/توحيد.mp3" },
      { "ru": "Ширк (многобожие)", "ar": "شِرك", "audio": "../lesson01/audio/شرك.mp3" },
      { "ru": "Вера", "ar": "إِيمَان", "audio": "../lesson01/audio/إيمان.mp3" },
      { "ru": "Прославление (Аллаха)", "ar": "تَسْبِيح", "audio": "../lesson01/audio/تسبيح.mp3" },
      { "ru": "Упоминание (Аллаха)", "ar": "ذِّكْر", "audio": "../lesson01/audio/ذكر.mp3" },
      { "ru": "Поклонение", "ar": "عِبَادَة", "audio": "../lesson01/audio/عبادة.mp3" },
      { "ru": "Видение, откровение (сон от Аллаха)", "ar": "رُؤْيَة", "audio": "../lesson01/audio/رؤية.mp3" },
      { "ru": "Мечта(сон от шайтана)", "ar": "حُلم", "audio": "../lesson01/audio/حلم.mp3" },
      { "ru": "Послание", "ar": "رِسَالَة", "audio": "../lesson01/audio/رسالة.mp3" },
      { "ru": "Благочестие, набожность", "ar": "تَقْوَى", "audio": "../lesson01/audio/تقوى.mp3" },
      { "ru": "Обязанность, обязательный долг", "ar": "فَرِيضَة", "audio": "../lesson01/audio/فريضة.mp3" },
      { "ru": "Покаяние", "ar": "تَوْبَة", "audio": "../lesson01/audio/توبة.mp3" },
      { "ru": "Прощение", "ar": "مَغْفِرَة", "audio": "../lesson01/audio/مغفرة.mp3" },
      { "ru": "Наказание, мучение", "ar": "عَذَاب", "audio": "../lesson01/audio/عذاب.mp3" },
      { "ru": "Хорошие поступки", "ar": "حَسَنات", "audio": "../lesson01/audio/حسنات.mp3" },
      { "ru": "Плохие поступки", "ar": "سَيِّئات", "audio": "../lesson01/audio/سيئات.mp3" },
      { "ru": "Харам (запрещённое)", "ar": "حَرَام", "audio": "../lesson01/audio/حرام.mp3" },
      { "ru": "Халяль (дозволенное)", "ar": "حَلَال", "audio": "../lesson01/audio/حلال.mp3" },
      { "ru": "Фард (обязательное к выполнению действие)", "ar": "فَرض", "audio": "../lesson01/audio/فرض.mp3" },
      { "ru": "Мубах (не запрещённое действие)", "ar": "مُبَاح", "audio": "../lesson01/audio/مباح.mp3" },
      { "ru": "Макрух (нежелательное действие, но не запрещённое)", "ar": "مَكْروه", "audio": "../lesson01/audio/مكروه.mp3" },
      { "ru": "Стыд(разг)/недостаток/изъян", "ar": "عَيْب", "audio": "../lesson01/audio/عيب.mp3" },
      { "ru": "Ангел", "ar": "مَلَك", "audio": "../lesson01/audio/ملك.mp3" },
      { "ru": "Шайтан (демон)", "ar": "شَيْطَان", "audio": "../lesson01/audio/شيطان.mp3" },
      { "ru": "Джинн (бес)", "ar": "جِن", "audio": "../lesson01/audio/جن.mp3" },
      { "ru": "Иблис (дьявол)", "ar": "إِبليس", "audio": "../lesson01/audio/إبليس.mp3" },
      { "ru": "Колдун", "ar": "ساحِر", "audio": "../lesson01/audio/ساحر.mp3" },
      { "ru": "Судьба, предопределение", "ar": "قَدَر", "audio": "../lesson01/audio/قَدَر.mp3" },
      { "ru": "Судный день", "ar": "يَوْمُ ٱلْقِيَامَةِ", "audio": "../lesson01/audio/يوم_القيامة.mp3" },
      { "ru": "Рай", "ar": "جَنَّة", "audio": "../lesson01/audio/جنة.mp3" },
      { "ru": "Ад", "ar": "جَهَنَّم", "audio": "../lesson01/audio/جهنم.mp3" },
      { "ru": "Пророк", "ar": "نَبِي", "audio": "../lesson01/audio/نبي.mp3" },
      { "ru": "Коран", "ar": "قُرْآن", "audio": "../lesson01/audio/قرآن.mp3" },
      { "ru": "Сура", "ar": "سُورَة", "audio": "../lesson01/audio/سورة.mp3" },
      { "ru": "Аят", "ar": "آيَة", "audio": "../lesson01/audio/آية.mp3" },
      { "ru": "Джуз (часть Корана)", "ar": "جُزْء", "audio": "../lesson01/audio/جزء.mp3" },
      { "ru": "Хадис (изречения пророка)", "ar": "حَدِيث", "audio": "../lesson01/audio/حديث.mp3" },
      { "ru": "Сунна (традиции пророка)", "ar": "سُنَّة", "audio": "../lesson01/audio/سُنَّة.mp3" },
      { "ru": "Проповедь (хутба)", "ar": "خُطْبَة", "audio": "../lesson01/audio/خُطْبَة.mp3" },
      { "ru": "Ислам (покорность)", "ar": "إِسْلَام", "audio": "../lesson01/audio/إسلام.mp3" },
      { "ru": "Шахада (свидетельство о вере)", "ar": "شَهَادَة", "audio": "../lesson01/audio/شهادة.mp3" },
      { "ru": "Мусульманин", "ar": "مُسْلِم", "audio": "../lesson01/audio/مسلم.mp3" },
      { "ru": "Верующий", "ar": "مُؤْمِن", "audio": "../lesson01/audio/مؤمن.mp3" },
      { "ru": "Неверующий", "ar": "كَافِر", "audio": "../lesson01/audio/كافر.mp3" },
      { "ru": "Лицемер", "ar": "مُنافق", "audio": "../lesson01/audio/منافق.mp3" },
      { "ru": "Умма (община)", "ar": "أُمَّة", "audio": "../lesson01/audio/أمة.mp3" },
      { "ru": "Сподвижники (пророка Мухаммеда)", "ar": "صَحَابَة", "audio": "../lesson01/audio/صحابة.mp3" },
      { "ru": "Последователи (сподвижников)", "ar": "تابِعِيين", "audio": "../lesson01/audio/تابعيين.mp3" },
      { "ru": "Мухаджиры (беженцы)", "ar": "مُهاجِرين", "audio": "../lesson01/audio/مهاجرين.mp3" },
      { "ru": "Ансары (сторонники)", "ar": "أَنصار", "audio": "../lesson01/audio/أنصار.mp3" },
      { "ru": "Суннит", "ar": "سُنِّي", "audio": "../lesson01/audio/سني.mp3" },
      { "ru": "Шиит", "ar": "شِيعِي", "audio": "../lesson01/audio/شيعي.mp3" },
      { "ru": "Фикх (знание закона)", "ar": "فِقْه", "audio": "../lesson01/audio/فقه.mp3" },
      { "ru": "Шариат (закон)", "ar": "شَرِيعَة", "audio": "../lesson01/audio/شريعة.mp3" },
      { "ru": "Фетва (решение на основе ислама)", "ar": "فَتْوَى", "audio": "../lesson01/audio/فتوى.mp3" },
      { "ru": "Иджма (единогласное мнение)", "ar": "إِجْمَاع", "audio": "../lesson01/audio/إجماع.mp3" },
      { "ru": "Кияс (измерение)(суждение по аналогии)", "ar": "قِيَاس", "audio": "../lesson01/audio/قياس.mp3" },
      { "ru": "Святой (покровитель)", "ar": "وَلِي", "audio": "../lesson01/audio/ولي.mp3" },
      { "ru": "Имамат (пост лидерства в исламе)", "ar": "إِمَامَة", "audio": "../lesson01/audio/إمامة.mp3" },
      { "ru": "Имам (религиозный лидер)", "ar": "إِمَام", "audio": "../lesson01/audio/إمام.mp3" },
      { "ru": "Халифат", "ar": "خِلَافَة", "audio": "../lesson01/audio/خلافة.mp3" },
      { "ru": "Халиф", "ar": "خَلِيفَة", "audio": "../lesson01/audio/خليفة.mp3" },
      { "ru": "Муфтий", "ar": "مُفتي", "audio": "../lesson01/audio/مفتي.mp3" },
      { "ru": "Мечеть", "ar": "مَسْجِد", "audio": "../lesson01/audio/مسجد.mp3" },
      { "ru": "Муэдзин", "ar": "مُؤَذِّن", "audio": "../lesson01/audio/مؤذن.mp3" },
      { "ru": "Призыв к молитве (Азан)", "ar": "أَذَان", "audio": "../lesson01/audio/أَذَان.mp3" },
      { "ru": "Дуа (молитва)", "ar": "دُعَا", "audio": "../lesson01/audio/دعا.mp3" },
      { "ru": "Молитва (намаз)", "ar": "صَلَاة", "audio": "../lesson01/audio/صلاة.mp3" },
      { "ru": "Кибла (направление молитвы)", "ar": "قِبْلَة", "audio": "../lesson01/audio/قبلة.mp3" },
      { "ru": "Утренняя молитва (Фаджр)", "ar": "صَلَاةُ ٱلْفَجْر", "audio": "../lesson01/audio/صلاة_الفجر.mp3" },
      { "ru": "Полуденная молитва (Зухр)", "ar": "صَلَاةُ ٱلظُّهْر", "audio": "../lesson01/audio/صلاة_الظهر.mp3" },
      { "ru": "Послеполуденная молитва (Аср)", "ar": "صَلَاةُ ٱلْعَصْر", "audio": "../lesson01/audio/صلاة_العصر.mp3" },
      { "ru": "Вечерняя молитва (Магриб)", "ar": "صَلَاةُ ٱلْمَغْرِب", "audio": "../lesson01/audio/صلاة_المغرب.mp3" },
      { "ru": "Ночная молитва (‘Иша)", "ar": "صَلَاةُ ٱلْعِشَاء", "audio": "../lesson01/audio/صلاة_العشاء.mp3" },
      { "ru": "Поясной поклон (руку’)", "ar": "رُكُوع", "audio": "../lesson01/audio/ركوع.mp3" },
      { "ru": "Земной поклон (суджуд)", "ar": "سُجُود", "audio": "../lesson01/audio/سجود.mp3" },
      { "ru": "Заключительное приветствие (таслим)", "ar": "تَسْلِيم", "audio": "../lesson01/audio/تسليم.mp3" },
      { "ru": "Очищение (тахара)", "ar": "طَهَارَة", "audio": "../lesson01/audio/طهارة.mp3" },
      { "ru": "Омовение (вуду)(перед молитвой)", "ar": "وُضُوء", "audio": "../lesson01/audio/وضوء.mp3" },
      { "ru": "Большое омовение (гусль)", "ar": "غُسْل", "audio": "../lesson01/audio/غسل.mp3" },
      { "ru": "Тайаммум (сухое омовение)", "ar": "تَيَمُّم", "audio": "../lesson01/audio/تيمم.mp3" },
      { "ru": "Милостыня", "ar": "صَدَقَة", "audio": "../lesson01/audio/صدقة.mp3" },
      { "ru": "Милостыня (обязательный закят)", "ar": "زَكَاة", "audio": "../lesson01/audio/زكاة.mp3" },
      { "ru": "Пост", "ar": "صَوْم", "audio": "../lesson01/audio/صوم.mp3" },
      { "ru": "Праздник разговения (Ид аль-Фитр)", "ar": "عِيدُ ٱلْفِطْر", "audio": "../lesson01/audio/عيد_الفطر.mp3" },
      { "ru": "Праздник жертвоприношения (Ид аль-Адха)", "ar": "عِيدُ ٱلْأَضْحَى", "audio": "../lesson01/audio/عيد_الأضحى.mp3" },
      { "ru": "Ночь могущества (Ляйлат аль-Кадр)", "ar": "لَيْلَةُ ٱلْقَدْر", "audio": "../lesson01/audio/ليلة_القدر.mp3" },
      { "ru": "Десятидневие", "ar": "عَشْر", "audio": "../lesson01/audio/عشر.mp3" },
      { "ru": "Хадж (паломничество)", "ar": "حَج", "audio": "../lesson01/audio/حج.mp3" },
      { "ru": "Ихрам", "ar": "إِحْرَام", "audio": "../lesson01/audio/إحرام.mp3" },
      { "ru": "Кааба", "ar": "كَعبَة", "audio": "../lesson01/audio/كعبة.mp3" },
      { "ru": "Таваф (обход Каабы)", "ar": "طَوَاف", "audio": "../lesson01/audio/طواف.mp3" },
      { "ru": "Мекка", "ar": "مَكّة", "audio": "../lesson01/audio/مكة.mp3" },
      { "ru": "Медина", "ar": "المَدينَة المُنَوَرة", "audio": "../lesson01/audio/المدينة_المنورة.mp3" },
      { "ru": "Хиджра (Побег из Мекки в Медину)", "ar": "هِجْرَة", "audio": "../lesson01/audio/هجرة.mp3" }
      
      
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

