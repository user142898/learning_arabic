
    const words = [

      
        {"ru": "Еда", "ar": "طَعَام", "audio": "audio/طعام.mp3"},
        {"ru": "Продукт", "ar": "مُنتَج", "audio": "audio/مُنتَج.mp3"},
        {"ru": "Белки", "ar": "بروتين", "audio": "audio/بروتين.mp3"},
        {"ru": "Жиры", "ar": "دُهون", "audio": "audio/دهون.mp3"},
        {"ru": "Углеводы", "ar": "كربوهيدرات", "audio": "audio/كربوهيدرات.mp3"},
        {"ru": "Калории", "ar": "كالوري", "audio": "audio/كالوري.mp3"},
        {"ru": "Витамины", "ar": "ڤيتامين", "audio": "audio/ڤيتامين.mp3"},
        {"ru": "Завтрак", "ar": "فُطُور", "audio": "audio/فطور.mp3"},
        {"ru": "Обед", "ar": "غَدَاء", "audio": "audio/غداء.mp3"},
        {"ru": "Ужин", "ar": "عَشَاء", "audio": "audio/عشاء.mp3"},
        {"ru": "Напиток", "ar": "مَشْرُوب", "audio": "audio/مشروب.mp3"},
        {"ru": "Рыба(как блюдо)/рыбы", "ar": "سَمَك", "audio": "audio/سمك.mp3"},
        {"ru": "Мясо", "ar": "لَحْم", "audio": "audio/لحم.mp3"},
        {"ru": "Яйца", "ar": "بَيْض", "audio": "audio/بيض.mp3"},
        {"ru": "Сыр", "ar": "جُبْن", "audio": "audio/جبن.mp3"},
        {"ru": "Молоко", "ar": "حَلِيب", "audio": "audio/حليب.mp3"},
        {"ru": "Кефир", "ar": "شَنينَة", "audio": "audio/شنينة.mp3"},
        {"ru": "Сметана", "ar": "لَبَن رائب", "audio": "audio/لبن_رائب.mp3"},
        {"ru": "Творог", "ar": "جِبن قَرْيْيْش", "audio": "audio/جبن_قريش.mp3"},
        {"ru": "Йогурт", "ar": "زَبَادِي", "audio": "audio/زبادي.mp3"},
        {"ru": "Фрукты", "ar": "فَواكِه", "audio": "audio/فواكه.mp3"},
        {"ru": "Овощи", "ar": "خُضَار", "audio": "audio/خضار.mp3"},
        {"ru": "Ягоды", "ar": "توت", "audio": "audio/توت.mp3"},
        {"ru": "Грибы", "ar": "فِطر", "audio": "audio/فطر.mp3"},
        {"ru": "Орехи", "ar": "مُكَسَرات", "audio": "audio/مكسرات.mp3"},
        {"ru": "Специи", "ar": "تَوَابِل", "audio": "audio/توابل.mp3"},
        {"ru": "Соус", "ar": "صَلْصَة", "audio": "audio/صلصة.mp3"},
        {"ru": "Масло", "ar": "زُبْدَة", "audio": "audio/زبدة.mp3"},
        {"ru": "Мука", "ar": "دَقِيق", "audio": "audio/دقيق.mp3"},
        {"ru": "Хлеб(мн ч.)", "ar": "خُبْز", "audio": "audio/خبز.mp3"},
        {"ru": "Вода", "ar": "مَاء", "audio": "audio/ماء.mp3"},
        {"ru": "Минеральная вода", "ar": "مَاء مَعْدَنِيّ", "audio": "audio/ماء_معدني.mp3"},
        {"ru": "Сок", "ar": "عَصِير", "audio": "audio/عصير.mp3"},
        {"ru": "Чай", "ar": "شَاي", "audio": "audio/شاي.mp3"},
        {"ru": "Кофе", "ar": "قَهْوَة", "audio": "audio/قهوة.mp3"},
        {"ru": "Говядина", "ar": "لَحم عِجل", "audio": "audio/لحم_عجل.mp3"},
        {"ru": "Телятина", "ar": "لَحم عِجْل رَضيع", "audio": "audio/لحم_عجل_رضيع.mp3"},
        {"ru": "Баранина", "ar": "لَحم خَرُوف", "audio": "audio/لحم_خروف.mp3"},
        {"ru": "Свинина", "ar": "لَحم خِنْزِير", "audio": "audio/لحم_خنزير.mp3"},
        {"ru": "Крупа", "ar": "حُبوب", "audio": "audio/حبوب.mp3"},
        {"ru": "Рис", "ar": "أَرُز", "audio": "audio/أرز.mp3"},
        {"ru": "Гречка", "ar": "حِنطَة سَوداء", "audio": "audio/حنطة_سوداء.mp3"},
        {"ru": "Овсянка", "ar": "شوفان", "audio": "audio/شوفان.mp3"},
        {"ru": "Булгур", "ar": "بُرغُل", "audio": "audio/برغل.mp3"},
        {"ru": "Фасоль", "ar": "فاصولياء", "audio": "audio/فاصولياء.mp3"},
        {"ru": "Горох", "ar": "بازيلاء", "audio": "audio/بازيلاء.mp3"},
        {"ru": "Чечевица", "ar": "عَدَس", "audio": "audio/عدس.mp3"},
        {"ru": "Пшено", "ar": "حُبوب الدُخن", "audio": "audio/حبوب_الدخن.mp3"},
        {"ru": "Перловка", "ar": "شَعير", "audio": "audio/شعير.mp3"},
        {"ru": "Кускус", "ar": "كُسْكُس", "audio": "audio/كسكس.mp3"},
        {"ru": "Хумус/нут", "ar": "حُمُّص", "audio": "audio/حمص.mp3"},
          {"ru": "Суп", "ar": "حَسَاء", "audio": "audio/حساء.mp3"},
          {"ru": "Каша", "ar": "يَخَنَة", "audio": "audio/يخنة.mp3"},
          {"ru": "Картофель", "ar": "بَطَاطَا", "audio": "audio/بطاطا.mp3"},
          {"ru": "Помидор", "ar": "طَمَاطِم", "audio": "audio/طماطم.mp3"},
          {"ru": "Огурец", "ar": "خِيار", "audio": "audio/خيار.mp3"},
          {"ru": "Морковь", "ar": "جَزَر", "audio": "audio/جزر.mp3"},
          {"ru": "Баклажаны", "ar": "بَاذِنْجَان", "audio": "audio/باذنجان.mp3"},
          {"ru": "Капуста", "ar": "مَلفوف", "audio": "audio/ملفوف.mp3"},
          {"ru": "Цветная капуста", "ar": "زَهرَة", "audio": "audio/زهرة.mp3"},
          {"ru": "Брокколи", "ar": "بْرُوكْلِي", "audio": "audio/بروكلي.mp3"},
          {"ru": "Шпинат", "ar": "سَبَانِخ", "audio": "audio/سبانخ.mp3"},
          {"ru": "Салат", "ar": "خَسّ", "audio": "audio/خس.mp3"},
          {"ru": "Тыква", "ar": "قَرْع", "audio": "audio/قرع.mp3"},
          {"ru": "Свекла", "ar": "شَمَندَر", "audio": "audio/شمندر.mp3"},
          {"ru": "Редис", "ar": "فِجل", "audio": "audio/فجل.mp3"},
          {"ru": "Кабачок", "ar": "كُوسا", "audio": "audio/كوسا.mp3"},
          {"ru": "Оливки", "ar": "زَيتون", "audio": "audio/زيتون.mp3"},
          {"ru": "Лук", "ar": "بَصَل", "audio": "audio/بصل.mp3"},
          {"ru": "Чеснок", "ar": "ثُوم", "audio": "audio/ثوم.mp3"},
          {"ru": "Яблоко", "ar": "تُفَّاحَة", "audio": "audio/تفاحة.mp3"},
          {"ru": "Груша", "ar": "إِجَاصَة", "audio": "audio/إجاصة.mp3"},
          {"ru": "Вишня", "ar": "كَرَز", "audio": "audio/كرز.mp3"},
          {"ru": "Клубника", "ar": "فَرَاوِلَة", "audio": "audio/فراولة.mp3"},
          {"ru": "Виноград", "ar": "عِنَب", "audio": "audio/عنب.mp3"},
          {"ru": "Арбуз", "ar": "بَطِّيخ", "audio": "audio/بطيخ.mp3"},
          {"ru": "Банан", "ar": "مَوْزَة", "audio": "audio/موزة.mp3"},
          {"ru": "Инжир", "ar": "تين", "audio": "audio/تين.mp3"},
          {"ru": "Инжирные персики", "ar": "دُرَّاق", "audio": "audio/دراق.mp3"},
          {"ru": "Персики", "ar": "خُوخ", "audio": "audio/خوخ.mp3"},
          {"ru": "Сливы", "ar": "بَرقوق", "audio": "audio/برقوق.mp3"},
          {"ru": "Абрикосы", "ar": "مِشْمِش", "audio": "audio/مشمش.mp3"},
          {"ru": "Ананас", "ar": "أَنَاناس", "audio": "audio/أناناس.mp3"},
          {"ru": "Киви", "ar": "كِيوِي", "audio": "audio/كيوي.mp3"},
          {"ru": "Финики", "ar": "تَمْر", "audio": "audio/تمر.mp3"},
          {"ru": "Гранаты", "ar": "رُمَّان", "audio": "audio/رمان.mp3"},
          {"ru": "Апельсин", "ar": "بُرْتُقالَة", "audio": "audio/برتقالة.mp3"},
          {"ru": "Мандарины", "ar": "يُوسُفِي", "audio": "audio/يوسفي.mp3"},
          {"ru": "Лимон", "ar": "لَيمونَة", "audio": "audio/ليمونة.mp3"},
          {"ru": "Десерт", "ar": "حَلْوَى", "audio": "audio/حلوى.mp3"},
          {"ru": "Мёд", "ar": "عَسَل", "audio": "audio/عسل.mp3"},
          {"ru": "Пирог/пирожок", "ar": "فَطِيرَة", "audio": "audio/فطيرة.mp3"},
          {"ru": "Торт", "ar": "كَعْكَة", "audio": "audio/كعكة.mp3"},
          {"ru": "Шоколад", "ar": "شُوكُولا", "audio": "audio/شوكولا.mp3"},
          {"ru": "Печенье", "ar": "بسكويت", "audio": "audio/بسكويت.mp3"},
          {"ru": "Конфеты", "ar": "حَلوى", "audio": "audio/حلوى.mp3"},
          {"ru": "Мороженое", "ar": "بُوظَة", "audio": "audio/بوظة.mp3"},
          {"ru": "Соль", "ar": "مِلْح", "audio": "audio/ملح.mp3"},
          {"ru": "Сахар", "ar": "سُكَّر", "audio": "audio/سكر.mp3"},
          {"ru": "Перец", "ar": "فُلفُل", "audio": "audio/فلفل.mp3"},
          {"ru": "Корица", "ar": "قِرْفَة", "audio": "audio/قرفة.mp3"},
          {"ru": "Кардамон", "ar": "هَيْل", "audio": "audio/هيل.mp3"},
          {"ru": "Куркума", "ar": "كُرْكُم", "audio": "audio/كركم.mp3"},
          {"ru": "Тмин", "ar": "كَمُّون", "audio": "audio/كمون.mp3"},
          {"ru": "Шафран", "ar": "زَعْفَرَان", "audio": "audio/زعفران.mp3"},
          {"ru": "Гвоздика", "ar": "قُرُنفُل", "audio": "audio/قرنفل.mp3"},
          {"ru": "Мята", "ar": "نَعْنَاع", "audio": "audio/نعناع.mp3"},
          {"ru": "Фундук", "ar": "بُندُق", "audio": "audio/بندق.mp3"},
          {"ru": "Изюм", "ar": "زَبيب", "audio": "audio/زبيب.mp3"},
          {"ru": "Алкоголь", "ar": "كُحُول", "audio": "audio/كحول.mp3"},
          {"ru": "Вино", "ar": "نَبِيذ", "audio": "audio/نبيذ.mp3"},
          {"ru": "Пиво", "ar": "بِيرَة", "audio": "audio/بيرة.mp3"},
          {"ru": "Мансаф", "ar": "مَنْسَف", "audio": "audio/منسف.mp3"},
          {"ru": "Кабса", "ar": "كَبْسَة", "audio": "audio/كبسة.mp3"},
          {"ru": "Маклюбе", "ar": "مَقْلُوبَة", "audio": "audio/مقلوبة.mp3"},
          {"ru": "Долма", "ar": "دُولْمَة", "audio": "audio/دولمة.mp3"},
          {"ru": "Фул медамес", "ar": "فُول", "audio": "audio/فول.mp3"},
          {"ru": "Фалафель", "ar": "فَلَافِل", "audio": "audio/فلافل.mp3"},
          {"ru": "Тажин", "ar": "طَاجِين", "audio": "audio/طاجين.mp3"},
          {"ru": "Шакшука", "ar": "شَكْشُوكَة", "audio": "audio/شكشوكة.mp3"},
          {"ru": "Фаттуш", "ar": "فَتُّوش", "audio": "audio/فتوش.mp3"},
          {"ru": "Таббуле", "ar": "تَبُّولَة", "audio": "audio/تبولة.mp3"},
          {"ru": "Муттабаль", "ar": "مُتَبَّل", "audio": "audio/متبل.mp3"},
          {"ru": "Кебаб", "ar": "كَبَاب", "audio": "audio/كباب.mp3"},
          {"ru": "Шаверма / Шаурма", "ar": "شَاوِرْمَا", "audio": "audio/شاورما.mp3"},
          {"ru": "Мухаллеби", "ar": "مُهَلَبيَة", "audio": "audio/مهلبية.mp3"},
          {"ru": "Пахлава", "ar": "بَقْلاوَة", "audio": "audio/بقلاوة.mp3"},
          {"ru": "Кунафа", "ar": "كُنَافَة", "audio": "audio/كنافة.mp3"},
          {"ru": "Маамуль", "ar": "مَعْمُول", "audio": "audio/معمول.mp3"},
          {"ru": "Халва", "ar": "حَلاوَة", "audio": "audio/حلاوة.mp3"}
       
        
     
      
      
      
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

