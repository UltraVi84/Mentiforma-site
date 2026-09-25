import type { ReactElement } from "react";
import { Logo } from "@/components/logo";

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21.6 4.1 3.4 10.7c-.9.34-.76 1.66.2 1.86l4.6 1.05 1.75 5.3c.28.84 1.4.96 1.88.2l1.42-2.24 4.4 3.25c.67.5 1.62.1 1.78-.75l2.75-14.4c.16-.9-.66-1.7-1.48-1.87Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m8.2 13.6 13.4-9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M6.8 8.2 9.9 13.1l2.9-4.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 8.2v7.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14.2 12h2.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TenChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 4.2a7.6 7.6 0 0 0-5.5-1.8C10.4 2 6 2.1 4.2 3.5c-1 .8-1.5 2-1.7 3.4-.7 4.3-.7 8.7 0 13 .2 1.4.7 2.6 1.7 3.4 1.9 1.5 6.5 1.3 9.4 1.2 1.6-.1 3.2.3 4.4 1.4l2 1.6a.4.4 0 0 0 .7-.3v-3.6c0-.3.2-.6.5-.7 2-.6 3.4-2.3 3.8-4.4.5-3.1.5-6.3 0-9.4-.3-1.8-1.5-3.4-3.5-4.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 8h9.6v2.8M7.2 13.6v-2.8M12 10.8v5.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SocialItem = {
  label: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => ReactElement;
};

const socials: SocialItem[] = [
  {
    label: "Telegram",
    href: "https://t.me/mentiforma_bot",
    icon: TelegramIcon,
  },
  { label: "ВКонтакте", href: "https://vk.com/", icon: VkIcon },
  { label: "TenChat", href: "https://tenchat.ru/", icon: TenChatIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-night-deep/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          <ul className="flex items-center gap-3">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            © 2026 Mentiforma. Все права защищены
          </p>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label="Правовая информация"
          >
            <a
              href="#"
              className="text-sm text-white/55 transition-colors hover:text-neon-cyan"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-sm text-white/55 transition-colors hover:text-neon-cyan"
            >
              Пользовательское соглашение
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
