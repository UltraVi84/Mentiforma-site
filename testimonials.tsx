import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Елена Петрова",
    role: "Продюсер онлайн-курсов",
    quote:
      "Mentiforma — наш скрытый козырь. Один человек закрыл всё: от презентаций и рекламы до модерации вебинара. Конверсия в продажу с эфира выросла на 25%.",
    initials: "ЕП",
  },
  {
    name: "Максим Орлов",
    role: "Владелец маркетингового агентства",
    quote:
      "Передал подряд на разработку чат-ботов и креативов для наших клиентов. Качество — уровень топ-студий, ценник адекватный. Наконец-то нашёл надёжного партнёра по автоматизации.",
    initials: "МО",
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-orchid p-[2px]"
      aria-hidden="true"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-night-deep font-heading text-sm font-bold text-white">
        {initials}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div
        className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-neon-orchid/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Отзывы
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Что говорят <span className="text-gradient-brand">клиенты</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="card-hover relative flex flex-col rounded-2xl border border-white/10 bg-card/50 p-7 backdrop-blur-sm"
            >
              <Quote
                className="h-8 w-8 text-neon-orchid/40"
                aria-hidden="true"
              />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/80">
                «{testimonial.quote}»
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <Avatar initials={testimonial.initials} />
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-white/50">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
