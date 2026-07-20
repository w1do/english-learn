export interface VideoItem {
  id: string;
  video: string;
  thumb: string;
  title: string;
  cards: string;
  duration: string;
}

export interface VideoLevel {
  id: number;
  title: string;
  count: string;
  badge: string;
  videos: VideoItem[];
}

export const videoLevels: VideoLevel[] = 
[
  {
    "id": 1,
    "title": "A1 mix",
    "count": "28 видео",
    "badge": "Для начинающих",
    "videos": [
      {
        "id": "3",
        "video": "/uploads/video/vid_6a3504116e2e2.mp4",
        "thumb": "/uploads/video/img_6a34c61c10ba7_6a3551b5a9444.webp",
        "title": "Семья и люди",
        "cards": "32 карточки",
        "duration": "2 мин"
      },
      {
        "id": "2",
        "video": "/uploads/video/vid_6a35043f15894.mp4",
        "thumb": "/uploads/video/img_6a34c53899397_6a3551b57be6c.webp",
        "title": "Профессии и работа",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "4",
        "video": "/uploads/video/vid_6a3504641648f.mp4",
        "thumb": "/uploads/video/img_6a34c438ed3dc_6a3551b5cfc63.webp",
        "title": "Числа и порядок",
        "cards": "49 карточек",
        "duration": "3 мин"
      },
      {
        "id": "5",
        "video": "/uploads/video/vid_6a35049de161c.mp4",
        "thumb": "/uploads/video/img_6a34c25f36d29_6a3551b5f2b77.webp",
        "title": "Школа и учеба",
        "cards": "32 карточки",
        "duration": "2 мин"
      },
      {
        "id": "6",
        "video": "/uploads/video/vid_6a3504c77b693.mp4",
        "thumb": "/uploads/video/img_6a349e43ee8f6_6a3551b62269a.webp",
        "title": "Дом и комнаты",
        "cards": "23 карточки",
        "duration": "2 мин"
      },
      {
        "id": "7",
        "video": "/uploads/video/vid_6a3504f05e3d4.mp4",
        "thumb": "/uploads/video/img_6a349ea3c7338_6a3551b644562.webp",
        "title": "Мебель и вещи дома",
        "cards": "22 карточки",
        "duration": "2 мин"
      },
      {
        "id": "8",
        "video": "/uploads/video/vid_6a350516642bd.mp4",
        "thumb": "/uploads/video/img_6a349fbc16c78_6a3551b6664b5.webp",
        "title": "Еда",
        "cards": "38 карточек",
        "duration": "2 мин"
      },
      {
        "id": "9",
        "video": "/uploads/video/vid_6a35054262f89.mp4",
        "thumb": "/uploads/video/img_6a34b6d6393d9_6a3551b688ae5.webp",
        "title": "Напитки и посуда",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "10",
        "video": "/uploads/video/vid_6a3505b97f77e.mp4",
        "thumb": "/uploads/video/img_6a34b80669e8a_6a3551b6ac5f1.webp",
        "title": "Одежда и внешний вид",
        "cards": "29 карточек",
        "duration": "2 мин"
      },
      {
        "id": "11",
        "video": "/uploads/video/vid_6a3505d6b6091.mp4",
        "thumb": "/uploads/video/img_6a34b84857d1b_6a3551b6d11bb.webp",
        "title": "Тело и здоровье",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "12",
        "video": "/uploads/video/vid_6a3505ffa78e0.mp4",
        "thumb": "/uploads/video/img_6a34b97c6d5c4_6a3551b700b6c.webp",
        "title": "Эмоции и состояние",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "13",
        "video": "/uploads/video/vid_6a35061dec16c.mp4",
        "thumb": "/uploads/video/img_6a34c0692b0ca_6a3551b726db6.webp",
        "title": "Цвета и внешнее описание",
        "cards": "23 карточки",
        "duration": "2 мин"
      },
      {
        "id": "14",
        "video": "/uploads/video/vid_6a35063e20e8b.mp4",
        "thumb": "/uploads/video/img_6a34c687663ba_6a3551b74e77b.webp",
        "title": "Размер, качество и оценка",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "15",
        "video": "/uploads/video/vid_6a35065f863f7.mp4",
        "thumb": "/uploads/video/img_6a34c6ea90dc6_6a3551b772e99.webp",
        "title": "Время, дни и даты",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "16",
        "video": "/uploads/video/vid_6a35068622cee.mp4",
        "thumb": "/uploads/video/img_6a34c7678b9fd_6a3551b79b06d.webp",
        "title": "Месяца, сезоны и частотность",
        "cards": "29 карточек",
        "duration": "2 мин"
      },
      {
        "id": "17",
        "video": "/uploads/video/vid_6a3506a39198d.mp4",
        "thumb": "/uploads/video/img_6a3494a5eedcf_6a3551b7c315d.webp",
        "title": "Город и места",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "18",
        "video": "/uploads/video/vid_6a3506c3f035d.mp4",
        "thumb": "/uploads/video/img_6a349a3ae7284_6a3551b7e73c6.webp",
        "title": "Транспорт и путешествие",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "19",
        "video": "/uploads/video/vid_6a3506f3dc10c.mp4",
        "thumb": "/uploads/video/img_6a3499a9725fc_6a3551b815dec.webp",
        "title": "Погода, температура и природа",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "20",
        "video": "/uploads/video/vid_6a350737956f8.mp4",
        "thumb": "/uploads/video/img_6a34c85beab0d_6a3551b836e6c.webp",
        "title": "Животные",
        "cards": "23 карточки",
        "duration": "2 мин"
      },
      {
        "id": "21",
        "video": "/uploads/video/vid_6a3507580b076.mp4",
        "thumb": "/uploads/video/img_6a348c9db66cc_6a3551b8602d5.webp",
        "title": "Спорт, хобби и развлечения",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "22",
        "video": "/uploads/video/vid_6a350774d3410.mp4",
        "thumb": "/uploads/video/img_6a34e5ff04cb9_6a3551b88549c.webp",
        "title": "Покупки, деньги и цена",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "23",
        "video": "/uploads/video/vid_6a3508a6e5385.mp4",
        "thumb": "/uploads/video/img_6a34ea17236fc_6a3551b8a9aa8.webp",
        "title": "Техника и простые предметы",
        "cards": "21 карточка",
        "duration": "2 мин"
      },
      {
        "id": "24",
        "video": "/uploads/video/vid_6a3507a1debe4.mp4",
        "thumb": "/uploads/video/img_6a34eb2c7e81e_6a3551b8cdba9.webp",
        "title": "Базовые действия на каждый день",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "25",
        "video": "/uploads/video/vid_6a353ae37b59e.mp4",
        "thumb": "/uploads/video/img_6a34ec22701a9_6a3551b8f2bed.webp",
        "title": "Действия дома и в быту",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "26",
        "video": "/uploads/video/vid_6a3507f6cc3d2.mp4",
        "thumb": "/uploads/video/img_6a34c9a360a75_6a3551b924b54.webp",
        "title": "Движение и направление",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "27",
        "video": "/uploads/video/vid_6a353b45e6fbc.mp4",
        "thumb": "/uploads/video/img_6a34cad6680c7_6a3551b94968e.webp",
        "title": "Место и предлоги",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "28",
        "video": "/uploads/video/vid_6a3503e61ab91.mp4",
        "thumb": "/uploads/video/img_6a34d465a4cd1_6a3551b96dde9.webp",
        "title": "Вопросы, союзы и служебные слова",
        "cards": "33 карточки",
        "duration": "2 мин"
      },
      {
        "id": "29",
        "video": "/uploads/video/vid_6a3502fec8e20.mp4",
        "thumb": "/uploads/video/img_6a34d5164ef2f_6a3551b991a4d.webp",
        "title": "Местоимения и притяжательные слова",
        "cards": "33 карточки",
        "duration": "2 мин"
      }
    ]
  },
  {
    "id": 2,
    "title": "A2 mix",
    "count": "28 видео",
    "badge": "Продвинутый",
    "videos": [
      {
        "id": "31",
        "video": "/uploads/video/vid_6a3503fdc171a.mp4",
        "thumb": "/uploads/video/img_6a3383ae7b931_6a3551b9db6c6.webp",
        "title": "Люди и отношения",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "32",
        "video": "/uploads/video/vid_6a35042bb10cd.mp4",
        "thumb": "/uploads/video/img_6a3383c318c86_6a3551ba0d6b8.webp",
        "title": "Характер и чувства",
        "cards": "22 карточки",
        "duration": "2 мин"
      },
      {
        "id": "33",
        "video": "/uploads/video/vid_6a35044ee36f7.mp4",
        "thumb": "/uploads/video/img_6a3383cab53d3_6a3551ba3086d.webp",
        "title": "Работа и бизнес",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "34",
        "video": "/uploads/video/vid_6a350479031ba.mp4",
        "thumb": "/uploads/video/img_6a3385932993c_6a3551ba5755d.webp",
        "title": "Образование и обучение",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "35",
        "video": "/uploads/video/vid_6a35048b68a7b.mp4",
        "thumb": "/uploads/video/img_6a3386536df05_6a3551ba7c140.webp",
        "title": "Интернет и общение",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "36",
        "video": "/uploads/video/vid_6a3504b083ec2.mp4",
        "thumb": "/uploads/video/img_6a3386974b22c_6a3551baa04c5.webp",
        "title": "Покупки и одежда",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "30",
        "video": "/uploads/video/vid_6a3504dc72c35.mp4",
        "thumb": "/uploads/video/img_6a33893814e9e_6a3551b9b6ae3.webp",
        "title": "Путешествия и отели",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "37",
        "video": "/uploads/video/vid_6a3505047c2bd.mp4",
        "thumb": "/uploads/video/img_6a338a5f0ca90_6a3551bac4614.webp",
        "title": "Здоровье и чрезвычайные ситуации",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "38",
        "video": "/uploads/video/vid_6a3505313c30f.mp4",
        "thumb": "/uploads/video/img_6a338c66a5712_6a3551bae8dd5.webp",
        "title": "Природа и окружающий мир",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "39",
        "video": "/uploads/video/vid_6a35056c1357b.mp4",
        "thumb": "/uploads/video/img_6a338d3b0b088_6a3551bb1a7d2.webp",
        "title": "Город и услуги",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "40",
        "video": "/uploads/video/vid_6a3505c77e4e8.mp4",
        "thumb": "/uploads/video/img_6a338db1880b8_6a3551bb3df47.webp",
        "title": "Дом, техника и быт",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "41",
        "video": "/uploads/video/vid_6a3505ec9bc15.mp4",
        "thumb": "/uploads/video/img_6a338e2555f01_6a3551bb61161.webp",
        "title": "Погода",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "42",
        "video": "/uploads/video/vid_6a35060df20a3.mp4",
        "thumb": "/uploads/video/img_6a338e6c72c77_6a3551bb83db0.webp",
        "title": "Еда и готовка",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "43",
        "video": "/uploads/video/vid_6a35062df2d4a.mp4",
        "thumb": "/uploads/video/img_6a3392cd61a4c_6a3551bba84ae.webp",
        "title": "Спорт и фитнес",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "44",
        "video": "/uploads/video/vid_6a35065121ff9.mp4",
        "thumb": "/uploads/video/img_6a33943f305aa_6a3551bbcbd71.webp",
        "title": "Культура и медиа",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "45",
        "video": "/uploads/video/vid_6a350674077e1.mp4",
        "thumb": "/uploads/video/img_6a3395e736abe_6a3551bbef42a.webp",
        "title": "Деньги и банк",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "46",
        "video": "/uploads/video/vid_6a350694721de.mp4",
        "thumb": "/uploads/video/img_6a33976c1ddec_6a3551bc1f374.webp",
        "title": "Время, планы и расписание",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "47",
        "video": "/uploads/video/vid_6a3506b471733.mp4",
        "thumb": "/uploads/video/img_6a3398c3c7f5e_6a3551bc43932.webp",
        "title": "Важные глаголы",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "48",
        "video": "/uploads/video/vid_6a3506ddb444d.mp4",
        "thumb": "/uploads/video/img_6a339bbc6f6fb_6a3551bc6903b.webp",
        "title": "Движение и действия",
        "cards": "23 карточки",
        "duration": "2 мин"
      },
      {
        "id": "49",
        "video": "/uploads/video/vid_6a35072590d0d.mp4",
        "thumb": "/uploads/video/img_6a339dac09fdc_6a3551bc8e467.webp",
        "title": "Готовка и домашние действия",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "50",
        "video": "/uploads/video/vid_6a350749caedb.mp4",
        "thumb": "/uploads/video/img_6a339f40de37a_6a3551bcb2b44.webp",
        "title": "Материалы и внешний вид",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "51",
        "video": "/uploads/video/vid_6a3507667a3da.mp4",
        "thumb": "/uploads/video/img_6a33a166886c2_6a3551bcd9270.webp",
        "title": "Оценка и мнение",
        "cards": "22 карточки",
        "duration": "2 мин"
      },
      {
        "id": "52",
        "video": "/uploads/video/vid_6a3507828f446.mp4",
        "thumb": "/uploads/video/img_6a33a232af6e8_6a3551bd0a994.webp",
        "title": "Наречия и связки",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "53",
        "video": "/uploads/video/vid_6a350794243db.mp4",
        "thumb": "/uploads/video/img_6a33a33611719_6a3551bd2faf3.webp",
        "title": "Фразовые глаголы",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "54",
        "video": "/uploads/video/vid_6a350be35559b.mp4",
        "thumb": "/uploads/video/img_6a34807b63c42_6a3551bd559a3.webp",
        "title": "Технология",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "55",
        "video": "/uploads/video/vid_6a350ae1bd3f1.mp4",
        "thumb": "/uploads/video/img_6a3480e1519a9_6a3551bd78eb2.webp",
        "title": "Правила, безопасность и закон",
        "cards": "23 карточки",
        "duration": "2 мин"
      },
      {
        "id": "56",
        "video": "/uploads/video/vid_6a350b5b8f0fe.mp4",
        "thumb": "/uploads/video/img_6a34817d4cb7e_6a3551bd9d220.webp",
        "title": "Идеи, мнения и разговор",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "57",
        "video": "/uploads/video/vid_6a350b9fb2364.mp4",
        "thumb": "/uploads/video/img_6a34821c60e70_6a3551bdc25a5.webp",
        "title": "Количество, измерения и форма",
        "cards": "26 карточек",
        "duration": "2 мин"
      }
    ]
  },
  {
    "id": 3,
    "title": "B1 mix",
    "count": "28 видео",
    "badge": "Уверенная база",
    "videos": [
      {
        "id": "68",
        "video": "/uploads/video/vid_6a35cb6a30510.mp4",
        "thumb": "/uploads/video/img_6a35cb6a0b8eb.webp",
        "title": "Люди, общество и отношения",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "69",
        "video": "/uploads/video/vid_6a35cb7006ade.mp4",
        "thumb": "/uploads/video/img_6a35cb6fd3318.webp",
        "title": "Характер и поведение",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "70",
        "video": "/uploads/video/vid_6a35cb75bb30a.mp4",
        "thumb": "/uploads/video/img_6a35cb7597071.webp",
        "title": "Карьера и рабочая жизнь",
        "cards": "28 карточек",
        "duration": "2 мин"
      },
      {
        "id": "71",
        "video": "/uploads/video/vid_6a35cb775343e.mp4",
        "thumb": "/uploads/video/img_6a35cb7730259.webp",
        "title": "Бизнес и управление",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "72",
        "video": "/uploads/video/vid_6a35cb78bba39.mp4",
        "thumb": "/uploads/video/img_6a35cb7899257.webp",
        "title": "Общение и аргументы",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "73",
        "video": "/uploads/video/vid_6a35cb7aa2603.mp4",
        "thumb": "/uploads/video/img_6a35cb7a7fa67.webp",
        "title": "Технологии и интернет",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "74",
        "video": "/uploads/video/vid_6a35cb7d7011b.mp4",
        "thumb": "/uploads/video/img_6a35cb7d4be97.webp",
        "title": "Путешествия и туризм",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "75",
        "video": "/uploads/video/vid_6a35cb8010a28.mp4",
        "thumb": "/uploads/video/img_6a35cb7fe0900.webp",
        "title": "Город, жилье и услуги",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "76",
        "video": "/uploads/video/vid_6a35cb833a70c.mp4",
        "thumb": "/uploads/video/img_6a35cb8316f03.webp",
        "title": "Еда, питание и ресторан",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "77",
        "video": "/uploads/video/vid_6a35cb867d7c0.mp4",
        "thumb": "/uploads/video/img_6a35cb865a562.webp",
        "title": "Здоровье и медицина",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "78",
        "video": "/uploads/video/vid_6a35cb8a176d0.mp4",
        "thumb": "/uploads/video/img_6a35cb89e704a.webp",
        "title": "Университет и обучение",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "79",
        "video": "/uploads/video/vid_6a35cb8d5ae8e.mp4",
        "thumb": "/uploads/video/img_6a35cb8d33f4a.webp",
        "title": "Дом, стиль жизни и быт",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "80",
        "video": "/uploads/video/vid_6a35cb90e7297.mp4",
        "thumb": "/uploads/video/img_6a35cb90bf79a.webp",
        "title": "Английский язык и обучение",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "81",
        "video": "/uploads/video/vid_6a35cb947d62b.mp4",
        "thumb": "/uploads/video/img_6a35cb945b01f.webp",
        "title": "Политика и общественная жизнь",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "82",
        "video": "/uploads/video/vid_6a35cb9862019.mp4",
        "thumb": "/uploads/video/img_6a35cb983a1ff.webp",
        "title": "Наука и исследование",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "83",
        "video": "/uploads/video/vid_6a35cb9be68fc.mp4",
        "thumb": "/uploads/video/img_6a35cb9bc00e4.webp",
        "title": "Измерения, данные и статистика",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "84",
        "video": "/uploads/video/vid_6a35cb9ef14e8.mp4",
        "thumb": "/uploads/video/img_6a35cb9ec7f07.webp",
        "title": "Наречия и связки",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "85",
        "video": "/uploads/video/vid_6a35cba17eef3.mp4",
        "thumb": "/uploads/video/img_6a35cba15d6ae.webp",
        "title": "Прилагательные для описания",
        "cards": "27 карточек",
        "duration": "2 мин"
      },
      {
        "id": "86",
        "video": "/uploads/video/vid_6a35cba440c52.mp4",
        "thumb": "/uploads/video/img_6a35cba41ef62.webp",
        "title": "Фразовые глаголы",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "87",
        "video": "/uploads/video/vid_6a35cba75979d.mp4",
        "thumb": "/uploads/video/img_6a35cba7385ad.webp",
        "title": "Глаголы мышления и речи",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "88",
        "video": "/uploads/video/vid_6a35cbaacadbe.mp4",
        "thumb": "/uploads/video/img_6a35cbaaa9f6b.webp",
        "title": "Чувства и психология",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "89",
        "video": "/uploads/video/vid_6a35cbadc629e.mp4",
        "thumb": "/uploads/video/img_6a35cbada5781.webp",
        "title": "Проблема, решения и результат",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "90",
        "video": "/uploads/video/vid_6a35cbb12b062.mp4",
        "thumb": "/uploads/video/img_6a35cbb1099aa.webp",
        "title": "Закон, правила и безопасность",
        "cards": "24 карточки",
        "duration": "2 мин"
      },
      {
        "id": "91",
        "video": "/uploads/video/vid_6a35cbb45036c.mp4",
        "thumb": "/uploads/video/img_6a35cbb42e7a7.webp",
        "title": "Деньги и экономика",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "92",
        "video": "/uploads/video/vid_6a35cbb766a68.mp4",
        "thumb": "/uploads/video/img_6a35cbb744fd7.webp",
        "title": "Культура, книги и искусство",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "93",
        "video": "/uploads/video/vid_6a35cbbaba11e.mp4",
        "thumb": "/uploads/video/img_6a35cbba9637f.webp",
        "title": "Спорт и соревнования",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "94",
        "video": "/uploads/video/vid_6a35cbbe6bb67.mp4",
        "thumb": "/uploads/video/img_6a35cbbe482c6.webp",
        "title": "Природа и экология",
        "cards": "26 карточек",
        "duration": "2 мин"
      },
      {
        "id": "95",
        "video": "/uploads/video/vid_6a35cbc15c6a1.mp4",
        "thumb": "/uploads/video/img_6a35cbc138fa6.webp",
        "title": "Важные действия",
        "cards": "25 карточек",
        "duration": "2 мин"
      }
    ]
  },
  {
    "id": 4,
    "title": "Глаголы",
    "count": "4 видео",
    "badge": "Все нужные глаголы",
    "videos": [
      {
        "id": "58",
        "video": "/uploads/video/vid_6a34f0ef9f523.mp4",
        "thumb": "/uploads/video/img_6a353921c3f1d_6a3551bde6d27.webp",
        "title": "Глаголы А1",
        "cards": "170 карточек",
        "duration": "10 мин"
      },
      {
        "id": "59",
        "video": "/uploads/video/vid_6a34f3d290cd2.mp4",
        "thumb": "/uploads/video/img_6a35370d306e9_6a3551be16770.webp",
        "title": "Глаголы А2",
        "cards": "186 карточек",
        "duration": "12 мин"
      },
      {
        "id": "60",
        "video": "/uploads/video/vid_6a34f46e14a84.mp4",
        "thumb": "/uploads/video/img_6a353886d487e_6a3551be3d7ec.webp",
        "title": "Глаголы В1",
        "cards": "208 карточек",
        "duration": "13 мин"
      },
      {
        "id": "64",
        "video": "/uploads/video/vid_6a3526ea9873d.mp4",
        "thumb": "/uploads/video/img_6a3533520ed0b_6a3551bedc946.webp",
        "title": "Глаголы В2",
        "cards": "368 карточек",
        "duration": "21 мин"
      }
    ]
  },
  {
    "id": 5,
    "title": "Прилагательные",
    "count": "3 видео",
    "badge": "Все лучшее вместе",
    "videos": [
      {
        "id": "61",
        "video": "/uploads/video/vid_6a351c1b034e2.mp4",
        "thumb": "/uploads/video/img_6a352ac05dcd1_6a3551be61351.webp",
        "title": "Прилагательные А1",
        "cards": "112 карточек",
        "duration": "6 мин"
      },
      {
        "id": "62",
        "video": "/uploads/video/vid_6a351cb0659d5.mp4",
        "thumb": "/uploads/video/img_6a352c35f1aef_6a3551be8851b.webp",
        "title": "Прилагательные А2",
        "cards": "114 карточек",
        "duration": "7 мин"
      },
      {
        "id": "63",
        "video": "/uploads/video/vid_6a351eac9d695.mp4",
        "thumb": "/uploads/video/img_6a352d3b1bf28_6a3551beb3554.webp",
        "title": "Прилагательные В1",
        "cards": "119 карточек",
        "duration": "7 мин"
      }
    ]
  },
  {
    "id": 6,
    "title": "Наречие",
    "count": "3 видео",
    "badge": "То что надо",
    "videos": [
      {
        "id": "65",
        "video": "/uploads/video/vid_6a352f0390f59.mp4",
        "thumb": "/uploads/video/img_6a352f0390f24_6a3551bf105ea.webp",
        "title": "Наречия А1",
        "cards": "94 карточки",
        "duration": "6 мин"
      },
      {
        "id": "66",
        "video": "/uploads/video/vid_6a352ffda0e95.mp4",
        "thumb": "/uploads/video/img_6a352ffda0e62_6a3551bf3b97a.webp",
        "title": "Наречия А2",
        "cards": "103 карточки",
        "duration": "7 мин"
      },
      {
        "id": "67",
        "video": "/uploads/video/vid_6a35315a51861.mp4",
        "thumb": "/uploads/video/img_6a35315a5182c_6a3551bf649ca.webp",
        "title": "Наречия В1",
        "cards": "119 карточек",
        "duration": "8 мин"
      }
    ]
  },
  {
    "id": 7,
    "title": "База А1",
    "count": "20 видео",
    "badge": "Это база",
    "videos": [
      {
        "id": "115",
        "video": "/uploads/video/vid_6a388b38ed06e.mp4",
        "thumb": "/uploads/video/img_6a388cc0dadd4.webp",
        "title": "Школа",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "114",
        "video": "/uploads/video/vid_6a388b371d0cd.mp4",
        "thumb": "/uploads/video/img_6a388b36ef114.webp",
        "title": "Числа",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "113",
        "video": "/uploads/video/vid_6a388b3570a31.mp4",
        "thumb": "/uploads/video/img_6a388b354e5b0.webp",
        "title": "Части тела",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "112",
        "video": "/uploads/video/vid_6a388b329e87a.mp4",
        "thumb": "/uploads/video/img_6a388b327e744.webp",
        "title": "Цвета",
        "cards": "20 карточек",
        "duration": "2 мин"
      },
      {
        "id": "111",
        "video": "/uploads/video/vid_6a388b317e095.mp4",
        "thumb": "/uploads/video/img_6a388b315c283.webp",
        "title": "Фрукты",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "110",
        "video": "/uploads/video/vid_6a388b2fdded7.mp4",
        "thumb": "/uploads/video/img_6a388b2fb9faa.webp",
        "title": "Транспорт",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "109",
        "video": "/uploads/video/vid_6a388b2e537bf.mp4",
        "thumb": "/uploads/video/img_6a388b2e2d25e.webp",
        "title": "Семья",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "108",
        "video": "/uploads/video/vid_6a388b2d09a45.mp4",
        "thumb": "/uploads/video/img_6a388b2cd7bfc.webp",
        "title": "Профессии",
        "cards": "50 карточек",
        "duration": "3 мин"
      },
      {
        "id": "107",
        "video": "/uploads/video/vid_6a388b2ad23f7.mp4",
        "thumb": "/uploads/video/img_6a388b2ab036f.webp",
        "title": "Посуда",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "106",
        "video": "/uploads/video/vid_6a388b294b6b1.mp4",
        "thumb": "/uploads/video/img_6a388b29273cf.webp",
        "title": "Одежда",
        "cards": "60 карточек",
        "duration": "3 мин"
      },
      {
        "id": "105",
        "video": "/uploads/video/vid_6a388b265e361.mp4",
        "thumb": "/uploads/video/img_6a388b263bcd2.webp",
        "title": "Овощи",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "104",
        "video": "/uploads/video/vid_6a388b23d6609.mp4",
        "thumb": "/uploads/video/img_6a388b23b3c5e.webp",
        "title": "Напитки",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "103",
        "video": "/uploads/video/vid_6a388b22915a1.mp4",
        "thumb": "/uploads/video/img_6a388b226e258.webp",
        "title": "Места в городе",
        "cards": "45 карточек",
        "duration": "3 мин"
      },
      {
        "id": "102",
        "video": "/uploads/video/vid_6a388b2051ce5.mp4",
        "thumb": "/uploads/video/img_6a388b202dc67.webp",
        "title": "Мебель",
        "cards": "25 карточек",
        "duration": "3 мин"
      },
      {
        "id": "101",
        "video": "/uploads/video/vid_6a388b1eb8c2a.mp4",
        "thumb": "/uploads/video/img_6a388b1e96b6f.webp",
        "title": "Лицо",
        "cards": "25 карточек",
        "duration": "2 мин"
      },
      {
        "id": "100",
        "video": "/uploads/video/vid_6a388b1bd347d.mp4",
        "thumb": "/uploads/video/img_6a388b1bb0de8.webp",
        "title": "Кухня",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "99",
        "video": "/uploads/video/vid_6a388b189870d.mp4",
        "thumb": "/uploads/video/img_6a388b1875b54.webp",
        "title": "Комнаты",
        "cards": "20 карточек",
        "duration": "1 мин"
      },
      {
        "id": "98",
        "video": "/uploads/video/vid_6a388b17134d6.mp4",
        "thumb": "/uploads/video/img_6a388b16e446f.webp",
        "title": "Еда",
        "cards": "50 карточек",
        "duration": "3 мин"
      },
      {
        "id": "97",
        "video": "/uploads/video/vid_6a388b13db736.mp4",
        "thumb": "/uploads/video/img_6a388d1ad576d.webp",
        "title": "Дом",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "96",
        "video": "/uploads/video/vid_6a388b119b313.mp4",
        "thumb": "/uploads/video/img_6a388c54bac02.webp",
        "title": "Город",
        "cards": "40 карточек",
        "duration": "2 мин"
      }
    ]
  },
  {
    "id": 8,
    "title": "Глаголы A1 для жизни",
    "count": "15 видео",
    "badge": "Для жизни",
    "videos": [
      {
        "id": "116",
        "video": "/uploads/video/vid_6a39f6709c878.mp4",
        "thumb": "/uploads/video/img_6a39fd5e3a7ad.webp",
        "title": "Базовые глаголы",
        "cards": "50 карточек",
        "duration": "2 мин"
      },
      {
        "id": "118",
        "video": "/uploads/video/vid_6a39f67f1f03b.mp4",
        "thumb": "/uploads/video/img_6a39fdde8cb9a.webp",
        "title": "Для движения",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "117",
        "video": "/uploads/video/vid_6a39f678ba766.mp4",
        "thumb": "/uploads/video/img_6a39f6789312d.webp",
        "title": "Для денег",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "119",
        "video": "/uploads/video/vid_6a39f682bcb26.mp4",
        "thumb": "/uploads/video/img_6a39fe592f40b.webp",
        "title": "Для дома",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "120",
        "video": "/uploads/video/vid_6a39f68353f7b.mp4",
        "thumb": "/uploads/video/img_6a39f6832a9e5.webp",
        "title": "Для еды и кухни",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "121",
        "video": "/uploads/video/vid_6a39f689940c4.mp4",
        "thumb": "/uploads/video/img_6a39f6896ac9e.webp",
        "title": "Для спорта",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "122",
        "video": "/uploads/video/vid_6a39f68b9235e.mp4",
        "thumb": "/uploads/video/img_6a39ff546d9b6.webp",
        "title": "Глаголы мышления",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "129",
        "video": "/uploads/video/vid_6a39f69120232.mp4",
        "thumb": "/uploads/video/img_6a39fff0617b8.webp",
        "title": "Глаголы на каждый день",
        "cards": "50 карточек",
        "duration": "3 мин"
      },
      {
        "id": "127",
        "video": "/uploads/video/vid_6a39f690b68a1.mp4",
        "thumb": "/uploads/video/img_6a3a0059d62d2.webp",
        "title": "Глаголы на работе",
        "cards": "45 карточек",
        "duration": "2 мин"
      },
      {
        "id": "124",
        "video": "/uploads/video/vid_6a39f68ed1b21.mp4",
        "thumb": "/uploads/video/img_6a39f9d6a5440.webp",
        "title": "Глаголы общения",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "123",
        "video": "/uploads/video/vid_6a39f68c70b8a.mp4",
        "thumb": "/uploads/video/img_6a39fa4822b52.webp",
        "title": "Глаголы ошибок",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "125",
        "video": "/uploads/video/vid_6a39f6902daab.mp4",
        "thumb": "/uploads/video/img_6a39fac0723de.webp",
        "title": "Для путешествия",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "126",
        "video": "/uploads/video/vid_6a39f69087782.mp4",
        "thumb": "/uploads/video/img_6a39fb4517f6d.webp",
        "title": "Глаголы успеха",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "128",
        "video": "/uploads/video/vid_6a39f690e71e9.mp4",
        "thumb": "/uploads/video/img_6a39fb9da8c59.webp",
        "title": "Глаголы чувств",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "130",
        "video": "/uploads/video/vid_6a39f69456f58.mp4",
        "thumb": "/uploads/video/img_6a39fc4d71813.webp",
        "title": "Самые частые глаголы",
        "cards": "100 карточек",
        "duration": "5 мин"
      }
    ]
  },
  {
    "id": 9,
    "title": "Слова для жизни",
    "count": "11 видео",
    "badge": "Для жизни",
    "videos": [
      {
        "id": "131",
        "video": "/uploads/video/vid_6a3baf6dc5740.mp4",
        "thumb": "/uploads/video/img_6a3baf6d929f4.webp",
        "title": "Слова в отеле",
        "cards": "30 карточек",
        "duration": "2 мин"
      },
      {
        "id": "132",
        "video": "/uploads/video/vid_6a3baf709f700.mp4",
        "thumb": "/uploads/video/img_6a3baf707073a.webp",
        "title": "Слова в магазине",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "133",
        "video": "/uploads/video/vid_6a3baf71b8082.mp4",
        "thumb": "/uploads/video/img_6a3baf718f418.webp",
        "title": "Слова в аэропорту",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "134",
        "video": "/uploads/video/vid_6a3baf7bb4d1b.mp4",
        "thumb": "/uploads/video/img_6a3baf7b8c073.webp",
        "title": "Слова у врача",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "135",
        "video": "/uploads/video/vid_6a3baf7f6531d.mp4",
        "thumb": "/uploads/video/img_6a3baf7f3bbc9.webp",
        "title": "Слова из фильмов",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "136",
        "video": "/uploads/video/vid_6a3baf8246e62.mp4",
        "thumb": "/uploads/video/img_6a3baf821cc6c.webp",
        "title": "Слова и инстаграмма и тикток",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "137",
        "video": "/uploads/video/vid_6a3baf8556f81.mp4",
        "thumb": "/uploads/video/img_6a3baf852e8d6.webp",
        "title": "Слова для собеседования",
        "cards": "40 карточек",
        "duration": "2 мин"
      },
      {
        "id": "138",
        "video": "/uploads/video/vid_6a3baf8b5b8da.mp4",
        "thumb": "/uploads/video/img_6a3baf8b2ff3f.webp",
        "title": "Слова для работы",
        "cards": "50 карточек",
        "duration": "2 мин"
      },
      {
        "id": "139",
        "video": "/uploads/video/vid_6a3baf8fb6b58.mp4",
        "thumb": "/uploads/video/img_6a3baf8f87f4c.webp",
        "title": "Слова для путешествия",
        "cards": "50 карточек",
        "duration": "2 мин"
      },
      {
        "id": "140",
        "video": "/uploads/video/vid_6a3baf8fe8f44.mp4",
        "thumb": "/uploads/video/img_6a3baf8fbc3a6.webp",
        "title": "Слова для отношений",
        "cards": "35 карточек",
        "duration": "2 мин"
      },
      {
        "id": "141",
        "video": "/uploads/video/vid_6a3baf90abb89.mp4",
        "thumb": "/uploads/video/img_6a3baf907d0b8.webp",
        "title": "Слова для денег",
        "cards": "35 карточек",
        "duration": "2 мин"
      }
    ]
  },
  {
    "id": 10,
    "title": "Фразовые глаголы",
    "count": "4 видео",
    "badge": "",
    "videos": [
      {
        "id": "142",
        "video": "/uploads/video/vid_6a450a9e70bbe.mp4",
        "thumb": "/uploads/video/img_6a450a9e491f6.webp",
        "title": "Фразовые глаголы А1",
        "cards": "70 карточек",
        "duration": "4 мин"
      },
      {
        "id": "143",
        "video": "/uploads/video/vid_6a450aa0d5149.mp4",
        "thumb": "/uploads/video/img_6a450aa0b02ed.webp",
        "title": "Фразовые глаголы А2",
        "cards": "91 карточка",
        "duration": "6 мин"
      },
      {
        "id": "144",
        "video": "/uploads/video/vid_6a450aa2f273e.mp4",
        "thumb": "/uploads/video/img_6a450aa2c8cbd.webp",
        "title": "Фразовые глаголы В1",
        "cards": "111 карточек",
        "duration": "7 мин"
      },
      {
        "id": "145",
        "video": "/uploads/video/vid_6a450ae2cd31a.mp4",
        "thumb": "/uploads/video/img_6a450ae2a54ec.webp",
        "title": "Фразовые глаголы В2",
        "cards": "150 карточек",
        "duration": "10 мин"
      }
    ]
  }
];