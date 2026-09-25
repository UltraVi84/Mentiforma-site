import { MessageSquare, Zap, UserRound, BarChart3, Target } from "lucide-react";

type Advantage = {
  icon: typeof MessageSquare;
  number: string;
  title: string;
  description: string;
};

const advantages: Advantage[] = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Прямой контакт с экспертом",
    description:
      "Никаких менеджеров и согласований. Вы общаетесь напрямую с тем, кто делает проект. Быстрые решения, точное понимание задачи.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Скорость ИИ",
    description:
      "Генерирую 30+ вариантов креативов и текстов за 2 часа вместо 2 недель. Быстрый запуск гипотез — вы опережаете конкурентов.",
  },
  {
    icon: UserRound,
    number: "03",
    title: "Один специалист вместо команды",
    description:
      "Не нужно искать дизайнера, таргетолога, модератора и разработчика. Весь digital-цикл закрывает один эксперт с нейросетями.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Прозрачность",
    description:
      "Дашборд с метриками в реальном времени. Вы видите каждый рубль рекламного бюджета.",
  },
  {
    icon: Target,
    number: "05",
    title: "Фокус на результат",
    description:
      "KPI фиксируем в договоре. Мне платят за лиды, регистрации и продажи, а не за красивые картинки.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Почему мы
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Новый стандарт{" "}
            <span className="text-gradient-brand">эффективности</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="card-hover flex flex-col rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <advantage.icon
                    className="h-6 w-6 text-neon-cyan"
                    strokeWidth={1.7}
                  />
                </div>
                <span className="font-mono text-3xl font-bold text-neon-orchid/80">
                  {advantage.number}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-white">
                {advantage.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
