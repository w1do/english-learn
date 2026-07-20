
export interface Question {
  id: string;
  text: string;
  answer: string;
  transcription: string;
  hints: string[];
  audio?: string;
}

export interface ThemeQuestions {
  themeId: string;
  questions: Question[];
}

export const questionsMock: Record<string, Question[]> = {
  "1018": [
    {
      id: "2348",
      text: "Я часто пользуюсь общественным транспортом",
      answer: "I often use public transport",
      transcription: "aɪ ˈɔːfn juːz ˈpʌblɪk ˈtrænspɔːt",
      hints: ["I", "often", "use"],
      audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3"
    },
    {
      id: "2349",
      text: "Она живет в этом городе",
      answer: "She lives in this city",
      transcription: "ʃiː lɪvz ɪn ðɪs ˈsɪti",
      hints: ["She", "lives", "in"],
      audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3"
    },
    // Добавим еще 8 вопросов для полноты (10 всего)
    { id: "2350", text: "Мы работаем каждый день", answer: "We work every day", transcription: "wiː wɜːk ˈɛvri deɪ", hints: ["We", "work", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2351", text: "Они играют в футбол по выходным", answer: "They play football at weekends", transcription: "ðeɪ pleɪ ˈfʊtbɔːl æt ˈwiːkɛndz", hints: ["They", "play", "football"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2352", text: "Я читаю книги по вечерам", answer: "I read books in the evenings", transcription: "aɪ riːd bʊks ɪn ðɪ ˈiːvnɪŋz", hints: ["I", "read", "books"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2353", text: "Он пьет кофе каждое утро", answer: "He drinks coffee every morning", transcription: "hiː drɪŋks ˈkɒfi ˈɛvri ˈmɔːnɪŋ", hints: ["He", "drinks", "coffee"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2354", text: "Кошка спит на диване", answer: "The cat sleeps on the sofa", transcription: "ðə kæt sliːps ɒn ðə ˈsəʊfə", hints: ["The", "cat", "sleeps"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2355", text: "Солнце встает на востоке", answer: "The sun rises in the east", transcription: "ðə sʌn ˈraɪzɪz ɪn ðɪ iːst", hints: ["The", "sun", "rises"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2356", text: "Вода кипит при 100 градусах", answer: "Water boils at 100 degrees", transcription: "ˈwɔːtə bɔɪlz æt wʌn ˈhʌndrəd dɪˈɡriːz", hints: ["Water", "boils", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2357", text: "Земля вращается вокруг Солнца", answer: "The Earth goes round the Sun", transcription: "ðɪ ɜːθ ɡəʊz raʊnd ðə sʌn", hints: ["The", "Earth", "goes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "4075": [
    {
      id: "40751",
      text: "Я живу в этом городе",
      answer: "I live in this city",
      transcription: "aɪ lɪv ɪn ðɪs ˈsɪti",
      hints: ["I", "live", "in"],
      audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3"
    },
    {
      id: "40752",
      text: "Ты не живешь здесь",
      answer: "You don't live here",
      transcription: "juː dəʊnt lɪv hɪə",
      hints: ["You", "don't", "live"],
      audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3"
    },
    { id: "40753", text: "Где ты живешь?", answer: "Where do you live?", transcription: "weə duː juː lɪv", hints: ["Where", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40754", text: "Я работаю врачом", answer: "I work as a doctor", transcription: "aɪ wɜːk æz ə ˈdɒktə", hints: ["I", "work", "as"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40755", text: "Она учится в университете", answer: "She studies at university", transcription: "ʃiː ˈstʌdiz æt ˌjuːnɪˈvɜːsəti", hints: ["She", "studies", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40756", text: "Мы завтракаем в 8 утра", answer: "We have breakfast at 8 am", transcription: "wiː hæv ˈbrɛkfəst æt eɪt eɪ ɛm", hints: ["We", "have", "breakfast"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40757", text: "Он идет на работу пешком", answer: "He goes to work on foot", transcription: "hiː ɡəʊz tuː wɜːk ɒn fʊt", hints: ["He", "goes", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40758", text: "Они смотрят телевизор вечером", answer: "They watch TV in the evening", transcription: "ðeɪ wɒtʃ ˌtiːˈviː ɪn ðɪ ˈiːvnɪŋ", hints: ["They", "watch", "TV"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40759", text: "Я ложусь спать поздно", answer: "I go to bed late", transcription: "aɪ ɡəʊ tuː bɛd leɪt", hints: ["I", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40760", text: "Ты любишь свою работу?", answer: "Do you l!ike your job?", transcription: "duː juː laɪk jɔː dʒɒb", hints: ["Do", "you", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1019": [
    { id: "10191", text: "Я не пью кофе", answer: "I don't drink coffee", transcription: "aɪ dəʊnt drɪŋk ˈkɒfi", hints: ["I", "don't", "drink"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10192", text: "Он не работает здесь", answer: "He doesn't work here", transcription: "hiː ˈdʌznt wɜːk hɪə", hints: ["He", "doesn't", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10193", text: "Мы не смотрим телевизор", answer: "We don't watch TV", transcription: "wiː dəʊnt wɒtʃ ˌtiːˈviː", hints: ["We", "don't", "watch"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10194", text: "Они не живут в Лондоне", answer: "They don't live in London", transcription: "ðeɪ dəʊnt lɪv ɪn ˈlʌndən", hints: ["They", "don't", "live"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10195", text: "Она не говорит по-английски", answer: "She doesn't speak English", transcription: "ʃiː ˈdʌznt spiːk ˈɪŋɡlɪʃ", hints: ["She", "doesn't", "speak"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10196", text: "Ты не знаешь его", answer: "You don't know him", transcription: "juː dəʊnt nəʊ hɪm", hints: ["You", "don't", "know"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10197", text: "Оно не работает", answer: "It doesn't work", transcription: "ɪt ˈdʌznt wɜːk", hints: ["It", "doesn't", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10198", text: "Мой брат не любит кошек", answer: "My brother doesn't like cats", transcription: "maɪ ˈbrʌðə ˈdʌznt laɪk kæts", hints: ["My", "brother", "doesn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10199", text: "Мы не часто ходим в кино", answer: "We don't often go to the cinema", transcription: "wiː dəʊnt ˈɒfn ɡəʊ tuː ðə ˈsɪnəmə", hints: ["We", "don't", "often"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "101910", text: "Они не курят", answer: "They don't smoke", transcription: "ðeɪ dəʊnt sməʊk", hints: ["They", "don't", "smoke"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1020": [
    { id: "10201", text: "Ты пьешь чай?", answer: "Do you drink tea?", transcription: "duː juː drɪŋk tiː", hints: ["Do", "you", "drink"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10202", text: "Он живет в Москве?", answer: "Does he live in Moscow?", transcription: "dʌz hiː lɪv ɪn ˈmɒskəʊ", hints: ["Does", "he", "live"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10203", text: "Они работают здесь?", answer: "Do they work here?", transcription: "duː ðeɪ wɜːk hɪə", hints: ["Do", "they", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10204", text: "Она говорит по-французски?", answer: "Does she speak French?", transcription: "dʌz ʃiː spiːk frentʃ", hints: ["Does", "she", "speak"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10205", text: "Мы знаем их?", answer: "Do we know them?", transcription: "duː wiː nəʊ ðɛm", hints: ["Do", "we", "know"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10206", text: "Ты часто путешествуешь?", answer: "Do you often travel?", transcription: "duː juː ˈɒfn ˈtrævl", hints: ["Do", "you", "often"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10207", text: "Твоя сестра любит пиццу?", answer: "Does your sister like pizza?", transcription: "dʌz jɔː ˈsɪstə laɪk ˈpiːtsə", hints: ["Does", "your", "sister"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10208", text: "Вы понимаете меня?", answer: "Do you understand me?", transcription: "duː juː ˌʌndəˈstænd miː", hints: ["Do", "you", "understand"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10209", text: "Где ты работаешь?", answer: "Where do you work?", transcription: "weə duː juː wɜːk", hints: ["Where", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "102010", text: "Когда он приходит домой?", answer: "When does he come home?", transcription: "wen dʌz hiː kʌm həʊm", hints: ["When", "does", "he"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1024": [
    { id: "10241", text: "Я сейчас читаю книгу", answer: "I am reading a book now", transcription: "aɪ æm ˈriːdɪŋ ə bʊk naʊ", hints: ["I", "am", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10242", text: "Она сейчас готовит ужин", answer: "She is cooking dinner now", transcription: "ʃiː ɪz ˈkʊkɪŋ ˈdɪnə naʊ", hints: ["She", "is", "cooking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10243", text: "Они сейчас играют в теннис", answer: "They are playing tennis now", transcription: "ðeɪ ɑː ˈpleɪɪŋ ˈtɛnɪs naʊ", hints: ["They", "are", "playing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10244", text: "Мы сейчас смотрим фильм", answer: "We are watching a movie now", transcription: "wiː ɑː ˈwɒtʃɪŋ ə ˈmuːvi naʊ", hints: ["We", "are", "watching"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10245", text: "Он сейчас спит", answer: "He is sleeping now", transcription: "hiː ɪz ˈsliːpɪŋ naʊ", hints: ["He", "is", "sleeping"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10246", text: "Идет дождь", answer: "It is raining now", transcription: "ɪt ɪz ˈreɪnɪŋ naʊ", hints: ["It", "is", "raining"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10247", text: "Ты сейчас слушаешь музыку", answer: "You are listening to music now", transcription: "juː ɑː ˈlɪsnɪŋ tuː ˈmjuːzɪk naʊ", hints: ["You", "are", "listening"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10248", text: "Мой друг сейчас работает", answer: "My friend is working now", transcription: "maɪ frend ɪz ˈwɜːkɪŋ naʊ", hints: ["My", "friend", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10249", text: "Дети сейчас гуляют", answer: "The children are walking now", transcription: "ðə ˈtʃɪldrən ɑː ˈwɔːkɪŋ naʊ", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "102410", text: "Солнце сейчас светит", answer: "The sun is shining now", transcription: "ðə sʌn ɪz ˈʃaɪnɪŋ naʊ", hints: ["The", "sun", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1030": [
    { id: "10301", text: "Я вчера посмотрел фильм", answer: "I watched a movie yesterday", transcription: "aɪ wɒtʃt ə ˈmuːvi ˈjɛstədeɪ", hints: ["I", "watched", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10302", text: "Она на прошлой неделе купила машину", answer: "She bought a car last week", transcription: "ʃiː bɔːt ə kɑː lɑːst wiːk", hints: ["She", "bought", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10303", text: "Они в прошлом году жили в Париже", answer: "They lived in Paris last year", transcription: "ðeɪ lɪvd ɪn ˈpærɪs lɑːst jɪə", hints: ["They", "lived", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10304", text: "Мы позавчера играли в футбол", answer: "We played football the day before yesterday", transcription: "wiː pleɪd ˈfʊtbɔːl ðə deɪ bɪˈfɔː ˈjɛstədeɪ", hints: ["We", "played", "football"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10305", text: "Он вчера пришел домой поздно", answer: "He came home late yesterday", transcription: "hiː keɪm həʊm leɪt ˈjɛstədeɪ", hints: ["He", "came", "home"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10306", text: "Я 5 минут назад выпил кофе", answer: "I drank coffee 5 minutes ago", transcription: "aɪ dræŋk ˈkɒfi faɪv ˈmɪnɪts əˈɡəʊ", hints: ["I", "drank", "coffee"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10307", text: "Она вчера написала письмо", answer: "She wrote a letter yesterday", transcription: "ʃiː rəʊt ə ˈlɛtə ˈjɛstədeɪ", hints: ["She", "wrote", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10308", text: "Мы в прошлую субботу ходили в парк", answer: "We went to the park last Saturday", transcription: "wiː went tuː ðə pɑːk lɑːst ˈsætədeɪ", hints: ["We", "went", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10309", text: "Они вчера весь день работали", answer: "They worked all day yesterday", transcription: "ðeɪ wɜːkt ɔːl deɪ ˈjɛstədeɪ", hints: ["They", "worked", "all"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "103010", text: "Ты вчера позвонил мне", answer: "You called me yesterday", transcription: "juː kɔːld miː ˈjɛstədeɪ", hints: ["You", "called", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3914": [
    { id: "39141", text: "Я всегда делаю резервную копию своих файлов", answer: "I always back up my files", transcription: "aɪ ˈɔːlweɪz bæk ʌp maɪ faɪlz", hints: ["I", "always", "back"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39142", text: "Тебе следует сделать резервную копию данных", answer: "You should back up the data", transcription: "juː ʃʊd bæk ʌp ðə ˈdeɪtə", hints: ["You", "should", "back"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39143", text: "Она сделала резервную копию проекта", answer: "She backed up the project", transcription: "ʃiː bækt ʌp ðə ˈprɒdʒɛkt", hints: ["She", "backed", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39144", text: "Мы делаем резервную копию каждую неделю", answer: "We back up every week", transcription: "wiː bæk ʌp ˈɛvri wiːk", hints: ["We", "back", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39145", text: "Они забыли сделать резервную копию", answer: "They forgot to back up", transcription: "ðeɪ fəˈɡɒt tuː bæk ʌp", hints: ["They", "forgot", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39146", text: "Не забудь сделать резервную копию", answer: "Don't forget to back up", transcription: "dəʊnt fəˈɡɒt tuː bæk ʌp", hints: ["Don't", "forget", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39147", text: "Я сделал резервную копию на облако", answer: "I backed up to the cloud", transcription: "aɪ bækt ʌp tuː ðə klaʊd", hints: ["I", "backed", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39148", text: "Он делает резервную копию системы", answer: "He backs up the system", transcription: "hiː bæks ʌp ðə ˈsɪstəm", hints: ["He", "backs", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39149", text: "Вы сделали резервную копию базы данных?", answer: "Did you back up the database?", transcription: "dɪd juː bæk ʌp ðə ˈdeɪtəbeɪs", hints: ["Did", "you", "back"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "391410", text: "Мне нужно сделать резервную копию фото", answer: "I need to back up the photos", transcription: "aɪ niːd tuː bæk ʌp ðə ˈfəʊtəʊz", hints: ["I", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "7025": [
    { id: "70251", text: "Я боюсь пауков", answer: "I am afraid of spiders", transcription: "aɪ æm əˈfreɪd ɒv ˈspaɪdəz", hints: ["I", "am", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70252", text: "Она боится темноты", answer: "She is afraid of the dark", transcription: "ʃiː ɪz əˈfreɪd ɒv ðə dɑːk", hints: ["She", "is", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70253", text: "Они боятся летать", answer: "They are afraid of flying", transcription: "ðeɪ ɑː əˈfreɪd ɒv ˈflaɪɪŋ", hints: ["They", "are", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70254", text: "Мы боимся потеряться", answer: "We are afraid of getting lost", transcription: "wiː ɑː əˈfreɪd ɒv ˈɡɛtɪŋ lɒst", hints: ["We", "are", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70255", text: "Он боится собак", answer: "He is afraid of dogs", transcription: "hiː ɪz əˈfreɪd ɒv dɒɡz", hints: ["He", "is", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70256", text: "Не бойся", answer: "Don't be afraid", transcription: "dəʊnt biː əˈfreɪd", hints: ["Don't", "be", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70257", text: "Ты боишься высоты?", answer: "Are you afraid of heights?", transcription: "ɑː juː əˈfreɪd ɒv haɪts", hints: ["Are", "you", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70258", text: "Мой кот боится воды", answer: "My cat is afraid of water", transcription: "maɪ kæt ɪz əˈfreɪd ɒv ˈwɔːtə", hints: ["My", "cat", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70259", text: "Я боюсь сделать ошибку", answer: "I am afraid of making a mistake", transcription: "aɪ æm əˈfreɪd ɒv ˈmeɪkɪŋ ə mɪsˈteɪk", hints: ["I", "am", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "702510", text: "Они не боятся трудностей", answer: "They are not afraid of difficulties", transcription: "ðeɪ ɑː nɒt əˈfreɪd ɒv ˈdɪfɪkəltiz", hints: ["They", "are", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "9891": [
    { id: "98911", text: "На столе стоит лампа", answer: "There is a lamp on the table", transcription: "ðɛə ɪz ə læmp ɒn ðə ˈteɪbl", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98912", text: "В комнате есть окно", answer: "There is a window in the room", transcription: "ðɛə ɪz ə ˈwɪndəʊ ɪn ðə ruːm", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98913", text: "На стене висит картина", answer: "There is a picture on the wall", transcription: "ðɛə ɪz ə ˈpɪktʃə ɒn ðə wɔːl", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98914", text: "В холодильнике есть молоко", answer: "There is some milk in the fridge", transcription: "ðɛə ɪz sʌm mɪlk ɪn ðə frɪdʒ", hints: ["There", "is", "some"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98915", text: "В саду есть дерево", answer: "There is a tree in the garden", transcription: "ðɛə ɪz ə triː ɪn ðə ˈɡɑːdn", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98916", text: "Рядом с домом есть парк", answer: "There is a park near the house", transcription: "ðɛə ɪz ə pɑːk nɪə ðə haʊs", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98917", text: "В сумке есть книга", answer: "There is a book in the bag", transcription: "ðɛə ɪz ə bʊk ɪn ðə bæɡ", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98918", text: "На небе есть облако", answer: "There is a cloud in the sky", transcription: "ðɛə ɪz ə klaʊd ɪn ðə skaɪ", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "98919", text: "На полу лежит ковер", answer: "There is a carpet on the floor", transcription: "ðɛə ɪz ə ˈkɑːpɪt ɒn ðə flɔː", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "989110", text: "В стакане есть вода", answer: "There is some water in the glass", transcription: "ðɛə ɪz sʌm ˈwɔːtə ɪn ðə ɡlɑːs", hints: ["There", "is", "some"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "7026": [
    { id: "70261", text: "Я злюсь на тебя", answer: "I am angry with you", transcription: "aɪ æm ˈæŋɡri wɪð juː", hints: ["I", "am", "angry"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70262", text: "Он разозлился из-за опоздания", answer: "He got angry because of the delay", transcription: "hiː ɡɒt ˈæŋɡri bɪˈkɒz ɒv ðə dɪˈleɪ", hints: ["He", "got", "angry"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70263", text: "Почему ты злишься?", answer: "Why are you angry?", transcription: "waɪ ɑː juː ˈæŋɡri", hints: ["Why", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70264", text: "Она выглядит очень злой", answer: "She looks very angry", transcription: "ʃiː lʊks ˈvɛri ˈæŋɡri", hints: ["She", "looks", "very"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70265", text: "Не злись на него", answer: "Don't be angry with him", transcription: "dəʊnt biː ˈæŋɡri wɪð hɪm", hints: ["Don't", "be", "angry"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70266", text: "Они злятся на шум", answer: "They are angry about the noise", transcription: "ðeɪ ɑː ˈæŋɡri əˈbaʊt ðə nɔɪz", hints: ["They", "are", "angry"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70267", text: "Я был очень зол вчера", answer: "I was very angry yesterday", transcription: "aɪ wɒz ˈvɛri ˈæŋɡri ˈjɛstədeɪ", hints: ["I", "was", "very"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70268", text: "Ее отец будет зол", answer: "Her father will be angry", transcription: "hɜː ˈfɑːðə wɪl biː ˈæŋɡri", hints: ["Her", "father", "will"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "70269", text: "Трудно не злиться", answer: "It is hard not to be angry", transcription: "ɪt ɪz hɑːd nɒt tuː biː ˈæŋɡri", hints: ["It", "is", "hard"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "702610", text: "Ты все еще злишься?", answer: "Are you still angry?", transcription: "ɑː juː stɪl ˈæŋɡri", hints: ["Are", "you", "still"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3915": [
    { id: "39151", text: "Террористы взорвали мост", answer: "The terrorists blew up the bridge", transcription: "ðə ˈtɛrərɪsts bluː ʌp ðə brɪdʒ", hints: ["The", "terrorists", "blew"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39152", text: "Нам нужно надуть эти шары", answer: "We need to blow up these balloons", transcription: "wiː niːd tuː bləʊ ʌp ðiz bəˈluːnz", hints: ["We", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39153", text: "Машина взорвалась", answer: "The car blew up", transcription: "ðə kɑː bluː ʌp", hints: ["The", "car", "blew"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39154", text: "Он надул матрас", answer: "He blew up the mattress", transcription: "hiː bluː ʌp ðə ˈmætrɪs", hints: ["He", "blew", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39155", text: "Бомба не взорвалась", answer: "The bomb didn't blow up", transcription: "ðə bɒm ˈdɪdnt bləʊ ʌp", hints: ["The", "bomb", "didn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39156", text: "Они взорвали старое здание", answer: "They blew up the old building", transcription: "ðeɪ bluː ʌp ðɪ əʊld ˈbɪldɪŋ", hints: ["They", "blew", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39157", text: "Можешь надуть этот мяч?", answer: "Can you blow up this ball?", transcription: "kæn juː bləʊ ʌp ðɪs bɔːl", hints: ["Can", "you", "blow"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39158", text: "Весь город взорвался гневом", answer: "The whole town blew up in anger", transcription: "ðə həʊl taʊn bluː ʌp ɪn ˈæŋɡə", hints: ["The", "whole", "town"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "39159", text: "Они планировали взорвать банк", answer: "They planned to blow up the bank", transcription: "ðeɪ plænd tuː bləʊ ʌp ðə bæŋk", hints: ["They", "planned", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "391510", text: "Шина взорвалась на трассе", answer: "The tire blew up on the highway", transcription: "ðə ˈtaɪə bluː ʌp ɒn ðə ˈhaɪweɪ", hints: ["The", "tire", "blew"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "9904": [
    { id: "99041", text: "Я в школе", answer: "I am at school", transcription: "aɪ æm æt skuːl", hints: ["I", "am", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99042", text: "Она в Лондоне", answer: "She is in London", transcription: "ʃiː ɪz ɪn ˈlʌndən", hints: ["She", "is", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99043", text: "Мы на работе", answer: "We are at work", transcription: "wiː ɑː æt wɜːk", hints: ["We", "are", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99044", text: "Они в кинотеатре", answer: "They are at the cinema", transcription: "ðeɪ ɑː æt ðə ˈsɪnəmə", hints: ["They", "are", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99045", text: "Он дома", answer: "He is at home", transcription: "hiː ɪz æt həʊm", hints: ["He", "is", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99046", text: "Книга в сумке", answer: "The book is in the bag", transcription: "ðə bʊk ɪz ɪn ðə bæɡ", hints: ["The", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99047", text: "Мы в ресторане", answer: "We are in the restaurant", transcription: "wiː ɑː ɪn ðə ˈrɛstrɒnt", hints: ["We", "are", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99048", text: "Они в аэропорту", answer: "They are at the airport", transcription: "ðeɪ ɑː æt ðə ˈeəpɔːt", hints: ["They", "are", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "99049", text: "Мама в магазине", answer: "Mom is at the shop", transcription: "mɒm ɪz æt ðə ʃɒp", hints: ["Mom", "is", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "990410", text: "Папа в гараже", answer: "Dad is in the garage", transcription: "dæd ɪz ɪn ðə ˈɡærɑːʒ", hints: ["Dad", "is", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1031": [
    { id: "10311", text: "Я сейчас работаю", answer: "I am working now", transcription: "aɪ æm ˈwɜːkɪŋ naʊ", hints: ["I", "am", "working"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10312", text: "Она сейчас читает", answer: "She is reading now", transcription: "ʃiː ɪz ˈriːdɪŋ naʊ", hints: ["She", "is", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10313", text: "Они сейчас играют", answer: "They are playing now", transcription: "ðeɪ ɑː ˈpleɪɪŋ naʊ", hints: ["They", "are", "playing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10314", text: "Мы сейчас учимся", answer: "We are studying now", transcription: "wiː ɑː ˈstʌdiɪŋ naʊ", hints: ["We", "are", "studying"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10315", text: "Он сейчас спит", answer: "He is sleeping now", transcription: "hiː ɪz ˈsliːpɪŋ naʊ", hints: ["He", "is", "sleeping"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10316", text: "Идет дождь", answer: "It is raining now", transcription: "ɪt ɪz ˈreɪnɪŋ naʊ", hints: ["It", "is", "raining"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10317", text: "Ты сейчас слушаешь музыку", answer: "You are listening to music now", transcription: "juː ɑː ˈlɪsnɪŋ tuː ˈmjuːzɪk naʊ", hints: ["You", "are", "listening"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10318", text: "Солнце светит", answer: "The sun is shining", transcription: "ðə sʌn ɪz ˈʃaɪnɪŋ", hints: ["The", "sun", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10319", text: "Мы ужинаем", answer: "We are having dinner", transcription: "wiː ɑː ˈhævɪŋ ˈdɪnə", hints: ["We", "are", "having"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "103110", text: "Птицы поют", answer: "The birds are singing", transcription: "ðə bɜːdz ɑː ˈsɪŋɪŋ", hints: ["The", "birds", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "4101": [
    { id: "41011", text: "Я вчера ходил в парк", answer: "I went to the park yesterday", transcription: "aɪ went tuː ðə pɑːk ˈjɛstədeɪ", hints: ["I", "went", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41012", text: "Она купила платье на прошлой неделе", answer: "She bought a dress last week", transcription: "ʃiː bɔːt ə drɛs lɑːst wiːk", hints: ["She", "bought", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41013", text: "Они посмотрели фильм вчера", answer: "They watched a movie yesterday", transcription: "ðeɪ wɒtʃt ə ˈmuːvi ˈjɛstədeɪ", hints: ["They", "watched", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41014", text: "Мы приготовили пиццу", answer: "We cooked a pizza", transcription: "wiː kʊkt ə ˈpiːtsə", hints: ["We", "cooked", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41015", text: "Он пришел домой поздно", answer: "He came home late", transcription: "hiː keɪm həʊm leɪt", hints: ["He", "came", "home"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41016", text: "Я выпил кофе утром", answer: "I drank coffee in the morning", transcription: "aɪ dræŋk ˈkɒfi ɪn ðɪ ˈmɔːnɪŋ", hints: ["I", "drank", "coffee"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41017", text: "Она написала письмо", answer: "She wrote a letter", transcription: "ʃiː rəʊt ə ˈlɛtə", hints: ["She", "wrote", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41018", text: "Мы жили в Лондоне", answer: "We lived in London", transcription: "wiː lɪvd ɪn ˈlʌndən", hints: ["We", "lived", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41019", text: "Он нашел свои ключи", answer: "He found his keys", transcription: "hiː faʊnd hɪz kiːz", hints: ["He", "found", "his"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "410110", text: "Солнце село час назад", answer: "The sun set an hour ago", transcription: "ðə sʌn sɛt ən ˈaʊə əˈɡəʊ", hints: ["The", "sun", "set"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3855": [
    { id: "38551", text: "Дети разыгрывают сказку", answer: "The children act out a fairy tale", transcription: "ðə ˈtʃɪldrən ækt aʊt ə ˈfeəri teɪl", hints: ["The", "children", "act"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "38552", text: "Она любит разыгрывать сценки", answer: "She likes to act out scenes", transcription: "ʃiː laɪks tuː ækt aʊt siːnz", hints: ["She", "likes", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "38553", text: "Разыграйте этот диалог", answer: "Act out this dialogue", transcription: "ækt aʊt ðɪs ˈdaɪəlɒɡ", hints: ["Act", "out", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "6037": [
    { id: "60371", text: "Я боюсь пауков", answer: "I am afraid of spiders", transcription: "aɪ æm əˈfreɪd ɒv ˈspaɪdəz", hints: ["I", "am", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "60372", text: "Она боится темноты", answer: "She is afraid of the dark", transcription: "ʃiː ɪz əˈfreɪd ɒv ðə dɑːk", hints: ["She", "is", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "60373", text: "Не бойся", answer: "Don't be afraid", transcription: "dəʊnt biː əˈfreɪd", hints: ["Don't", "be", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1098": [
    { id: "10981", text: "На столе стоит стакан", answer: "There is a glass on the table", transcription: "ðɛə ɪz ə ɡlɑːs ɒn ðə ˈteɪbl", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10982", text: "В комнате есть диван", answer: "There is a sofa in the room", transcription: "ðɛə ɪz ə ˈsəʊfə ɪn ðə ruːm", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10983", text: "В саду есть кошка", answer: "There is a cat in the garden", transcription: "ðɛə ɪz ə kæt ɪn ðə ˈɡɑːdn", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1120": [
    { id: "11201", text: "Я в Москве", answer: "I am in Moscow", transcription: "aɪ æm ɪn ˈmɒskəʊ", hints: ["I", "am", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11202", text: "Книга в коробке", answer: "The book is in the box", transcription: "ðə bʊk ɪz ɪn ðə bɒks", hints: ["The", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11203", text: "Мы в парке", answer: "We are in the park", transcription: "wiː ɑː ɪn ðə pɑːk", hints: ["We", "are", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1021": [
    { id: "10211", text: "Она всегда встает рано", answer: "She always gets up early", transcription: "ʃiː ˈɔːlweɪz ɡɛts ʌp ˈɜːli", hints: ["She", "always", "gets"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10212", text: "Он часто путешествует по работе", answer: "He often travels for work", transcription: "hiː ˈɒfn ˈtrævlz fɔː wɜːk", hints: ["He", "often", "travels"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10213", text: "Мы обычно ужинаем дома", answer: "We usually have dinner at home", transcription: "wiː ˈjuːʒʊəli hæv ˈdɪnə æt həʊm", hints: ["We", "usually", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3156": [
    { id: "31561", text: "Я хожу в спортзал дважды в неделю", answer: "I go to the gym twice a week", transcription: "aɪ ɡəʊ tuː ðə dʒɪm twaɪs ə wiːk", hints: ["I", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31562", text: "Она навещает своих родителей по выходным", answer: "She visits her parents at weekends", transcription: "ʃiː ˈvɪzɪts hɜː ˈpeərənts æt ˈwiːkɛndz", hints: ["She", "visits", "her"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3852": [
    { id: "38521", text: "Он грызет ногти, когда нервничает", answer: "He bites his nails when he is nervous", transcription: "hiː baɪts hɪz neɪlz wen hiː ɪz ˈnɜːvəs", hints: ["He", "bites", "his"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "38522", text: "Я всегда пью кофе по утрам", answer: "I always drink coffee in the mornings", transcription: "aɪ ˈɔːlweɪz drɪŋk ˈkɒfi ɪn ðɪ ˈmɔːnɪŋz", hints: ["I", "always", "drink"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3869": [
    { id: "38691", text: "Машина взорвалась", answer: "The car blew up", transcription: "ðə kɑː bluː ʌp", hints: ["The", "car", "blew"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "38692", text: "Нам нужно надуть эти шары", answer: "We need to blow up these balloons", transcription: "wiː niːd tuː bləʊ ʌp ðiz bəˈluːnz", hints: ["We", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "6039": [
    { id: "60391", text: "Я злюсь на тебя", answer: "I am angry with you", transcription: "aɪ æm ˈæŋɡri wɪð juː", hints: ["I", "am", "angry"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "60392", text: "Почему он такой злой?", answer: "Why is he so angry?", transcription: "waɪ ɪz hiː səʊ ˈæŋɡri", hints: ["Why", "is", "he"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3159": [
    { id: "31591", text: "Поезд отправляется в 9 утра", answer: "The train leaves at 9 am", transcription: "ðə treɪn liːvz æt naɪn eɪ ɛm", hints: ["The", "train", "leaves"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31592", text: "Когда начинается фильм?", answer: "When does the movie start?", transcription: "wen dʌz ðə ˈmuːvi stɑːt", hints: ["When", "does", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3160": [
    { id: "31601", text: "Вода замерзает при нуле градусов", answer: "Water freezes at zero degrees", transcription: "ˈwɔːtə ˈfriːzɪz æt ˈzɪərəʊ dɪˈɡriːz", hints: ["Water", "freezes", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31602", text: "Коровы едят траву", answer: "Cows eat grass", transcription: "kaʊz iːt ɡrɑːs", hints: ["Cows", "eat", "grass"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3178": [
    { id: "31781", text: "Ты любишь шоколад?", answer: "Do you like chocolate?", transcription: "duː juː laɪk ˈtʃɒklət", hints: ["Do", "you", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31782", text: "Он говорит по-английски?", answer: "Does he speak English?", transcription: "dʌz hiː spiːk ˈɪŋɡlɪʃ", hints: ["Does", "he", "speak"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5680": [
    { id: "56801", text: "Я купил машину вчера", answer: "I bought a car yesterday", transcription: "aɪ bɔːt ə kɑː ˈjɛstədeɪ", hints: ["I", "bought", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56802", text: "Она увидела его", answer: "She saw him", transcription: "ʃiː sɔː hɪm", hints: ["She", "saw", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "6346": [
    { id: "63461", text: "Я уже купил это", answer: "I have already bought it", transcription: "aɪ hæv ɔːlˈrɛdi bɔːt ɪt", hints: ["I", "have", "already"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "63462", text: "Он ушел", answer: "He has gone", transcription: "hiː hæz ɡɒn", hints: ["He", "has", "gone"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "10266": [
    { id: "102661", text: "Он самый высокий в классе", answer: "He is the tallest in the class", transcription: "hiː ɪz ðə ˈtɔːlɪst ɪn ðə klɑːs", hints: ["He", "is", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "102662", text: "Это самая дорогая машина", answer: "It is the most expensive car", transcription: "ɪt ɪz ðə məʊst ɪksˈpɛnsɪv kɑː", hints: ["It", "is", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1032": [
    { id: "10321", text: "Ты сейчас работаешь?", answer: "Are you working now?", transcription: "ɑː juː ˈwɜːkɪŋ naʊ", hints: ["Are", "you", "working"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10322", text: "Она сейчас читает?", answer: "Is she reading now?", transcription: "ɪz ʃiː ˈriːdɪŋ naʊ", hints: ["Is", "she", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "4103": [
    { id: "41031", text: "Ты вчера ходил в кино?", answer: "Did you go to the cinema yesterday?", transcription: "dɪd juː ɡəʊ tuː ðə ˈsɪnəmə ˈjɛstədeɪ", hints: ["Did", "you", "go"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41032", text: "Она купила хлеб?", answer: "Did she buy some bread?", transcription: "dɪd ʃiː baɪ sʌm brɛd", hints: ["Did", "she", "buy"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1078": [
    { id: "10781", text: "Я умею плавать", answer: "I can swim", transcription: "aɪ kæn swɪm", hints: ["I", "can", "swim"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10782", text: "Ты можешь мне помочь?", answer: "Can you help me?", transcription: "kæn juː hɛlp miː", hints: ["Can", "you", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1193": [
    { id: "11931", text: "У меня есть несколько друзей", answer: "I have a few friends", transcription: "aɪ hæv ə fjuː frɛndz", hints: ["I", "have", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11932", text: "Я купил несколько яблок", answer: "I bought a few apples", transcription: "aɪ bɔːt ə fjuː ˈæplz", hints: ["I", "bought", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1085": [
    { id: "10851", text: "Я позвоню тебе завтра", answer: "I will call you tomorrow", transcription: "aɪ wɪl kɔːl juː təˈmɒrəʊ", hints: ["I", "will", "call"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10852", text: "Она придет вовремя", answer: "She will come on time", transcription: "ʃiː wɪl kʌm ɒn taɪm", hints: ["She", "will", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1243": [
    { id: "12431", text: "Я иду в школу", answer: "I go to school", transcription: "aɪ ɡəʊ tuː skuːl", hints: ["I", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12432", text: "Мы едем в Лондон", answer: "We go to London", transcription: "wiː ɡəʊ tuː ˈlʌndən", hints: ["We", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Simple - Отрицательный вопрос (2796)
  "2796": [
    { id: "27961", text: "Ты не работаешь здесь?", answer: "Don't you work here?", transcription: "dəʊnt juː wɜːk hɪə", hints: ["Don't", "you", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27962", text: "Он не живет в Москве?", answer: "Doesn't he live in Moscow?", transcription: "ˈdʌznt hiː lɪv ɪn ˈmɒskəʊ", hints: ["Doesn't", "he", "live"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27963", text: "Они не знают тебя?", answer: "Don't they know you?", transcription: "dəʊnt ðeɪ nəʊ juː", hints: ["Don't", "they", "know"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27964", text: "Она не говорит по-русски?", answer: "Doesn't she speak Russian?", transcription: "ˈdʌznt ʃiː spiːk ˈrʌʃən", hints: ["Doesn't", "she", "speak"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27965", text: "Ты не любишь кофе?", answer: "Don't you like coffee?", transcription: "dəʊnt juː laɪk ˈkɒfi", hints: ["Don't", "you", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27966", text: "Он не понимает меня?", answer: "Doesn't he understand me?", transcription: "ˈdʌznt hiː ˌʌndəˈstænd miː", hints: ["Doesn't", "he", "understand"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27967", text: "Мы не опаздываем?", answer: "Aren't we late?", transcription: "ɑːnt wiː leɪt", hints: ["Aren't", "we", "late"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27968", text: "Они не живут здесь?", answer: "Don't they live here?", transcription: "dəʊnt ðeɪ lɪv hɪə", hints: ["Don't", "they", "live"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27969", text: "Она не работает учителем?", answer: "Doesn't she work as a teacher?", transcription: "ˈdʌznt ʃiː wɜːk æz ə ˈtiːtʃə", hints: ["Doesn't", "she", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "279610", text: "Ты не знаешь его?", answer: "Don't you know him?", transcription: "dəʊnt juː nəʊ hɪm", hints: ["Don't", "you", "know"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Simple - С always/usually/often (3176)
  "3176": [
    { id: "31761", text: "Я всегда завтракаю дома", answer: "I always have breakfast at home", transcription: "aɪ ˈɔːlweɪz hæv ˈbrɛkfəst æt həʊm", hints: ["I", "always", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31762", text: "Она обычно приходит вовремя", answer: "She usually comes on time", transcription: "ʃiː ˈjuːʒuəli kʌmz ɒn taɪm", hints: ["She", "usually", "comes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31763", text: "Мы часто ходим в кино", answer: "We often go to the cinema", transcription: "wiː ˈɒfn ɡəʊ tuː ðə ˈsɪnəmə", hints: ["We", "often", "go"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31764", text: "Он всегда опаздывает", answer: "He always comes late", transcription: "hiː ˈɔːlweɪz kʌmz leɪt", hints: ["He", "always", "comes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31765", text: "Они обычно едят дома", answer: "They usually eat at home", transcription: "ðeɪ ˈjuːʒuəli iːt æt həʊm", hints: ["They", "usually", "eat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31766", text: "Я часто читаю перед сном", answer: "I often read before bed", transcription: "aɪ ˈɒfn riːd bɪˈfɔː bɛd", hints: ["I", "often", "read"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31767", text: "Она всегда улыбается", answer: "She always smiles", transcription: "ʃiː ˈɔːlweɪz smaɪlz", hints: ["She", "always", "smiles"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31768", text: "Мы обычно отдыхаем в воскресенье", answer: "We usually rest on Sundays", transcription: "wiː ˈjuːʒuəli rɛst ɒn ˈsʌndeɪz", hints: ["We", "usually", "rest"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31769", text: "Он часто звонит маме", answer: "He often calls his mum", transcription: "hiː ˈɒfn kɔːlz hɪz mʌm", hints: ["He", "often", "calls"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "317610", text: "Они всегда помогают друг другу", answer: "They always help each other", transcription: "ðeɪ ˈɔːlweɪz hɛlp iːtʃ ˈʌðə", hints: ["They", "always", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Simple - С every/once a week (3177)
  "3177": [
    { id: "31771", text: "Я хожу в спортзал каждый день", answer: "I go to the gym every day", transcription: "aɪ ɡəʊ tuː ðə dʒɪm ˈɛvri deɪ", hints: ["I", "go", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31772", text: "Она звонит раз в неделю", answer: "She calls once a week", transcription: "ʃiː kɔːlz wʌns ə wiːk", hints: ["She", "calls", "once"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31773", text: "Мы встречаемся каждую пятницу", answer: "We meet every Friday", transcription: "wiː miːt ˈɛvri ˈfraɪdeɪ", hints: ["We", "meet", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31774", text: "Он ходит в кино раз в месяц", answer: "He goes to the cinema once a month", transcription: "hiː ɡəʊz tuː ðə ˈsɪnəmə wʌns ə mʌnθ", hints: ["He", "goes", "once"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31775", text: "Они убирают квартиру каждую неделю", answer: "They clean the flat every week", transcription: "ðeɪ kliːn ðə flæt ˈɛvri wiːk", hints: ["They", "clean", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31776", text: "Я мою машину раз в две недели", answer: "I wash my car once every two weeks", transcription: "aɪ wɒʃ maɪ kɑː wʌns ˈɛvri tuː wiːks", hints: ["I", "wash", "once"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31777", text: "Она занимается йогой каждое утро", answer: "She does yoga every morning", transcription: "ʃiː dʌz ˈjəʊɡə ˈɛvri ˈmɔːnɪŋ", hints: ["She", "does", "yoga"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31778", text: "Мы ездим на море каждое лето", answer: "We go to the sea every summer", transcription: "wiː ɡəʊ tuː ðə siː ˈɛvri ˈsʌmə", hints: ["We", "go", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31779", text: "Он читает газету каждое утро", answer: "He reads the newspaper every morning", transcription: "hiː riːdz ðə ˈnjuːzˌpeɪpə ˈɛvri ˈmɔːnɪŋ", hints: ["He", "reads", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "317710", text: "Они ходят в ресторан раз в неделю", answer: "They go to a restaurant once a week", transcription: "ðeɪ ɡəʊ tuː ə ˈrɛstrɒnt wʌns ə wiːk", hints: ["They", "go", "once"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Simple - Вопросы к подлежащему (3190)
  "3190": [
    { id: "31901", text: "Кто живет здесь?", answer: "Who lives here?", transcription: "huː lɪvz hɪə", hints: ["Who", "lives", "here"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31902", text: "Кто знает ответ?", answer: "Who knows the answer?", transcription: "huː nəʊz ðɪ ˈɑːnsə", hints: ["Who", "knows", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31903", text: "Что происходит?", answer: "What happens?", transcription: "wɒt ˈhæpənz", hints: ["What", "happens"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31904", text: "Кто работает здесь?", answer: "Who works here?", transcription: "huː wɜːks hɪə", hints: ["Who", "works", "here"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31905", text: "Что тебя беспокоит?", answer: "What bothers you?", transcription: "wɒt ˈbɒðəz juː", hints: ["What", "bothers", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31906", text: "Кто говорит по-английски?", answer: "Who speaks English?", transcription: "huː spiːks ˈɪŋɡlɪʃ", hints: ["Who", "speaks", "English"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31907", text: "Что случается каждый день?", answer: "What happens every day?", transcription: "wɒt ˈhæpənz ˈɛvri deɪ", hints: ["What", "happens", "every"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31908", text: "Кто помогает тебе?", answer: "Who helps you?", transcription: "huː hɛlps juː", hints: ["Who", "helps", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31909", text: "Что тебя радует?", answer: "What makes you happy?", transcription: "wɒt meɪks juː ˈhæpi", hints: ["What", "makes", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "319010", text: "Кто звонит тебе каждый день?", answer: "Who calls you every day?", transcription: "huː kɔːlz juː ˈɛvri deɪ", hints: ["Who", "calls", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Simple - Wh-вопросы (3189)
  "3189": [
    { id: "31891", text: "Где ты живешь?", answer: "Where do you live?", transcription: "weə duː juː lɪv", hints: ["Where", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31892", text: "Когда ты встаешь?", answer: "When do you get up?", transcription: "wen duː juː ɡɛt ʌp", hints: ["When", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31893", text: "Почему ты плачешь?", answer: "Why do you cry?", transcription: "waɪ duː juː kraɪ", hints: ["Why", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31894", text: "Как ты добираешься до работы?", answer: "How do you get to work?", transcription: "haʊ duː juː ɡɛt tuː wɜːk", hints: ["How", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31895", text: "Что ты делаешь по вечерам?", answer: "What do you do in the evenings?", transcription: "wɒt duː juː duː ɪn ðɪ ˈiːvnɪŋz", hints: ["What", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31896", text: "Где она работает?", answer: "Where does she work?", transcription: "weə dʌz ʃiː wɜːk", hints: ["Where", "does", "she"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31897", text: "Когда он приходит домой?", answer: "When does he come home?", transcription: "wen dʌz hiː kʌm həʊm", hints: ["When", "does", "he"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31898", text: "Почему они не отвечают?", answer: "Why don't they answer?", transcription: "waɪ dəʊnt ðeɪ ˈɑːnsə", hints: ["Why", "don't", "they"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31899", text: "Как она учится?", answer: "How does she study?", transcription: "haʊ dʌz ʃiː ˈstʌdi", hints: ["How", "does", "she"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "318910", text: "Что он любит есть?", answer: "What does he like to eat?", transcription: "wɒt dʌz hiː laɪk tuː iːt", hints: ["What", "does", "he"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Continuous - Отрицательный вопрос (4152)
  "4152": [
    { id: "41521", text: "Ты сейчас не работаешь?", answer: "Aren't you working now?", transcription: "ɑːnt juː ˈwɜːkɪŋ naʊ", hints: ["Aren't", "you", "working"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41522", text: "Она сейчас не читает?", answer: "Isn't she reading now?", transcription: "ˈɪznt ʃiː ˈriːdɪŋ naʊ", hints: ["Isn't", "she", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41523", text: "Они сейчас не играют?", answer: "Aren't they playing now?", transcription: "ɑːnt ðeɪ ˈpleɪɪŋ naʊ", hints: ["Aren't", "they", "playing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41524", text: "Он сейчас не спит?", answer: "Isn't he sleeping now?", transcription: "ˈɪznt hiː ˈsliːpɪŋ naʊ", hints: ["Isn't", "he", "sleeping"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41525", text: "Мы сейчас не опаздываем?", answer: "Aren't we running late?", transcription: "ɑːnt wiː ˈrʌnɪŋ leɪt", hints: ["Aren't", "we", "running"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41526", text: "Дождь сейчас не идет?", answer: "Isn't it raining now?", transcription: "ˈɪznt ɪt ˈreɪnɪŋ naʊ", hints: ["Isn't", "it", "raining"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41527", text: "Ты сейчас не слушаешь меня?", answer: "Aren't you listening to me?", transcription: "ɑːnt juː ˈlɪsnɪŋ tuː miː", hints: ["Aren't", "you", "listening"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41528", text: "Она сейчас не готовит?", answer: "Isn't she cooking now?", transcription: "ˈɪznt ʃiː ˈkʊkɪŋ naʊ", hints: ["Isn't", "she", "cooking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41529", text: "Они сейчас не смотрят фильм?", answer: "Aren't they watching a movie?", transcription: "ɑːnt ðeɪ ˈwɒtʃɪŋ ə ˈmuːvi", hints: ["Aren't", "they", "watching"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "415210", text: "Он сейчас не работает?", answer: "Isn't he working now?", transcription: "ˈɪznt hiː ˈwɜːkɪŋ naʊ", hints: ["Isn't", "he", "working"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Continuous - Действия прямо сейчас (4077)
  "4077": [
    { id: "40771", text: "Я сейчас пишу письмо", answer: "I am writing a letter now", transcription: "aɪ æm ˈraɪtɪŋ ə ˈlɛtə naʊ", hints: ["I", "am", "writing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40772", text: "Она сейчас разговаривает по телефону", answer: "She is talking on the phone now", transcription: "ʃiː ɪz ˈtɔːkɪŋ ɒn ðə fəʊn naʊ", hints: ["She", "is", "talking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40773", text: "Они сейчас едят", answer: "They are eating now", transcription: "ðeɪ ɑː ˈiːtɪŋ naʊ", hints: ["They", "are", "eating"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40774", text: "Мы сейчас идем домой", answer: "We are going home now", transcription: "wiː ɑː ˈɡəʊɪŋ həʊm naʊ", hints: ["We", "are", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40775", text: "Он сейчас бежит", answer: "He is running now", transcription: "hiː ɪz ˈrʌnɪŋ naʊ", hints: ["He", "is", "running"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40776", text: "Кошка сейчас играет", answer: "The cat is playing now", transcription: "ðə kæt ɪz ˈpleɪɪŋ naʊ", hints: ["The", "cat", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40777", text: "Я сейчас учу английский", answer: "I am studying English now", transcription: "aɪ æm ˈstʌdiɪŋ ˈɪŋɡlɪʃ naʊ", hints: ["I", "am", "studying"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40778", text: "Она сейчас танцует", answer: "She is dancing now", transcription: "ʃiː ɪz ˈdɑːnsɪŋ naʊ", hints: ["She", "is", "dancing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40779", text: "Мы сейчас отдыхаем", answer: "We are resting now", transcription: "wiː ɑː ˈrɛstɪŋ naʊ", hints: ["We", "are", "resting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "407710", text: "Он сейчас плавает", answer: "He is swimming now", transcription: "hiː ɪz ˈswɪmɪŋ naʊ", hints: ["He", "is", "swimming"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Continuous - Действия в данный момент (4078)
  "4078": [
    { id: "40781", text: "Мама сейчас готовит обед", answer: "Mum is cooking lunch at the moment", transcription: "mʌm ɪz ˈkʊkɪŋ lʌntʃ æt ðə ˈməʊmənt", hints: ["Mum", "is", "cooking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40782", text: "Папа сейчас читает газету", answer: "Dad is reading the newspaper at the moment", transcription: "dæd ɪz ˈriːdɪŋ ðə ˈnjuːzˌpeɪpə æt ðə ˈməʊmənt", hints: ["Dad", "is", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40783", text: "Дети сейчас делают уроки", answer: "The children are doing their homework at the moment", transcription: "ðə ˈtʃɪldrən ɑː ˈduːɪŋ ðɛə ˈhəʊmwɜːk æt ðə ˈməʊmənt", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40784", text: "Он сейчас разговаривает с другом", answer: "He is talking to a friend at the moment", transcription: "hiː ɪz ˈtɔːkɪŋ tuː ə frɛnd æt ðə ˈməʊmənt", hints: ["He", "is", "talking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40785", text: "Она сейчас пьет чай", answer: "She is drinking tea at the moment", transcription: "ʃiː ɪz ˈdrɪŋkɪŋ tiː æt ðə ˈməʊmənt", hints: ["She", "is", "drinking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40786", text: "Я сейчас смотрю видео", answer: "I am watching a video at the moment", transcription: "aɪ æm ˈwɒtʃɪŋ ə ˈvɪdiəʊ æt ðə ˈməʊmənt", hints: ["I", "am", "watching"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40787", text: "Мы сейчас ждем автобус", answer: "We are waiting for the bus at the moment", transcription: "wiː ɑː ˈweɪtɪŋ fɔː ðə bʌs æt ðə ˈməʊmənt", hints: ["We", "are", "waiting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40788", text: "Они сейчас обсуждают план", answer: "They are discussing the plan at the moment", transcription: "ðeɪ ɑː dɪˈskʌsɪŋ ðə plæn æt ðə ˈməʊmənt", hints: ["They", "are", "discussing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40789", text: "Он сейчас пишет отчет", answer: "He is writing a report at the moment", transcription: "hiː ɪz ˈraɪtɪŋ ə rɪˈpɔːt æt ðə ˈməʊmənt", hints: ["He", "is", "writing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "407810", text: "Она сейчас убирает комнату", answer: "She is cleaning the room at the moment", transcription: "ʃiː ɪz ˈkliːnɪŋ ðə ruːm æt ðə ˈməʊmənt", hints: ["She", "is", "cleaning"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Continuous - Что происходит вокруг (4079)
  "4079": [
    { id: "40791", text: "Вокруг меня все разговаривают", answer: "Everyone around me is talking", transcription: "ˈɛvriwʌn əˈraʊnd miː ɪz ˈtɔːkɪŋ", hints: ["Everyone", "around", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40792", text: "Дети играют на улице", answer: "The children are playing outside", transcription: "ðə ˈtʃɪldrən ɑː ˈpleɪɪŋ ˌaʊtˈsaɪd", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40793", text: "Птицы поют в саду", answer: "The birds are singing in the garden", transcription: "ðə bɜːdz ɑː ˈsɪŋɪŋ ɪn ðə ˈɡɑːdn", hints: ["The", "birds", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40794", text: "Машины едут по дороге", answer: "Cars are driving along the road", transcription: "kɑːz ɑː ˈdraɪvɪŋ əˈlɒŋ ðə rəʊd", hints: ["Cars", "are", "driving"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40795", text: "Люди идут по улице", answer: "People are walking along the street", transcription: "ˈpiːpl ɑː ˈwɔːkɪŋ əˈlɒŋ ðə striːt", hints: ["People", "are", "walking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40796", text: "Кто-то стучит в дверь", answer: "Someone is knocking at the door", transcription: "ˈsʌmwʌn ɪz ˈnɒkɪŋ æt ðə dɔː", hints: ["Someone", "is", "knocking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40797", text: "Солнце светит и дует ветер", answer: "The sun is shining and the wind is blowing", transcription: "ðə sʌn ɪz ˈʃaɪnɪŋ ænd ðə wɪnd ɪz ˈbləʊɪŋ", hints: ["The", "sun", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40798", text: "Соседи шумят", answer: "The neighbours are making noise", transcription: "ðə ˈneɪbəz ɑː ˈmeɪkɪŋ nɔɪz", hints: ["The", "neighbours", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40799", text: "Телефон звонит", answer: "The phone is ringing", transcription: "ðə fəʊn ɪz ˈrɪŋɪŋ", hints: ["The", "phone", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "407910", text: "Снег идет", answer: "It is snowing", transcription: "ɪt ɪz ˈsnəʊɪŋ", hints: ["It", "is", "snowing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Present Continuous - Описание картинки (4080)
  "4080": [
    { id: "40801", text: "На картинке мальчик играет в мяч", answer: "In the picture a boy is playing with a ball", transcription: "ɪn ðə ˈpɪktʃə ə bɔɪ ɪz ˈpleɪɪŋ wɪð ə bɔːl", hints: ["In", "the", "picture"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40802", text: "Женщина читает книгу", answer: "The woman is reading a book", transcription: "ðə ˈwʊmən ɪz ˈriːdɪŋ ə bʊk", hints: ["The", "woman", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40803", text: "Дети бегут по парку", answer: "The children are running through the park", transcription: "ðə ˈtʃɪldrən ɑː ˈrʌnɪŋ θruː ðə pɑːk", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40804", text: "Мужчина сидит на скамейке", answer: "The man is sitting on a bench", transcription: "ðə mæn ɪz ˈsɪtɪŋ ɒn ə bɛntʃ", hints: ["The", "man", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40805", text: "Собака бежит за мячом", answer: "The dog is running after the ball", transcription: "ðə dɒɡ ɪz ˈrʌnɪŋ ˈɑːftə ðə bɔːl", hints: ["The", "dog", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40806", text: "Девочка рисует картину", answer: "The girl is drawing a picture", transcription: "ðə ɡɜːl ɪz ˈdrɔːɪŋ ə ˈpɪktʃə", hints: ["The", "girl", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40807", text: "Они смеются и разговаривают", answer: "They are laughing and talking", transcription: "ðeɪ ɑː ˈlɑːfɪŋ ænd ˈtɔːkɪŋ", hints: ["They", "are", "laughing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40808", text: "Кот спит на диване", answer: "The cat is sleeping on the sofa", transcription: "ðə kæt ɪz ˈsliːpɪŋ ɒn ðə ˈsəʊfə", hints: ["The", "cat", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "40809", text: "Птица летит над деревом", answer: "The bird is flying over the tree", transcription: "ðə bɜːd ɪz ˈflaɪɪŋ ˈəʊvə ðə triː", hints: ["The", "bird", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "408010", text: "Люди стоят в очереди", answer: "People are standing in a queue", transcription: "ˈpiːpl ɑː ˈstændɪŋ ɪn ə kjuː", hints: ["People", "are", "standing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Past Simple - Действия в прошлом (4119)
  "4119": [
    { id: "41191", text: "Я вчера ходил в магазин", answer: "I went to the shop yesterday", transcription: "aɪ went tuː ðə ʃɒp ˈjɛstədeɪ", hints: ["I", "went", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41192", text: "Она вчера приготовила ужин", answer: "She cooked dinner yesterday", transcription: "ʃiː kʊkt ˈdɪnə ˈjɛstədeɪ", hints: ["She", "cooked", "dinner"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41193", text: "Они вчера смотрели фильм", answer: "They watched a film yesterday", transcription: "ðeɪ wɒtʃt ə fɪlm ˈjɛstədeɪ", hints: ["They", "watched", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41194", text: "Мы вчера играли в футбол", answer: "We played football yesterday", transcription: "wiː pleɪd ˈfʊtbɔːl ˈjɛstədeɪ", hints: ["We", "played", "football"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41195", text: "Он вчера позвонил мне", answer: "He called me yesterday", transcription: "hiː kɔːld miː ˈjɛstədeɪ", hints: ["He", "called", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41196", text: "Я написал письмо другу", answer: "I wrote a letter to a friend", transcription: "aɪ rəʊt ə ˈlɛtə tuː ə frɛnd", hints: ["I", "wrote", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41197", text: "Она купила новое платье", answer: "She bought a new dress", transcription: "ʃiː bɔːt ə njuː drɛs", hints: ["She", "bought", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41198", text: "Мы встретились в кафе", answer: "We met at a cafe", transcription: "wiː mɛt æt ə ˈkæfeɪ", hints: ["We", "met", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41199", text: "Он нашел свой телефон", answer: "He found his phone", transcription: "hiː faʊnd hɪz fəʊn", hints: ["He", "found", "his"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "411910", text: "Они уехали рано утром", answer: "They left early in the morning", transcription: "ðeɪ lɛft ˈɜːli ɪn ðə ˈmɔːnɪŋ", hints: ["They", "left", "early"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Past Simple - Завершённые действия (4120)
  "4120": [
    { id: "41201", text: "Я уже закончил работу", answer: "I finished work already", transcription: "aɪ ˈfɪnɪʃt wɜːk ɔːlˈrɛdi", hints: ["I", "finished", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41202", text: "Она сдала экзамен", answer: "She passed the exam", transcription: "ʃiː pɑːst ðɪ ɪɡˈzæm", hints: ["She", "passed", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41203", text: "Они построили дом", answer: "They built a house", transcription: "ðeɪ bɪlt ə haʊs", hints: ["They", "built", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41204", text: "Мы закончили проект", answer: "We completed the project", transcription: "wiː kəmˈpliːtɪd ðə ˈprɒdʒɛkt", hints: ["We", "completed", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41205", text: "Он выиграл соревнование", answer: "He won the competition", transcription: "hiː wʌn ðə ˌkɒmpɪˈtɪʃən", hints: ["He", "won", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41206", text: "Я прочитал всю книгу", answer: "I read the whole book", transcription: "aɪ rɛd ðə həʊl bʊk", hints: ["I", "read", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41207", text: "Она выучила все слова", answer: "She learned all the words", transcription: "ʃiː lɜːnd ɔːl ðə wɜːdz", hints: ["She", "learned", "all"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41208", text: "Мы решили задачу", answer: "We solved the problem", transcription: "wiː sɒlvd ðə ˈprɒbləm", hints: ["We", "solved", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41209", text: "Он починил машину", answer: "He repaired the car", transcription: "hiː rɪˈpeəd ðə kɑː", hints: ["He", "repaired", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "412010", text: "Они закрыли магазин", answer: "They closed the shop", transcription: "ðeɪ kləʊzd ðə ʃɒp", hints: ["They", "closed", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Past Simple - Последовательность действий (4121)
  "4121": [
    { id: "41211", text: "Сначала я встал, потом позавтракал", answer: "First I got up, then I had breakfast", transcription: "fɜːst aɪ ɡɒt ʌp ðɛn aɪ hæd ˈbrɛkfəst", hints: ["First", "I", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41212", text: "Она пришла домой и сразу легла спать", answer: "She came home and went straight to bed", transcription: "ʃiː keɪm həʊm ænd went streɪt tuː bɛd", hints: ["She", "came", "home"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41213", text: "Он открыл дверь и вошел", answer: "He opened the door and came in", transcription: "hiː ˈəʊpənd ðə dɔː ænd keɪm ɪn", hints: ["He", "opened", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41214", text: "Мы поели и пошли гулять", answer: "We ate and went for a walk", transcription: "wiː eɪt ænd went fɔːr ə wɔːk", hints: ["We", "ate", "and"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41215", text: "Они купили билеты и сели в поезд", answer: "They bought tickets and got on the train", transcription: "ðeɪ bɔːt ˈtɪkɪts ænd ɡɒt ɒn ðə treɪn", hints: ["They", "bought", "tickets"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41216", text: "Я позвонил другу и пригласил его", answer: "I called a friend and invited him", transcription: "aɪ kɔːld ə frɛnd ænd ɪnˈvaɪtɪd hɪm", hints: ["I", "called", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41217", text: "Она написала письмо и отправила его", answer: "She wrote a letter and sent it", transcription: "ʃiː rəʊt ə ˈlɛtə ænd sɛnt ɪt", hints: ["She", "wrote", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41218", text: "Мы приехали и сразу пошли в отель", answer: "We arrived and went straight to the hotel", transcription: "wiː əˈraɪvd ænd went streɪt tuː ðə həʊˈtɛl", hints: ["We", "arrived", "and"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41219", text: "Он встал рано и пошел на пробежку", answer: "He got up early and went for a run", transcription: "hiː ɡɒt ʌp ˈɜːli ænd went fɔːr ə rʌn", hints: ["He", "got", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "412110", text: "Они поговорили и приняли решение", answer: "They talked and made a decision", transcription: "ðeɪ tɔːkt ænd meɪd ə dɪˈsɪʒən", hints: ["They", "talked", "and"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Past Simple - Короткие истории (4122)
  "4122": [
    { id: "41221", text: "Однажды я встретил интересного человека", answer: "Once I met an interesting person", transcription: "wʌns aɪ mɛt ən ˈɪntrɪstɪŋ ˈpɜːsən", hints: ["Once", "I", "met"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41222", text: "В прошлом году мы поехали в Испанию", answer: "Last year we went to Spain", transcription: "lɑːst jɪə wiː went tuː speɪn", hints: ["Last", "year", "we"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41223", text: "Когда я был маленьким, я любил мороженое", answer: "When I was little I loved ice cream", transcription: "wen aɪ wɒz ˈlɪtl aɪ lʌvd aɪs kriːm", hints: ["When", "I", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41224", text: "Вчера произошло кое-что интересное", answer: "Something interesting happened yesterday", transcription: "ˈsʌmθɪŋ ˈɪntrɪstɪŋ ˈhæpənd ˈjɛstədeɪ", hints: ["Something", "interesting", "happened"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41225", text: "Мы познакомились три года назад", answer: "We met three years ago", transcription: "wiː mɛt θriː jɪəz əˈɡəʊ", hints: ["We", "met", "three"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41226", text: "Он рассказал мне смешную историю", answer: "He told me a funny story", transcription: "hiː təʊld miː ə ˈfʌni ˈstɔːri", hints: ["He", "told", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41227", text: "Она нашла кошелек на улице", answer: "She found a wallet in the street", transcription: "ʃiː faʊnd ə ˈwɒlɪt ɪn ðə striːt", hints: ["She", "found", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41228", text: "Дети играли весь день", answer: "The children played all day", transcription: "ðə ˈtʃɪldrən pleɪd ɔːl deɪ", hints: ["The", "children", "played"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41229", text: "Мы провели отличный вечер", answer: "We had a great evening", transcription: "wiː hæd ə ɡreɪt ˈiːvnɪŋ", hints: ["We", "had", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "412210", text: "Он опоздал на поезд", answer: "He missed the train", transcription: "hiː mɪst ðə treɪn", hints: ["He", "missed", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Past Simple - С yesterday (4123)
  "4123": [
    { id: "41231", text: "Вчера я встал в 7 утра", answer: "Yesterday I got up at 7 am", transcription: "ˈjɛstədeɪ aɪ ɡɒt ʌp æt sɛvn eɪ ɛm", hints: ["Yesterday", "I", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41232", text: "Вчера она работала допоздна", answer: "Yesterday she worked late", transcription: "ˈjɛstədeɪ ʃiː wɜːkt leɪt", hints: ["Yesterday", "she", "worked"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41233", text: "Вчера мы ходили в ресторан", answer: "Yesterday we went to a restaurant", transcription: "ˈjɛstədeɪ wiː went tuː ə ˈrɛstrɒnt", hints: ["Yesterday", "we", "went"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41234", text: "Вчера он купил новый телефон", answer: "Yesterday he bought a new phone", transcription: "ˈjɛstədeɪ hiː bɔːt ə njuː fəʊn", hints: ["Yesterday", "he", "bought"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41235", text: "Вчера они приехали поздно", answer: "Yesterday they arrived late", transcription: "ˈjɛstədeɪ ðeɪ əˈraɪvd leɪt", hints: ["Yesterday", "they", "arrived"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41236", text: "Вчера я не ходил на работу", answer: "Yesterday I didn't go to work", transcription: "ˈjɛstədeɪ aɪ ˈdɪdnt ɡəʊ tuː wɜːk", hints: ["Yesterday", "I", "didn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41237", text: "Вчера она позвонила мне", answer: "Yesterday she called me", transcription: "ˈjɛstədeɪ ʃiː kɔːld miː", hints: ["Yesterday", "she", "called"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41238", text: "Вчера мы смотрели сериал", answer: "Yesterday we watched a series", transcription: "ˈjɛstədeɪ wiː wɒtʃt ə ˈsɪəriːz", hints: ["Yesterday", "we", "watched"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "41239", text: "Вчера он не ел весь день", answer: "Yesterday he didn't eat all day", transcription: "ˈjɛstədeɪ hiː ˈdɪdnt iːt ɔːl deɪ", hints: ["Yesterday", "he", "didn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "412310", text: "Вчера они встретились в парке", answer: "Yesterday they met in the park", transcription: "ˈjɛstədeɪ ðeɪ mɛt ɪn ðə pɑːk", hints: ["Yesterday", "they", "met"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // There is / There are subItems
  "1104": [
    { id: "11041", text: "В комнате есть два стула", answer: "There are two chairs in the room", transcription: "ðɛər ɑː tuː tʃɛəz ɪn ðə ruːm", hints: ["There", "are", "two"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11042", text: "На улице много людей", answer: "There are many people in the street", transcription: "ðɛər ɑː ˈmɛni ˈpiːpl ɪn ðə striːt", hints: ["There", "are", "many"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11043", text: "В саду есть деревья", answer: "There are trees in the garden", transcription: "ðɛər ɑː triːz ɪn ðə ˈɡɑːdn", hints: ["There", "are", "trees"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11044", text: "В классе есть ученики", answer: "There are students in the classroom", transcription: "ðɛər ɑː ˈstjuːdənts ɪn ðə ˈklɑːsruːm", hints: ["There", "are", "students"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11045", text: "На столе есть книги", answer: "There are books on the table", transcription: "ðɛər ɑː bʊks ɒn ðə ˈteɪbl", hints: ["There", "are", "books"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1105": [
    { id: "11051", text: "В комнате нет стульев", answer: "There are no chairs in the room", transcription: "ðɛər ɑː nəʊ tʃɛəz ɪn ðə ruːm", hints: ["There", "are", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11052", text: "На улице нет людей", answer: "There are no people in the street", transcription: "ðɛər ɑː nəʊ ˈpiːpl ɪn ðə striːt", hints: ["There", "are", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11053", text: "В холодильнике нет яиц", answer: "There are no eggs in the fridge", transcription: "ðɛər ɑː nəʊ ɛɡz ɪn ðə frɪdʒ", hints: ["There", "are", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11054", text: "В парке нет скамеек", answer: "There are no benches in the park", transcription: "ðɛər ɑː nəʊ ˈbɛntʃɪz ɪn ðə pɑːk", hints: ["There", "are", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11055", text: "В сумке нет денег", answer: "There is no money in the bag", transcription: "ðɛər ɪz nəʊ ˈmʌni ɪn ðə bæɡ", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1099": [
    { id: "10991", text: "В комнате нет окна", answer: "There is no window in the room", transcription: "ðɛər ɪz nəʊ ˈwɪndəʊ ɪn ðə ruːm", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10992", text: "На столе нет книги", answer: "There is no book on the table", transcription: "ðɛər ɪz nəʊ bʊk ɒn ðə ˈteɪbl", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10993", text: "В холодильнике нет молока", answer: "There is no milk in the fridge", transcription: "ðɛər ɪz nəʊ mɪlk ɪn ðə frɪdʒ", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10994", text: "В сумке нет телефона", answer: "There is no phone in the bag", transcription: "ðɛər ɪz nəʊ fəʊn ɪn ðə bæɡ", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10995", text: "В парке нет фонтана", answer: "There is no fountain in the park", transcription: "ðɛər ɪz nəʊ ˈfaʊntɪn ɪn ðə pɑːk", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1100": [
    { id: "11001", text: "Есть ли в комнате окно?", answer: "Is there a window in the room?", transcription: "ɪz ðɛər ə ˈwɪndəʊ ɪn ðə ruːm", hints: ["Is", "there", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11002", text: "Есть ли в холодильнике молоко?", answer: "Is there any milk in the fridge?", transcription: "ɪz ðɛər ˈɛni mɪlk ɪn ðə frɪdʒ", hints: ["Is", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11003", text: "Есть ли рядом магазин?", answer: "Is there a shop nearby?", transcription: "ɪz ðɛər ə ʃɒp ˈnɪəbaɪ", hints: ["Is", "there", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11004", text: "Есть ли в городе парк?", answer: "Is there a park in the city?", transcription: "ɪz ðɛər ə pɑːk ɪn ðə ˈsɪti", hints: ["Is", "there", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11005", text: "Есть ли в сумке ключи?", answer: "Is there a key in the bag?", transcription: "ɪz ðɛər ə kiː ɪn ðə bæɡ", hints: ["Is", "there", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1106": [
    { id: "11061", text: "Есть ли в парке скамейки?", answer: "Are there any benches in the park?", transcription: "ɑː ðɛər ˈɛni ˈbɛntʃɪz ɪn ðə pɑːk", hints: ["Are", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11062", text: "Есть ли в классе ученики?", answer: "Are there any students in the classroom?", transcription: "ɑː ðɛər ˈɛni ˈstjuːdənts ɪn ðə ˈklɑːsruːm", hints: ["Are", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11063", text: "Есть ли в городе музеи?", answer: "Are there any museums in the city?", transcription: "ɑː ðɛər ˈɛni mjuːˈziːəmz ɪn ðə ˈsɪti", hints: ["Are", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11064", text: "Есть ли в магазине яблоки?", answer: "Are there any apples in the shop?", transcription: "ɑː ðɛər ˈɛni ˈæplz ɪn ðə ʃɒp", hints: ["Are", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11065", text: "Есть ли в доме комнаты?", answer: "Are there any rooms in the house?", transcription: "ɑː ðɛər ˈɛni ruːmz ɪn ðə haʊs", hints: ["Are", "there", "any"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // There is / There are (108)
  "108": [
    { id: "1081", text: "На столе стоит книга", answer: "There is a book on the table", transcription: "ðɛər ɪz ə bʊk ɒn ðə ˈteɪbl", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1082", text: "В комнате два окна", answer: "There are two windows in the room", transcription: "ðɛər ɑː tuː ˈwɪndəʊz ɪn ðə ruːm", hints: ["There", "are", "two"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1083", text: "В холодильнике нет молока", answer: "There is no milk in the fridge", transcription: "ðɛər ɪz nəʊ mɪlk ɪn ðə frɪdʒ", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Предлоги места subItems
  "1121": [
    { id: "11211", text: "Книга лежит на столе", answer: "The book is on the table", transcription: "ðə bʊk ɪz ɒn ðə ˈteɪbl", hints: ["The", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11212", text: "Кошка сидит на диване", answer: "The cat is sitting on the sofa", transcription: "ðə kæt ɪz ˈsɪtɪŋ ɒn ðə ˈsəʊfə", hints: ["The", "cat", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11213", text: "Картина висит на стене", answer: "The picture is on the wall", transcription: "ðə ˈpɪktʃə ɪz ɒn ðə wɔːl", hints: ["The", "picture", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11214", text: "Тарелка стоит на полке", answer: "The plate is on the shelf", transcription: "ðə pleɪt ɪz ɒn ðə ʃɛlf", hints: ["The", "plate", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11215", text: "Ключи лежат на столе", answer: "The keys are on the table", transcription: "ðə kiːz ɑː ɒn ðə ˈteɪbl", hints: ["The", "keys", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1122": [
    { id: "11221", text: "Я нахожусь в школе", answer: "I am at school", transcription: "aɪ æm æt skuːl", hints: ["I", "am", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11222", text: "Она стоит у окна", answer: "She is standing at the window", transcription: "ʃiː ɪz ˈstændɪŋ æt ðə ˈwɪndəʊ", hints: ["She", "is", "standing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11223", text: "Он сидит за столом", answer: "He is sitting at the table", transcription: "hiː ɪz ˈsɪtɪŋ æt ðə ˈteɪbl", hints: ["He", "is", "sitting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11224", text: "Мы встретились у входа", answer: "We met at the entrance", transcription: "wiː mɛt æt ðɪ ˈɛntrəns", hints: ["We", "met", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11225", text: "Они стоят у двери", answer: "They are standing at the door", transcription: "ðeɪ ɑː ˈstændɪŋ æt ðə dɔː", hints: ["They", "are", "standing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1123": [
    { id: "11231", text: "Ключи внутри сумки", answer: "The keys are inside the bag", transcription: "ðə kiːz ɑː ɪnˈsaɪd ðə bæɡ", hints: ["The", "keys", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11232", text: "Кот внутри коробки", answer: "The cat is inside the box", transcription: "ðə kæt ɪz ɪnˈsaɪd ðə bɒks", hints: ["The", "cat", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11233", text: "Дети внутри дома", answer: "The children are inside the house", transcription: "ðə ˈtʃɪldrən ɑː ɪnˈsaɪd ðə haʊs", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11234", text: "Деньги внутри конверта", answer: "The money is inside the envelope", transcription: "ðə ˈmʌni ɪz ɪnˈsaɪd ðɪ ˈɛnvələʊp", hints: ["The", "money", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11235", text: "Он внутри машины", answer: "He is inside the car", transcription: "hiː ɪz ɪnˈsaɪd ðə kɑː", hints: ["He", "is", "inside"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1124": [
    { id: "11241", text: "Дети играют снаружи", answer: "The children are playing outside", transcription: "ðə ˈtʃɪldrən ɑː ˈpleɪɪŋ ˌaʊtˈsaɪd", hints: ["The", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11242", text: "Машина стоит снаружи", answer: "The car is outside", transcription: "ðə kɑː ɪz ˌaʊtˈsaɪd", hints: ["The", "car", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11243", text: "Он ждет снаружи", answer: "He is waiting outside", transcription: "hiː ɪz ˈweɪtɪŋ ˌaʊtˈsaɪd", hints: ["He", "is", "waiting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11244", text: "Собака сидит снаружи", answer: "The dog is sitting outside", transcription: "ðə dɒɡ ɪz ˈsɪtɪŋ ˌaʊtˈsaɪd", hints: ["The", "dog", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11245", text: "Мы стоим снаружи здания", answer: "We are standing outside the building", transcription: "wiː ɑː ˈstændɪŋ ˌaʊtˈsaɪd ðə ˈbɪldɪŋ", hints: ["We", "are", "standing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Предлоги времени subItems
  "1153": [
    { id: "11531", text: "Я родился в январе", answer: "I was born in January", transcription: "aɪ wɒz bɔːn ɪn ˈdʒænjuəri", hints: ["I", "was", "born"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11532", text: "Мы встретимся в марте", answer: "We will meet in March", transcription: "wiː wɪl miːt ɪn mɑːtʃ", hints: ["We", "will", "meet"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11533", text: "Она приедет в следующем году", answer: "She will come in the next year", transcription: "ʃiː wɪl kʌm ɪn ðə nɛkst jɪə", hints: ["She", "will", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11534", text: "Я встаю утром", answer: "I get up in the morning", transcription: "aɪ ɡɛt ʌp ɪn ðə ˈmɔːnɪŋ", hints: ["I", "get", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11535", text: "Они приехали летом", answer: "They came in summer", transcription: "ðeɪ keɪm ɪn ˈsʌmə", hints: ["They", "came", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1154": [
    { id: "11541", text: "Мы встречаемся в понедельник", answer: "We meet on Monday", transcription: "wiː miːt ɒn ˈmʌndeɪ", hints: ["We", "meet", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11542", text: "Она работает по выходным", answer: "She works on weekends", transcription: "ʃiː wɜːks ɒn ˈwiːkɛndz", hints: ["She", "works", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11543", text: "Он родился 5 мая", answer: "He was born on the 5th of May", transcription: "hiː wɒz bɔːn ɒn ðə fɪfθ ɒv meɪ", hints: ["He", "was", "born"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11544", text: "Я работаю в пятницу вечером", answer: "I work on Friday evening", transcription: "aɪ wɜːk ɒn ˈfraɪdeɪ ˈiːvnɪŋ", hints: ["I", "work", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11545", text: "Они приедут в воскресенье", answer: "They will come on Sunday", transcription: "ðeɪ wɪl kʌm ɒn ˈsʌndeɪ", hints: ["They", "will", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1155": [
    { id: "11551", text: "Встреча в 3 часа", answer: "The meeting is at 3 o'clock", transcription: "ðə ˈmiːtɪŋ ɪz æt θriː əˈklɒk", hints: ["The", "meeting", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11552", text: "Я встаю в 7 утра", answer: "I get up at 7 am", transcription: "aɪ ɡɛt ʌp æt sɛvn eɪ ɛm", hints: ["I", "get", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11553", text: "Поезд отправляется в полдень", answer: "The train leaves at noon", transcription: "ðə treɪn liːvz æt nuːn", hints: ["The", "train", "leaves"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11554", text: "Она приходит на работу в 9", answer: "She comes to work at 9", transcription: "ʃiː kʌmz tuː wɜːk æt naɪn", hints: ["She", "comes", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11555", text: "Магазин открывается в 8", answer: "The shop opens at 8", transcription: "ðə ʃɒp ˈəʊpənz æt eɪt", hints: ["The", "shop", "opens"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Prepositions of place (110)
  "110": [
    { id: "1101", text: "Ключи в моей сумке", answer: "The keys are in my bag", transcription: "ðə kiːz ɑː ɪn maɪ bæɡ", hints: ["The", "keys", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1102", text: "Картина на стене", answer: "The picture is on the wall", transcription: "ðə ˈpɪktʃər ɪz ɒn ðə wɔːl", hints: ["The", "picture", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1103", text: "Он стоит у окна", answer: "He is standing by the window", transcription: "hiː ɪz ˈstændɪŋ baɪ ðə ˈwɪndəʊ", hints: ["He", "is", "standing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Prepositions of time (111)
  "111": [
    { id: "1111", text: "Я встаю в 7 утра", answer: "I get up at 7 am", transcription: "aɪ ɡɛt ʌp æt sɛvn eɪ ɛm", hints: ["I", "get", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1112", text: "Мой день рождения в июле", answer: "My birthday is in July", transcription: "maɪ ˈbɜːθdeɪ ɪz ɪn dʒuˈlaɪ", hints: ["My", "birthday", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1113", text: "Мы встретимся в понедельник", answer: "We will meet on Monday", transcription: "wiː wɪl miːt ɒn ˈmʌndeɪ", hints: ["We", "will", "meet"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // some / any / no (113)
  "113": [
    { id: "1131", text: "У меня есть несколько вопросов", answer: "I have some questions", transcription: "aɪ hæv sʌm ˈkwɛstʃənz", hints: ["I", "have", "some"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1132", text: "У тебя есть какие-нибудь деньги?", answer: "Do you have any money?", transcription: "duː juː hæv ˈɛni ˈmʌni", hints: ["Do", "you", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1133", text: "Там никого нет", answer: "There is no one there", transcription: "ðɛər ɪz nəʊ wʌn ðɛə", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Articles (120)
  "120": [
    { id: "1201", text: "Я вижу яблоко", answer: "I see an apple", transcription: "aɪ siː ən ˈæpl", hints: ["I", "see", "an"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1202", text: "Это хорошая книга", answer: "This is a good book", transcription: "ðɪs ɪz ə ɡʊd bʊk", hints: ["This", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1203", text: "Солнце яркое", answer: "The sun is bright", transcription: "ðə sʌn ɪz braɪt", hints: ["The", "sun", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Pronouns (125)
  "125": [
    { id: "1251", text: "Он любит ее", answer: "He loves her", transcription: "hiː lʌvz hɜː", hints: ["He", "loves", "her"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1252", text: "Помоги мне", answer: "Help me", transcription: "hɛlp miː", hints: ["Help", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1253", text: "Мы их знаем", answer: "We know them", transcription: "wiː nəʊ ðɛm", hints: ["We", "know", "them"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Zero Conditional (213)
  "213": [
    { id: "2131", text: "Если ты греешь лед, он тает", answer: "If you heat ice, it melts", transcription: "ɪf juː hiːt aɪs ɪt mɛlts", hints: ["If", "you", "heat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2132", text: "Если идет дождь, трава становится мокрой", answer: "If it rains, the grass gets wet", transcription: "ɪf ɪt reɪnz ðə ɡrɑːs ɡɛts wɛt", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // First Conditional (221)
  "221": [
    { id: "2211", text: "Если будет солнечно, мы пойдем гулять", answer: "If it is sunny, we will go for a walk", transcription: "ɪf ɪt ɪz ˈsʌni wiː wɪl ɡəʊ fɔːr ə wɔːk", hints: ["If", "it", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2212", text: "Если я опоздаю, я позвоню тебе", answer: "If I am late, I will call you", transcription: "ɪf aɪ æm leɪt aɪ wɪl kɔːl juː", hints: ["If", "I", "am"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Passive Present (227)
  "227": [
    { id: "2271", text: "Эта книга написана на английском", answer: "This book is written in English", transcription: "ðɪs bʊk ɪz ˈrɪtn ɪn ˈɪŋɡlɪʃ", hints: ["This", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2272", text: "Машины производятся в Германии", answer: "Cars are made in Germany", transcription: "kɑːz ɑː meɪd ɪn ˈdʒɜːməni", hints: ["Cars", "are", "made"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Second Conditional (312)
  "312": [
    { id: "3121", text: "Если бы у меня был миллион, я бы купил дом", answer: "If I had a million, I would buy a house", transcription: "ɪf aɪ hæd ə ˈmɪljən aɪ wʊd baɪ ə haʊs", hints: ["If", "I", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3122", text: "Если бы я был тобой, я бы пошел туда", answer: "If I were you, I would go there", transcription: "ɪf aɪ wɜː juː aɪ wʊd ɡəʊ ðɛə", hints: ["If", "I", "were"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Reported Speech (315)
  "315": [
    { id: "3151", text: "Он сказал, что он занят", answer: "He said that he was busy", transcription: "hiː sɛd ðæt hiː wɒz ˈbɪzi", hints: ["He", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3152", text: "Она сказала, что любит кофе", answer: "She said that she liked coffee", transcription: "ʃiː sɛd ðæt ʃiː laɪkt ˈkɒfi", hints: ["She", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Phrasal Verbs (104)
  "104": [
    { id: "1041", text: "Проснись!", answer: "Wake up!", transcription: "weɪk ʌp", hints: ["Wake", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1042", text: "Продолжай работать", answer: "Go on working", transcription: "ɡəʊ ɒn ˈwɜːkɪŋ", hints: ["Go", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1043", text: "Я ищу свои ключи", answer: "I am looking for my keys", transcription: "aɪ æm ˈlʊkɪŋ fɔː maɪ kiːz", hints: ["I", "am", "looking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Irregular Verbs V2 (106)
  "106": [
    { id: "1061", text: "Go (V2)", answer: "went", transcription: "wɛnt", hints: ["w..."], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1062", text: "Eat (V2)", answer: "ate", transcription: "eɪt", hints: ["a..."], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "1063", text: "Buy (V2)", answer: "bought", transcription: "bɔːt", hints: ["b..."], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Модальные глаголы subItems
  "1079": [
    { id: "10791", text: "Мог бы ты мне помочь?", answer: "Could you help me?", transcription: "kʊd juː hɛlp miː", hints: ["Could", "you", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10792", text: "Когда я был молодым, я мог бегать быстро", answer: "When I was young I could run fast", transcription: "wen aɪ wɒz jʌŋ aɪ kʊd rʌn fɑːst", hints: ["When", "I", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10793", text: "Она не могла найти ключи", answer: "She couldn't find the keys", transcription: "ʃiː ˈkʊdnt faɪnd ðə kiːz", hints: ["She", "couldn't", "find"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10794", text: "Мы могли бы пойти в кино", answer: "We could go to the cinema", transcription: "wiː kʊd ɡəʊ tuː ðə ˈsɪnəmə", hints: ["We", "could", "go"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10795", text: "Они не могли понять задание", answer: "They couldn't understand the task", transcription: "ðeɪ ˈkʊdnt ˌʌndəˈstænd ðə tɑːsk", hints: ["They", "couldn't", "understand"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1080": [
    { id: "10801", text: "Тебе следует больше спать", answer: "You should sleep more", transcription: "juː ʃʊd sliːp mɔː", hints: ["You", "should", "sleep"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10802", text: "Ей не следует есть так много", answer: "She shouldn't eat so much", transcription: "ʃiː ˈʃʊdnt iːt səʊ mʌtʃ", hints: ["She", "shouldn't", "eat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10803", text: "Мне следует позвонить маме", answer: "I should call my mum", transcription: "aɪ ʃʊd kɔːl maɪ mʌm", hints: ["I", "should", "call"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10804", text: "Им следует извиниться", answer: "They should apologise", transcription: "ðeɪ ʃʊd əˈpɒlədʒaɪz", hints: ["They", "should", "apologise"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10805", text: "Ты должен быть осторожен", answer: "You should be careful", transcription: "juː ʃʊd biː ˈkeəfəl", hints: ["You", "should", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1081": [
    { id: "10811", text: "Мне нужно идти", answer: "I must go", transcription: "aɪ mʌst ɡəʊ", hints: ["I", "must", "go"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10812", text: "Ты должен это сделать", answer: "You must do this", transcription: "juː mʌst duː ðɪs", hints: ["You", "must", "do"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10813", text: "Здесь нельзя курить", answer: "You must not smoke here", transcription: "juː mʌst nɒt sməʊk hɪə", hints: ["You", "must", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10814", text: "Она должна прийти вовремя", answer: "She must come on time", transcription: "ʃiː mʌst kʌm ɒn taɪm", hints: ["She", "must", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10815", text: "Мы должны закончить работу", answer: "We must finish the work", transcription: "wiː mʌst ˈfɪnɪʃ ðə wɜːk", hints: ["We", "must", "finish"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // going to subItems
  "1181": [
    { id: "11811", text: "Я собираюсь учить английский", answer: "I am going to learn English", transcription: "aɪ æm ˈɡəʊɪŋ tuː lɜːn ˈɪŋɡlɪʃ", hints: ["I", "am", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11812", text: "Она собирается купить машину", answer: "She is going to buy a car", transcription: "ʃiː ɪz ˈɡəʊɪŋ tuː baɪ ə kɑː", hints: ["She", "is", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11813", text: "Они собираются переехать", answer: "They are going to move", transcription: "ðeɪ ɑː ˈɡəʊɪŋ tuː muːv", hints: ["They", "are", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11814", text: "Мы собираемся поехать в отпуск", answer: "We are going to go on holiday", transcription: "wiː ɑː ˈɡəʊɪŋ tuː ɡəʊ ɒn ˈhɒlɪdeɪ", hints: ["We", "are", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11815", text: "Он собирается позвонить тебе", answer: "He is going to call you", transcription: "hiː ɪz ˈɡəʊɪŋ tuː kɔːl juː", hints: ["He", "is", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1182": [
    { id: "11821", text: "Я не собираюсь этого делать", answer: "I am not going to do this", transcription: "aɪ æm nɒt ˈɡəʊɪŋ tuː duː ðɪs", hints: ["I", "am", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11822", text: "Она не собирается уходить", answer: "She is not going to leave", transcription: "ʃiː ɪz nɒt ˈɡəʊɪŋ tuː liːv", hints: ["She", "is", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11823", text: "Они не собираются помогать", answer: "They are not going to help", transcription: "ðeɪ ɑː nɒt ˈɡəʊɪŋ tuː hɛlp", hints: ["They", "are", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11824", text: "Мы не собираемся опаздывать", answer: "We are not going to be late", transcription: "wiː ɑː nɒt ˈɡəʊɪŋ tuː biː leɪt", hints: ["We", "are", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11825", text: "Он не собирается менять работу", answer: "He is not going to change his job", transcription: "hiː ɪz nɒt ˈɡəʊɪŋ tuː tʃeɪndʒ hɪz dʒɒb", hints: ["He", "is", "not"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1183": [
    { id: "11831", text: "Ты собираешься учиться?", answer: "Are you going to study?", transcription: "ɑː juː ˈɡəʊɪŋ tuː ˈstʌdi", hints: ["Are", "you", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11832", text: "Она собирается приехать?", answer: "Is she going to come?", transcription: "ɪz ʃiː ˈɡəʊɪŋ tuː kʌm", hints: ["Is", "she", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11833", text: "Они собираются переехать?", answer: "Are they going to move?", transcription: "ɑː ðeɪ ˈɡəʊɪŋ tuː muːv", hints: ["Are", "they", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11834", text: "Что ты собираешься делать?", answer: "What are you going to do?", transcription: "wɒt ɑː juː ˈɡəʊɪŋ tuː duː", hints: ["What", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11835", text: "Куда вы собираетесь поехать?", answer: "Where are you going to go?", transcription: "weə ɑː juː ˈɡəʊɪŋ tuː ɡəʊ", hints: ["Where", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Указательные местоимения subItems
  "1197": [
    { id: "11971", text: "Это моя книга", answer: "This is my book", transcription: "ðɪs ɪz maɪ bʊk", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11972", text: "Это хорошая идея", answer: "This is a good idea", transcription: "ðɪs ɪz ə ɡʊd aɪˈdɪə", hints: ["This", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11973", text: "Это мой друг", answer: "This is my friend", transcription: "ðɪs ɪz maɪ frɛnd", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11974", text: "Эти цветы красивые", answer: "These flowers are beautiful", transcription: "ðiːz ˈflaʊəz ɑː ˈbjuːtɪfəl", hints: ["These", "flowers", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11975", text: "Эти дети умные", answer: "These children are clever", transcription: "ðiːz ˈtʃɪldrən ɑː ˈklɛvə", hints: ["These", "children", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1198": [
    { id: "11981", text: "Та машина красная", answer: "That car is red", transcription: "ðæt kɑː ɪz rɛd", hints: ["That", "car", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11982", text: "Тот человек мой учитель", answer: "That man is my teacher", transcription: "ðæt mæn ɪz maɪ ˈtiːtʃə", hints: ["That", "man", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11983", text: "Те дома большие", answer: "Those houses are big", transcription: "ðəʊz ˈhaʊzɪz ɑː bɪɡ", hints: ["Those", "houses", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11984", text: "Те люди мои друзья", answer: "Those people are my friends", transcription: "ðəʊz ˈpiːpl ɑː maɪ frɛndz", hints: ["Those", "people", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11985", text: "Та книга интересная", answer: "That book is interesting", transcription: "ðæt bʊk ɪz ˈɪntrɪstɪŋ", hints: ["That", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Артикли subItems
  "1178": [
    { id: "11781", text: "Я вижу яблоко", answer: "I see an apple", transcription: "aɪ siː ən ˈæpl", hints: ["I", "see", "an"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11782", text: "Это апельсин", answer: "This is an orange", transcription: "ðɪs ɪz ən ˈɒrɪndʒ", hints: ["This", "is", "an"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11783", text: "Он врач", answer: "He is a doctor", transcription: "hiː ɪz ə ˈdɒktə", hints: ["He", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11784", text: "Это хорошая книга", answer: "This is a good book", transcription: "ðɪs ɪz ə ɡʊd bʊk", hints: ["This", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11785", text: "Я хочу съесть яйцо", answer: "I want to eat an egg", transcription: "aɪ wɒnt tuː iːt ən ɛɡ", hints: ["I", "want", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1179": [
    { id: "11791", text: "Солнце светит ярко", answer: "The sun is shining brightly", transcription: "ðə sʌn ɪz ˈʃaɪnɪŋ ˈbraɪtli", hints: ["The", "sun", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11792", text: "Луна красивая сегодня", answer: "The moon is beautiful tonight", transcription: "ðə muːn ɪz ˈbjuːtɪfəl təˈnaɪt", hints: ["The", "moon", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11793", text: "Закрой дверь", answer: "Close the door", transcription: "kləʊz ðə dɔː", hints: ["Close", "the", "door"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11794", text: "Книга на столе", answer: "The book is on the table", transcription: "ðə bʊk ɪz ɒn ðə ˈteɪbl", hints: ["The", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11795", text: "Я люблю море", answer: "I love the sea", transcription: "aɪ lʌv ðə siː", hints: ["I", "love", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1180": [
    { id: "11801", text: "Я люблю кофе", answer: "I love coffee", transcription: "aɪ lʌv ˈkɒfi", hints: ["I", "love", "coffee"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11802", text: "Жизнь прекрасна", answer: "Life is beautiful", transcription: "laɪf ɪz ˈbjuːtɪfəl", hints: ["Life", "is", "beautiful"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11803", text: "Дети любят играть", answer: "Children love to play", transcription: "ˈtʃɪldrən lʌv tuː pleɪ", hints: ["Children", "love", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11804", text: "Вода важна для жизни", answer: "Water is important for life", transcription: "ˈwɔːtə ɪz ɪmˈpɔːtənt fɔː laɪf", hints: ["Water", "is", "important"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "11805", text: "Музыка делает меня счастливым", answer: "Music makes me happy", transcription: "ˈmjuːzɪk meɪks miː ˈhæpi", hints: ["Music", "makes", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Местоимения subItems
  "2214": [
    { id: "22141", text: "Позвони мне", answer: "Call me", transcription: "kɔːl miː", hints: ["Call", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22142", text: "Он любит меня", answer: "He loves me", transcription: "hiː lʌvz miː", hints: ["He", "loves", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22143", text: "Помоги мне пожалуйста", answer: "Please help me", transcription: "pliːz hɛlp miː", hints: ["Please", "help", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22144", text: "Она видит меня", answer: "She sees me", transcription: "ʃiː siːz miː", hints: ["She", "sees", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22145", text: "Они знают меня", answer: "They know me", transcription: "ðeɪ nəʊ miː", hints: ["They", "know", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2215": [
    { id: "22151", text: "Я вижу тебя", answer: "I see you", transcription: "aɪ siː juː", hints: ["I", "see", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22152", text: "Она любит тебя", answer: "She loves you", transcription: "ʃiː lʌvz juː", hints: ["She", "loves", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22153", text: "Мы ждем тебя", answer: "We are waiting for you", transcription: "wiː ɑː ˈweɪtɪŋ fɔː juː", hints: ["We", "are", "waiting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22154", text: "Он позвонит тебе", answer: "He will call you", transcription: "hiː wɪl kɔːl juː", hints: ["He", "will", "call"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22155", text: "Я думаю о тебе", answer: "I think about you", transcription: "aɪ θɪŋk əˈbaʊt juː", hints: ["I", "think", "about"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Притяжательные местоимения subItems
  "2207": [
    { id: "22071", text: "Это моя книга", answer: "This is my book", transcription: "ðɪs ɪz maɪ bʊk", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22072", text: "Эта книга моя", answer: "This book is mine", transcription: "ðɪs bʊk ɪz maɪn", hints: ["This", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22073", text: "Это мой телефон", answer: "This is my phone", transcription: "ðɪs ɪz maɪ fəʊn", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22074", text: "Этот телефон мой", answer: "This phone is mine", transcription: "ðɪs fəʊn ɪz maɪn", hints: ["This", "phone", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22075", text: "Это мои ключи", answer: "These are my keys", transcription: "ðiːz ɑː maɪ kiːz", hints: ["These", "are", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2208": [
    { id: "22081", text: "Это твоя сумка", answer: "This is your bag", transcription: "ðɪs ɪz jɔː bæɡ", hints: ["This", "is", "your"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22082", text: "Эта сумка твоя", answer: "This bag is yours", transcription: "ðɪs bæɡ ɪz jɔːz", hints: ["This", "bag", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22083", text: "Это твой дом", answer: "This is your house", transcription: "ðɪs ɪz jɔː haʊs", hints: ["This", "is", "your"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22084", text: "Этот дом твой", answer: "This house is yours", transcription: "ðɪs haʊs ɪz jɔːz", hints: ["This", "house", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22085", text: "Это твои вещи", answer: "These are your things", transcription: "ðiːz ɑː jɔː θɪŋz", hints: ["These", "are", "your"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Притяжательный падеж subItem
  "2837": [
    { id: "28371", text: "Это книга Анны", answer: "This is Anna's book", transcription: "ðɪs ɪz ˈænəz bʊk", hints: ["This", "is", "Anna's"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28372", text: "Это машина моего отца", answer: "This is my father's car", transcription: "ðɪs ɪz maɪ ˈfɑːðəz kɑː", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28373", text: "Это комната Джона", answer: "This is John's room", transcription: "ðɪs ɪz dʒɒnz ruːm", hints: ["This", "is", "John's"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28374", text: "Это телефон моей сестры", answer: "This is my sister's phone", transcription: "ðɪs ɪz maɪ ˈsɪstəz fəʊn", hints: ["This", "is", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28375", text: "Это собака Тома", answer: "This is Tom's dog", transcription: "ðɪs ɪz tɒmz dɒɡ", hints: ["This", "is", "Tom's"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Порядок слов subItem
  "2840": [
    { id: "28401", text: "Я каждый день хожу в школу", answer: "I go to school every day", transcription: "aɪ ɡəʊ tuː skuːl ˈɛvri deɪ", hints: ["I", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28402", text: "Она работает в офисе", answer: "She works in an office", transcription: "ʃiː wɜːks ɪn ən ˈɒfɪs", hints: ["She", "works", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28403", text: "Они живут в большом городе", answer: "They live in a big city", transcription: "ðeɪ lɪv ɪn ə bɪɡ ˈsɪti", hints: ["They", "live", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28404", text: "Мы едим вместе каждый вечер", answer: "We eat together every evening", transcription: "wiː iːt təˈɡɛðə ˈɛvri ˈiːvnɪŋ", hints: ["We", "eat", "together"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28405", text: "Он читает книги по вечерам", answer: "He reads books in the evenings", transcription: "hiː riːdz bʊks ɪn ðɪ ˈiːvnɪŋz", hints: ["He", "reads", "books"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Условные предложения subItems
  "2800": [
    { id: "28001", text: "Если ты нагреваешь воду, она кипит", answer: "If you heat water it boils", transcription: "ɪf juː hiːt ˈwɔːtə ɪt bɔɪlz", hints: ["If", "you", "heat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28002", text: "Если идет дождь, я беру зонт", answer: "If it rains I take an umbrella", transcription: "ɪf ɪt reɪnz aɪ teɪk ən ʌmˈbrɛlə", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28003", text: "Если ты смешиваешь синий и желтый, получается зеленый", answer: "If you mix blue and yellow you get green", transcription: "ɪf juː mɪks bluː ænd ˈjɛləʊ juː ɡɛt ɡriːn", hints: ["If", "you", "mix"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28004", text: "Если ты не спишь, ты устаешь", answer: "If you don't sleep you get tired", transcription: "ɪf juː dəʊnt sliːp juː ɡɛt ˈtaɪəd", hints: ["If", "you", "don't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28005", text: "Если ты много ешь, ты толстеешь", answer: "If you eat a lot you gain weight", transcription: "ɪf juː iːt ə lɒt juː ɡeɪn weɪt", hints: ["If", "you", "eat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Неправильные глаголы V2 subItems
  "5162": [
    { id: "51621", text: "Я был дома", answer: "I was at home", transcription: "aɪ wɒz æt həʊm", hints: ["I", "was", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51622", text: "Они были в школе", answer: "They were at school", transcription: "ðeɪ wɜː æt skuːl", hints: ["They", "were", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51623", text: "Она была дома", answer: "She was at home", transcription: "ʃiː wɒz æt həʊm", hints: ["She", "was", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5163": [
    { id: "51631", text: "Он стал врачом", answer: "He became a doctor", transcription: "hiː bɪˈkeɪm ə ˈdɒktə", hints: ["He", "became", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51632", text: "Она стала учителем", answer: "She became a teacher", transcription: "ʃiː bɪˈkeɪm ə ˈtiːtʃə", hints: ["She", "became", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51633", text: "Они стали друзьями", answer: "They became friends", transcription: "ðeɪ bɪˈkeɪm frɛndz", hints: ["They", "became", "friends"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5164": [
    { id: "51641", text: "Урок начался в 9", answer: "The lesson began at 9", transcription: "ðə ˈlɛsn bɪˈɡæn æt naɪn", hints: ["The", "lesson", "began"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51642", text: "Фильм начался поздно", answer: "The film began late", transcription: "ðə fɪlm bɪˈɡæn leɪt", hints: ["The", "film", "began"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "51643", text: "Дождь начался утром", answer: "The rain began in the morning", transcription: "ðə reɪn bɪˈɡæn ɪn ðə ˈmɔːnɪŋ", hints: ["The", "rain", "began"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Неправильные глаголы V3 subItems
  "5295": [
    { id: "52951", text: "Он был здесь", answer: "He has been here", transcription: "hiː hæz biːn hɪə", hints: ["He", "has", "been"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "52952", text: "Я был в Лондоне", answer: "I have been to London", transcription: "aɪ hæv biːn tuː ˈlʌndən", hints: ["I", "have", "been"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "52953", text: "Она была занята", answer: "She has been busy", transcription: "ʃiː hæz biːn ˈbɪzi", hints: ["She", "has", "been"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5296": [
    { id: "52961", text: "Он стал известным", answer: "He has become famous", transcription: "hiː hæz bɪˈkʌm ˈfeɪməs", hints: ["He", "has", "become"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "52962", text: "Она стала лучше", answer: "She has become better", transcription: "ʃiː hæz bɪˈkʌm ˈbɛtə", hints: ["She", "has", "become"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "52963", text: "Мир стал другим", answer: "The world has become different", transcription: "ðə wɜːld hæz bɪˈkʌm ˈdɪfrənt", hints: ["The", "world", "has"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Сравнительная степень subItems
  "1532": [
    { id: "15321", text: "Это хуже, чем я думал", answer: "This is worse than I thought", transcription: "ðɪs ɪz wɜːs ðæn aɪ θɔːt", hints: ["This", "is", "worse"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "15322", text: "Это самое плохое", answer: "This is the worst", transcription: "ðɪs ɪz ðə wɜːst", hints: ["This", "is", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "15323", text: "Сегодня хуже, чем вчера", answer: "Today is worse than yesterday", transcription: "təˈdeɪ ɪz wɜːs ðæn ˈjɛstədeɪ", hints: ["Today", "is", "worse"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1533": [
    { id: "15331", text: "Это дальше, чем я думал", answer: "It is farther than I thought", transcription: "ɪt ɪz ˈfɑːðə ðæn aɪ θɔːt", hints: ["It", "is", "farther"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "15332", text: "Это самое дальнее место", answer: "This is the farthest place", transcription: "ðɪs ɪz ðə ˈfɑːðɪst pleɪs", hints: ["This", "is", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "15333", text: "Школа дальше от дома", answer: "The school is farther from home", transcription: "ðə skuːl ɪz ˈfɑːðə frɒm həʊm", hints: ["The", "school", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Количественные слова some/any/no subItems
  "1680": [
    { id: "16801", text: "У меня есть немного денег", answer: "I have some money", transcription: "aɪ hæv sʌm ˈmʌni", hints: ["I", "have", "some"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16802", text: "Хочешь немного чая?", answer: "Would you like some tea?", transcription: "wʊd juː laɪk sʌm tiː", hints: ["Would", "you", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16803", text: "В холодильнике есть немного молока", answer: "There is some milk in the fridge", transcription: "ðɛər ɪz sʌm mɪlk ɪn ðə frɪdʒ", hints: ["There", "is", "some"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1681": [
    { id: "16811", text: "У тебя есть какие-нибудь вопросы?", answer: "Do you have any questions?", transcription: "duː juː hæv ˈɛni ˈkwɛstʃənz", hints: ["Do", "you", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16812", text: "Есть ли у вас какие-нибудь идеи?", answer: "Do you have any ideas?", transcription: "duː juː hæv ˈɛni aɪˈdɪəz", hints: ["Do", "you", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16813", text: "Я не вижу никаких проблем", answer: "I don't see any problems", transcription: "aɪ dəʊnt siː ˈɛni ˈprɒbləmz", hints: ["I", "don't", "see"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1682": [
    { id: "16821", text: "Там никого нет", answer: "There is no one there", transcription: "ðɛər ɪz nəʊ wʌn ðɛə", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16822", text: "У меня нет времени", answer: "I have no time", transcription: "aɪ hæv nəʊ taɪm", hints: ["I", "have", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16823", text: "В комнате нет мебели", answer: "There is no furniture in the room", transcription: "ðɛər ɪz nəʊ ˈfɜːnɪtʃə ɪn ðə ruːm", hints: ["There", "is", "no"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Наречия частотности subItems
  "1738": [
    { id: "17381", text: "Я всегда чищу зубы", answer: "I always brush my teeth", transcription: "aɪ ˈɔːlweɪz brʌʃ maɪ tiːθ", hints: ["I", "always", "brush"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "17382", text: "Она всегда приходит вовремя", answer: "She always comes on time", transcription: "ʃiː ˈɔːlweɪz kʌmz ɒn taɪm", hints: ["She", "always", "comes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "17383", text: "Он всегда помогает другим", answer: "He always helps others", transcription: "hiː ˈɔːlweɪz hɛlps ˈʌðəz", hints: ["He", "always", "helps"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1739": [
    { id: "17391", text: "Я почти всегда завтракаю", answer: "I almost always have breakfast", transcription: "aɪ ˈɔːlməʊst ˈɔːlweɪz hæv ˈbrɛkfəst", hints: ["I", "almost", "always"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "17392", text: "Она почти всегда улыбается", answer: "She almost always smiles", transcription: "ʃiː ˈɔːlməʊst ˈɔːlweɪz smaɪlz", hints: ["She", "almost", "always"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "17393", text: "Они почти всегда опаздывают", answer: "They almost always come late", transcription: "ðeɪ ˈɔːlməʊst ˈɔːlweɪz kʌm leɪt", hints: ["They", "almost", "always"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Вопросительные слова subItems
  "1634": [
    { id: "16341", text: "Что ты делаешь?", answer: "What are you doing?", transcription: "wɒt ɑː juː ˈduːɪŋ", hints: ["What", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16342", text: "Что это такое?", answer: "What is this?", transcription: "wɒt ɪz ðɪs", hints: ["What", "is", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16343", text: "Что тебе нужно?", answer: "What do you need?", transcription: "wɒt duː juː niːd", hints: ["What", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1635": [
    { id: "16351", text: "Какую книгу ты читаешь?", answer: "Which book are you reading?", transcription: "wɪtʃ bʊk ɑː juː ˈriːdɪŋ", hints: ["Which", "book", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16352", text: "Какой цвет тебе нравится?", answer: "Which colour do you like?", transcription: "wɪtʃ ˈkʌlə duː juː laɪk", hints: ["Which", "colour", "do"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16353", text: "Какой вариант лучше?", answer: "Which option is better?", transcription: "wɪtʃ ˈɒpʃən ɪz ˈbɛtə", hints: ["Which", "option", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1636": [
    { id: "16361", text: "Кто это?", answer: "Who is this?", transcription: "huː ɪz ðɪs", hints: ["Who", "is", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16362", text: "Кто тебе звонил?", answer: "Who called you?", transcription: "huː kɔːld juː", hints: ["Who", "called", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16363", text: "Кто знает ответ?", answer: "Who knows the answer?", transcription: "huː nəʊz ðɪ ˈɑːnsə", hints: ["Who", "knows", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // much/many/a lot of subItems
  "1631": [
    { id: "16311", text: "У меня не много времени", answer: "I don't have much time", transcription: "aɪ dəʊnt hæv mʌtʃ taɪm", hints: ["I", "don't", "have"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16312", text: "Здесь не много воды", answer: "There isn't much water here", transcription: "ðɛər ˈɪznt mʌtʃ ˈwɔːtə hɪə", hints: ["There", "isn't", "much"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16313", text: "Сколько у тебя денег?", answer: "How much money do you have?", transcription: "haʊ mʌtʃ ˈmʌni duː juː hæv", hints: ["How", "much", "money"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1632": [
    { id: "16321", text: "Сколько у тебя друзей?", answer: "How many friends do you have?", transcription: "haʊ ˈmɛni frɛndz duː juː hæv", hints: ["How", "many", "friends"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16322", text: "У меня много книг", answer: "I have many books", transcription: "aɪ hæv ˈmɛni bʊks", hints: ["I", "have", "many"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16323", text: "В городе много машин", answer: "There are many cars in the city", transcription: "ðɛər ɑː ˈmɛni kɑːz ɪn ðə ˈsɪti", hints: ["There", "are", "many"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1633": [
    { id: "16331", text: "Я много работаю", answer: "I work a lot", transcription: "aɪ wɜːk ə lɒt", hints: ["I", "work", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16332", text: "У нас много работы", answer: "We have a lot of work", transcription: "wiː hæv ə lɒt ɒv wɜːk", hints: ["We", "have", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16333", text: "Там было много людей", answer: "There were a lot of people there", transcription: "ðɛər wɜː ə lɒt ɒv ˈpiːpl ðɛə", hints: ["There", "were", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Императив subItems
  "2842": [
    { id: "28421", text: "Открой окно!", answer: "Open the window!", transcription: "ˈəʊpən ðə ˈwɪndəʊ", hints: ["Open", "the", "window"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28422", text: "Садись!", answer: "Sit down!", transcription: "sɪt daʊn", hints: ["Sit", "down"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28423", text: "Слушай внимательно!", answer: "Listen carefully!", transcription: "ˈlɪsn ˈkeəfəli", hints: ["Listen", "carefully"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2843": [
    { id: "28431", text: "Не кричи!", answer: "Don't shout!", transcription: "dəʊnt ʃaʊt", hints: ["Don't", "shout"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28432", text: "Не опаздывай!", answer: "Don't be late!", transcription: "dəʊnt biː leɪt", hints: ["Don't", "be", "late"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28433", text: "Не трогай это!", answer: "Don't touch this!", transcription: "dəʊnt tʌtʃ ðɪs", hints: ["Don't", "touch", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // First Conditional subItems
  "2804": [
    { id: "28041", text: "Если будет дождь, я возьму зонт", answer: "If it rains I will take an umbrella", transcription: "ɪf ɪt reɪnz aɪ wɪl teɪk ən ʌmˈbrɛlə", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28042", text: "Если ты придешь, мы поговорим", answer: "If you come we will talk", transcription: "ɪf juː kʌm wiː wɪl tɔːk", hints: ["If", "you", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28043", text: "Если она позвонит, я отвечу", answer: "If she calls I will answer", transcription: "ɪf ʃiː kɔːlz aɪ wɪl ˈɑːnsə", hints: ["If", "she", "calls"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2805": [
    { id: "28051", text: "Если не будет дождя, мы пойдем гулять", answer: "If it doesn't rain we will go for a walk", transcription: "ɪf ɪt ˈdʌznt reɪn wiː wɪl ɡəʊ fɔːr ə wɔːk", hints: ["If", "it", "doesn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28052", text: "Если ты не придешь, я уйду", answer: "If you don't come I will leave", transcription: "ɪf juː dəʊnt kʌm aɪ wɪl liːv", hints: ["If", "you", "don't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28053", text: "Если он не позвонит, я напишу ему", answer: "If he doesn't call I will write to him", transcription: "ɪf hiː ˈdʌznt kɔːl aɪ wɪl raɪt tuː hɪm", hints: ["If", "he", "doesn't"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Пассивный залог subItems
  "2325": [
    { id: "23251", text: "Эта книга написана на английском", answer: "This book is written in English", transcription: "ðɪs bʊk ɪz ˈrɪtn ɪn ˈɪŋɡlɪʃ", hints: ["This", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23252", text: "Машины делают на заводе", answer: "Cars are made in a factory", transcription: "kɑːz ɑː meɪd ɪn ə ˈfæktri", hints: ["Cars", "are", "made"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23253", text: "Письма отправляются каждый день", answer: "Letters are sent every day", transcription: "ˈlɛtəz ɑː sɛnt ˈɛvri deɪ", hints: ["Letters", "are", "sent"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2328": [
    { id: "23281", text: "Дом был построен в 1990 году", answer: "The house was built in 1990", transcription: "ðə haʊs wɒz bɪlt ɪn naɪnˈtiːn ˈnaɪnti", hints: ["The", "house", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23282", text: "Письмо было написано вчера", answer: "The letter was written yesterday", transcription: "ðə ˈlɛtə wɒz ˈrɪtn ˈjɛstədeɪ", hints: ["The", "letter", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23283", text: "Машина была продана", answer: "The car was sold", transcription: "ðə kɑː wɒz səʊld", hints: ["The", "car", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Союзы subItems
  "2593": [
    { id: "25931", text: "Я люблю чай и кофе", answer: "I like tea and coffee", transcription: "aɪ laɪk tiː ænd ˈkɒfi", hints: ["I", "like", "tea"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25932", text: "Она поет и танцует", answer: "She sings and dances", transcription: "ʃiː sɪŋz ænd ˈdɑːnsɪz", hints: ["She", "sings", "and"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25933", text: "Он пришел и сел", answer: "He came and sat down", transcription: "hiː keɪm ænd sæt daʊn", hints: ["He", "came", "and"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2594": [
    { id: "25941", text: "Я хотел пойти, но устал", answer: "I wanted to go but I was tired", transcription: "aɪ ˈwɒntɪd tuː ɡəʊ bʌt aɪ wɒz ˈtaɪəd", hints: ["I", "wanted", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25942", text: "Она умная, но ленивая", answer: "She is clever but lazy", transcription: "ʃiː ɪz ˈklɛvə bʌt ˈleɪzi", hints: ["She", "is", "clever"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25943", text: "Он богатый, но несчастный", answer: "He is rich but unhappy", transcription: "hiː ɪz rɪtʃ bʌt ʌnˈhæpi", hints: ["He", "is", "rich"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Still/already/yet subItems
  "2378": [
    { id: "23781", text: "Он всё ещё спит", answer: "He is still sleeping", transcription: "hiː ɪz stɪl ˈsliːpɪŋ", hints: ["He", "is", "still"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23782", text: "Она всё ещё здесь", answer: "She is still here", transcription: "ʃiː ɪz stɪl hɪə", hints: ["She", "is", "still"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23783", text: "Я всё ещё жду", answer: "I am still waiting", transcription: "aɪ æm stɪl ˈweɪtɪŋ", hints: ["I", "am", "still"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2379": [
    { id: "23791", text: "Я уже поел", answer: "I have already eaten", transcription: "aɪ hæv ɔːlˈrɛdi ˈiːtn", hints: ["I", "have", "already"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23792", text: "Она уже ушла", answer: "She has already left", transcription: "ʃiː hæz ɔːlˈrɛdi lɛft", hints: ["She", "has", "already"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23793", text: "Они уже приехали", answer: "They have already arrived", transcription: "ðeɪ hæv ɔːlˈrɛdi əˈraɪvd", hints: ["They", "have", "already"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Let's / Let me subItems
  "2375": [
    { id: "23751", text: "Давайте пойдем в кино!", answer: "Let's go to the cinema!", transcription: "lɛts ɡəʊ tuː ðə ˈsɪnəmə", hints: ["Let's", "go", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23752", text: "Давайте поиграем!", answer: "Let's play!", transcription: "lɛts pleɪ", hints: ["Let's", "play"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23753", text: "Давайте начнем!", answer: "Let's start!", transcription: "lɛts stɑːt", hints: ["Let's", "start"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2376": [
    { id: "23761", text: "Позволь мне помочь тебе", answer: "Let me help you", transcription: "lɛt miː hɛlp juː", hints: ["Let", "me", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23762", text: "Позволь мне объяснить", answer: "Let me explain", transcription: "lɛt miː ɪkˈspleɪn", hints: ["Let", "me", "explain"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23763", text: "Позволь мне попробовать", answer: "Let me try", transcription: "lɛt miː traɪ", hints: ["Let", "me", "try"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Типы вопросов subItems
  "2851": [
    { id: "28511", text: "Ты студент?", answer: "Are you a student?", transcription: "ɑː juː ə ˈstjuːdənt", hints: ["Are", "you", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28512", text: "Она работает здесь?", answer: "Does she work here?", transcription: "dʌz ʃiː wɜːk hɪə", hints: ["Does", "she", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28513", text: "Они придут завтра?", answer: "Will they come tomorrow?", transcription: "wɪl ðeɪ kʌm təˈmɒrəʊ", hints: ["Will", "they", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2852": [
    { id: "28521", text: "Где ты живешь?", answer: "Where do you live?", transcription: "weə duː juː lɪv", hints: ["Where", "do", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28522", text: "Когда ты приедешь?", answer: "When will you come?", transcription: "wen wɪl juː kʌm", hints: ["When", "will", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28523", text: "Почему ты опоздал?", answer: "Why were you late?", transcription: "waɪ wɜː juː leɪt", hints: ["Why", "were", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Инфинитив после глаголов subItems
  "1357": [
    { id: "13571", text: "Я хочу поехать в Лондон", answer: "I want to go to London", transcription: "aɪ wɒnt tuː ɡəʊ tuː ˈlʌndən", hints: ["I", "want", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "13572", text: "Она хочет стать врачом", answer: "She wants to become a doctor", transcription: "ʃiː wɒnts tuː bɪˈkʌm ə ˈdɒktə", hints: ["She", "wants", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "13573", text: "Они хотят купить дом", answer: "They want to buy a house", transcription: "ðeɪ wɒnt tuː baɪ ə haʊs", hints: ["They", "want", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1358": [
    { id: "13581", text: "Мне нужно поговорить с тобой", answer: "I need to talk to you", transcription: "aɪ niːd tuː tɔːk tuː juː", hints: ["I", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "13582", text: "Ей нужно отдохнуть", answer: "She needs to rest", transcription: "ʃiː niːdz tuː rɛst", hints: ["She", "needs", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "13583", text: "Нам нужно торопиться", answer: "We need to hurry", transcription: "wiː niːd tuː ˈhʌri", hints: ["We", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Наречия subItems
  "1804": [
    { id: "18041", text: "Он быстро бежит", answer: "He runs quickly", transcription: "hiː rʌnz ˈkwɪkli", hints: ["He", "runs", "quickly"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "18042", text: "Она говорит быстро", answer: "She speaks quickly", transcription: "ʃiː spiːks ˈkwɪkli", hints: ["She", "speaks", "quickly"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "18043", text: "Они работают быстро", answer: "They work quickly", transcription: "ðeɪ wɜːk ˈkwɪkli", hints: ["They", "work", "quickly"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1805": [
    { id: "18051", text: "Он идет медленно", answer: "He walks slowly", transcription: "hiː wɔːks ˈsləʊli", hints: ["He", "walks", "slowly"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "18052", text: "Она говорит медленно", answer: "She speaks slowly", transcription: "ʃiː spiːks ˈsləʊli", hints: ["She", "speaks", "slowly"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "18053", text: "Машина едет медленно", answer: "The car moves slowly", transcription: "ðə kɑː muːvz ˈsləʊli", hints: ["The", "car", "moves"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Возвратные местоимения subItems
  "1202": [
    { id: "12021", text: "Ты сам это сделал?", answer: "Did you do it yourself?", transcription: "dɪd juː duː ɪt jɔːˈsɛlf", hints: ["Did", "you", "do"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12022", text: "Сделай это сам", answer: "Do it yourself", transcription: "duː ɪt jɔːˈsɛlf", hints: ["Do", "it", "yourself"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12023", text: "Она сама приготовила ужин", answer: "She cooked dinner herself", transcription: "ʃiː kʊkt ˈdɪnə hɜːˈsɛlf", hints: ["She", "cooked", "dinner"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1203": [
    { id: "12031", text: "Он сам починил машину", answer: "He repaired the car himself", transcription: "hiː rɪˈpeəd ðə kɑː hɪmˈsɛlf", hints: ["He", "repaired", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12032", text: "Он сам написал письмо", answer: "He wrote the letter himself", transcription: "hiː rəʊt ðə ˈlɛtə hɪmˈsɛlf", hints: ["He", "wrote", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12033", text: "Он сам решил задачу", answer: "He solved the problem himself", transcription: "hiː sɒlvd ðə ˈprɒbləm hɪmˈsɛlf", hints: ["He", "solved", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Предлоги транспорта subItems
  "1274": [
    { id: "12741", text: "Я езжу на работу на машине", answer: "I go to work by car", transcription: "aɪ ɡəʊ tuː wɜːk baɪ kɑː", hints: ["I", "go", "by"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12742", text: "Она летит самолетом", answer: "She travels by plane", transcription: "ʃiː ˈtrævlz baɪ pleɪn", hints: ["She", "travels", "by"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12743", text: "Мы едем поездом", answer: "We travel by train", transcription: "wiː ˈtrævl baɪ treɪn", hints: ["We", "travel", "by"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1275": [
    { id: "12751", text: "Я еду на автобусе", answer: "I am on the bus", transcription: "aɪ æm ɒn ðə bʌs", hints: ["I", "am", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12752", text: "Она едет на велосипеде", answer: "She is on her bike", transcription: "ʃiː ɪz ɒn hɜː baɪk", hints: ["She", "is", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12753", text: "Они едут на поезде", answer: "They are on the train", transcription: "ðeɪ ɑː ɒn ðə treɪn", hints: ["They", "are", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Determiners subItems
  "2027": [
    { id: "20271", text: "Все студенты пришли", answer: "All the students came", transcription: "ɔːl ðə ˈstjuːdənts keɪm", hints: ["All", "the", "students"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20272", text: "Все дети любят мороженое", answer: "All children love ice cream", transcription: "ɔːl ˈtʃɪldrən lʌv aɪs kriːm", hints: ["All", "children", "love"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20273", text: "Я съел все яблоки", answer: "I ate all the apples", transcription: "aɪ eɪt ɔːl ðɪ ˈæplz", hints: ["I", "ate", "all"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2028": [
    { id: "20281", text: "Оба варианта хороши", answer: "Both options are good", transcription: "bəʊθ ˈɒpʃənz ɑː ɡʊd", hints: ["Both", "options", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20282", text: "Оба брата высокие", answer: "Both brothers are tall", transcription: "bəʊθ ˈbrʌðəz ɑː tɔːl", hints: ["Both", "brothers", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20283", text: "Мне нравятся оба фильма", answer: "I like both films", transcription: "aɪ laɪk bəʊθ fɪlmz", hints: ["I", "like", "both"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2029": [
    { id: "20291", text: "Каждый ученик получил книгу", answer: "Each student got a book", transcription: "iːtʃ ˈstjuːdənt ɡɒt ə bʊk", hints: ["Each", "student", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20292", text: "Каждый день я хожу в спортзал", answer: "Each day I go to the gym", transcription: "iːtʃ deɪ aɪ ɡəʊ tuː ðə dʒɪm", hints: ["Each", "day", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20293", text: "Каждый из нас получил приз", answer: "Each of us got a prize", transcription: "iːtʃ ɒv ʌs ɡɒt ə praɪz", hints: ["Each", "of", "us"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2030": [
    { id: "20301", text: "Каждый человек уникален", answer: "Every person is unique", transcription: "ˈɛvri ˈpɜːsən ɪz juːˈniːk", hints: ["Every", "person", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20302", text: "Каждое утро я пью кофе", answer: "Every morning I drink coffee", transcription: "ˈɛvri ˈmɔːnɪŋ aɪ drɪŋk ˈkɒfi", hints: ["Every", "morning", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20303", text: "Каждый должен знать это", answer: "Everyone should know this", transcription: "ˈɛvriwʌn ʃʊd nəʊ ðɪs", hints: ["Everyone", "should", "know"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Слова-меры subItems
  "1688": [
    { id: "16881", text: "Дай мне кусочек торта", answer: "Give me a piece of cake", transcription: "ɡɪv miː ə piːs ɒv keɪk", hints: ["Give", "me", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16882", text: "Я хочу кусочек хлеба", answer: "I want a piece of bread", transcription: "aɪ wɒnt ə piːs ɒv brɛd", hints: ["I", "want", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16883", text: "Она взяла кусочек сыра", answer: "She took a piece of cheese", transcription: "ʃiː tʊk ə piːs ɒv tʃiːz", hints: ["She", "took", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Квантификаторы subItems
  "1683": [
    { id: "16831", text: "У меня достаточно денег", answer: "I have enough money", transcription: "aɪ hæv ɪˈnʌf ˈmʌni", hints: ["I", "have", "enough"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16832", text: "Этого достаточно", answer: "That is enough", transcription: "ðæt ɪz ɪˈnʌf", hints: ["That", "is", "enough"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16833", text: "У нас достаточно времени", answer: "We have enough time", transcription: "wiː hæv ɪˈnʌf taɪm", hints: ["We", "have", "enough"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1684": [
    { id: "16841", text: "Ты пьешь слишком много кофе", answer: "You drink too much coffee", transcription: "juː drɪŋk tuː mʌtʃ ˈkɒfi", hints: ["You", "drink", "too"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16842", text: "Это слишком много работы", answer: "This is too much work", transcription: "ðɪs ɪz tuː mʌtʃ wɜːk", hints: ["This", "is", "too"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "16843", text: "Он ест слишком много", answer: "He eats too much", transcription: "hiː iːts tuː mʌtʃ", hints: ["He", "eats", "too"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Неопределённые местоимения subItems
  "2229": [
    { id: "22291", text: "Кто-то звонил тебе", answer: "Someone called you", transcription: "ˈsʌmwʌn kɔːld juː", hints: ["Someone", "called", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22292", text: "Кто-то стучит в дверь", answer: "Someone is knocking at the door", transcription: "ˈsʌmwʌn ɪz ˈnɒkɪŋ æt ðə dɔː", hints: ["Someone", "is", "knocking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22293", text: "Кто-то взял мою книгу", answer: "Someone took my book", transcription: "ˈsʌmwʌn tʊk maɪ bʊk", hints: ["Someone", "took", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2231": [
    { id: "22311", text: "Есть ли кто-нибудь дома?", answer: "Is anyone at home?", transcription: "ɪz ˈɛniwʌn æt həʊm", hints: ["Is", "anyone", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22312", text: "Кто-нибудь может помочь мне?", answer: "Can anyone help me?", transcription: "kæn ˈɛniwʌn hɛlp miː", hints: ["Can", "anyone", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22313", text: "Я не вижу никого", answer: "I don't see anyone", transcription: "aɪ dəʊnt siː ˈɛniwʌn", hints: ["I", "don't", "see"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // can/could/be able to subItems
  "3122": [
    { id: "31221", text: "Я умею плавать", answer: "I can swim", transcription: "aɪ kæn swɪm", hints: ["I", "can", "swim"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31222", text: "Она умеет петь", answer: "She can sing", transcription: "ʃiː kæn sɪŋ", hints: ["She", "can", "sing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31223", text: "Ты умеешь водить машину?", answer: "Can you drive?", transcription: "kæn juː draɪv", hints: ["Can", "you", "drive"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3123": [
    { id: "31231", text: "Я способен это сделать", answer: "I am able to do this", transcription: "aɪ æm ˈeɪbl tuː duː ðɪs", hints: ["I", "am", "able"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31232", text: "Она способна решить эту задачу", answer: "She is able to solve this problem", transcription: "ʃiː ɪz ˈeɪbl tuː sɒlv ðɪs ˈprɒbləm", hints: ["She", "is", "able"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31233", text: "Они способны работать в команде", answer: "They are able to work in a team", transcription: "ðeɪ ɑː ˈeɪbl tuː wɜːk ɪn ə tiːm", hints: ["They", "are", "able"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Место наречий частоты subItem
  "2836": [
    { id: "28361", text: "Я всегда встаю рано", answer: "I always get up early", transcription: "aɪ ˈɔːlweɪz ɡɛt ʌp ˈɜːli", hints: ["I", "always", "get"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28362", text: "Она никогда не опаздывает", answer: "She never comes late", transcription: "ʃiː ˈnɛvə kʌmz leɪt", hints: ["She", "never", "comes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28363", text: "Они часто ходят в кино", answer: "They often go to the cinema", transcription: "ðeɪ ˈɒfn ɡəʊ tuː ðə ˈsɪnəmə", hints: ["They", "often", "go"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // -ing/-ed прилагательные subItems
  "3011": [
    { id: "30111", text: "Этот фильм скучный", answer: "This film is boring", transcription: "ðɪs fɪlm ɪz ˈbɔːrɪŋ", hints: ["This", "film", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30112", text: "Я скучаю", answer: "I am bored", transcription: "aɪ æm bɔːd", hints: ["I", "am", "bored"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30113", text: "Урок был скучным", answer: "The lesson was boring", transcription: "ðə ˈlɛsn wɒz ˈbɔːrɪŋ", hints: ["The", "lesson", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3012": [
    { id: "30121", text: "Это интересная книга", answer: "This is an interesting book", transcription: "ðɪs ɪz ən ˈɪntrɪstɪŋ bʊk", hints: ["This", "is", "an"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30122", text: "Я заинтересован в этом", answer: "I am interested in this", transcription: "aɪ æm ˈɪntrɪstɪd ɪn ðɪs", hints: ["I", "am", "interested"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30123", text: "Она заинтересована в работе", answer: "She is interested in the job", transcription: "ʃiː ɪz ˈɪntrɪstɪd ɪn ðə dʒɒb", hints: ["She", "is", "interested"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Взаимные местоимения subItems
  "1209": [
    { id: "12091", text: "Они любят друг друга", answer: "They love each other", transcription: "ðeɪ lʌv iːtʃ ˈʌðə", hints: ["They", "love", "each"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12092", text: "Мы помогаем друг другу", answer: "We help each other", transcription: "wiː hɛlp iːtʃ ˈʌðə", hints: ["We", "help", "each"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12093", text: "Они знают друг друга", answer: "They know each other", transcription: "ðeɪ nəʊ iːtʃ ˈʌðə", hints: ["They", "know", "each"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Зависимые предлоги после прилагательных subItems
  "1277": [
    { id: "12771", text: "Я боюсь пауков", answer: "I am afraid of spiders", transcription: "aɪ æm əˈfreɪd ɒv ˈspaɪdəz", hints: ["I", "am", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12772", text: "Она боится темноты", answer: "She is afraid of the dark", transcription: "ʃiː ɪz əˈfreɪd ɒv ðə dɑːk", hints: ["She", "is", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "12773", text: "Он боится высоты", answer: "He is afraid of heights", transcription: "hiː ɪz əˈfreɪd ɒv haɪts", hints: ["He", "is", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Полумодальные глаголы subItems
  "1087": [
    { id: "10871", text: "Мне нужно идти на работу", answer: "I have to go to work", transcription: "aɪ hæv tuː ɡəʊ tuː wɜːk", hints: ["I", "have", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10872", text: "Ей нужно сдать экзамен", answer: "She has to pass the exam", transcription: "ʃiː hæz tuː pɑːs ðɪ ɪɡˈzæm", hints: ["She", "has", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10873", text: "Им нужно уйти рано", answer: "They have to leave early", transcription: "ðeɪ hæv tuː liːv ˈɜːli", hints: ["They", "have", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1088": [
    { id: "10881", text: "Мне нужно позвонить маме", answer: "I have got to call my mum", transcription: "aɪ hæv ɡɒt tuː kɔːl maɪ mʌm", hints: ["I", "have", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10882", text: "Ты должен это сделать", answer: "You have got to do this", transcription: "juː hæv ɡɒt tuː duː ðɪs", hints: ["You", "have", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "10883", text: "Он должен прийти вовремя", answer: "He has got to come on time", transcription: "hiː hæz ɡɒt tuː kʌm ɒn taɪm", hints: ["He", "has", "got"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Правильные глаголы
  "4368": [
    { id: "43681", text: "Я согласен с тобой", answer: "I agree with you", transcription: "aɪ əˈɡriː wɪð juː", hints: ["I", "agree", "with"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "43682", text: "Она согласилась помочь", answer: "She agreed to help", transcription: "ʃiː əˈɡriːd tuː hɛlp", hints: ["She", "agreed", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "43683", text: "Мы согласились встретиться", answer: "We agreed to meet", transcription: "wiː əˈɡriːd tuː miːt", hints: ["We", "agreed", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Зависимые предлоги после существительных
  "2913": [
    { id: "29131", text: "Причина его успеха — упорный труд", answer: "The reason for his success is hard work", transcription: "ðə ˈriːzn fɔː hɪz səkˈsɛs ɪz hɑːd wɜːk", hints: ["The", "reason", "for"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "29132", text: "Преимущество этого плана очевидно", answer: "The advantage of this plan is clear", transcription: "ðɪ ədˈvɑːntɪdʒ ɒv ðɪs plæn ɪz klɪə", hints: ["The", "advantage", "of"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "29133", text: "Спрос на этот товар высокий", answer: "The demand for this product is high", transcription: "ðə dɪˈmɑːnd fɔː ðɪs ˈprɒdʌkt ɪz haɪ", hints: ["The", "demand", "for"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Зависимые предлоги после глаголов
  "2473": [
    { id: "24731", text: "Это зависит от погоды", answer: "It depends on the weather", transcription: "ɪt dɪˈpɛndz ɒn ðə ˈwɛðə", hints: ["It", "depends", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "24732", text: "Слушай меня внимательно", answer: "Listen to me carefully", transcription: "ˈlɪsn tuː miː ˈkeəfəli", hints: ["Listen", "to", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "24733", text: "Я верю в тебя", answer: "I believe in you", transcription: "aɪ bɪˈliːv ɪn juː", hints: ["I", "believe", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Герундий
  "1403": [
    { id: "14031", text: "Плавание полезно для здоровья", answer: "Swimming is good for health", transcription: "ˈswɪmɪŋ ɪz ɡʊd fɔː hɛlθ", hints: ["Swimming", "is", "good"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "14032", text: "Чтение книг — хорошая привычка", answer: "Reading books is a good habit", transcription: "ˈriːdɪŋ bʊks ɪz ə ɡʊd ˈhæbɪt", hints: ["Reading", "books", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "14033", text: "Я устал от ожидания", answer: "I am tired of waiting", transcription: "aɪ æm ˈtaɪəd ɒv ˈweɪtɪŋ", hints: ["I", "am", "tired"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1461": [
    { id: "14611", text: "Я думаю о переезде", answer: "I am thinking about moving", transcription: "aɪ æm ˈθɪŋkɪŋ əˈbaʊt ˈmuːvɪŋ", hints: ["I", "am", "thinking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "14612", text: "Она заинтересована в изучении языков", answer: "She is interested in learning languages", transcription: "ʃiː ɪz ˈɪntrɪstɪd ɪn ˈlɜːnɪŋ ˈlæŋɡwɪdʒɪz", hints: ["She", "is", "interested"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "14613", text: "Он хорош в приготовлении еды", answer: "He is good at cooking", transcription: "hiː ɪz ɡʊd æt ˈkʊkɪŋ", hints: ["He", "is", "good"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "1943": [
    { id: "19431", text: "Мне нравится читать", answer: "I enjoy reading", transcription: "aɪ ɪnˈdʒɔɪ ˈriːdɪŋ", hints: ["I", "enjoy", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "19432", text: "Она закончила писать отчет", answer: "She finished writing the report", transcription: "ʃiː ˈfɪnɪʃt ˈraɪtɪŋ ðə rɪˈpɔːt", hints: ["She", "finished", "writing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "19433", text: "Он избегает встреч с ней", answer: "He avoids meeting her", transcription: "hiː əˈvɔɪdz ˈmiːtɪŋ hɜː", hints: ["He", "avoids", "meeting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Second Conditional
  "2811": [
    { id: "28111", text: "Если бы у меня было время, я бы помог", answer: "If I had time I would help", transcription: "ɪf aɪ hæd taɪm aɪ wʊd hɛlp", hints: ["If", "I", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28112", text: "Если бы она знала, она бы сказала", answer: "If she knew she would tell", transcription: "ɪf ʃiː njuː ʃiː wʊd tɛl", hints: ["If", "she", "knew"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28113", text: "Если бы мы жили ближе, мы бы чаще встречались", answer: "If we lived closer we would meet more often", transcription: "ɪf wiː lɪvd ˈkləʊsə wiː wʊd miːt mɔːr ˈɒfn", hints: ["If", "we", "lived"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Wish / If only
  "2828": [
    { id: "28281", text: "Жаль, что я не знаю ответа", answer: "I wish I knew the answer", transcription: "aɪ wɪʃ aɪ njuː ðɪ ˈɑːnsə", hints: ["I", "wish", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28282", text: "Жаль, что она не здесь", answer: "I wish she were here", transcription: "aɪ wɪʃ ʃiː wɜː hɪə", hints: ["I", "wish", "she"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28283", text: "Если бы только у меня было больше времени!", answer: "If only I had more time!", transcription: "ɪf ˈəʊnli aɪ hæd mɔː taɪm", hints: ["If", "only", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Either/neither
  "2031": [
    { id: "20311", text: "Любой из них подойдет", answer: "Either of them will do", transcription: "ˈaɪðə ɒv ðɛm wɪl duː", hints: ["Either", "of", "them"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20312", text: "Ни тот ни другой не пришел", answer: "Neither of them came", transcription: "ˈnaɪðə ɒv ðɛm keɪm", hints: ["Neither", "of", "them"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20313", text: "Ни один из вариантов не подходит", answer: "Neither option is suitable", transcription: "ˈnaɪðər ˈɒpʃən ɪz ˈsuːɪtəbl", hints: ["Neither", "option", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Another/other
  "2033": [
    { id: "20331", text: "Дай мне другую чашку", answer: "Give me another cup", transcription: "ɡɪv miː əˈnʌðə kʌp", hints: ["Give", "me", "another"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20332", text: "Другие студенты уже ушли", answer: "The other students have already left", transcription: "ðɪ ˈʌðə ˈstjuːdənts hæv ɔːlˈrɛdi lɛft", hints: ["The", "other", "students"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20333", text: "Некоторые любят кофе, другие — чай", answer: "Some like coffee others like tea", transcription: "sʌm laɪk ˈkɒfi ˈʌðəz laɪk tiː", hints: ["Some", "like", "coffee"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Косвенная речь
  "3042": [
    { id: "30421", text: "Он сказал, что устал", answer: "He said that he was tired", transcription: "hiː sɛd ðæt hiː wɒz ˈtaɪəd", hints: ["He", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30422", text: "Она сказала, что придет завтра", answer: "She said that she would come the next day", transcription: "ʃiː sɛd ðæt ʃiː wʊd kʌm ðə nɛkst deɪ", hints: ["She", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30423", text: "Они сказали, что знают ответ", answer: "They said that they knew the answer", transcription: "ðeɪ sɛd ðæt ðeɪ njuː ðɪ ˈɑːnsə", hints: ["They", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Be used to / Get used to
  "2283": [
    { id: "22831", text: "Я привык вставать рано", answer: "I am used to getting up early", transcription: "aɪ æm juːzd tuː ˈɡɛtɪŋ ʌp ˈɜːli", hints: ["I", "am", "used"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22832", text: "Она привыкает к новой работе", answer: "She is getting used to the new job", transcription: "ʃiː ɪz ˈɡɛtɪŋ juːzd tuː ðə njuː dʒɒb", hints: ["She", "is", "getting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22833", text: "Он привык к холоду", answer: "He is used to the cold", transcription: "hiː ɪz juːzd tuː ðə kəʊld", hints: ["He", "is", "used"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Had better
  "2841": [
    { id: "28411", text: "Тебе лучше поторопиться", answer: "You had better hurry", transcription: "juː hæd ˈbɛtə ˈhʌri", hints: ["You", "had", "better"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28412", text: "Ей лучше позвонить врачу", answer: "She had better call the doctor", transcription: "ʃiː hæd ˈbɛtə kɔːl ðə ˈdɒktə", hints: ["She", "had", "better"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28413", text: "Нам лучше уйти сейчас", answer: "We had better leave now", transcription: "wiː hæd ˈbɛtə liːv naʊ", hints: ["We", "had", "better"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Каузатив
  "2873": [
    { id: "28731", text: "Я починил машину (в сервисе)", answer: "I had my car repaired", transcription: "aɪ hæd maɪ kɑː rɪˈpeəd", hints: ["I", "had", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28732", text: "Она сделала стрижку", answer: "She had her hair cut", transcription: "ʃiː hæd hɜː heə kʌt", hints: ["She", "had", "her"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28733", text: "Они покрасили дом", answer: "They had their house painted", transcription: "ðeɪ hæd ðɛə haʊs ˈpeɪntɪd", hints: ["They", "had", "their"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Stative verbs
  "2963": [
    { id: "29631", text: "Я понимаю тебя", answer: "I understand you", transcription: "aɪ ˌʌndəˈstænd juː", hints: ["I", "understand", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "29632", text: "Она знает ответ", answer: "She knows the answer", transcription: "ʃiː nəʊz ðɪ ˈɑːnsə", hints: ["She", "knows", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "29633", text: "Он верит в бога", answer: "He believes in God", transcription: "hiː bɪˈliːvz ɪn ɡɒd", hints: ["He", "believes", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Пассив Perfect/Future
  "2331": [
    { id: "23311", text: "Письмо уже было отправлено", answer: "The letter has already been sent", transcription: "ðə ˈlɛtə hæz ɔːlˈrɛdi biːn sɛnt", hints: ["The", "letter", "has"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23312", text: "Работа уже была сделана", answer: "The work has already been done", transcription: "ðə wɜːk hæz ɔːlˈrɛdi biːn dʌn", hints: ["The", "work", "has"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23313", text: "Дом уже был продан", answer: "The house has already been sold", transcription: "ðə haʊs hæz ɔːlˈrɛdi biːn səʊld", hints: ["The", "house", "has"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2334": [
    { id: "23341", text: "Письмо будет отправлено завтра", answer: "The letter will be sent tomorrow", transcription: "ðə ˈlɛtə wɪl biː sɛnt təˈmɒrəʊ", hints: ["The", "letter", "will"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23342", text: "Дом будет построен в следующем году", answer: "The house will be built next year", transcription: "ðə haʊs wɪl biː bɪlt nɛkst jɪə", hints: ["The", "house", "will"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23343", text: "Задание будет выполнено вовремя", answer: "The task will be completed on time", transcription: "ðə tɑːsk wɪl biː kəmˈpliːtɪd ɒn taɪm", hints: ["The", "task", "will"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // A1/A2/B1/B2 категории
  "242": [
    { id: "2421", text: "Меня зовут Анна", answer: "My name is Anna", transcription: "maɪ neɪm ɪz ˈænə", hints: ["My", "name", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2422", text: "Я из России", answer: "I am from Russia", transcription: "aɪ æm frɒm ˈrʌʃə", hints: ["I", "am", "from"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2423", text: "Мне 25 лет", answer: "I am 25 years old", transcription: "aɪ æm ˈtwɛnti faɪv jɪəz əʊld", hints: ["I", "am", "25"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "284": [
    { id: "2841", text: "Я могу помочь тебе", answer: "I can help you", transcription: "aɪ kæn hɛlp juː", hints: ["I", "can", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2842", text: "Ты должен это сделать", answer: "You must do this", transcription: "juː mʌst duː ðɪs", hints: ["You", "must", "do"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2843", text: "Она может петь", answer: "She can sing", transcription: "ʃiː kæn sɪŋ", hints: ["She", "can", "sing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "285": [
    { id: "2851", text: "Как тебя зовут?", answer: "What is your name?", transcription: "wɒt ɪz jɔː neɪm", hints: ["What", "is", "your"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2852", text: "Откуда ты?", answer: "Where are you from?", transcription: "weə ɑː juː frɒm", hints: ["Where", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2853", text: "Сколько тебе лет?", answer: "How old are you?", transcription: "haʊ əʊld ɑː juː", hints: ["How", "old", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "286": [
    { id: "2861", text: "Можешь открыть окно?", answer: "Can you open the window?", transcription: "kæn juː ˈəʊpən ðə ˈwɪndəʊ", hints: ["Can", "you", "open"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2862", text: "Могу я взять это?", answer: "May I take this?", transcription: "meɪ aɪ teɪk ðɪs", hints: ["May", "I", "take"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2863", text: "Не могли бы вы помочь мне?", answer: "Could you help me?", transcription: "kʊd juː hɛlp miː", hints: ["Could", "you", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "287": [
    { id: "2871", text: "В комнате есть стол", answer: "There is a table in the room", transcription: "ðɛər ɪz ə ˈteɪbl ɪn ðə ruːm", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2872", text: "Сегодня холодно", answer: "It is cold today", transcription: "ɪt ɪz kəʊld təˈdeɪ", hints: ["It", "is", "cold"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2873", text: "В парке много деревьев", answer: "There are many trees in the park", transcription: "ðɛər ɑː ˈmɛni triːz ɪn ðə pɑːk", hints: ["There", "are", "many"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "289": [
    { id: "2891", text: "Иди прямо", answer: "Go straight ahead", transcription: "ɡəʊ streɪt əˈhɛd", hints: ["Go", "straight", "ahead"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2892", text: "Поверни налево", answer: "Turn left", transcription: "tɜːn lɛft", hints: ["Turn", "left"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2893", text: "Магазин находится справа", answer: "The shop is on the right", transcription: "ðə ʃɒp ɪz ɒn ðə raɪt", hints: ["The", "shop", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "290": [
    { id: "2901", text: "Я думаю, что ты прав", answer: "I think you are right", transcription: "aɪ θɪŋk juː ɑː raɪt", hints: ["I", "think", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2902", text: "Я знаю этого человека", answer: "I know this person", transcription: "aɪ nəʊ ðɪs ˈpɜːsən", hints: ["I", "know", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2903", text: "Она понимает проблему", answer: "She understands the problem", transcription: "ʃiː ˌʌndəˈstændz ðə ˈprɒbləm", hints: ["She", "understands", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "291": [
    { id: "2911", text: "Я счастлив", answer: "I am happy", transcription: "aɪ æm ˈhæpi", hints: ["I", "am", "happy"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2912", text: "Она грустит", answer: "She is sad", transcription: "ʃiː ɪz sæd", hints: ["She", "is", "sad"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2913x", text: "Он устал", answer: "He is tired", transcription: "hiː ɪz ˈtaɪəd", hints: ["He", "is", "tired"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "292": [
    { id: "2921", text: "Этот дом больше того", answer: "This house is bigger than that one", transcription: "ðɪs haʊs ɪz ˈbɪɡə ðæn ðæt wʌn", hints: ["This", "house", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2922", text: "У меня больше книг, чем у тебя", answer: "I have more books than you", transcription: "aɪ hæv mɔː bʊks ðæn juː", hints: ["I", "have", "more"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2923", text: "Это самый красивый город", answer: "This is the most beautiful city", transcription: "ðɪs ɪz ðə məʊst ˈbjuːtɪfəl ˈsɪti", hints: ["This", "is", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "293": [
    { id: "2931", text: "Я хочу поехать в отпуск", answer: "I want to go on holiday", transcription: "aɪ wɒnt tuː ɡəʊ ɒn ˈhɒlɪdeɪ", hints: ["I", "want", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2932", text: "Она решила остаться дома", answer: "She decided to stay at home", transcription: "ʃiː dɪˈsaɪdɪd tuː steɪ æt həʊm", hints: ["She", "decided", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2933", text: "Они планируют переехать", answer: "They plan to move", transcription: "ðeɪ plæn tuː muːv", hints: ["They", "plan", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "294": [
    { id: "2941", text: "Мне нравится плавать", answer: "I like swimming", transcription: "aɪ laɪk ˈswɪmɪŋ", hints: ["I", "like", "swimming"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2942", text: "Она любит читать", answer: "She loves reading", transcription: "ʃiː lʌvz ˈriːdɪŋ", hints: ["She", "loves", "reading"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2943", text: "Он ненавидит ждать", answer: "He hates waiting", transcription: "hiː heɪts ˈweɪtɪŋ", hints: ["He", "hates", "waiting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "295": [
    { id: "2951", text: "Я вижу его каждый день", answer: "I see him every day", transcription: "aɪ siː hɪm ˈɛvri deɪ", hints: ["I", "see", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2952", text: "Она слышит музыку", answer: "She hears the music", transcription: "ʃiː hɪəz ðə ˈmjuːzɪk", hints: ["She", "hears", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2953", text: "Они любят его", answer: "They love him", transcription: "ðeɪ lʌv hɪm", hints: ["They", "love", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "296": [
    { id: "2961", text: "Я интересуюсь музыкой", answer: "I am interested in music", transcription: "aɪ æm ˈɪntrɪstɪd ɪn ˈmjuːzɪk", hints: ["I", "am", "interested"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2962", text: "Она хороша в математике", answer: "She is good at maths", transcription: "ʃiː ɪz ɡʊd æt mæθs", hints: ["She", "is", "good"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2963x", text: "Он зависит от родителей", answer: "He depends on his parents", transcription: "hiː dɪˈpɛndz ɒn hɪz ˈpeərənts", hints: ["He", "depends", "on"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "297": [
    { id: "2971", text: "Если бы я был богатым, я бы путешествовал", answer: "If I were rich I would travel", transcription: "ɪf aɪ wɜː rɪtʃ aɪ wʊd ˈtrævl", hints: ["If", "I", "were"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2972", text: "Если бы она знала, она бы помогла", answer: "If she had known she would have helped", transcription: "ɪf ʃiː hæd nəʊn ʃiː wʊd hæv hɛlpt", hints: ["If", "she", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2973", text: "Жаль, что я не пришел", answer: "I wish I had come", transcription: "aɪ wɪʃ aɪ hæd kʌm", hints: ["I", "wish", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "298": [
    { id: "2981", text: "Письмо было написано вчера", answer: "The letter was written yesterday", transcription: "ðə ˈlɛtə wɒz ˈrɪtn ˈjɛstədeɪ", hints: ["The", "letter", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2982", text: "Машина была отремонтирована", answer: "The car was repaired", transcription: "ðə kɑː wɒz rɪˈpeəd", hints: ["The", "car", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2983", text: "Я починил машину в сервисе", answer: "I had my car repaired", transcription: "aɪ hæd maɪ kɑː rɪˈpeəd", hints: ["I", "had", "my"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "299": [
    { id: "2991", text: "Он сказал, что придет", answer: "He said he would come", transcription: "hiː sɛd hiː wʊd kʌm", hints: ["He", "said", "he"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2992", text: "Она спросила, где я живу", answer: "She asked where I lived", transcription: "ʃiː ɑːskt weə aɪ lɪvd", hints: ["She", "asked", "where"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2993", text: "Они попросили меня помочь", answer: "They asked me to help", transcription: "ðeɪ ɑːskt miː tuː hɛlp", hints: ["They", "asked", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "300": [
    { id: "3001", text: "Я пришел, потому что хотел помочь", answer: "I came because I wanted to help", transcription: "aɪ keɪm bɪˈkɒz aɪ ˈwɒntɪd tuː hɛlp", hints: ["I", "came", "because"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3002", text: "Несмотря на дождь, мы пошли гулять", answer: "Despite the rain we went for a walk", transcription: "dɪˈspaɪt ðə reɪn wiː went fɔːr ə wɔːk", hints: ["Despite", "the", "rain"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3003", text: "В результате он получил работу", answer: "As a result he got the job", transcription: "æz ə rɪˈzʌlt hiː ɡɒt ðə dʒɒb", hints: ["As", "a", "result"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "301": [
    { id: "3011x", text: "Я пишу вам по поводу вакансии", answer: "I am writing to you about the vacancy", transcription: "aɪ æm ˈraɪtɪŋ tuː juː əˈbaʊt ðə ˈveɪkənsi", hints: ["I", "am", "writing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3012x", text: "С уважением", answer: "Yours sincerely", transcription: "jɔːz sɪnˈsɪəli", hints: ["Yours", "sincerely"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3013x", text: "Я хотел бы узнать подробнее", answer: "I would like to find out more", transcription: "aɪ wʊd laɪk tuː faɪnd aʊt mɔː", hints: ["I", "would", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "302": [
    { id: "3021", text: "Следует отметить, что...", answer: "It should be noted that...", transcription: "ɪt ʃʊd biː ˈnəʊtɪd ðæt", hints: ["It", "should", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3022", text: "С другой стороны...", answer: "On the other hand...", transcription: "ɒn ðɪ ˈʌðə hænd", hints: ["On", "the", "other"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "3023", text: "Подводя итог, можно сказать...", answer: "To sum up, it can be said...", transcription: "tuː sʌm ʌp ɪt kæn biː sɛd", hints: ["To", "sum", "up"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Базовые личные модели subItems
  "5536": [
    { id: "55361", text: "Я устал", answer: "I am tired", transcription: "aɪ æm ˈtaɪəd", hints: ["I", "am", "tired"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55362", text: "Я счастлив", answer: "I am happy", transcription: "aɪ æm ˈhæpi", hints: ["I", "am", "happy"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55363", text: "Я готов", answer: "I am ready", transcription: "aɪ æm ˈrɛdi", hints: ["I", "am", "ready"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5561": [
    { id: "55611", text: "Я умею плавать", answer: "I can swim", transcription: "aɪ kæn swɪm", hints: ["I", "can", "swim"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55612", text: "Я умею готовить", answer: "I can cook", transcription: "aɪ kæn kʊk", hints: ["I", "can", "cook"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55613", text: "Я умею водить машину", answer: "I can drive", transcription: "aɪ kæn draɪv", hints: ["I", "can", "drive"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5586": [
    { id: "55861", text: "Ты работаешь здесь?", answer: "Do you work here?", transcription: "duː juː wɜːk hɪə", hints: ["Do", "you", "work"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55862", text: "Ты любишь кофе?", answer: "Do you like coffee?", transcription: "duː juː laɪk ˈkɒfi", hints: ["Do", "you", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "55863", text: "Ты живешь здесь?", answer: "Do you live here?", transcription: "duː juː lɪv hɪə", hints: ["Do", "you", "live"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5611": [
    { id: "56111", text: "Можешь помочь мне, пожалуйста?", answer: "Can you help me, please?", transcription: "kæn juː hɛlp miː pliːz", hints: ["Can", "you", "help"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56112", text: "Можешь открыть дверь, пожалуйста?", answer: "Can you open the door, please?", transcription: "kæn juː ˈəʊpən ðə dɔː pliːz", hints: ["Can", "you", "open"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56113", text: "Можешь повторить, пожалуйста?", answer: "Can you repeat that, please?", transcription: "kæn juː rɪˈpiːt ðæt pliːz", hints: ["Can", "you", "repeat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5636": [
    { id: "56361", text: "На столе стоит лампа", answer: "There is a lamp on the table", transcription: "ðɛər ɪz ə læmp ɒn ðə ˈteɪbl", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56362", text: "В комнате есть диван", answer: "There is a sofa in the room", transcription: "ðɛər ɪz ə ˈsəʊfə ɪn ðə ruːm", hints: ["There", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56363", text: "Сегодня жарко", answer: "It is hot today", transcription: "ɪt ɪz hɒt təˈdeɪ", hints: ["It", "is", "hot"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5686": [
    { id: "56861", text: "Я нахожусь в школе", answer: "I am at school", transcription: "aɪ æm æt skuːl", hints: ["I", "am", "at"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56862", text: "Она в офисе", answer: "She is in the office", transcription: "ʃiː ɪz ɪn ðɪ ˈɒfɪs", hints: ["She", "is", "in"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "56863", text: "Книга на полке", answer: "The book is on the shelf", transcription: "ðə bʊk ɪz ɒn ðə ʃɛlf", hints: ["The", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5711": [
    { id: "57111", text: "Я думаю, что он прав", answer: "I think that he is right", transcription: "aɪ θɪŋk ðæt hiː ɪz raɪt", hints: ["I", "think", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57112", text: "Я верю, что всё будет хорошо", answer: "I believe that everything will be fine", transcription: "aɪ bɪˈliːv ðæt ˈɛvrɪθɪŋ wɪl biː faɪn", hints: ["I", "believe", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57113", text: "Я знаю, что она придет", answer: "I know that she will come", transcription: "aɪ nəʊ ðæt ʃiː wɪl kʌm", hints: ["I", "know", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5736": [
    { id: "57361", text: "Я чувствую себя хорошо", answer: "I feel good", transcription: "aɪ fiːl ɡʊd", hints: ["I", "feel", "good"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57362", text: "Она чувствует себя усталой", answer: "She feels tired", transcription: "ʃiː fiːlz ˈtaɪəd", hints: ["She", "feels", "tired"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57363", text: "Я рад видеть тебя", answer: "I am happy to see you", transcription: "aɪ æm ˈhæpi tuː siː juː", hints: ["I", "am", "happy"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5761": [
    { id: "57611", text: "Он выше меня", answer: "He is taller than me", transcription: "hiː ɪz ˈtɔːlə ðæn miː", hints: ["He", "is", "taller"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57612", text: "Эта книга интереснее той", answer: "This book is more interesting than that one", transcription: "ðɪs bʊk ɪz mɔːr ˈɪntrɪstɪŋ ðæn ðæt wʌn", hints: ["This", "book", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57613", text: "Она такая же умная, как он", answer: "She is as clever as him", transcription: "ʃiː ɪz æz ˈklɛvər æz hɪm", hints: ["She", "is", "as"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5786": [
    { id: "57861", text: "Я хочу поехать в Лондон", answer: "I want to go to London", transcription: "aɪ wɒnt tuː ɡəʊ tuː ˈlʌndən", hints: ["I", "want", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57862", text: "Мне нужно купить продукты", answer: "I need to buy groceries", transcription: "aɪ niːd tuː baɪ ˈɡrəʊsəriz", hints: ["I", "need", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "57863", text: "Она решила остаться", answer: "She decided to stay", transcription: "ʃiː dɪˈsaɪdɪd tuː steɪ", hints: ["She", "decided", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5811": [
    { id: "58111", text: "Мне нравится плавать", answer: "I like swimming", transcription: "aɪ laɪk ˈswɪmɪŋ", hints: ["I", "like", "swimming"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58112", text: "Она любит петь", answer: "She loves singing", transcription: "ʃiː lʌvz ˈsɪŋɪŋ", hints: ["She", "loves", "singing"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58113", text: "Он ненавидит ждать", answer: "He hates waiting", transcription: "hiː heɪts ˈweɪtɪŋ", hints: ["He", "hates", "waiting"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5836": [
    { id: "58361", text: "Я хочу, чтобы ты пришел", answer: "I want you to come", transcription: "aɪ wɒnt juː tuː kʌm", hints: ["I", "want", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58362", text: "Мне нужно, чтобы ты помог", answer: "I need you to help", transcription: "aɪ niːd juː tuː hɛlp", hints: ["I", "need", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58363", text: "Я хотел бы, чтобы она позвонила", answer: "I would like her to call", transcription: "aɪ wʊd laɪk hɜː tuː kɔːl", hints: ["I", "would", "like"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5862": [
    { id: "58621", text: "Я боюсь высоты", answer: "I am afraid of heights", transcription: "aɪ æm əˈfreɪd ɒv haɪts", hints: ["I", "am", "afraid"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58622", text: "Она хороша в математике", answer: "She is good at maths", transcription: "ʃiː ɪz ɡʊd æt mæθs", hints: ["She", "is", "good"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58623", text: "Он плохо разбирается в технике", answer: "He is bad at technology", transcription: "hiː ɪz bæd æt tɛkˈnɒlədʒi", hints: ["He", "is", "bad"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5887": [
    { id: "58871", text: "Если будет дождь, возьми зонт", answer: "If it rains take an umbrella", transcription: "ɪf ɪt reɪnz teɪk ən ʌmˈbrɛlə", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58872", text: "Если ты устал, отдохни", answer: "If you are tired have a rest", transcription: "ɪf juː ɑː ˈtaɪəd hæv ə rɛst", hints: ["If", "you", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "58873", text: "Если вода кипит, она горячая", answer: "If water boils it is hot", transcription: "ɪf ˈwɔːtə bɔɪlz ɪt ɪz hɒt", hints: ["If", "water", "boils"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5912": [
    { id: "59121", text: "Письмо было написано", answer: "The letter was written", transcription: "ðə ˈlɛtə wɒz ˈrɪtn", hints: ["The", "letter", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59122", text: "Дом строится сейчас", answer: "The house is being built", transcription: "ðə haʊs ɪz ˈbiːɪŋ bɪlt", hints: ["The", "house", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59123", text: "Машина была продана", answer: "The car was sold", transcription: "ðə kɑː wɒz səʊld", hints: ["The", "car", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5937": [
    { id: "59371", text: "Он сказал, что устал", answer: "He said that he was tired", transcription: "hiː sɛd ðæt hiː wɒz ˈtaɪəd", hints: ["He", "said", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59372", text: "Она сказала мне, что придет", answer: "She told me that she would come", transcription: "ʃiː təʊld miː ðæt ʃiː wʊd kʌm", hints: ["She", "told", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59373", text: "Он спросил, где я живу", answer: "He asked where I lived", transcription: "hiː ɑːskt weə aɪ lɪvd", hints: ["He", "asked", "where"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5962": [
    { id: "59621", text: "Я остался дома, потому что был болен", answer: "I stayed at home because I was ill", transcription: "aɪ steɪd æt həʊm bɪˈkɒz aɪ wɒz ɪl", hints: ["I", "stayed", "because"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59622", text: "Из-за дождя мы остались дома", answer: "Because of the rain we stayed at home", transcription: "bɪˈkɒz ɒv ðə reɪn wiː steɪd æt həʊm", hints: ["Because", "of", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59623", text: "Он опоздал, поэтому мы ждали", answer: "He was late so we waited", transcription: "hiː wɒz leɪt səʊ wiː ˈweɪtɪd", hints: ["He", "was", "late"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "5987": [
    { id: "59871", text: "Я работаю над проектом", answer: "I am working on a project", transcription: "aɪ æm ˈwɜːkɪŋ ɒn ə ˈprɒdʒɛkt", hints: ["I", "am", "working"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59872", text: "Я отвечаю за маркетинг", answer: "I am responsible for marketing", transcription: "aɪ æm rɪˈspɒnsɪbl fɔː ˈmɑːkɪtɪŋ", hints: ["I", "am", "responsible"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "59873", text: "Мне нужен отчет к пятнице", answer: "I need the report by Friday", transcription: "aɪ niːd ðə rɪˈpɔːt baɪ ˈfraɪdeɪ", hints: ["I", "need", "the"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Оставшиеся категории
  "2810": [
    { id: "28101", text: "Если ты нагреваешь лёд, он тает", answer: "If you heat ice it melts", transcription: "ɪf juː hiːt aɪs ɪt mɛlts", hints: ["If", "you", "heat"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28102", text: "Если будет дождь, я возьму зонт", answer: "If it rains I will take an umbrella", transcription: "ɪf ɪt reɪnz aɪ wɪl teɪk ən ʌmˈbrɛlə", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28103", text: "Zero conditional используется для фактов", answer: "Zero conditional is used for facts", transcription: "ˈzɪərəʊ kənˈdɪʃənl ɪz juːzd fɔː fækts", hints: ["Zero", "conditional", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2817": [
    { id: "28171", text: "Если будет солнечно, мы пойдем гулять", answer: "If it is sunny we will go for a walk", transcription: "ɪf ɪt ɪz ˈsʌni wiː wɪl ɡəʊ fɔːr ə wɔːk", hints: ["If", "it", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28172", text: "Если бы у меня было время, я бы помог", answer: "If I had time I would help", transcription: "ɪf aɪ hæd taɪm aɪ wʊd hɛlp", hints: ["If", "I", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28173", text: "First conditional — реальная ситуация", answer: "First conditional is a real situation", transcription: "fɜːst kənˈdɪʃənl ɪz ə rɪəl ˌsɪtʃuˈeɪʃən", hints: ["First", "conditional", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2857": [
    { id: "28571", text: "Я пришел, чтобы помочь тебе", answer: "I came to help you", transcription: "aɪ keɪm tuː hɛlp juː", hints: ["I", "came", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28572", text: "Это слишком сложно, чтобы понять", answer: "It is too difficult to understand", transcription: "ɪt ɪz tuː ˈdɪfɪkəlt tuː ˌʌndəˈstænd", hints: ["It", "is", "too"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28573", text: "Она рада видеть тебя", answer: "She is happy to see you", transcription: "ʃiː ɪz ˈhæpi tuː siː juː", hints: ["She", "is", "happy"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3071": [
    { id: "30711", text: "Она спросила, где я живу", answer: "She asked where I lived", transcription: "ʃiː ɑːskt weə aɪ lɪvd", hints: ["She", "asked", "where"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30712", text: "Он спросил, приду ли я", answer: "He asked if I would come", transcription: "hiː ɑːskt ɪf aɪ wʊd kʌm", hints: ["He", "asked", "if"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30713", text: "Они спросили, что я делаю", answer: "They asked what I was doing", transcription: "ðeɪ ɑːskt wɒt aɪ wɒz ˈduːɪŋ", hints: ["They", "asked", "what"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2037": [
    { id: "20371", text: "Мне нравится этот телефон, дай мне такой же", answer: "I like this phone give me one like it", transcription: "aɪ laɪk ðɪs fəʊn ɡɪv miː wʌn laɪk ɪt", hints: ["I", "like", "this"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20372", text: "Эти яблоки свежие, а те нет", answer: "These apples are fresh but those ones are not", transcription: "ðiːz ˈæplz ɑː frɛʃ bʌt ðəʊz wʌnz ɑː nɒt", hints: ["These", "apples", "are"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20373", text: "Какой торт хочешь — этот или тот?", answer: "Which cake do you want this one or that one?", transcription: "wɪtʃ keɪk duː juː wɒnt ðɪs wʌn ɔː ðæt wʌn", hints: ["Which", "cake", "do"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2127": [
    { id: "21271", text: "Это очень интересно", answer: "This is very interesting", transcription: "ðɪs ɪz ˈvɛri ˈɪntrɪstɪŋ", hints: ["This", "is", "very"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "21272", text: "Она довольно умная", answer: "She is quite clever", transcription: "ʃiː ɪz kwaɪt ˈklɛvə", hints: ["She", "is", "quite"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "21273", text: "Он немного устал", answer: "He is a bit tired", transcription: "hiː ɪz ə bɪt ˈtaɪəd", hints: ["He", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2039": [
    { id: "20391", text: "Мне нравится плавать / Я хочу плавать", answer: "I like swimming / I want to swim", transcription: "aɪ laɪk ˈswɪmɪŋ aɪ wɒnt tuː swɪm", hints: ["I", "like", "swimming"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20392", text: "Она перестала курить", answer: "She stopped smoking", transcription: "ʃiː stɒpt ˈsməʊkɪŋ", hints: ["She", "stopped", "smoking"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "20393", text: "Он попробовал открыть дверь", answer: "He tried to open the door", transcription: "hiː traɪd tuː ˈəʊpən ðə dɔː", hints: ["He", "tried", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2125": [
    { id: "21251", text: "Она такая красивая!", answer: "She is so beautiful!", transcription: "ʃiː ɪz səʊ ˈbjuːtɪfəl", hints: ["She", "is", "so"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "21252", text: "Это такая интересная книга!", answer: "It is such an interesting book!", transcription: "ɪt ɪz sʌtʃ ən ˈɪntrɪstɪŋ bʊk", hints: ["It", "is", "such"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "21253", text: "Он так быстро бегает!", answer: "He runs so fast!", transcription: "hiː rʌnz səʊ fɑːst", hints: ["He", "runs", "so"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2872": [
    { id: "28721", text: "Письмо было написано Анной", answer: "The letter was written by Anna", transcription: "ðə ˈlɛtə wɒz ˈrɪtn baɪ ˈænə", hints: ["The", "letter", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28722", text: "Картина была нарисована Пикассо", answer: "The painting was done by Picasso", transcription: "ðə ˈpeɪntɪŋ wɒz dʌn baɪ pɪˈkæsəʊ", hints: ["The", "painting", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28723", text: "Дом был построен рабочими", answer: "The house was built by workers", transcription: "ðə haʊs wɒz bɪlt baɪ ˈwɜːkəz", hints: ["The", "house", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2863": [
    { id: "28631", text: "Я видел, как он бежит", answer: "I saw him run", transcription: "aɪ sɔː hɪm rʌn", hints: ["I", "saw", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28632", text: "Она слышала, как он поет", answer: "She heard him sing", transcription: "ʃiː hɜːd hɪm sɪŋ", hints: ["She", "heard", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28633", text: "Они заставили меня ждать", answer: "They made me wait", transcription: "ðeɪ meɪd miː weɪt", hints: ["They", "made", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3073": [
    { id: "30731", text: "Сегодня → в тот день", answer: "Today becomes that day", transcription: "təˈdeɪ bɪˈkʌmz ðæt deɪ", hints: ["Today", "becomes", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30732", text: "Здесь → там", answer: "Here becomes there", transcription: "hɪə bɪˈkʌmz ðɛə", hints: ["Here", "becomes", "there"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30733", text: "Сейчас → тогда", answer: "Now becomes then", transcription: "naʊ bɪˈkʌmz ðɛn", hints: ["Now", "becomes", "then"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2427": [
    { id: "24271", text: "С кем ты разговаривал?", answer: "Who were you talking to?", transcription: "huː wɜː juː ˈtɔːkɪŋ tuː", hints: ["Who", "were", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "24272", text: "О чем ты думаешь?", answer: "What are you thinking about?", transcription: "wɒt ɑː juː ˈθɪŋkɪŋ əˈbaʊt", hints: ["What", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "24273", text: "На что ты смотришь?", answer: "What are you looking at?", transcription: "wɒt ɑː juː ˈlʊkɪŋ æt", hints: ["What", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2381": [
    { id: "23811", text: "Если будет дождь, мы останемся дома", answer: "If it rains we will stay at home", transcription: "ɪf ɪt reɪnz wiː wɪl steɪ æt həʊm", hints: ["If", "it", "rains"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23812", text: "Когда он придет, мы поедим", answer: "When he comes we will eat", transcription: "wen hiː kʌmz wiː wɪl iːt", hints: ["When", "he", "comes"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23813", text: "Позвони мне, когда будешь готов", answer: "Call me when you are ready", transcription: "kɔːl miː wen juː ɑː ˈrɛdi", hints: ["Call", "me", "when"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3072": [
    { id: "30721", text: "Он попросил меня помочь ему", answer: "He asked me to help him", transcription: "hiː ɑːskt miː tuː hɛlp hɪm", hints: ["He", "asked", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30722", text: "Она велела мне уйти", answer: "She told me to leave", transcription: "ʃiː təʊld miː tuː liːv", hints: ["She", "told", "me"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "30723", text: "Они попросили нас подождать", answer: "They asked us to wait", transcription: "ðeɪ ɑːskt ʌs tuː weɪt", hints: ["They", "asked", "us"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2384": [
    { id: "23841", text: "Когда я пришел, она уже ушла", answer: "When I arrived she had already left", transcription: "wen aɪ əˈraɪvd ʃiː hæd ɔːlˈrɛdi lɛft", hints: ["When", "I", "arrived"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23842", text: "Пока он спал, она готовила", answer: "While he was sleeping she was cooking", transcription: "waɪl hiː wɒz ˈsliːpɪŋ ʃiː wɒz ˈkʊkɪŋ", hints: ["While", "he", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "23843", text: "Когда он шел домой, начался дождь", answer: "As he was walking home it started to rain", transcription: "æz hiː wɒz ˈwɔːkɪŋ həʊm ɪt ˈstɑːtɪd tuː reɪn", hints: ["As", "he", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2563": [
    { id: "25631", text: "Человек, который позвонил, был мой друг", answer: "The man who called was my friend", transcription: "ðə mæn huː kɔːld wɒz maɪ frɛnd", hints: ["The", "man", "who"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25632", text: "Книга, которую я читаю, очень интересная", answer: "The book which I am reading is very interesting", transcription: "ðə bʊk wɪtʃ aɪ æm ˈriːdɪŋ ɪz ˈvɛri ˈɪntrɪstɪŋ", hints: ["The", "book", "which"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "25633", text: "Дом, который мы купили, большой", answer: "The house that we bought is big", transcription: "ðə haʊs ðæt wiː bɔːt ɪz bɪɡ", hints: ["The", "house", "that"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2818": [
    { id: "28181", text: "Если бы я знал, я бы пришел", answer: "If I had known I would have come", transcription: "ɪf aɪ hæd nəʊn aɪ wʊd hæv kʌm", hints: ["If", "I", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28182", text: "Если бы она позвонила, я бы ответил", answer: "If she had called I would have answered", transcription: "ɪf ʃiː hæd kɔːld aɪ wʊd hæv ˈɑːnsəd", hints: ["If", "she", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "28183", text: "Если бы мы поторопились, мы бы не опоздали", answer: "If we had hurried we would not have been late", transcription: "ɪf wiː hæd ˈhʌrid wiː wʊd nɒt hæv biːn leɪt", hints: ["If", "we", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2221": [
    { id: "22211", text: "Это друг моего отца", answer: "This is a friend of my father's", transcription: "ðɪs ɪz ə frɛnd ɒv maɪ ˈfɑːðəz", hints: ["This", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22212", text: "Это книга Анны", answer: "This is a book of Anna's", transcription: "ðɪs ɪz ə bʊk ɒv ˈænəz", hints: ["This", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22213", text: "Он друг моего брата", answer: "He is a friend of my brother's", transcription: "hiː ɪz ə frɛnd ɒv maɪ ˈbrʌðəz", hints: ["He", "is", "a"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2285": [
    { id: "22851", text: "Я бы предпочел остаться дома", answer: "I would rather stay at home", transcription: "aɪ wʊd ˈrɑːðə steɪ æt həʊm", hints: ["I", "would", "rather"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22852", text: "Она предпочитает чай кофе", answer: "She would prefer tea to coffee", transcription: "ʃiː wʊd prɪˈfɜː tiː tuː ˈkɒfi", hints: ["She", "would", "prefer"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "22853", text: "Я бы предпочел, чтобы ты остался", answer: "I would rather you stayed", transcription: "aɪ wʊd ˈrɑːðə juː steɪd", hints: ["I", "would", "rather"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2653": [
    { id: "26531", text: "Я хочу, чтобы ты пришел", answer: "I want you to come", transcription: "aɪ wɒnt juː tuː kʌm", hints: ["I", "want", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26532", text: "Она видела, как он уходил", answer: "She saw him leaving", transcription: "ʃiː sɔː hɪm ˈliːvɪŋ", hints: ["She", "saw", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26533", text: "Они ожидали, что мы придем", answer: "They expected us to come", transcription: "ðeɪ ɪkˈspɛktɪd ʌs tuː kʌm", hints: ["They", "expected", "us"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2658": [
    { id: "26581", text: "Человек, которого я встретил, был добрым", answer: "The man I met was kind", transcription: "ðə mæn aɪ mɛt wɒz kaɪnd", hints: ["The", "man", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26582", text: "Книга, которую я читал, была интересной", answer: "The book I was reading was interesting", transcription: "ðə bʊk aɪ wɒz ˈriːdɪŋ wɒz ˈɪntrɪstɪŋ", hints: ["The", "book", "I"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26583", text: "Фильм, который мы смотрели, был скучным", answer: "The film we watched was boring", transcription: "ðə fɪlm wiː wɒtʃt wɒz ˈbɔːrɪŋ", hints: ["The", "film", "we"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2689": [
    { id: "26891", text: "Когда ты придешь, я уже закончу", answer: "When you come I will have finished", transcription: "wen juː kʌm aɪ wɪl hæv ˈfɪnɪʃt", hints: ["When", "you", "come"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26892", text: "Позвони мне, когда закончишь", answer: "Call me when you have finished", transcription: "kɔːl miː wen juː hæv ˈfɪnɪʃt", hints: ["Call", "me", "when"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "26893", text: "Мы уйдем, когда он придет", answer: "We will leave when he arrives", transcription: "wiː wɪl liːv wen hiː əˈraɪvz", hints: ["We", "will", "leave"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3109": [
    { id: "31091", text: "Он должно быть устал", answer: "He must be tired", transcription: "hiː mʌst biː ˈtaɪəd", hints: ["He", "must", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31092", text: "Она, возможно, дома", answer: "She might be at home", transcription: "ʃiː maɪt biː æt həʊm", hints: ["She", "might", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31093", text: "Они не могут быть правы", answer: "They can't be right", transcription: "ðeɪ kɑːnt biː raɪt", hints: ["They", "can't", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3130": [
    { id: "31301", text: "Дом строится прямо сейчас", answer: "The house is being built right now", transcription: "ðə haʊs ɪz ˈbiːɪŋ bɪlt raɪt naʊ", hints: ["The", "house", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31302", text: "Письмо писалось весь день", answer: "The letter was being written all day", transcription: "ðə ˈlɛtə wɒz ˈbiːɪŋ ˈrɪtn ɔːl deɪ", hints: ["The", "letter", "was"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31303", text: "Машина ремонтируется", answer: "The car is being repaired", transcription: "ðə kɑː ɪz ˈbiːɪŋ rɪˈpeəd", hints: ["The", "car", "is"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "3138": [
    { id: "31381", text: "Это должно быть сделано сегодня", answer: "This must be done today", transcription: "ðɪs mʌst biː dʌn təˈdeɪ", hints: ["This", "must", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31382", text: "Это следует сделать немедленно", answer: "This should be done immediately", transcription: "ðɪs ʃʊd biː dʌn ɪˈmiːdiətli", hints: ["This", "should", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "31383", text: "Это может быть сделано завтра", answer: "This can be done tomorrow", transcription: "ðɪs kæn biː dʌn təˈmɒrəʊ", hints: ["This", "can", "be"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  "2748": [
    { id: "27481", text: "Это нужно сделать", answer: "This needs to be done", transcription: "ðɪs niːdz tuː biː dʌn", hints: ["This", "needs", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27482", text: "Я избегаю быть критикуемым", answer: "I avoid being criticised", transcription: "aɪ əˈvɔɪd ˈbiːɪŋ ˈkrɪtɪsaɪzd", hints: ["I", "avoid", "being"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "27483", text: "Она хочет быть услышанной", answer: "She wants to be heard", transcription: "ʃiː wɒnts tuː biː hɜːd", hints: ["She", "wants", "to"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // going to (202)
  "202": [
    { id: "2021", text: "Я собираюсь купить новую машину", answer: "I am going to buy a new car", transcription: "aɪ æm ˈɡəʊɪŋ tuː baɪ ə njuː kɑː", hints: ["I", "am", "going"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "2022", text: "Что ты собираешься делать?", answer: "What are you going to do?", transcription: "wɒt ɑː juː ˈɡəʊɪŋ tuː duː", hints: ["What", "are", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Third Conditional (B2 - check ID)
  "501": [
    { id: "5011", text: "Если бы я знал, я бы пришел", answer: "If I had known, I would have come", transcription: "ɪf aɪ hæd nəʊn aɪ wʊd hæv kʌm", hints: ["If", "I", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "5012", text: "Если бы она вчера позвонила, мы бы встретились", answer: "If she had called yesterday, we would have met", transcription: "ɪf ʃiː hæd kɔːld ˈjɛstədeɪ wiː wʊd hæv mɛt", hints: ["If", "she", "had"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ],
  // Complex Object
  "504": [
    { id: "5041", text: "Я хочу, чтобы ты пришел", answer: "I want you to come", transcription: "aɪ wɒnt juː tuː kʌm", hints: ["I", "want", "you"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" },
    { id: "5042", text: "Она видела, как он переходил улицу", answer: "She saw him cross the street", transcription: "ʃiː sɔː hɪm krɒs ðə striːt", hints: ["She", "saw", "him"], audio: "https://my-simple-english.ru/uploads/audio/69aff210067a2.mp3" }
  ]
};
