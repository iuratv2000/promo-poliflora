/**
 * Single source of truth for site-wide copy/config.
 * Section components should read from here (or their own src/data/*.ts file)
 * rather than hardcoding strings, so copy can be edited in one place.
 *
 * Campaign: "Осенняя акция" — autumn honey promo, Telegram-first ordering.
 */
export const site = {
  name: 'Dor de Miere',
  telegramUrl: 'https://t.me/dordemiere_md',
  instagramUrl: 'https://instagram.com/dordemiere_md',

  nav: [
    { href: '#offer', label: 'Выбрать объём' },
    { href: '#story', label: 'О мёде' },
    { href: '#trust', label: 'О нас' },
  ],

  hero: {
    eyebrow: 'Осенняя акция',
    title: 'Цветочный мёд с семейной пасеки.',
    subtitle: 'Подготовьте иммунитет к холодам с выгодой до 20%.',
    subtitleHighlight: '20%',
    ctaLabel: 'Выбрать объём',
    ctaHref: '#offer',
  },

  story: {
    title: 'О мёде',
    // split so the crystallization sentence can be set off visually (italic/denser)
    // without the rest of the paragraph reading as one flat "brick" of text
    bodyBefore:
      'Каждая баночка хранит в себе нектар сотен цветов и тепло ручного труда нашей семьи на севере Молдовы. ',
    bodyEmphasis:
      'Обратите внимание, что со временем наш мёд затвердевает и кристаллизуется, что является лучшим доказательством его природного происхождения без нагрева и сиропов.',
    bodyAfter:
      ' Это абсолютно живой, бережно собранный продукт для вашего иммунитета и осеннего уюта.',
  },

  offer: {
    title: 'Выбрать объём',
    subtitle: 'Выберите объём — от пробной баночки до запаса на всю зиму.',
    plans: [
      {
        weight: '750 г',
        volumeLabel: 'Пробный объём',
        tag: 'Для знакомства',
        price: '85 лей',
        oldPrice: undefined as string | undefined,
        savings: undefined as string | undefined,
        note: 'Отличный старт.',
        featured: false,
      },
      {
        weight: '1.5 кг',
        volumeLabel: 'Семейный объём',
        tag: 'Семейный формат',
        price: '150 лей',
        oldPrice: '170 лей',
        savings: 'Выгода 20 лей',
        note: 'Хит продаж.',
        featured: true,
      },
      {
        weight: '4.5 кг',
        volumeLabel: 'Большой объём',
        tag: 'Запас на зиму',
        price: '400 лей',
        oldPrice: '510 лей',
        savings: 'Выгода 110 лей',
        note: 'Максимальная экономия.',
        featured: false,
      },
    ],
    ctaLabel: 'Заказать в Telegram',
  },

  trust: {
    fact: 'Полностью ручной труд, контроль качества от рамки до банки — на каждом этапе, от пасеки до вашей баночки.',
  },

  footer: {
    ctaLabel: 'Подписаться на канал',
    privacyHref: '/privacy.html',
    privacyLabel: 'Политика конфиденциальности',
  },
} as const
