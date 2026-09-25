export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero-dark" />
      <div
        className="absolute inset-0 neural-pattern opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-neon-cyan/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 right-1/4 h-96 w-96 rounded-full bg-neon-orchid/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase animate-in fade-in slide-in-from-bottom-4 duration-500 sm:text-sm">
          MENTIFORMA. РАЗУМ СОЗДАЁТ ФОРМУ.
        </p>

        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-700 sm:text-5xl md:text-6xl">
          Разум создаёт форму.{" "}
          <span className="text-gradient-brand">Форма продаёт.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 animate-in fade-in slide-in-from-bottom-4 duration-700 sm:text-lg">
          AI-студия одного эксперта. Креатив, реклама, вебинары, чат-боты — весь
          digital-цикл без менеджеров и согласований. Нейросети ускоряют,
          эксперт отвечает за результат.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 sm:max-w-none sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#services"
            className="neon-glow-hover inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground"
          >
            Наши услуги
          </a>
          <a
            href="#contacts"
            className="neon-glow-hover inline-flex h-12 items-center justify-center rounded-lg border border-neon-cyan/50 px-7 text-sm font-semibold text-neon-cyan hover:border-neon-cyan"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
