import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "App Rápido — Receba avaliações antes de todo mundo",
  description: "Entre na fila prioritária e nunca fique sem tarefa disponível.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOJ"

const BG = "#0A0F1E"
const CARD = "#111827"
const WHITE = "#FFFFFF"
const LIGHT = "#CBD5E1"
const GRAY = "#7C8BA3"
const BLUE = "#3B82F6"
const RED = "#EF4444"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="wa-cta"
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        backgroundColor: BLUE,
        color: WHITE,
        textAlign: "center",
        fontWeight: 800,
        fontSize: 17,
        lineHeight: 1.3,
        padding: "20px 24px",
        borderRadius: 14,
        textDecoration: "none",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(59,130,246,0.6), 0 10px 40px rgba(59,130,246,0.45)",
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
      <span className="wa-shimmer" aria-hidden="true" />
    </a>
  )
}

function DeclineLink() {
  return (
    <a
      href="/gold"
      style={{
        display: "inline-block",
        marginTop: 12,
        fontSize: 13,
        color: GRAY,
        textDecoration: "underline",
      }}
    >
      Não obrigado, prefiro ficar na fila comum.
    </a>
  )
}

export default function AppRapidoUpsellPage() {
  return (
    <main
      className={jakarta.className}
      style={{ backgroundColor: BG, color: WHITE, minHeight: "100vh", width: "100%" }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          color: BLUE,
          padding: "12px 16px",
          backgroundColor: "#070B16",
          borderBottom: "1px solid rgba(59,130,246,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <span className="wa-pulse" aria-hidden="true" />
        ⚡ Oferta única — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ position: "relative", paddingTop: 56, paddingBottom: 56, textAlign: "center" }}>
          {/* speed lines decoration */}
          <svg
            className="wa-speed"
            aria-hidden="true"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="40" x2="400" y2="40" stroke={BLUE} strokeWidth="2" />
            <line x1="40" y1="90" x2="400" y2="90" stroke={BLUE} strokeWidth="3" />
            <line x1="0" y1="140" x2="360" y2="140" stroke={BLUE} strokeWidth="2" />
            <line x1="80" y1="170" x2="400" y2="170" stroke={BLUE} strokeWidth="2" />
          </svg>

          <span
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: BLUE,
              backgroundColor: "transparent",
              border: `1px solid rgba(59,130,246,0.5)`,
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            COMPRA ÚNICA · SEM MENSALIDADE
          </span>

          <h1
            style={{
              position: "relative",
              fontSize: 42,
              lineHeight: 1.1,
              fontWeight: 800,
              marginTop: 24,
              marginBottom: 16,
              textWrap: "balance",
              color: WHITE,
            }}
          >
            Receba avaliações{" "}
            <span className="wa-glow-underline" style={{ color: BLUE, fontStyle: "italic" }}>
              antes de todo mundo
            </span>
          </h1>

          <p style={{ position: "relative", fontSize: 18, lineHeight: 1.5, color: LIGHT, marginBottom: 36 }}>
            Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
          </p>

          <div style={{ position: "relative" }}>
            <CtaButton label="QUERO APP RÁPIDO POR R$ 27,90 →" />

            <p style={{ fontSize: 13, color: GRAY, marginTop: 16 }}>
              🔒 Pagamento único · Sem mensalidade · Acesso vitalício
            </p>

            <div>
              <DeclineLink />
            </div>
          </div>
        </section>

        {/* 3. PROBLEM vs SOLUTION */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingBottom: 56,
          }}
          className="wa-rapido-problem"
        >
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: 14,
              borderLeft: `4px solid ${RED}`,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 10 }}>
              ❌ SEM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: LIGHT }}>
              Você entra na fila comum e espera avaliações sobrarem para outros usuários.
            </p>
          </div>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: 14,
              borderLeft: `4px solid ${BLUE}`,
              padding: 24,
              boxShadow: "0 0 0 1px rgba(59,130,246,0.3), 0 8px 30px rgba(59,130,246,0.25)",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: BLUE, marginBottom: 10 }}>
              ✅ COM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: WHITE }}>
              Você é o primeiro a receber novas avaliações disponíveis — sempre.
            </p>
          </div>
        </section>

        {/* 4. ONE BIG NUMBER */}
        <section style={{ textAlign: "center", paddingBottom: 56 }}>
          <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)", marginBottom: 40 }} />
          <div
            style={{
              fontSize: 128,
              fontWeight: 800,
              lineHeight: 1,
              color: BLUE,
              textShadow: "0 0 50px rgba(59,130,246,0.6)",
            }}
          >
            2x
          </div>
          <p style={{ fontSize: 24, fontWeight: 700, color: WHITE, marginTop: 8 }}>
            mais avaliações por dia
          </p>
          <p style={{ fontSize: 14, color: GRAY, marginTop: 10 }}>
            Mais avaliações = mais ganhos. Simples assim.
          </p>
          <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)", marginTop: 40 }} />
        </section>

        {/* 5. TESTIMONIALS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingBottom: 56,
          }}
          className="wa-rapido-testimonials"
        >
          {[
            {
              initials: "MR",
              name: "Marcos R.",
              city: "RJ",
              quote: "Antes ficava horas sem tarefa. Agora assim que abre já cai pra mim.",
            },
            {
              initials: "JS",
              name: "Juliana S.",
              city: "MG",
              quote: "Paguei uma vez e até hoje recebo antes de todo mundo. Melhor compra.",
            },
          ].map((t) => (
            <div
              key={t.initials}
              style={{
                backgroundColor: CARD,
                borderRadius: 14,
                borderLeft: `3px solid ${BLUE}`,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    backgroundColor: BLUE,
                    color: WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {t.initials}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: WHITE }}>
                  {t.name} <span style={{ color: GRAY, fontWeight: 400 }}>— {t.city}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: LIGHT, fontStyle: "italic" }}>{`"${t.quote}"`}</p>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, textWrap: "balance", color: WHITE }}>
            Pagamento único de R$ 27,90 — para sempre.
          </p>
          <CtaButton label="ATIVAR APP RÁPIDO AGORA →" />
          <div>
            <DeclineLink />
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .wa-rapido-problem { grid-template-columns: 1fr 1fr !important; }
          .wa-rapido-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
        .wa-pulse {
          display: inline-block;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background-color: ${BLUE};
          box-shadow: 0 0 0 0 rgba(59,130,246,0.7);
          animation: wa-pulse-anim 1.8s infinite;
        }
        @keyframes wa-pulse-anim {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        .wa-shimmer {
          position: absolute;
          top: 0;
          left: -150%;
          width: 60%;
          height: 100%;
          background: linear-gradient(110deg, transparent, rgba(255,255,255,0.45), transparent);
          transform: skewX(-20deg);
          animation: wa-shimmer-anim 2.8s infinite;
        }
        @keyframes wa-shimmer-anim {
          0% { left: -150%; }
          60% { left: 150%; }
          100% { left: 150%; }
        }
        .wa-glow-underline {
          text-decoration: underline;
          text-decoration-color: ${BLUE};
          text-underline-offset: 6px;
          text-decoration-thickness: 3px;
          filter: drop-shadow(0 0 12px rgba(59,130,246,0.7));
        }
        .wa-speed {
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          height: 200px;
          opacity: 0.07;
          pointer-events: none;
        }
      `}</style>
    </main>
  )
}
