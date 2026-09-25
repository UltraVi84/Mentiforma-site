import { Check } from "lucide-react";

type ServiceIcon = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3c.55 3.9 2.35 5.7 6 6-3.65.3-5.45 2.1-6 6-.55-3.9-2.35-5.7-6-6 3.65-.3 5.45-2.1 6-6Z"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14c.3 1.9 1.1 2.7 3 3-1.9.3-2.7 1.1-3 3-.3-1.9-1.1-2.7-3-3 1.9-.3 2.7-1.1 3-3Z"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15.5c.25 1.4.85 2 2.25 2.25-1.4.25-2 .85-2.25 2.25-.25-1.4-.85-2-2.25-2.25 1.4-.25 2-.85 2.25-2.25Z"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="1.1" fill="url(#services-icon-gradient)" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WebinarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="2.5"
        y="4.5"
        width="15"
        height="10.5"
        rx="2"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
      />
      <path
        d="M6 20h8M10 20v-5"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m10.4 8.4 3.4 2.3-3.4 2.3V8.4Z"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.4-4.4-1.2L3 20l1.4-4.2A8.5 8.5 0 1 1 21 11.5Z"
        stroke="url(#services-icon-gradient)"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11.5" r="1.2" fill="url(#services-icon-gradient)" />
      <circle cx="15" cy="11.5" r="1.2" fill="url(#services-icon-gradient)" />
    </svg>
  );
}

type SubService = {
  name: string;
  detail?: string;
};

type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
  subServices: SubService[];
  price: string;
  priceNote: string;
};

const services: Service[] = [
  {
    icon: SparklesIcon,
    title: "AI-продакшн под ключ",
    description:
      "Создаём весь креативный контент для вашего бренда с помощью нейросетей: от логотипа и презентаций до музыкальных треков и оживления архивных фото. Быстро, в единой стилистике, без найма десятка подрядчиков.",
    subServices: [
      { name: "логотипы и брендинг", detail: "от 3 дней" },
      { name: "дизайн презентаций", detail: "до 20 слайдов" },
      {
        name: "карточки товаров для маркетплейсов",
        detail: "комплект от 10 позиций",
      },
      {
        name: "реставрация и оживление фото",
        detail: "до 20 фото",
      },
      { name: "музыкальные треки", detail: "до 3 минут, с правами" },
    ],
    price: "от 45 000 ₽ за пакет",
    priceNote: "точный расчёт после брифа",
  },
  {
    icon: TargetIcon,
    title: "Реклама в Яндекс Директ",
    description:
      "Приведём горячих клиентов, а не просто сольём бюджет. Настраиваю кампании под ключ, веду и оптимизирую еженедельно. Прозрачная аналитика: вы видите, откуда пришёл каждый лид и сколько он стоил.",
    subServices: [
      { name: "настройка кампаний с нуля", detail: "5–7 дней" },
      { name: "ведение и оптимизация", detail: "минимум 1 месяц" },
      {
        name: "сквозная аналитика",
        detail: "Метрика, цели, коллтрекинг, CRM",
      },
      { name: "медиапланирование", detail: "CPL, ROMI" },
      { name: "аудит текущих кампаний", detail: "3 дня" },
    ],
    price: "от 35 000 ₽ за настройку + рекламный бюджет",
    priceNote: "ведение — от 25 000 ₽/мес",
  },
  {
    icon: WebinarIcon,
    title: "Модерация и техподдержка вебинаров",
    description:
      "Проведёте эфир безупречно, даже если у вас 1000+ участников. Беру на себя всю техническую рутину: от подключения спикеров до монтажа записи.",
    subServices: [
      {
        name: "техподдержка спикеров",
        detail: "репетиция за час до старта",
      },
      { name: "модерация чата" },
      {
        name: "продающие комнаты и сопровождение сделок в прямом эфире",
      },
      {
        name: "запись и монтаж трансляции",
        detail: "готовый материал через 48 часов",
      },
      {
        name: "технический чек-лист",
        detail: "Zoom, Webinar.ru, YouTube, VK Live",
      },
    ],
    price: "от 15 000 ₽ за мероприятие",
    priceNote: "пакет на 4 эфира в месяц — от 50 000 ₽",
  },
  {
    icon: BotIcon,
    title: "Разработка чат-ботов",
    description:
      "Автоматизируем продажи и поддержку 24/7. Бот не спит, не устаёт и не теряет заявки. Настраиваю под ваши бизнес-процессы.",
    subServices: [
      { name: "боты для продаж", detail: "amoCRM, Bitrix24" },
      { name: "боты для поддержки" },
      { name: "квизы и автоворонки" },
      {
        name: "интеграции",
        detail: "Telegram, WhatsApp, VK, ЮKassa, CloudPayments",
      },
      { name: "аналитика и доработка" },
    ],
    price: "от 25 000 ₽ за бота",
    priceNote: "поддержка — от 10 000 ₽/мес",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
        <defs>
          <linearGradient
            id="services-icon-gradient"
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#E879F9" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-neon-orchid/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Услуги
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Комплексные решения для роста
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-hover flex flex-col rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {service.description}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {service.subServices.map((sub) => (
                  <li key={sub.name} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-orchid"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-snug text-white/80">
                      {sub.name}
                      {sub.detail && (
                        <span className="text-white/45"> — {sub.detail}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-night-deep/50 px-4 py-3">
                <p className="font-mono text-[11px] tracking-[0.2em] text-neon-cyan uppercase">
                  Цена
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white">
                  {service.price}
                </p>
                <p className="mt-0.5 text-xs text-white/50">
                  {service.priceNote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
