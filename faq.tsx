"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Вы команда или один человек?",
    answer:
      "Mentiforma — AI-студия одного эксперта. Я лично веду каждый проект, а нейросети и проверенные подрядчики помогают закрывать задачи быстро и в большом объёме. Вы всегда знаете, кто отвечает за результат.",
  },
  {
    question: "Сколько стоит минимальный заказ?",
    answer:
      "Стоимость зависит от задачи. Аудит рекламной кампании — 15 000 ₽, создание логотипа — от 45 000 ₽. Точный расчёт после брифинга.",
  },
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "Благодаря ИИ создание логотипа или карточек — от 3 дней, чат-бота — до 2 недель, музыкального трека — от 1 дня.",
  },
  {
    question: "Вы работаете с онлайн-школами?",
    answer:
      "Да, это одна из ключевых специализаций. Понимаю специфику EdTech, знаю, как приводить целевые регистрации на вебинары.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Работаем по договору. Стандарт: 50% предоплата, 50% после сдачи. Для ведения — помесячная оплата.",
  },
  {
    question: "Что такое ИИ-генерация в вашем исполнении?",
    answer:
      "Нейросети как инструмент в руках эксперта. Генерирую прототипы, изображения, тексты и музыку, а затем довожу до совершенства под ваши бизнес-задачи.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div
        className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-neon-orchid/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            FAQ
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Часто задаваемые{" "}
            <span className="text-gradient-brand">вопросы</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 max-w-3xl">
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5 sm:px-7"
                  >
                    <span
                      className={cn(
                        "font-heading text-base font-semibold leading-snug transition-colors",
                        isOpen ? "text-neon-cyan" : "text-white"
                      )}
                    >
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-neon-orchid bg-neon-orchid/15 text-neon-orchid"
                          : "border-white/15 bg-white/5 text-white/70"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-white/70 sm:px-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
