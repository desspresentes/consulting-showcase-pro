import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consultoria de Marca & Marketing — Outros Ares" },
      {
        name: "description",
        content:
          "Proposta de consultoria de marca e marketing da Outros Ares: diagnóstico, posicionamento, experiência de marca e plano de 90 dias.",
      },
      { property: "og:title", content: "Consultoria de Marca & Marketing — Outros Ares" },
      {
        property: "og:description",
        content:
          "Método Outros Ares: Raio-X da Marca, posicionamento, experiência e plano de transformação em 90 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck />;
}
