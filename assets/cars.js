// 6 placeholder cars. Real data can replace these later.
// Photos from Unsplash (free commercial use).
window.CARS = [
  {
    slug: "bmw-x3-2022",
    make: "BMW",
    model: "X3",
    trim: "xDrive30i M Sport",
    year: 2022,
    price: 34900,
    finance: 389,
    km: 42000,
    fuel: "Бензин",
    gearbox: "Автомат",
    power: "245 л.с.",
    drive: "Полный",
    color: "Чёрный сапфир",
    status: "new",
    photo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1555215858-9dc80eefa68e?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
    ],
    repairTeaser: "Правое крыло, дверь, покраска 3 элементов",
    repair: {
      master: { name: "Алехандро Мартинес", role: "Мастер по кузову, 14 лет опыта", initial: "А" },
      hours: 72,
      partsTotal: 1850,
      completed: "Март 2026",
      items: [
        {
          title: "Замена переднего правого крыла",
          date: "18–19 марта",
          description: "Старое крыло деформировано после бокового удара. Установили новое заводское крыло BMW, выправили лонжерон, проверили геометрию кузова на стенде.",
          parts: "Крыло BMW OEM · Клипсы · Подкрылок",
          before: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?w=800&q=80",
          after: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80"
        },
        {
          title: "Покраска 3 кузовных элементов",
          date: "20–23 марта",
          description: "Правая дверь, крыло и часть капота. Подобрали родной цвет Sapphire Black (код 475) через спектрометр. Сушка в камере, полировка до зеркального блеска.",
          parts: "Краска BASF · Лак · Грунт · Полироль",
          before: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80",
          after: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
        },
        {
          title: "Замена тормозных дисков и колодок",
          date: "24 марта",
          description: "Профилактика — установили новые оригинальные диски и колодки по кругу. Прокачали тормозную систему, заменили жидкость DOT 4.",
          parts: "Диски BMW OEM (4 шт.) · Колодки · Жидкость DOT 4",
          before: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
          after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
        },
        {
          title: "Детейлинг салона и кузова",
          date: "25–26 марта",
          description: "Химчистка кожи, полировка кузова в 2 этапа, нанесение керамического покрытия. Антибактериальная обработка системы кондиционирования.",
          parts: "Gyeon керамика · Koch Chemie химия",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
        }
      ]
    },
    equipment: [
      "Панорамная крыша","Электро-сиденья с памятью","Подогрев всех сидений",
      "Проекционный дисплей","Камеры 360°","Адаптивный круиз-контроль",
      "Keyless Go","Система парковки","Harman Kardon аудио",
      "Навигация Professional","Apple CarPlay / Android Auto","Ambient lighting"
    ]
  },
  {
    slug: "audi-a6-2023",
    make: "Audi",
    model: "A6",
    trim: "50 TDI quattro S-line",
    year: 2023,
    price: 42500,
    finance: 475,
    km: 28000,
    fuel: "Дизель",
    gearbox: "Автомат",
    power: "286 л.с.",
    drive: "Полный",
    color: "Серый Daytona",
    status: "new",
    photo: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664615278-3eaaf3b11e16?w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80",
      "https://images.unsplash.com/photo-1605515298946-d0573716f25c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200&q=80"
    ],
    repairTeaser: "Задний бампер, задняя дверь, покраска",
    repair: {
      master: { name: "Алехандро Мартинес", role: "Мастер по кузову", initial: "А" },
      hours: 54,
      partsTotal: 1420,
      completed: "Февраль 2026",
      items: [
        {
          title: "Замена заднего бампера",
          date: "10–11 февраля",
          description: "Оригинальный бампер OEM Audi, установка датчиков парковки и омывателей камеры заднего вида из снятого бампера.",
          parts: "Бампер Audi OEM · Крепёж · Герметик",
          before: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
          after: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
        },
        {
          title: "Рихтовка и покраска задней двери",
          date: "12–14 февраля",
          description: "Вмятина 15×8 см выправлена без шпаклёвки (безударная технология). Покрашена задняя левая дверь в родной цвет Daytona Grey (код LY7Q).",
          parts: "Краска Glasurit · Лак · Грунт",
          before: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80",
          after: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
        },
        {
          title: "Замена ТО и жидкостей",
          date: "15 февраля",
          description: "Масло в двигателе, масляный и воздушный фильтры, жидкость в АКПП, антифриз, свечи накаливания.",
          parts: "Castrol Edge 5W-30 · Фильтры Mahle · Свечи NGK",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
        }
      ]
    },
    equipment: [
      "Matrix LED фары","Пневмоподвеска","Massage-функция в передних сиденьях",
      "Вентиляция сидений","Bang & Olufsen 3D аудио","Виртуальная панель",
      "Head-Up Display","Адаптивный круиз","Assisted driving package",
      "Keyless Advanced","MMI Navigation plus","Apple CarPlay беспроводной"
    ]
  },
  {
    slug: "tesla-model-y-2023",
    make: "Tesla",
    model: "Model Y",
    trim: "Long Range AWD",
    year: 2023,
    price: 38900,
    finance: 435,
    km: 31000,
    fuel: "Электро",
    gearbox: "Автомат",
    power: "514 л.с.",
    drive: "Полный",
    color: "Белый",
    status: "reserved",
    photo: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80"
    ],
    repairTeaser: "Передний бампер, подкрылок, диагностика батареи",
    repair: {
      master: { name: "Карлос Руис", role: "Мастер по электромобилям", initial: "К" },
      hours: 38,
      partsTotal: 1680,
      completed: "Февраль 2026",
      items: [
        {
          title: "Замена переднего бампера и подкрылка",
          date: "3–4 февраля",
          description: "Оригинальный бампер Tesla с установкой всех датчиков Autopilot, радара и камер. Юстировка системы в сервисном режиме.",
          parts: "Бампер Tesla OEM · Подкрылок · Крепёж",
          before: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?w=800&q=80",
          after: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
        },
        {
          title: "Диагностика батареи и силовой установки",
          date: "5 февраля",
          description: "Полный отчёт по здоровью батареи — деградация менее 3% от номинала, что характерно для пробега 31 тыс. км. Все моторы работают штатно.",
          parts: "Диагностика Tesla Toolbox · Отчёт о состоянии",
          before: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
          after: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
        },
        {
          title: "Замена стеклоомывателя и щёток",
          date: "6 февраля",
          description: "Форсунки омывателя заменены, щётки стеклоочистителя — оригинальные Tesla.",
          parts: "Форсунки · Щётки · Омывающая жидкость",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
        }
      ]
    },
    equipment: [
      "Autopilot (базовый)","Панорамная крыша","Электропривод руля",
      "Подогрев всех сидений + руля","Premium аудио 14 динамиков","HEPA-фильтр с Bioweapon Defense",
      "Навигация с планировщиком зарядок","Беспроводная зарядка x2","Второй экран для задних пассажиров",
      "Тонировка","Коврики Tesla премиум","4G LTE + Premium Connectivity"
    ]
  },
  {
    slug: "mercedes-glc-2022",
    make: "Mercedes-Benz",
    model: "GLC 220d",
    trim: "4MATIC AMG Line",
    year: 2022,
    price: 36900,
    finance: 412,
    km: 48000,
    fuel: "Дизель",
    gearbox: "Автомат",
    power: "194 л.с.",
    drive: "Полный",
    color: "Полярно-белый",
    status: "new",
    photo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80"
    ],
    repairTeaser: "Левое крыло, сушка салона, покраска",
    repair: {
      master: { name: "Алехандро Мартинес", role: "Мастер по кузову", initial: "А" },
      hours: 62,
      partsTotal: 1550,
      completed: "Март 2026",
      items: [
        {
          title: "Восстановление левого крыла",
          date: "5–7 марта",
          description: "Правка без сварки, шпаклёвка в минимум слоёв, грунт и покраска в родной Polar White (код 149). Подбор цвета через спектрометр.",
          parts: "Краска Glasurit · Шпаклёвка · Лак · Грунт",
          before: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?w=800&q=80",
          after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
        },
        {
          title: "Сушка и химчистка салона",
          date: "8–10 марта",
          description: "После вскрытия обивки обнаружена влага под водительским ковром. Полная разборка салона, просушка в камере 48 часов, антигрибковая обработка, новая шумоизоляция.",
          parts: "Шумоизоляция · Ковёр · Антисептик",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80"
        },
        {
          title: "ТО 60 000 по регламенту",
          date: "11 марта",
          description: "Масло, фильтры, свечи накаливания, жидкость АКПП 9G-TRONIC, тормозная жидкость. Проверка подвески, развал-схождение.",
          parts: "Mobil 1 · Mann Filter · Mercedes ATF",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80"
        }
      ]
    },
    equipment: [
      "AMG Line пакет","LED High Performance фары","Электропривод двери багажника",
      "MBUX мультимедиа","Apple CarPlay / Android Auto","Камеры 360°",
      "Подогрев сидений","Climate Control 3-зонный","Burmester Surround Sound",
      "Keyless Go","Distronic+ круиз","Парктроник по кругу"
    ]
  },
  {
    slug: "vw-golf-2023",
    make: "Volkswagen",
    model: "Golf 8",
    trim: "GTI 2.0 TSI DSG",
    year: 2023,
    price: 28900,
    finance: 325,
    km: 22000,
    fuel: "Бензин",
    gearbox: "Автомат",
    power: "245 л.с.",
    drive: "Передний",
    color: "Красный Kings",
    status: "new",
    photo: "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80",
      "https://images.unsplash.com/photo-1553260168-6c8d2f6fa6ec?w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80"
    ],
    repairTeaser: "Капот, покраска, замена лобового стекла",
    repair: {
      master: { name: "Хосе Фернандес", role: "Мастер по кузову", initial: "Х" },
      hours: 48,
      partsTotal: 1280,
      completed: "Март 2026",
      items: [
        {
          title: "Замена лобового стекла",
          date: "1 марта",
          description: "Оригинальное стекло VW с подогревом и датчиком дождя. Новые уплотнители и клей полиуретановый — герметичность 100%.",
          parts: "Стекло VW OEM · Уплотнитель · Клей Sika",
          before: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?w=800&q=80",
          after: "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=800&q=80"
        },
        {
          title: "Рихтовка и покраска капота",
          date: "2–4 марта",
          description: "Вмятины на капоте от града. Рихтовка клеевыми грибками, шлифовка, покраска в цвет Kings Red Metallic (код LC3T). Керамика сверху.",
          parts: "Краска BASF · Лак · Грибки · Керамика Gyeon",
          before: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80",
          after: "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=800&q=80"
        },
        {
          title: "Диагностика DSG и ТО",
          date: "5 марта",
          description: "Смена масла в DSG, проверка мехатроника (отклонений нет), замена охлаждающей жидкости, обновление ПО до последней версии.",
          parts: "Масло DSG VW G 052 182 · Жидкость G13",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
        }
      ]
    },
    equipment: [
      "GTI пакет","Спортивные сиденья с клетчатой отделкой","Цифровая панель Digital Cockpit Pro",
      "Discover Pro навигация 10″","Apple CarPlay беспроводной","Беспроводная зарядка",
      "Travel Assist","Matrix IQ LED","Progressive Steering",
      "Подогрев всех сидений","Harman Kardon аудио","3-зонный климат"
    ]
  },
  {
    slug: "toyota-rav4-2022",
    make: "Toyota",
    model: "RAV4",
    trim: "2.5 Hybrid AWD Executive",
    year: 2022,
    price: 31500,
    finance: 352,
    km: 55000,
    fuel: "Гибрид",
    gearbox: "Автомат",
    power: "218 л.с.",
    drive: "Полный",
    color: "Серый металлик",
    status: "new",
    photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80",
      "https://images.unsplash.com/photo-1606016519091-f6f4e69a88be?w=1200&q=80"
    ],
    repairTeaser: "Задний бампер, крышка багажника, полировка",
    repair: {
      master: { name: "Хосе Фернандес", role: "Мастер по кузову", initial: "Х" },
      hours: 42,
      partsTotal: 980,
      completed: "Февраль 2026",
      items: [
        {
          title: "Замена заднего бампера",
          date: "20–21 февраля",
          description: "Бампер с лёгким повреждением заменён на новый OEM Toyota. Все датчики парковки переустановлены, юстировка.",
          parts: "Бампер Toyota OEM · Парктроники · Крепёж",
          before: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
          after: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
        },
        {
          title: "Рихтовка крышки багажника",
          date: "22–23 февраля",
          description: "Небольшая вмятина на крышке багажника. Правка без шпаклёвки, покраска в родной цвет Silver Metallic (код 1K3).",
          parts: "Краска Toyota · Лак · Грунт",
          before: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80",
          after: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
        },
        {
          title: "Техобслуживание гибрида",
          date: "24 февраля",
          description: "Диагностика высоковольтной батареи — деградация 4% от номинала (хороший показатель для 55 тыс. км). ТО по регламенту, инверторная жидкость.",
          parts: "Масло 0W-20 · Фильтры · Инверторная жидкость",
          before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
          after: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80"
        }
      ]
    },
    equipment: [
      "Полный привод E-Four","JBL Premium аудио","Панорамная крыша",
      "Toyota Safety Sense","Подогрев руля и сидений","Вентиляция сидений",
      "Камера 360°","Head-Up Display","Беспроводная зарядка",
      "Apple CarPlay / Android Auto","Адаптивный круиз","Keyless Smart Entry"
    ]
  }
];
