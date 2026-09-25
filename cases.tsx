import type { ReactElement } from "react";

function SchoolIllustration() {
  return (
    <svg
      viewBox="0 0 400 230"
      fill="none"
      aria-hidden="true"
      className="h-48 w-full sm:h-52"
    >
      <defs>
        <linearGradient
          id="case-a-line"
          x1="60"
          y1="30"
          x2="340"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      <rect width="400" height="230" rx="18" fill="#241747" />
      <circle cx="342" cy="30" r="78" fill="#00E5FF" opacity="0.14" />
      <circle cx="46" cy="202" r="90" fill="#E879F9" opacity="0.12" />
      <circle cx="200" cy="115" r="120" fill="#B79CFF" opacity="0.06" />

      <path
        d="M72 84l46-17 46 17-46 17-46-17Z"
        stroke="url(#case-a-line)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M72 84v44c0 13 20.6 23 46 23s46-10 46-23V84"
        stroke="url(#case-a-line)"
        strokeWidth="2.2"
      />
      <path
        d="M118 67V56"
        stroke="url(#case-a-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="118" cy="52" r="4.5" fill="#00E5FF" />
      <path
        d="M164 84c11 7.5 18 18 18 31"
        stroke="url(#case-a-line)"
        strokeWidth="2.2"
      />
      <circle cx="183" cy="119" r="4.5" fill="#E879F9" />

      <path
        d="M200 170h144"
        stroke="#FFFFFF"
        strokeOpacity="0.16"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M214 170v-16M238 170v-28M262 170v-42"
        stroke="#FFFFFF"
        strokeOpacity="0.3"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M292 138h44"
        stroke="url(#case-a-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M336 138l-15-8M336 138l-15 8"
        stroke="url(#case-a-line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="314"
        y="106"
        fill="url(#case-a-line)"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        fontSize="30"
        textAnchor="middle"
      >
        −40%
      </text>
    </svg>
  );
}

function FinanceIllustration() {
  return (
    <svg
      viewBox="0 0 400 230"
      fill="none"
      aria-hidden="true"
      className="h-48 w-full sm:h-52"
    >
      <defs>
        <linearGradient
          id="case-b-line"
          x1="60"
          y1="30"
          x2="340"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      <rect width="400" height="230" rx="18" fill="#241747" />
      <circle cx="46" cy="36" r="80" fill="#E879F9" opacity="0.12" />
      <circle cx="346" cy="196" r="84" fill="#00E5FF" opacity="0.14" />
      <circle cx="200" cy="115" r="110" fill="#B79CFF" opacity="0.06" />

      <rect
        x="62"
        y="56"
        width="96"
        height="118"
        rx="10"
        stroke="url(#case-b-line)"
        strokeWidth="2.2"
      />
      <path
        d="M80 138l22-24 18 16 26-34"
        stroke="url(#case-b-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="84" cy="82" r="3.5" fill="#00E5FF" />
      <path d="M138 46l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#E879F9" />
      <path
        d="M166 32l2.2 6 6 2.2-6 2.2-2.2 6-2.2-6-6-2.2 6-2.2Z"
        fill="#00E5FF"
      />
      <path
        d="M118 184l2.2 6 6 2.2-6 2.2-2.2 6-2.2-6-6-2.2 6-2.2Z"
        fill="#B79CFF"
      />

      <rect
        x="212"
        y="58"
        width="112"
        height="104"
        rx="10"
        stroke="url(#case-b-line)"
        strokeWidth="2.2"
      />
      <path
        d="M212 96h112"
        stroke="#FFFFFF"
        strokeOpacity="0.15"
        strokeWidth="2"
      />
      <path
        d="M234 58V44M302 58V44"
        stroke="url(#case-b-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M246 128l14 15 30-36"
        stroke="#7AFFB9"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="242" cy="78" r="2.5" fill="#E879F9" />
      <circle cx="256" cy="78" r="2.5" fill="#E879F9" />
      <circle cx="270" cy="78" r="2.5" fill="#E879F9" />
      <circle cx="284" cy="78" r="2.5" fill="#E879F9" />
      <circle cx="298" cy="78" r="2.5" fill="#E879F9" />

      <rect
        x="226"
        y="176"
        width="72"
        height="9"
        rx="4.5"
        fill="#FFFFFF"
        fillOpacity="0.12"
      />
      <rect x="226" y="176" width="68" height="9" rx="4.5" fill="#00E5FF" />
      <text
        x="312"
        y="184"
        fill="url(#case-b-line)"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        fontSize="24"
        textAnchor="middle"
      >
        95%
      </text>
    </svg>
  );
}

