
    const words = [
        { "ru": "Буква", "ar": "حَرْف", "audio": "../lesson01/audio/حرف.mp3" },
        { "ru": "Язык", "ar": "لُغَة", "audio": "../lesson01/audio/لغة.mp3" },
        { "ru": "Звук", "ar": "صَوْت", "audio": "../lesson01/audio/صوت.mp3" },
        { "ru": "Речь", "ar": "كَلَام", "audio": "../lesson01/audio/كلام.mp3" },
        { "ru": "Слово", "ar": "كَلِمَة", "audio": "../lesson01/audio/كلمة.mp3" },
        { "ru": "Предложение", "ar": "جُمْلَة", "audio": "../lesson01/audio/جملة.mp3" },
        { "ru": "Харакят", "ar": "حَرَكَات", "audio": "../lesson01/audio/حركات.mp3" },
        { "ru": "Фатха", "ar": "فَتْحَة", "audio": "../lesson01/audio/فتحة.mp3" },
        { "ru": "Касра", "ar": "كَسْرَة", "audio": "../lesson01/audio/كسرة.mp3" },
        { "ru": "Дамма", "ar": "ضَمَّة", "audio": "../lesson01/audio/ضمة.mp3" },
        { "ru": "Сукун", "ar": "سُكُون", "audio": "../lesson01/audio/سكون.mp3" },
        { "ru": "Шадда", "ar": "شَدَّة", "audio": "../lesson01/audio/شدة.mp3" },
        { "ru": "Хамза", "ar": "هَمْزَة", "audio": "../lesson01/audio/همزة.mp3" },
        { "ru": "Существительное", "ar": "اِسْم", "audio": "../lesson01/audio/اسم.mp3" },
        { "ru": "Глагол", "ar": "فِعْل", "audio": "../lesson01/audio/فعل.mp3" },
        { "ru": "Прилагательное", "ar": "صِفَة", "audio": "../lesson01/audio/صفة.mp3" },
        { "ru": "Подлежащее", "ar": "مُبْتَدَأ", "audio": "../lesson01/audio/مبتدأ.mp3" },
        { "ru": "Сказуемое", "ar": "خَبَر", "audio": "../lesson01/audio/خبر.mp3" },
        { "ru": "Аллах", "ar": "ٱللَّه", "audio": "../lesson01/audio/الله.mp3" },
        { "ru": "бог", "ar": "إِلٰه", "audio": "../lesson01/audio/إله.mp3" },
        { "ru": "Единобожие", "ar": "تَوْحِيد", "audio": "../lesson01/audio/توحيد.mp3" },
        { "ru": "Вера", "ar": "إِيمَان", "audio": "../lesson01/audio/إيمان.mp3" },
        { "ru": "Прославление (Аллаха)", "ar": "تَسْبِيح", "audio": "../lesson01/audio/تسبيح.mp3" },
        { "ru": "Упоминание (Аллаха)", "ar": "ذِّكْر", "audio": "../lesson01/audio/ذكر.mp3" },
        { "ru": "Поклонение", "ar": "عِبَادَة", "audio": "../lesson01/audio/عبادة.mp3" },
        { "ru": "Видение, откровение", "ar": "رُؤْيَة", "audio": "../lesson01/audio/رؤية.mp3" },
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
        { "ru": "Стыд(разг)/недостаток/изъян", "ar": "عَيْب", "audio": "../lesson01/audio/عيب.mp3" },
        { "ru": "Ангел", "ar": "مَلَك", "audio": "../lesson01/audio/ملك.mp3" },
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
        { "ru": "Время", "ar": "وَقْت", "audio": "../lesson01/audio/وقت.mp3" },
        { "ru": "Секунда", "ar": "ثَانِيَة", "audio": "../lesson01/audio/ثانية.mp3" },
        { "ru": "Минута", "ar": "دَقِيقَة", "audio": "../lesson01/audio/دقيقة.mp3" },
        { "ru": "Час", "ar": "سَاعَة", "audio": "../lesson01/audio/ساعة.mp3" },
        { "ru": "День", "ar": "يَوْم", "audio": "../lesson01/audio/يوم.mp3" },
        { "ru": "Неделя", "ar": "", "audio": "../lesson01/audio/.mp3" },
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
        { "ru": "Воскресенье", "ar": "ٱحَد", "audio": "../lesson01/audio/أحد.mp3" },
        { "ru": "Понедельник", "ar": "ٱثْنَيْن", "audio": "../lesson01/audio/ٱثْنَيْن.mp3" },
        { "ru": "Вторник", "ar": "ثُلَاثَاء", "audio": "../lesson01/audio/ثلاثاء.mp3" },
        { "ru": "Среда", "ar": "أَرْبِعَاء", "audio": "../lesson01/audio/أربعاء.mp3" },
        { "ru": "Четверг", "ar": "خَمِيس", "audio": "../lesson01/audio/خميس.mp3" },
        { "ru": "Пятница", "ar": "جُمُعَة", "audio": "../lesson01/audio/جمعة.mp3" },
        { "ru": "Суббота", "ar": "سَبْت", "audio": "../lesson01/audio/سبت.mp3" },
        { "ru": "Мухаррам", "ar": "مُحَرَّم", "audio": "../lesson01/audio/محرم.mp3" },
        { "ru": "Сафар", "ar": "صَفَر", "audio": "../lesson01/audio/صَفَر.mp3" },
        { "ru": "Раби-аль-авваль", "ar": "رَبِيعُ الْأَوَّلِ", "audio": "../lesson01/audio/ربيع_الأول.mp3" },
        { "ru": "Раби-аль-ахир", "ar": "رَبِيعُ الآخِرِ", "audio": "../lesson01/audio/ربيع_الآخر.mp3" },
        { "ru": "Джумада-аль-уля", "ar": "جُمَادَىٰ ٱلْأُولَى", "audio": "../lesson01/audio/جمادى_الأولى.mp3" },
        { "ru": "Джумада-аль-ахира", "ar": "جُمَادَىٰ ٱلآخِرَة", "audio": "../lesson01/audio/جمادى_الآخرة.mp3" },
        { "ru": "Раджаб", "ar": "رَجَب", "audio": "../lesson01/audio/رجب.mp3" },
        { "ru": "Шаабан", "ar": "شَعْبَان", "audio": "../lesson01/audio/شعبان.mp3" },
        { "ru": "Рамадан", "ar": "رَمَضَان", "audio": "../lesson01/audio/رمضان.mp3" },
        { "ru": "Шавваль", "ar": "شَوَّال", "audio": "../lesson01/audio/شوال.mp3" },
        { "ru": "Зу-ль-каада", "ar": "ذُو ٱلْقِعْدَةِ", "audio": "../lesson01/audio/ذو_القعدة.mp3" },
        { "ru": "Зу-ль-хиджа", "ar": "ذُو ٱلْحِجَّةِ", "audio": "../lesson01/audio/ذو_الحجة.mp3" },
        { "ru": "Отец", "ar": "أَب", "audio": "../lesson01/audio/أب.mp3" },
        { "ru": "Мать", "ar": "أُمّ", "audio": "../lesson01/audio/أم.mp3" },
        { "ru": "Папа (более формально)", "ar": "وَالِد", "audio": "../lesson01/audio/والد.mp3" },
        { "ru": "Мама (более формально)", "ar": "وَالِدَة", "audio": "../lesson01/audio/والدة.mp3" },
        { "ru": "Рождение (ребенка)", "ar": "وِلَادَة", "audio": "../lesson01/audio/ولادة.mp3" },
        { "ru": "Новорождённый", "ar": "مَوْلُود", "audio": "../lesson01/audio/مولود.mp3" },
        { "ru": "Родословная", "ar": "نَسَب", "audio": "../lesson01/audio/نسب.mp3" },
        { "ru": "Потомство", "ar": "ذُرِّيَّة", "audio": "../lesson01/audio/ذرية.mp3" },
        { "ru": "Сын", "ar": "إبن", "audio": "../lesson01/audio/إبن.mp3" },
        { "ru": "Дочь", "ar": "إبنة", "audio": "../lesson01/audio/ابنة.mp3" },
        { "ru": "Приёмный сын", "ar": "إبْنٌ بِالتَّبَنِّي", "audio": "../lesson01/audio/ابن_بالتبني.mp3" },
        { "ru": "Приёмная дочь", "ar": "بِنتٌ بِالتَبنّي", "audio": "../lesson01/audio/بنت_بالتبني.mp3" },
        { "ru": "Сирота", "ar": "يَتِيم", "audio": "../lesson01/audio/يتيم.mp3" },
        { "ru": "Брат", "ar": "أَخ", "audio": "../lesson01/audio/أخ.mp3" },
        { "ru": "Близнец", "ar": "تَوأَم", "audio": "../lesson01/audio/توأم.mp3" },
        { "ru": "Сестра", "ar": "أُخت", "audio": "../lesson01/audio/أخت.mp3" },
        { "ru": "Дедушка", "ar": "جَد", "audio": "../lesson01/audio/جد.mp3" },
        { "ru": "Бабушка", "ar": "جَدةَ", "audio": "../lesson01/audio/جدة.mp3" },
        { "ru": "Внук", "ar": "حَفيد", "audio": "../lesson01/audio/حفيد.mp3" },
        { "ru": "Внучка", "ar": "حفيدة", "audio": "../lesson01/audio/حفيدة.mp3" },
        { "ru": "Дядя (со стороны отца)", "ar": "عَم", "audio": "../lesson01/audio/عم.mp3" },
        { "ru": "Тётя (со стороны отца)", "ar": "عَمة", "audio": "../lesson01/audio/عمة.mp3" },
        { "ru": "Дядя (со стороны матери)", "ar": "خال", "audio": "../lesson01/audio/خال.mp3" },
        { "ru": "Тётя (со стороны матери)", "ar": "خالة", "audio": "../lesson01/audio/خالة.mp3" },
        { "ru": "Двоюродный брат (по отцу)", "ar": "ابنُ العمّ", "audio": "../lesson01/audio/ابن_العم.mp3" },
        { "ru": "Двоюродная сестра (по отцу)", "ar": "بنتُ العمّ", "audio": "../lesson01/audio/بنت_العم.mp3" },
        { "ru": "Двоюродный брат (по матери)", "ar": "ابنُ الخال", "audio": "../lesson01/audio/ابن_الخال.mp3" },
        { "ru": "Двоюродная сестра (по матери)", "ar": "بنتُ الخال", "audio": "../lesson01/audio/بنت_الخال.mp3" },
        { "ru": "Отчим", "ar": "زَوْجُ الْأُمِّ", "audio": "../lesson01/audio/زوج_الأم.mp3" },
        { "ru": "Мачеха", "ar": "زَوْجَةُ الْأَبِ", "audio": "../lesson01/audio/زوجة_الأب.mp3" },
        { "ru": "Родственник", "ar": "قَرِيب", "audio": "../lesson01/audio/قريب.mp3" },
        { "ru": "Родственница", "ar": "قَرِيبَة", "audio": "../lesson01/audio/قريبة.mp3" },
        { "ru": "Семья с дедушками и бабушками", "ar": "أَهْل", "audio": "../lesson01/audio/اهل.mp3" },
        { "ru": "Семья (ближайшие родственники(отец, мать, братья)", "ar": "عَائِلَة", "audio": "../lesson01/audio/عائلة.mp3" },
        { "ru": "Помолвка", "ar": "خِطْبَة", "audio": "../lesson01/audio/خطبة.mp3" },
        { "ru": "Обручённый", "ar": "خَطِيب", "audio": "../lesson01/audio/خطيب.mp3" },
        { "ru": "Обручённая", "ar": "خَطِيبَة", "audio": "../lesson01/audio/خطيبة.mp3" },
        { "ru": "Свадьба", "ar": "زِفاف", "audio": "../lesson01/audio/زفاف.mp3" },
        { "ru": "Жених", "ar": "عَريس", "audio": "../lesson01/audio/عريس.mp3" },
        { "ru": "Невеста", "ar": "عَروس", "audio": "../lesson01/audio/عروس.mp3" },
        { "ru": "Брак", "ar": "زَوُاج", "audio": "../lesson01/audio/زواج.mp3" },
        { "ru": "Религиозный брак", "ar": "نِكاح", "audio": "../lesson01/audio/نكاح.mp3" },
        { "ru": "Муж", "ar": "زَوج", "audio": "../lesson01/audio/زوج.mp3" },
        { "ru": "Жена", "ar": "زَوجة", "audio": "../lesson01/audio/زوجة.mp3" },
        { "ru": "Зять", "ar": "صِهْر", "audio": "../lesson01/audio/صهر.mp3" },
        { "ru": "Невестка", "ar": "كِنّة", "audio": "../lesson01/audio/كنة.mp3" },
        { "ru": "Свёкор/Тесть", "ar": "حَمْو", "audio": "../lesson01/audio/حمو.mp3" },
        { "ru": "Свекровь/Тёща", "ar": "حَمَاة", "audio": "../lesson01/audio/حماة.mp3" },
        { "ru": "Деверь", "ar": "سِلْف", "audio": "../lesson01/audio/سلف.mp3" },
        { "ru": "Все мужчины со стороны жены/мужа", "ar": "نَسِيب", "audio": "../lesson01/audio/نسيب.mp3" },
        { "ru": "Все женщины со стороны жены/мужа", "ar": "نَسِيبة", "audio": "../lesson01/audio/نسيبة.mp3" },
        { "ru": "Все родственники со стороны жены/мужа", "ar": "نَسَائِب", "audio": "../lesson01/audio/نسائب.mp3" },
        { "ru": "Развод", "ar": "طَلَاق", "audio": "../lesson01/audio/طلاق.mp3" },
        { "ru": "Похороны", "ar": "جَنَازَة", "audio": "../lesson01/audio/جنازة.mp3" },
        { "ru": "Кладбище", "ar": "مَقْبَرَة", "audio": "../lesson01/audio/مقبرة.mp3" },
        { "ru": "Могила", "ar": "قَبْر", "audio": "../lesson01/audio/قبر.mp3" },
        { "ru": "Гроб", "ar": "تَابُوت", "audio": "../lesson01/audio/تابوت.mp3" },
        { "ru": "Саван", "ar": "كَفَن", "audio": "../lesson01/audio/كفن.mp3" },
        { "ru": "Вдовец", "ar": "أَرمل", "audio": "../lesson01/audio/أرمل.mp3" },
        { "ru": "Вдова", "ar": "أَرمَلة", "audio": "../lesson01/audio/أرملة.mp3" },
        { "ru": "Тело", "ar": "جِسم", "audio": "../lesson01/audio/جسم.mp3" },
        { "ru": "Голова", "ar": "رَأْس", "audio": "../lesson01/audio/رأس.mp3" },
        { "ru": "Волосы", "ar": "شَعْر", "audio": "../lesson01/audio/شعر.mp3" },
        { "ru": "Лицо", "ar": "وَجْه", "audio": "../lesson01/audio/وجه.mp3" },
        { "ru": "Бровь", "ar": "حَاجِب", "audio": "../lesson01/audio/حاجب.mp3" },
        { "ru": "Веко", "ar": "جَفْن", "audio": "../lesson01/audio/جفن.mp3" },
        { "ru": "Глаз", "ar": "عَيْن", "audio": "../lesson01/audio/عين.mp3" },
        { "ru": "Зрачок", "ar": "", "audio": "../lesson01/audio/.mp3" },
        { "ru": "Ресница", "ar": "رِمش", "audio": "../lesson01/audio/رمش.mp3" },
        { "ru": "Щека", "ar": "خَد", "audio": "../lesson01/audio/خد.mp3" },
        { "ru": "Нос", "ar": "أَنْف", "audio": "../lesson01/audio/أنف.mp3" },
        { "ru": "Ухо", "ar": "أُذُن", "audio": "../lesson01/audio/أذن.mp3" },
        { "ru": "Рот", "ar": "فَم", "audio": "../lesson01/audio/فم.mp3" },
        { "ru": "Губа", "ar": "شِفه", "audio": "../lesson01/audio/شفه.mp3" },
        { "ru": "Язык", "ar": "لِسَان", "audio": "../lesson01/audio/لسان.mp3" },
        { "ru": "Десна", "ar": "لِثَة", "audio": "../lesson01/audio/لثة.mp3" },
        { "ru": "Зуб", "ar": "سِن", "audio": "../lesson01/audio/سن.mp3" },
        { "ru": "Шея", "ar": "عُنُق", "audio": "../lesson01/audio/عنق.mp3" },
        { "ru": "Горло", "ar": "حَلْق", "audio": "../lesson01/audio/حلق.mp3" },
        { "ru": "Голос", "ar": "صَوْت", "audio": "../lesson01/audio/صوت.mp3" },
        { "ru": "Плечо", "ar": "كَتِف", "audio": "../lesson01/audio/كتف.mp3" },
        { "ru": "Подмышка", "ar": "إِبط", "audio": "../lesson01/audio/إبط.mp3" },
        { "ru": "Рука (целиком)", "ar": "ذِرَاع", "audio": "../lesson01/audio/ذراع.mp3" },
        { "ru": "Локоть", "ar": "مِرْفَق", "audio": "../lesson01/audio/مرفق.mp3" },
        { "ru": "Запястье", "ar": "مِعْصَم", "audio": "../lesson01/audio/معصم.mp3" },
        { "ru": "Ладонь (кисть руки)", "ar": "يَد", "audio": "../lesson01/audio/يد.mp3" },
        { "ru": "Кулак", "ar": "", "audio": "../lesson01/audio/.mp3" },
        { "ru": "Палец", "ar": "إِصْبَع", "audio": "../lesson01/audio/إصبع.mp3" },
        { "ru": "Ноготь", "ar": "ظِفْر", "audio": "../lesson01/audio/ظفر.mp3" },
        { "ru": "Грудь", "ar": "صَدْر", "audio": "../lesson01/audio/صدر.mp3" },
        { "ru": "Спина", "ar": "ظَهْر", "audio": "../lesson01/audio/ظهر.mp3" }




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

