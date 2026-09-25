import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/mentiforma-mark.png"
      alt=""
      width={455}
      height={431}
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Mentiforma — логотип"
      className={cn("flex items-center gap-2.5", className)}
    >
      <LogoMark className={markClassName} />
      <span className="flex items-center font-manrope text-base font-semibold tracking-[0.5px] text-white select-none">
        MENTIFORM
        <svg
          viewBox="0 0 22 28"
          aria-hidden="true"
          className="h-[0.92em] w-[0.62em] shrink-0"
        >
          <path
            d="M5 24 L11 4 L17 24"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
