import type { ReactNode } from "react";
import logoBranco from "@/assets/logo-branco.png.asset.json";
import logoCor from "@/assets/logo-cor.png.asset.json";

export type SlideTone = "dark" | "light" | "brand";

interface SlideLayoutProps {
  children: ReactNode;
  tone?: SlideTone;
  kicker?: string;
  index?: number;
  total?: number;
  showLogo?: boolean;
}

const toneClasses: Record<SlideTone, string> = {
  dark: "bg-ink-gradient text-paper",
  light: "bg-paper text-ink",
  brand: "bg-brand-gradient text-paper",
};

export function SlideLayout({
  children,
  tone = "light",
  kicker,
  index,
  total,
  showLogo = true,
}: SlideLayoutProps) {
  const dark = tone !== "light";

  return (
    <div className={`slide-content texture-grain ${toneClasses[tone]}`}>
      {/* decorative field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10] texture-grid"
      />
      {dark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[380px] -top-[380px] h-[900px] w-[900px] rounded-full opacity-25 blur-[120px] bg-brand-gradient"
        />
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[300px] bottom-[-320px] h-[760px] w-[760px] rounded-full opacity-[0.14] blur-[110px] bg-brand-gradient"
        />
      )}

      {/* top rule */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[6px] bg-brand-gradient"
      />

      {/* header */}
      <div className="absolute left-[110px] right-[110px] top-[64px] flex items-center justify-between">
        {kicker ? (
          <span
            className={`slide-kicker ${dark ? "text-paper/70" : "text-muted-foreground"}`}
          >
            {kicker}
          </span>
        ) : (
          <span />
        )}
        {showLogo && (
          <img
            src={dark ? logoBranco.url : logoCor.url}
            alt="Emilly Guedes Sales — Outros Ares"
            className="h-[52px] w-auto object-contain opacity-90"
          />
        )}
      </div>

      {/* body */}
      <div className="absolute inset-x-[110px] top-[168px] bottom-[104px]">{children}</div>

      {/* footer */}
      <div className="absolute bottom-[46px] left-[110px] right-[110px] flex items-center justify-between">
        <span className={`slide-chrome ${dark ? "text-paper/50" : "text-muted-foreground"}`}>
          Outros Ares · Consultoria de Marca
        </span>
        {typeof index === "number" && (
          <span className={`slide-page ${dark ? "text-paper/50" : "text-muted-foreground"}`}>
            {String(index).padStart(2, "0")}
            {total ? ` / ${String(total).padStart(2, "0")}` : ""}
          </span>
        )}
      </div>
    </div>
  );
}

export function Rule({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden
      className={`h-[3px] w-[120px] ${dark ? "bg-brand-gradient" : "bg-brand-gradient"}`}
    />
  );
}
