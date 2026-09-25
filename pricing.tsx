import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  audience: string;
  includes: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Базовый",
    price: "45 000 ₽",
    audience: "Для стартапов и тестирования гипотез.",
    includes: [
      "одна услуга на выбор (креатив, реклама, вебинар или бот)",
      "базовая настройка",
      "отчёт по итогам",
    ],
  },
  {
    name: "Оптимальный",
    price: "120 000 ₽",
    audience: "Для растущего бизнеса.",
    includes: [
      "AI-продакшн + реклама",
      "разработка одного чат-бота",
      "ведение РК 1 месяц",
      "еженедельная отчётность",
    ],
    featured: true,
  },
  {
    name: "Премиум",
    price: "250 000 ₽",
    audience: "Для масштабирования.",
    includes: [
      "все услуги студии",
      "полная техподдержка вебинаров",
      "персональное сопровождение",
      "ежемесячная стратегия развития",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div
        className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-neon-orchid/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neon-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Тарифы
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Выберите свой путь{" "}
            <span className="text-gradient-brand">к росту</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "card-hover relative flex flex-col rounded-2xl border bg-card/50 p-7 backdrop-blur-sm",
                plan.featured
                  ? "border-neon-orchid/60 shadow-[0_0_30px_-10px_rgb(232_121_249/0.35)]"
                  : "border-white/10"
              )}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-orchid px-3.5 py-1 text-xs font-bold text-night-deep"
                  role="status"
                >
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Популярный
                </div>
              )}

              <h3 className="font-heading text-lg font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {plan.audience}
              </p>

              <div className="mt-6">
                <p className="font-mono text-3xl font-bold tracking-tight text-gradient-brand">
                  {plan.price}
                </p>
              </div>

              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">
                Входит
              </p>

              <ul className="mt-3.5 flex-1 space-y-2.5">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-neon-orchid"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-snug text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
