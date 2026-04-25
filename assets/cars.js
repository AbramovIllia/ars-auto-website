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
    equipment: [
      "Полный привод E-Four","JBL Premium аудио","Панорамная крыша",
      "Toyota Safety Sense","Подогрев руля и сидений","Вентиляция сидений",
      "Камера 360°","Head-Up Display","Беспроводная зарядка",
      "Apple CarPlay / Android Auto","Адаптивный круиз","Keyless Smart Entry"
    ]
  }
];
