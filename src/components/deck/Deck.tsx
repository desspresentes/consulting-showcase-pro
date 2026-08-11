import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Grid2x2, Maximize, Printer, X } from "lucide-react";
import { ScaledSlide } from "./ScaledSlide";
import { slides } from "./slides";

export function Deck() {
  const [current, setCurrent] = useState(0);
  const [grid, setGrid] = useState(false);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, c + n))),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key.toLowerCase() === "g") setGrid((g) => !g);
      if (e.key === "Escape") setGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    document.title = `${current + 1}/${total} — ${slides[current]?.title ?? ""} · Consultoria de Marca`;
  }, [current, total]);

  const present = () => document.documentElement.requestFullscreen?.();

  if (grid) {
    return (
      <div className="min-h-screen bg-secondary/50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-[var(--font-display)] text-2xl">Consultoria de Marca — Outros Ares</h1>
          <button
            onClick={() => setGrid(false)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
          >
            <X className="h-4 w-4" /> Fechar
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrent(i);
                setGrid(false);
              }}
              className="group text-left"
            >
              <ScaledSlide className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow group-hover:shadow-[var(--shadow-elegant)]">
                {s.render()}
              </ScaledSlide>
              <p className="mt-2 text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {s.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <ScaledSlide className="flex-1">{slides[current]?.render()}</ScaledSlide>

      <div className="print-hide fixed bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 backdrop-blur">
        <button
          aria-label="Slide anterior"
          onClick={() => go(-1)}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="px-2 text-xs tracking-[0.2em] text-white/70">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          aria-label="Próximo slide"
          onClick={() => go(1)}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <span className="mx-1 h-5 w-px bg-white/15" />
        <button
          aria-label="Visão em grade"
          onClick={() => setGrid(true)}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
        >
          <Grid2x2 className="h-5 w-5" />
        </button>
        <button
          aria-label="Apresentar em tela cheia"
          onClick={present}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
        >
          <Maximize className="h-5 w-5" />
        </button>
        <button
          aria-label="Imprimir / exportar PDF"
          onClick={() => window.print()}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
        >
          <Printer className="h-5 w-5" />
        </button>
      </div>

      {/* Print: all slides stacked */}
      <div className="hidden print:block">
        {slides.map((s) => (
          <div key={s.id} className="print-slide">
            {s.render()}
          </div>
        ))}
      </div>
    </div>
  );
}
