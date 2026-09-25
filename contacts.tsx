"use client";

import { useState } from "react";
import {
  CircleAlert,
  CircleCheck,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Пожалуйста, укажите имя"),
  email: z
    .string()
    .trim()
    .min(1, "Пожалуйста, укажите email")
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), {
      message: "Введите корректный email",
    }),
  phone: z.string().trim().min(1, "Пожалуйста, укажите телефон"),
  message: z.string().trim().min(1, "Пожалуйста, напишите сообщение"),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contacts = [
  {
    label: "Email",
    value: "hello@mentiforma.ru",
    href: "mailto:hello@mentiforma.ru",
    icon: Mail,
  },
  {
    label: "Телефон",
    value: "+7 (495) 123-45-67",
    href: "tel:+74951234567",
    icon: Phone,
  },
  {
    label: "Telegram",
    value: "@mentiforma_bot",
    href: "https://t.me/mentiforma_bot",
    icon: Send,
  },
];

export function Contacts() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section id="contacts" className="relative py-24 sm:py-28">
      <div
        className="absolute -top-20 right-1/3 h-72 w-72 rounded-full bg-neon-orchid/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-neon-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.32em] text-neon-cyan uppercase">
            Контакты
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Начнём <span className="text-gradient-brand">проект?</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-neon-cyan to-neon-orchid" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm sm:p-8">
              {status === "success" ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-orchid p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-night-deep">
                      <CircleCheck
                        className="h-8 w-8 text-neon-cyan"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                    Заявка отправлена!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                    Спасибо за обращение. Я свяжусь с вами в течение 15 минут в
                    рабочее время.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(initialValues);
                      setStatus("idle");
                    }}
                    className="neon-glow-hover mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-neon-cyan/50 px-6 text-sm font-semibold text-neon-cyan hover:border-neon-cyan"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-white/85"
                      >
                        Имя
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={values.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        placeholder="Как к вам обращаться?"
                        aria-invalid={Boolean(errors.name)}
                        className={cn(
                          "mt-2 h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-neon-cyan/70 focus-visible:ring-neon-cyan/30",
                          errors.name && "border-destructive"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-neon-orchid">
                          <CircleAlert
                            className="h-3.5 w-3.5 shrink-0"
                            strokeWidth={2.2}
                          />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-white/85"
                      >
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={cn(
                          "mt-2 h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-neon-cyan/70 focus-visible:ring-neon-cyan/30",
                          errors.email && "border-destructive"
                        )}
                      />
                      {errors.email && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-neon-orchid">
                          <CircleAlert
                            className="h-3.5 w-3.5 shrink-0"
                            strokeWidth={2.2}
                          />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-white/85"
                    >
                      Телефон
                    </Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="+7 (___) ___-__-__"
                      aria-invalid={Boolean(errors.phone)}
                      className={cn(
                        "mt-2 h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-neon-cyan/70 focus-visible:ring-neon-cyan/30",
                        errors.phone && "border-destructive"
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-neon-orchid">
                        <CircleAlert
                          className="h-3.5 w-3.5 shrink-0"
                          strokeWidth={2.2}
                        />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-white/85"
                    >
                      Сообщение
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={values.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      placeholder="Расскажите о вашей задаче"
                      aria-invalid={Boolean(errors.message)}
                      className={cn(
                        "mt-2 min-h-32 resize-none border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-neon-cyan/70 focus-visible:ring-neon-cyan/30",
                        errors.message && "border-destructive"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-neon-orchid">
                        <CircleAlert
                          className="h-3.5 w-3.5 shrink-0"
                          strokeWidth={2.2}
                        />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="neon-glow-hover mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground disabled:pointer-events-none disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          strokeWidth={2.5}
                        />
                        Отправляем…
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </button>

                  <p className="text-xs leading-relaxed text-white/45">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-night-deep/50 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-xl font-bold text-white">
                Прямые контакты
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Напишите или позвоните — отвечу лично и без посредников.
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-5">
                {contacts.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-neon-cyan/40 hover:bg-white/8"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-night-deep/60 text-neon-cyan transition-colors group-hover:text-neon-orchid">
                        <item.icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] tracking-[0.2em] text-white/45 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block truncate text-sm font-semibold text-white transition-colors group-hover:text-neon-cyan">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-[11px] leading-relaxed tracking-[0.15em] text-white/50 uppercase">
                Ответ — в течение 15 минут
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
