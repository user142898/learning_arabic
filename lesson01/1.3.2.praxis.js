
    const words = [
  { "ru": "Время", "ar": "وَقْت", "audio": "../lesson01/audio/وقت.mp3" },
  { "ru": "Вчера", "ar": "أَمس", "audio": "../lesson01/audio/أمس.mp3" },
  { "ru": "Позавчера", "ar": "قَبلَ أَمس", "audio": "../lesson01/audio/قبل_أمس.mp3" },
  { "ru": "Сегодня", "ar": "اليَوم", "audio": "../lesson01/audio/اليوم.mp3" },
  { "ru": "Завтра", "ar": "غَداً", "audio": "../lesson01/audio/غدا.mp3" },
  { "ru": "Послезавтра", "ar": "بَعدَ غَد", "audio": "../lesson01/audio/بعد_غد.mp3" },
  { "ru": "Секунда", "ar": "ثَانِيَة", "audio": "../lesson01/audio/ثانية.mp3" },
  { "ru": "Минута", "ar": "دَقِيقَة", "audio": "../lesson01/audio/دقيقة.mp3" },
  { "ru": "Час", "ar": "سَاعَة", "audio": "../lesson01/audio/ساعة.mp3" },
  { "ru": "День", "ar": "يَوْم", "audio": "../lesson01/audio/يوم.mp3" },
  { "ru": "Неделя", "ar": "أُسبوع", "audio": "../lesson01/audio/أسبوع.mp3" },
  { "ru": "Месяц", "ar": "شَهْر", "audio": "../lesson01/audio/شهر.mp3" },
  { "ru": "Год", "ar": "سَنَة", "audio": "../lesson01/audio/سَنَة.mp3" },
  { "ru": "Календарь", "ar": "تَقْوِيم", "audio": "../lesson01/audio/تقويم.mp3" },
  { "ru": "Зима", "ar": "شِتَاء", "audio": "../lesson01/audio/شتاء.mp3" },
  { "ru": "Весна", "ar": "رَبِيع", "audio": "../lesson01/audio/ربيع.mp3" },
  { "ru": "Лето", "ar": "صَيْف", "audio": "../lesson01/audio/صيف.mp3" },
  { "ru": "Осень", "ar": "خَرِيف", "audio": "../lesson01/audio/خريف.mp3" },
  { "ru": "Рассвет", "ar": "فَجْر", "audio": "../lesson01/audio/فجر.mp3" },
  { "ru": "Утро", "ar": "صَبَاح", "audio": "../lesson01/audio/صباح.mp3" },
  { "ru": "Полдень", "ar": "ظُهْر", "audio": "../lesson01/audio/ظُهْر.mp3" },
  { "ru": "Вечер", "ar": "مَسَاء", "audio": "../lesson01/audio/مساء.mp3" },
  { "ru": "Закат", "ar": "غُرُوب", "audio": "../lesson01/audio/غروب.mp3" },
  { "ru": "Ночь", "ar": "لَيْل", "audio": "../lesson01/audio/ليل.mp3" },
  { "ru": "Полночь", "ar": "مُنْتَصَف اللَيْل", "audio": "../lesson01/audio/منتصف_الليل.mp3" },
  { "ru": "Воскресенье", "ar": "أحَد", "audio": "../lesson01/audio/أحد.mp3" },
  { "ru": "Понедельник", "ar": "إثْنَيْن", "audio": "../lesson01/audio/ٱثْنَيْن.mp3" },
  { "ru": "Вторник", "ar": "ثُلَاثَاء", "audio": "../lesson01/audio/ثلاثاء.mp3" },
  { "ru": "Среда", "ar": "أَرْبِعَاء", "audio": "../lesson01/audio/أربعاء.mp3" },
  { "ru": "Четверг", "ar": "خَمِيس", "audio": "../lesson01/audio/خميس.mp3" },
  { "ru": "Пятница", "ar": "جُمُعَة", "audio": "../lesson01/audio/جمعة.mp3" },
  { "ru": "Суббота", "ar": "سَبْت", "audio": "../lesson01/audio/سبت.mp3" },
  { "ru": "Январь", "ar": "يناير", "audio": "../lesson01/audio/يناير.mp3" },
  { "ru": "Февраль", "ar": "فبراير", "audio": "../lesson01/audio/فبراير.mp3" },
  { "ru": "Март", "ar": "مارس", "audio": "../lesson01/audio/مارس.mp3" },
  { "ru": "Апрель", "ar": "أبريل", "audio": "../lesson01/audio/أبريل.mp3" },
  { "ru": "Май", "ar": "مايو", "audio": "../lesson01/audio/مايو.mp3" },
  { "ru": "Июнь", "ar": "يونيو", "audio": "../lesson01/audio/يونيو.mp3" },
  { "ru": "Июль", "ar": "يوليو", "audio": "../lesson01/audio/يوليو.mp3" },
  { "ru": "Август", "ar": "أغسطس", "audio": "../lesson01/audio/أغسطس.mp3" },
  { "ru": "Сентябрь", "ar": "سبتمبر", "audio": "../lesson01/audio/سبتمبر.mp3" },
  { "ru": "Октябрь", "ar": "أكتوبر", "audio": "../lesson01/audio/أكتوبر.mp3" },
  { "ru": "Ноябрь", "ar": "نوفمبر", "audio": "../lesson01/audio/نوفمبر.mp3" },
  { "ru": "Декабрь", "ar": "ديسمبر", "audio": "../lesson01/audio/ديسمبر.mp3" },
  { "ru": "Мухаррам", "ar": "مُحَرَّم", "audio": "../lesson01/audio/محرم.mp3" },
  { "ru": "Сафар", "ar": "صَفَر", "audio": "../lesson01/audio/صَفَر.mp3" },
  { "ru": "Раби-аль-авваль", "ar": "رَبِيعُ الْأَوَّل", "audio": "../lesson01/audio/ربيع_الأول.mp3" },
  { "ru": "Раби-аль-ахир", "ar": "رَبِيعُ الآخِر", "audio": "../lesson01/audio/ربيع_الآخر.mp3" },
  { "ru": "Джумада-аль-уля", "ar": "جُمَادى الأُولى", "audio": "../lesson01/audio/جمادى_الأولى.mp3" },
  { "ru": "Джумада-аль-ахира", "ar": "جُمَادى الآخِرَة", "audio": "../lesson01/audio/جمادى_الآخرة.mp3" },
  { "ru": "Раджаб", "ar": "رَجَب", "audio": "../lesson01/audio/رجب.mp3" },
  { "ru": "Шабан", "ar": "شَعْبَان", "audio": "../lesson01/audio/شعبان.mp3" },
  { "ru": "Рамадан", "ar": "رَمَضَان", "audio": "../lesson01/audio/رمضان.mp3" },
  { "ru": "Шавваль", "ar": "شَوَّال", "audio": "../lesson01/audio/شوال.mp3" },
  { "ru": "Зу-ль-каада", "ar": "ذُو القِعدَة", "audio": "../lesson01/audio/ذو_القعدة.mp3" },
  { "ru": "Зу-ль-хиджа", "ar": "ذُو الحِجَة", "audio": "../lesson01/audio/ذو_الحجة.mp3" }
      
      
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