function EdTechIllustration() {
  return (
    <svg
      viewBox="0 0 400 230"
      fill="none"
      aria-hidden="true"
      className="h-48 w-full sm:h-52"
    >
      <defs>
        <linearGradient
          id="case-c-line"
          x1="60"
          y1="30"
          x2="340"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      <rect width="400" height="230" rx="18" fill="#241747" />
      <circle cx="58" cy="46" r="84" fill="#E879F9" opacity="0.12" />
      <circle cx="348" cy="198" r="88" fill="#00E5FF" opacity="0.14" />
      <circle cx="200" cy="115" r="116" fill="#B79CFF" opacity="0.06" />

      <rect
        x="48"
        y="56"
        width="74"
        height="100"
        rx="10"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
      />
      <rect
        x="58"
        y="70"
        width="54"
        height="36"
        rx="6"
        fill="#FFFFFF"
        fillOpacity="0.08"
      />
      <path
        d="M58 126h54"
        stroke="#FFFFFF"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M58 138h38"
        stroke="#FFFFFF"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M58 150h46"
        stroke="#FFFFFF"
        strokeOpacity="0.2"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M172 68h64l-22 40h-20l-22-40Z"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M186 108h36l-14 26h-8l-14-26Z"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="204" cy="152" r="6" fill="#00E5FF" />

      <rect
        x="262"
        y="64"
        width="98"
        height="32"
        rx="16"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
      />
      <path
        d="M272 96l-10 14"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect
        x="282"
        y="112"
        width="78"
        height="32"
        rx="16"
        fill="#E879F9"
        fillOpacity="0.12"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
      />
      <rect
        x="262"
        y="156"
        width="72"
        height="30"
        rx="15"
        stroke="url(#case-c-line)"
        strokeWidth="2.2"
        strokeOpacity="0.7"
      />

      <text
        x="204"
        y="196"
        fill="url(#case-c-line)"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        fontSize="30"
        textAnchor="middle"
      >
        80%
      </text>
    </svg>
  );
}

type CaseArtwork = () => ReactElement;

type CaseItem = {
  number: string;
  title: string;
  tasks: string[];
  stat: string;
  result: string;
  artwork: CaseArtwork;
};

const cases: CaseItem[] = [
  {
    number: "01",
    title: "Онлайн-школа по подготовке к ЕГЭ",
    tasks: ["Фирменный стиль", "Презентации", "Реклама"],
    stat: "−40%",
    result: "Снизили стоимость заявки за первый месяц работы.",
    artwork: SchoolIllustration,
  },
  {
    number: "02",
    title: "Эксперт-консультант по финансам",
    tasks: ["Реставрация архивных фото", "Чат-бот для записи"],
    stat: "95%",
    result: "Загрузка расписания эксперта выросла до 95%.",
    artwork: FinanceIllustration,
  },
  {
    number: "03",
    title: "EdTech-стартап",
    tasks: ["Карточки товаров", "Воронка продаж в Telegram-боте"],
    stat: "80%",
    result: "Автоматизировали 80% первичных запросов — отдел продаж разгружен.",
    artwork: EdTechIllustration,
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-24 sm:py-28">
      <div
        className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-neon-orchid/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neon-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Кейсы
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Результаты, которые говорят{" "}
            <span className="text-gradient-brand">сами за себя</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm"
            >
              <item.artwork />

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
                  Кейс {item.number}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-white">
                  {item.title}
                </h3>

                <div className="mt-5">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">
                    Задача
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {item.tasks.map((task) => (
                      <li
                        key={task}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs leading-relaxed text-white/75"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-1 items-end">
                  <div className="w-full rounded-xl border border-white/10 bg-night-deep/50 px-4 py-3.5">
                    <p className="font-mono text-2xl font-bold text-gradient-brand">
                      {item.stat}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-white/80">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
