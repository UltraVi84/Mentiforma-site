import { PhoneCall, Compass, Layers, Rocket, TrendingUp } from "lucide-react";

type Step = {
  icon: typeof PhoneCall;
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Заявка",
    description: "Связь в течение 15 минут для брифинга.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Стратегия и бриф",
    description: "Анализ ниши, цели и KPI.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Прототип и концепция",
    description: "Структура и первые визуальные концепции с помощью ИИ.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Реализация",
    description: "Контент и кампании, еженедельные отчёты.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Поддержка и рост",
    description: "Сопровождение, анализ метрик, масштабирование успеха.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 gradient-hero-dark" />
      <div
        className="absolute inset-0 neural-pattern opacity-25"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-neon-orchid/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Как мы работаем
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            От идеи до результата{" "}
            <span className="text-gradient-brand">за 5 шагов</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute top-9 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-neon-cyan/50 to-neon-orchid/50 lg:block"
                  aria-hidden="true"
                />
              )}
              <article className="card-hover flex h-full flex-col rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                    <step.icon
                      className="h-6 w-6 text-neon-orchid"
                      strokeWidth={1.7}
                    />
                  </div>
                  <span className="font-mono text-3xl font-bold text-neon-cyan/80">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-base font-bold leading-snug text-white">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
