import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: "App Rápido — Receba avaliações antes de todo mundo",
  description: "Entre na fila prioritária e nunca fique sem tarefa disponível.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOJ"

const BG = "#0F0F0F"
const CARD = "#212121"
const CARD_HOVER = "#272727"
const RED = "#FF0000"
const TEXT = "#F1F1F1"
const MUTED = "#AAAAAA"
const BORDER = "#3F3F3F"
const WHITE = "#FFFFFF"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="yt-cta"
      style={{
        display: "block",
        width: "100%",
        backgroundColor: RED,
        color: WHITE,
        textAlign: "center",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.3,
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        padding: "18px 24px",
        borderRadius: 2,
        textDecoration: "none",
      }}
    >
      {label}
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
        color: MUTED,
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
      className={roboto.className}
      style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh", width: "100%" }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 500,
          color: WHITE,
          padding: "12px 16px",
          backgroundColor: RED,
        }}
      >
        ⚡ Oferta única — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 56, paddingBottom: 56, textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: WHITE,
              backgroundColor: RED,
              padding: "6px 14px",
              borderRadius: 500,
            }}
          >
            COMPRA ÚNICA · SEM MENSALIDADE
          </span>

          <h1
            style={{
              fontSize: 42,
              lineHeight: 1.15,
              fontWeight: 700,
              marginTop: 24,
              marginBottom: 16,
              textWrap: "balance",
              color: WHITE,
            }}
          >
            Receba avaliações{" "}
            <span style={{ color: RED }}>antes de todo mundo</span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: MUTED, marginBottom: 36 }}>
            Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
          </p>

          <div>
            <CtaButton label="QUERO APP RÁPIDO POR R$ 27,90 →" />

            <p style={{ fontSize: 13, color: MUTED, marginTop: 16 }}>
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
          className="yt-rapido-problem"
        >
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: 12,
              borderLeft: `3px solid ${RED}`,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 10 }}>
              ❌ SEM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: MUTED }}>
              Você entra na fila comum e espera avaliações sobrarem para outros usuários.
            </p>
          </div>

          <div
            style={{
              backgroundColor: CARD_HOVER,
              borderRadius: 12,
              borderLeft: `3px solid ${RED}`,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 10 }}>
              ✅ COM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: TEXT }}>
              Você é o primeiro a receber novas avaliações disponíveis — sempre.
            </p>
          </div>
        </section>

        {/* 4. ONE BIG NUMBER */}
        <section style={{ textAlign: "center", paddingBottom: 56 }}>
          <div style={{ height: 1, backgroundColor: BORDER, marginBottom: 40 }} />
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              lineHeight: 1,
              color: RED,
            }}
          >
            2x
          </div>
          <p style={{ fontSize: 24, fontWeight: 700, color: WHITE, marginTop: 8 }}>
            mais avaliações por dia
          </p>
          <p style={{ fontSize: 14, color: MUTED, marginTop: 10 }}>
            Mais avaliações = mais ganhos. Simples assim.
          </p>
          <div style={{ height: 1, backgroundColor: BORDER, marginTop: 40 }} />
        </section>

        {/* 5. TESTIMONIALS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingBottom: 56,
          }}
          className="yt-rapido-testimonials"
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
                borderRadius: 12,
                borderLeft: `3px solid ${RED}`,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    backgroundColor: RED,
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
                <div style={{ fontSize: 14, fontWeight: 500, color: TEXT }}>
                  {t.name} <span style={{ color: MUTED, fontWeight: 400 }}>— {t.city}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: MUTED, fontStyle: "italic" }}>{`"${t.quote}"`}</p>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, textWrap: "balance", color: TEXT }}>
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
          .yt-rapido-problem { grid-template-columns: 1fr 1fr !important; }
          .yt-rapido-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
        .yt-cta { transition: background-color 0.15s ease; }
        .yt-cta:hover { background-color: #CC0000; }
      `}</style>
    </main>
  )
}
