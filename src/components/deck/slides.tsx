import type { ReactNode } from "react";
import { SlideLayout } from "./SlideLayout";
import logoBranco from "@/assets/logo-branco.png.asset.json";

const TOTAL = 17;

function Bullets({
  items,
  dark = false,
  className = "",
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ul className={`space-y-[18px] ${className}`}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-[18px]">
          <span className="mt-[16px] h-[8px] w-[8px] shrink-0 rounded-full bg-brand-gradient" />
          <span className={`slide-body ${dark ? "text-paper/85" : "text-ink/80"}`}>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border p-[40px] ${
        dark
          ? "border-paper/15 bg-paper/[0.04]"
          : "border-brand-gray/60 bg-secondary/40"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Num({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`slide-num text-[44px] leading-none ${
        dark ? "text-paper/35" : "text-brand-gray"
      }`}
    >
      {children}
    </span>
  );
}

/* 01 — Capa */
function Cover() {
  return (
    <div className="slide-content texture-grain bg-ink-gradient text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[300px] -top-[260px] h-[1000px] w-[1000px] rounded-full bg-brand-gradient opacity-30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] texture-grid"
      />
      <div aria-hidden className="absolute left-0 right-0 top-0 h-[6px] bg-brand-gradient" />
      <div className="absolute inset-x-[130px] top-[120px] bottom-[110px] flex flex-col justify-between">
        <img
          src={logoBranco.url}
          alt="Emilly Guedes Sales — Outros Ares"
          className="h-[96px] w-auto self-start object-contain"
        />
        <div>
          <span className="slide-kicker text-paper/60">Proposta · 2026</span>
          <h1 className="slide-title-lg mt-[28px] max-w-[1300px]">
            Consultoria de <span className="text-brand-gradient">Marca</span>
            <br />& Marketing
          </h1>
          <div className="mt-[40px] h-[3px] w-[180px] bg-brand-gradient" />
          <p className="slide-body-lg mt-[40px] max-w-[1000px] text-paper/75">
            Sua empresa não precisa apenas de mais conteúdo. Precisa saber o que comunicar,
            para quem, por quê — e como transformar isso em resultado.
          </p>
        </div>
        <div className="flex items-end justify-between">
          <span className="slide-chrome text-paper/50">Método Outros Ares · 90 dias</span>
          <span className="slide-chrome text-paper/50">Emilly Guedes Sales</span>
        </div>
      </div>
    </div>
  );
}

/* 02 — A pergunta */
function Question() {
  return (
    <SlideLayout tone="light" kicker="O ponto de partida" index={2} total={TOTAL}>
      <div className="grid h-full grid-cols-[1.15fr_0.85fr] gap-[90px]">
        <div className="flex flex-col justify-center">
          <p className="slide-kicker text-brand-green">A consultoria responde</p>
          <h2 className="slide-title mt-[28px]">
            “Onde minha marca está hoje, o que impede meu crescimento e o que precisamos
            mudar?”
          </h2>
          <div className="mt-[36px] h-[3px] w-[120px] bg-brand-gradient" />
        </div>
        <div className="flex flex-col justify-center gap-[26px]">
          <Card>
            <p className="slide-body text-ink/80">
              A empresa diz que é premium, mas comunica de um jeito que parece barato.
            </p>
          </Card>
          <Card>
            <p className="slide-body text-ink/80">
              O serviço é excelente, mas o Instagram não deixa claro por que ele custa
              R$ 3.000.
            </p>
          </Card>
          <Card>
            <p className="slide-body text-ink/80">
              A empresa publica todos os dias, mas nenhum conteúdo conduz o cliente à
              decisão de compra.
            </p>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 03 — O que analisamos */
function Diagnostico() {
  const cols: [string, string[]][] = [
    ["Negócio", ["História e momento atual", "Produtos e serviços", "Público e cliente ideal", "Diferenciais e concorrência"]],
    ["Percepção", ["Posicionamento atual", "Percepção de valor", "Comunicação", "Identidade visual"]],
    ["Presença", ["Instagram e conteúdo", "Presença digital", "Pontos de contato", "Jornada do cliente"]],
    ["Comercial", ["Estratégias comerciais", "Experiência de compra", "O que funciona hoje", "Oportunidades desperdiçadas"]],
  ];
  return (
    <SlideLayout tone="dark" kicker="01 · Diagnóstico estratégico" index={3} total={TOTAL}>
      <h2 className="slide-title max-w-[1200px]">
        Antes de mudar, <span className="text-brand-gradient">investigamos</span>.
      </h2>
      <div className="mt-[56px] grid grid-cols-4 gap-[30px]">
        {cols.map(([title, items], i) => (
          <Card key={title} dark className="min-h-[420px]">
            <Num dark>{String(i + 1).padStart(2, "0")}</Num>
            <h3 className="slide-subtitle mt-[16px] text-[34px]">{title}</h3>
            <div className="mt-[24px] h-px w-full bg-paper/15" />
            <Bullets dark items={items} className="mt-[24px]" />
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 04 — Método */
function Metodo() {
  const steps: [string, string, string][] = [
    ["01", "Descobrir", "Diagnóstico do negócio, público, mercado e posicionamento."],
    ["02", "Posicionar", "Definição de como a marca deve ser percebida."],
    ["03", "Expressar", "Identidade visual, comunicação e linguagem."],
    ["04", "Experienciar", "Ambiente, materiais, sensorialidade e pontos de contato."],
    ["05", "Atrair", "Marketing, conteúdo, campanhas e aquisição."],
    ["06", "Converter", "Comercial, atendimento, vendas e relacionamento."],
    ["07", "Evoluir", "Plano de ação, prioridades e acompanhamento."],
  ];
  return (
    <SlideLayout tone="light" kicker="Metodologia proprietária" index={4} total={TOTAL}>
      <div className="flex items-end justify-between">
        <h2 className="slide-title">
          Método <span className="text-brand-gradient">Outros Ares</span>
        </h2>
        <p className="slide-caption mb-[12px] max-w-[520px] text-right text-muted-foreground">
          Diagnosticar → Estruturar → Transformar → Evoluir
        </p>
      </div>
      <div className="mt-[56px] grid grid-cols-4 gap-[26px]">
        {steps.map(([n, t, d]) => (
          <div
            key={n}
            className="rounded-[18px] border border-brand-gray/60 bg-paper p-[32px]"
          >
            <Num>{n}</Num>
            <h3 className="mt-[14px] font-[var(--font-sora)] text-[32px] tracking-[-0.02em]">
              {t}
            </h3>
            <p className="slide-caption mt-[14px] text-ink/65">{d}</p>
          </div>
        ))}
        <div className="flex flex-col justify-center rounded-[18px] bg-brand-gradient p-[32px] text-paper">
          <p className="slide-kicker text-paper/70">Resultado</p>
          <p className="mt-[14px] text-[30px] leading-tight">
            Uma marca coerente do primeiro contato ao pós-venda.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 05 — Pilares 01 e 02 */
function Pilares() {
  return (
    <SlideLayout tone="light" kicker="Pilares da análise" index={5} total={TOTAL}>
      <div className="grid h-full grid-cols-2 gap-[70px]">
        <div>
          <Num>01</Num>
          <h2 className="slide-title mt-[10px] text-[64px]">Marca</h2>
          <p className="slide-caption mt-[14px] text-muted-foreground">
            Quem a empresa é e como quer ser percebida.
          </p>
          <div className="mt-[30px] h-[3px] w-[100px] bg-brand-gradient" />
          <div className="mt-[34px] grid grid-cols-2 gap-x-[40px] gap-y-[16px]">
            {[
              "História e essência",
              "Propósito",
              "Valores",
              "Posicionamento",
              "Diferenciais",
              "Cliente ideal",
              "Proposta de valor",
              "Personalidade e tom de voz",
            ].map((i) => (
              <p key={i} className="slide-caption text-ink/75">
                {i}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Num>02</Num>
          <h2 className="slide-title mt-[10px] text-[64px]">Identidade visual</h2>
          <p className="slide-caption mt-[14px] text-muted-foreground">
            Se a aparência corresponde ao posicionamento.
          </p>
          <div className="mt-[30px] h-[3px] w-[100px] bg-brand-gradient" />
          <div className="mt-[34px] grid grid-cols-2 gap-x-[40px] gap-y-[16px]">
            {[
              "Logo, cores e tipografia",
              "Elementos gráficos e ícones",
              "Fotografia e padrões",
              "Consistência visual",
              "Papelaria e propostas",
              "Catálogos e apresentações",
              "Site e landing pages",
              "Redes sociais e WhatsApp",
            ].map((i) => (
              <p key={i} className="slide-caption text-ink/75">
                {i}
              </p>
            ))}
          </div>
          <div className="mt-[40px] rounded-[18px] border-l-[6px] border-l-[color:var(--brand-green)] bg-secondary/50 p-[30px]">
            <p className="slide-body text-ink/85">
              “A imagem que a empresa transmite corresponde ao valor que ela quer cobrar?”
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 06 — Experiência */
function Experiencia() {
  const sentidos: [string, string][] = [
    ["Visão", "O que o cliente vê no ambiente, nos materiais e na vitrine."],
    ["Olfato", "Existe um aroma característico? Ele combina com o posicionamento?"],
    ["Audição", "A trilha e o ambiente sonoro sustentam a experiência?"],
    ["Tato", "Embalagens, cartões, sacolas e papéis: qual é a sensação?"],
  ];
  return (
    <SlideLayout tone="dark" kicker="03 · Experiência e ambiente de marca" index={6} total={TOTAL}>
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-[80px]">
        <div className="flex flex-col justify-center">
          <h2 className="slide-title">
            A marca não existe só no <span className="text-brand-gradient">computador</span>.
          </h2>
          <p className="slide-body-lg mt-[32px] text-paper/70">
            Ela existe no ambiente, no atendimento, na embalagem, no uniforme e em cada
            detalhe que o cliente encontra.
          </p>
          <div className="mt-[40px] flex flex-wrap gap-[14px]">
            {["Fachada", "Recepção", "Iluminação", "Layout", "Vitrine", "Sinalização", "Uniformes", "Embalagens"].map(
              (t) => (
                <span
                  key={t}
                  className="slide-badge rounded-full border border-paper/20 px-[22px] py-[10px] text-paper/70"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 content-center gap-[26px]">
          {sentidos.map(([t, d], i) => (
            <Card key={t} dark className="min-h-[240px]">
              <Num dark>{String(i + 1).padStart(2, "0")}</Num>
              <h3 className="mt-[14px] text-[34px]">{t}</h3>
              <p className="slide-caption mt-[14px] text-paper/65">{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 07 — Pontos de contato */
function Jornada() {
  const etapas: [string, string][] = [
    ["Descoberta", "Instagram · Google · Indicação · Anúncio"],
    ["Primeiro contato", "WhatsApp · Telefone · Loja · Direct"],
    ["Consideração", "Apresentação · Orçamento · Catálogo · Reunião"],
    ["Compra", "Pagamento · Embalagem · Atendimento · Entrega"],
    ["Pós-venda", "Mensagem · Pesquisa · Relacionamento · Indicação"],
  ];
  return (
    <SlideLayout tone="light" kicker="04 · Pontos de contato" index={7} total={TOTAL}>
      <h2 className="slide-title max-w-[1250px]">
        Todos os momentos em que o cliente encontra a marca.
      </h2>
      <div className="mt-[70px] grid grid-cols-5 gap-[22px]">
        {etapas.map(([t, d], i) => (
          <div key={t} className="relative">
            <div className="h-[6px] w-full rounded-full bg-brand-gradient" style={{ opacity: 0.3 + i * 0.17 }} />
            <p className="slide-num mt-[26px] text-[40px] text-brand-gray">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-[10px] text-[32px] leading-tight tracking-[-0.02em]">{t}</h3>
            <p className="slide-caption mt-[16px] text-ink/65">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-[80px] rounded-[18px] bg-ink px-[46px] py-[36px] text-paper">
        <p className="slide-body-lg">
          Em cada etapa, uma só pergunta:{" "}
          <span className="text-brand-gradient">a experiência está coerente com a marca?</span>
        </p>
      </div>
    </SlideLayout>
  );
}

/* 08 — Raio-X */
function RaioX() {
  const areas: [string, string][] = [
    ["Identidade", "Precisa melhorar"],
    ["Presença digital", "Precisa ser corrigido"],
    ["Experiência física", "Precisa melhorar"],
    ["Comunicação", "Potencializado"],
    ["Marketing", "Precisa melhorar"],
    ["Comercial", "Precisa ser corrigido"],
  ];
  const level = (s: string) => (s === "Potencializado" ? 3 : s === "Precisa melhorar" ? 2 : 1);
  return (
    <SlideLayout tone="dark" kicker="Entrega principal" index={8} total={TOTAL}>
      <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-[80px]">
        <div className="flex flex-col justify-center">
          <h2 className="slide-title">
            Raio-X da <span className="text-brand-gradient">Marca</span>
          </h2>
          <p className="slide-body mt-[30px] text-paper/70">
            Uma avaliação completa da empresa, área por área, com classificação clara:
          </p>
          <div className="mt-[30px] space-y-[14px]">
            {["Potencializado", "Precisa melhorar", "Precisa ser corrigido"].map((t, i) => (
              <div key={t} className="flex items-center gap-[16px]">
                <span
                  className="h-[14px] w-[14px] rounded-full"
                  style={{
                    background: i === 0 ? "var(--brand-green)" : i === 1 ? "var(--brand-blue)" : "var(--brand-gray)",
                  }}
                />
                <span className="slide-caption text-paper/75">{t}</span>
              </div>
            ))}
          </div>
          <p className="slide-caption mt-[36px] text-paper/55">
            Exemplo ilustrativo de leitura do diagnóstico.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[24px]">
          {areas.map(([area, status]) => (
            <div key={area} className="border-b border-paper/12 pb-[20px]">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[34px] tracking-[-0.02em]">{area}</h3>
                <span className="slide-badge text-paper/60">{status}</span>
              </div>
              <div className="mt-[16px] flex gap-[10px]">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className="h-[8px] flex-1 rounded-full"
                    style={{
                      background:
                        n <= level(status)
                          ? "linear-gradient(90deg, var(--brand-blue), var(--brand-green))"
                          : "color-mix(in oklab, white 12%, transparent)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 09 — Gargalos */
function Gargalos() {
  const items: [string, string][] = [
    ["Posicionamento confuso", "A empresa diz ser premium, mas comunica de forma popular."],
    ["Identidade visual desconectada", "O logo, cores e tipografia não refletem o valor cobrado."],
    ["Comunicação sem estratégia", "Posta todos os dias, mas não conduz à decisão de compra."],
    ["Pontos de contato incoerentes", "Site, Instagram, WhatsApp e loja parecem de empresas diferentes."],
    ["Experiência abaixo do preço", "O ambiente físico não justifica o ticket praticado."],
    ["Materiais comerciais despadronizados", "Propostas, catálogos e apresentações têm visual divergente."],
    ["Atendimento sem linguagem definida", "Cada pessoa fala de um jeito, transmitindo mensagens diferentes."],
    ["Embalagens genéricas", "A embalagem perde a chance de reforçar a marca no pós-compra."],
    ["Sem estratégia de pós-venda", "O cliente compra e não recebe acompanhamento, perdendo recorrência."],
    ["Oportunidades desperdiçadas", "Indicações, parcerias e relacionamento não são explorados."],
  ];
  return (
    <SlideLayout tone="light" kicker="Diagnóstico" index={9} total={TOTAL}>
      <div className="grid h-full grid-cols-[1fr_1.05fr] gap-[60px]">
        <div className="flex flex-col justify-center">
          <h2 className="slide-title">
            Os 10 principais <span className="text-brand-gradient">gargalos</span> da marca
          </h2>
          <div className="mt-[30px] h-[3px] w-[120px] bg-brand-gradient" />
          <p className="slide-body mt-[30px] text-ink/70">
            Um diagnóstico estratégico para identificar o que está impedindo sua marca de crescer.
          </p>
          <p className="slide-body mt-[20px] text-ink/70">
            Durante a primeira etapa da consultoria, a Outros Ares realiza uma análise completa da empresa, considerando marca, identidade visual, comunicação, marketing, experiência, ambiente e processo comercial.
          </p>
          <p className="slide-caption mt-[24px] text-muted-foreground">
            A partir dessa análise, identificamos os 10 pontos que mais impactam negativamente a percepção, comunicação, experiência e potencial de crescimento da marca.
          </p>
        </div>
        <div className="grid grid-cols-2 content-center gap-x-[30px] gap-y-[18px]">
          {items.map(([t, d], i) => (
            <div key={t} className="flex items-start gap-[16px]">
              <span className="slide-num text-[30px] leading-none text-brand-gray">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[26px] leading-tight tracking-[-0.02em]">{t}</h3>
                <p className="slide-caption mt-[4px] text-ink/65">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 10 — Plano de evolução */
function PlanoEvolucao() {
  const blocos: [string, string][] = [
    ["Urgente", "O que precisa ser corrigido imediatamente."],
    ["Importante", "O que deve ser melhorado nos próximos 30–60 dias."],
    ["Estratégico", "O que deve ser desenvolvido nos próximos 3–6 meses."],
    ["Oportunidades", "Ideias que elevam a experiência e a diferenciação."],
  ];
  return (
    <SlideLayout tone="light" kicker="Do diagnóstico à ação" index={10} total={TOTAL}>
      <h2 className="slide-title max-w-[1200px]">Plano de evolução da marca</h2>
      <p className="slide-body-lg mt-[26px] max-w-[1100px] text-ink/65">
        Não entregamos apenas um diagnóstico. Entregamos prioridades — com prazo e ordem
        de execução.
      </p>
      <div className="mt-[64px] grid grid-cols-4 gap-[26px]">
        {blocos.map(([t, d], i) => (
          <div
            key={t}
            className={`rounded-[18px] p-[36px] ${
              i === 0 ? "bg-brand-gradient text-paper" : "border border-brand-gray/60 bg-paper"
            }`}
            style={{ minHeight: 300 }}
          >
            <Num dark={i === 0}>{String(i + 1).padStart(2, "0")}</Num>
            <h3 className="mt-[16px] text-[36px] tracking-[-0.02em]">{t}</h3>
            <p className={`slide-caption mt-[18px] ${i === 0 ? "text-paper/85" : "text-ink/70"}`}>
              {d}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 11–13 — Fases */
function Fase({
  index,
  fase,
  dias,
  titulo,
  objetivo,
  semanas,
  entrega,
}: {
  index: number;
  fase: string;
  dias: string;
  titulo: string;
  objetivo: string;
  semanas: [string, string][];
  entrega: string;
}) {
  return (
    <SlideLayout tone="light" kicker={`Jornada de 90 dias · ${fase}`} index={index} total={TOTAL}>
      <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-[80px]">
        <div className="flex flex-col justify-center">
          <span className="slide-badge text-brand-green">{dias}</span>
          <h2 className="slide-title mt-[18px] text-[68px]">{titulo}</h2>
          <div className="mt-[30px] h-[3px] w-[110px] bg-brand-gradient" />
          <p className="slide-body mt-[30px] text-ink/70">{objetivo}</p>
          <div className="mt-[40px] rounded-[18px] bg-ink px-[34px] py-[28px] text-paper">
            <p className="slide-kicker text-paper/60">Entrega</p>
            <p className="mt-[12px] text-[30px] leading-snug">{entrega}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[24px]">
          {semanas.map(([s, d], i) => (
            <div key={s} className="flex gap-[28px] border-b border-brand-gray/50 pb-[24px]">
              <span className="slide-num w-[80px] shrink-0 text-[40px] leading-none text-brand-gray">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[32px] tracking-[-0.02em]">{s}</h3>
                <p className="slide-caption mt-[10px] text-ink/70">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 14 — Dossiê */
function Dossie() {
  const itens = [
    "Diagnóstico",
    "Posicionamento",
    "Público",
    "Identidade",
    "Comunicação",
    "Experiência",
    "Marketing",
    "Comercial",
    "Plano de ação",
    "Indicadores",
    "Roadmap de 12 meses",
  ];
  return (
    <SlideLayout tone="dark" kicker="Entrega final" index={14} total={TOTAL}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-[80px]">
        <div className="flex flex-col justify-center">
          <h2 className="slide-title">
            Dossiê Estratégico <span className="text-brand-gradient">da Marca</span>
          </h2>
          <p className="slide-body-lg mt-[30px] text-paper/70">
            Um documento profissional que reúne tudo o que foi descoberto, definido e
            planejado — e a apresentação final:
          </p>
          <p className="slide-subtitle mt-[30px] text-brand-gradient">
            “O próximo capítulo da sua marca”
          </p>
        </div>
        <div className="grid grid-cols-2 content-center gap-x-[40px] gap-y-[18px]">
          {itens.map((t, i) => (
            <div key={t} className="flex items-baseline gap-[18px] border-b border-paper/12 pb-[14px]">
              <span className="slide-num text-[28px] text-paper/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="slide-caption text-paper/85">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 15 — Investimento */
function Investimento() {
  const planos = [
    {
      nome: "Essencial",
      claim: "Para descobrir.",
      preco: "R$ 1.697",
      pagamento: "Até 2x sem juros · cartão ou boleto",
      duracao: "30 dias",
      itens: [
        "Diagnóstico completo de marca",
        "Raio-X da Marca",
        "Pontos fortes, problemas e prioridades",
        "Plano de ação de 30 dias",
        "2 reuniões: imersão e diagnóstico",
      ],
      destaque: false,
    },
    {
      nome: "Estratégica",
      claim: "Para estruturar.",
      preco: "R$ 2.997",
      pagamento: "Até 3x sem juros · cartão ou boleto",
      duracao: "60 dias",
      itens: [
        "Tudo da Essencial +",
        "Posicionamento, cliente ideal e proposta de valor",
        "Tom de voz e mensagens-chave",
        "Pilares de conteúdo e direcionamento comercial",
        "Jornada, pontos de contato e experiência",
        "Plano estratégico de 60 dias · 4 reuniões",
      ],
      destaque: false,
    },
    {
      nome: "Transformação",
      claim: "Para transformar.",
      preco: "R$ 4.197",
      pagamento: "Até 3x sem juros · cartão ou boleto",
      duracao: "90 dias",
      itens: [
        "Tudo da Estratégica +",
        "Auditorias visual, de marketing, comercial e de experiência",
        "Plano de campanhas e estratégia de conteúdo",
        "Acompanhamento da implementação e ajustes",
        "Dossiê Estratégico da Marca",
        "Canal de acompanhamento por WhatsApp",
      ],
      destaque: true,
    },
  ];
  return (
    <SlideLayout tone="light" kicker="Investimento" index={15} total={TOTAL}>
      <div className="flex items-end justify-between">
        <h2 className="slide-title">Escolha o nível de transformação</h2>
        <span className="slide-badge mb-[14px] rounded-full bg-brand-gradient px-[24px] py-[12px] text-paper">
          Mais indicada · Transformação
        </span>
      </div>
      <div className="mt-[26px] grid grid-cols-3 gap-[28px]">
        {planos.map((p) => (
          <div
            key={p.nome}
            className={`flex min-h-[440px] flex-col rounded-[20px] p-[30px] ${
              p.destaque
                ? "bg-ink-gradient text-paper shadow-[var(--shadow-elegant)]"
                : "border border-brand-gray/60 bg-paper"
            }`}
          >
            <span className={`slide-badge ${p.destaque ? "text-paper/60" : "text-muted-foreground"}`}>
              {p.duracao}
            </span>
            <h3 className="mt-[12px] text-[40px] tracking-[-0.02em]">{p.nome}</h3>
            <p className={`slide-caption mt-[8px] ${p.destaque ? "text-paper/60" : "text-muted-foreground"}`}>
              {p.claim}
            </p>
            <p className="slide-num mt-[18px] text-[54px] leading-none text-brand-gradient">
              {p.preco}
            </p>
            <div
              className={`mt-[14px] rounded-[12px] px-[16px] py-[12px] ${
                p.destaque ? "bg-paper/10" : "bg-brand-gray/20"
              }`}
            >
              <p className={`text-[21px] leading-[1.3] ${p.destaque ? "text-paper/85" : "text-ink/75"}`}>
                {p.pagamento}
              </p>
              <p className={`text-[21px] leading-[1.3] ${p.destaque ? "text-paper/60" : "text-muted-foreground"}`}>
                À vista: 5% de desconto
              </p>
            </div>
            <div className={`mt-[18px] h-px w-full ${p.destaque ? "bg-paper/15" : "bg-brand-gray/60"}`} />
            <ul className="mt-[16px] space-y-[8px]">
              {p.itens.map((i) => (
                <li key={i} className="flex items-start gap-[14px]">
                  <span className="mt-[12px] h-[7px] w-[7px] shrink-0 rounded-full bg-brand-gradient" />
                  <span className={`text-[22px] leading-[1.25] ${p.destaque ? "text-paper/80" : "text-ink/75"}`}>
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </SlideLayout>
  );
}

/* 16 — Fechamento */
function Fechamento() {
  return (
    <div className="slide-content texture-grain bg-brand-gradient text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.10] texture-grid" />
      <div className="absolute inset-x-[130px] top-[120px] bottom-[110px] flex flex-col justify-between">
        <img src={logoBranco.url} alt="Outros Ares" className="h-[84px] w-auto self-start object-contain" />
        <div>
          <span className="slide-kicker text-paper/70">Importante</span>
          <h2 className="slide-title mt-[24px] max-w-[1300px]">
            A consultoria é diagnóstico e planejamento.
          </h2>
          <p className="slide-body-lg mt-[28px] max-w-[1150px] text-paper/85">
            A produção de materiais — identidade visual, site, embalagens, fachada,
            apresentações, conteúdo e campanhas — é contratada à parte, como projeto de
            execução pela Outros Ares.
          </p>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="slide-kicker text-paper/70">Vamos começar</p>
            <p className="slide-subtitle mt-[16px]">O próximo capítulo da sua marca.</p>
          </div>
          <p className="slide-chrome text-paper/75">Emilly Guedes Sales · Design & Marketing</p>
        </div>
      </div>
    </div>
  );
}

/* 17 — Próximo capítulo */
function ProximoCapitulo() {
  return (
    <div className="slide-content texture-grain bg-ink-gradient text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.10] texture-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[340px] -bottom-[340px] h-[900px] w-[900px] rounded-full bg-brand-gradient opacity-25 blur-[130px]"
      />
      <div aria-hidden className="absolute left-0 right-0 top-0 h-[6px] bg-brand-gradient" />

      <div className="absolute inset-x-[130px] top-[96px] bottom-[92px] flex flex-col justify-between">
        <img src={logoBranco.url} alt="Outros Ares" className="h-[76px] w-auto self-start object-contain" />

        <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-[70px]">
          <div>
            <span className="slide-kicker text-paper/70">Vamos começar</span>
            <h2 className="slide-title mt-[22px] max-w-[1000px]">
              O próximo capítulo da sua marca começa agora.
            </h2>
            <p className="slide-body-lg mt-[26px] max-w-[900px] text-paper/85">
              Sua empresa já tem uma história. Agora é hora de construir a próxima fase dela.
            </p>
            <p className="slide-subtitle mt-[26px] text-brand-gradient">
              90 dias para organizar, posicionar, transformar e evoluir.
            </p>
          </div>

          <div className="rounded-[24px] border border-paper/15 bg-paper/[0.06] p-[44px]">
            <p className="slide-body-lg text-paper/90">
              Vamos transformar potencial em percepção.
              <br />
              Percepção em valor.
              <br />E valor em crescimento.
            </p>
            <a
              href="https://wa.me/5511987947984"
              target="_blank"
              rel="noreferrer"
              className="mt-[34px] inline-flex items-center gap-[16px] rounded-full bg-brand-gradient px-[38px] py-[22px] text-paper shadow-[var(--shadow-elegant)]"
            >
              <span className="slide-badge">QUERO A CONSULTORIA</span>
              <span className="text-[28px] leading-none">(11) 98794-7984</span>
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-paper/15 pt-[30px]">
          <p className="slide-caption text-paper/70">
            Marca. Experiência. Marketing. Estratégia.
          </p>
          <p className="slide-chrome text-paper/60">Emilly Guedes Sales · Design &amp; Marketing</p>
        </div>
      </div>
    </div>
  );
}



export const slides: { id: string; title: string; render: () => ReactNode }[] = [
  { id: "capa", title: "Capa", render: () => <Cover /> },
  { id: "ponto-de-partida", title: "O ponto de partida", render: () => <Question /> },
  { id: "diagnostico", title: "Diagnóstico estratégico", render: () => <Diagnostico /> },
  { id: "metodo", title: "Método Outros Ares", render: () => <Metodo /> },
  { id: "pilares", title: "Marca e identidade visual", render: () => <Pilares /> },
  { id: "experiencia", title: "Experiência de marca", render: () => <Experiencia /> },
  { id: "pontos-de-contato", title: "Pontos de contato", render: () => <Jornada /> },
  { id: "raio-x", title: "Raio-X da Marca", render: () => <RaioX /> },
  { id: "gargalos", title: "10 principais gargalos", render: () => <Gargalos /> },
  { id: "plano-evolucao", title: "Plano de evolução", render: () => <PlanoEvolucao /> },
  {
    id: "fase-1",
    title: "Fase 1 — Diagnóstico",
    render: () => (
      <Fase
        index={11}
        fase="Fase 1"
        dias="Dias 1–30"
        titulo="Diagnóstico e direcionamento"
        objetivo="Entender profundamente a empresa e descobrir onde estão os gargalos que impedem a marca de transmitir o valor que realmente possui."
        semanas={[
          ["Semana 1 — Imersão", "História, momento atual, objetivos, produtos, ticket médio, público e concorrência."],
          ["Semana 2 — Auditoria", "Identidade, comunicação, digital, experiência, marketing e comercial."],
          ["Semana 3 — Diagnóstico", "Raio-X da Marca, 10 gargalos, 10 oportunidades e prioridades."],
          ["Semana 4 — Estratégia", "Posicionamento, cliente ideal, proposta de valor e direcionamentos."],
        ]}
        entrega="Plano de transformação de 90 dias"
      />
    ),
  },
  {
    id: "fase-2",
    title: "Fase 2 — Estruturação",
    render: () => (
      <Fase
        index={12}
        fase="Fase 2"
        dias="Dias 31–60"
        titulo="Estruturação e transformação"
        objetivo="Corrigir os principais pontos identificados e criar uma estrutura de marca mais profissional, coerente e estratégica."
        semanas={[
          ["Comunicação", "Instagram, site, apresentações, propostas, documentos, catálogos e papelaria."],
          ["Direcionamento", "O que manter, o que corrigir, o que criar e o que eliminar."],
          ["Experiência", "Ambiente, iluminação, materiais, texturas, uniformes, embalagens e brindes."],
          ["Marketing e comercial", "Campanhas, conteúdo, relacionamento, atendimento, proposta e follow-up."],
        ]}
        entrega="Mapa da experiência da marca"
      />
    ),
  },
  {
    id: "fase-3",
    title: "Fase 3 — Implementação",
    render: () => (
      <Fase
        index={13}
        fase="Fase 3"
        dias="Dias 61–90"
        titulo="Implementação e evolução"
        objetivo="Colocar a estratégia em prática, testar, medir e definir o próximo nível da marca."
        semanas={[
          ["Implementação", "Campanha, conteúdo, ação comercial e estratégias de aquisição e relacionamento."],
          ["Análise", "O que funcionou, o que precisa de ajuste e quais indicadores evoluíram."],
          ["Ajustes estratégicos", "Refinamento das ações e das prioridades da marca."],
          ["Evolução da marca", "Onde estávamos → o que foi identificado → o que foi transformado."],
        ]}
        entrega="Dossiê estratégico e próximas prioridades"
      />
    ),
  },
  { id: "dossie", title: "Dossiê Estratégico", render: () => <Dossie /> },
  { id: "investimento", title: "Investimento", render: () => <Investimento /> },
  { id: "fechamento", title: "Fechamento", render: () => <Fechamento /> },
  { id: "proximo-capitulo", title: "O próximo capítulo", render: () => <ProximoCapitulo /> },
];
