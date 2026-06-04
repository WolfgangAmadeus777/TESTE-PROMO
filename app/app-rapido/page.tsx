import type { Metadata } from "next"
import { Barlow, Barlow_Condensed } from "next/font/google"

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" })
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  title: "App Rápido — Receba avaliações antes de todo mundo",
  description: "Entre na fila prioritária e nunca fique sem tarefa disponível.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOJ"

const BG = "#FFFFFF"
const TEXT = "#111111"
const BLUE = "#2563EB"
const BLUE_TINT = "#EFF6FF"
const RED_TINT = "#FEF2F2"
const RED = "#DC2626"
const MUTED = "#6B7280"
const DECLINE = "#9CA3AF"
const BORDER = "#E5E7EB"

const CONDENSED = "var(--font-barlow-condensed)"
const BODY = "var(--font-barlow)"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="ed-cta"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 56,
        backgroundColor: BLUE,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: CONDENSED,
        fontWeight: 700,
        fontSize: 20,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        borderRadius: 4,
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
        fontFamily: BODY,
        fontSize: 13,
        color: DECLINE,
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
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh", width: "100%", fontFamily: BODY }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontFamily: CONDENSED,
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          padding: "12px 16px",
          backgroundColor: BLUE,
        }}
      >
        Oferta única — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 56, paddingBottom: 56, position: "relative", overflow: "hidden" }}>
          {/* decorative diagonal line */}
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 600 400"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
          >
            <line x1="-50" y1="380" x2="520" y2="-40" stroke={BLUE_TINT} strokeWidth="80" />
          </svg>

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: CONDENSED,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: BLUE,
                backgroundColor: "#FFFFFF",
                border: `1.5px solid ${BLUE}`,
                padding: "6px 16px",
                borderRadius: 500,
              }}
            >
              Compra única · Sem mensalidade
            </span>

            <h1
              style={{
                fontFamily: CONDENSED,
                fontSize: 64,
                lineHeight: 0.95,
                fontWeight: 800,
                textTransform: "uppercase",
                marginTop: 24,
                marginBottom: 20,
                textWrap: "balance",
                color: TEXT,
              }}
            >
              Receba avaliações{" "}
              <span style={{ color: BLUE, fontStyle: "italic" }}>antes de todo mundo</span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.5, color: MUTED, marginBottom: 36, maxWidth: 460 }}>
              Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
            </p>

            <CtaButton label="Quero App Rápido por R$ 27,90 →" />

            <p style={{ fontSize: 13, color: MUTED, marginTop: 16, textAlign: "center" }}>
              🔒 Pagamento único · Sem mensalidade · Acesso vitalício
            </p>

            <div style={{ textAlign: "center" }}>
              <DeclineLink />
            </div>
          </div>
        </section>
      </div>

      {/* 3. PROBLEM vs SOLUTION — edge to edge vertical split */}
      <section className="ed-split" style={{ display: "grid", gridTemplateColumns: "1fr", margin: "0 0 56px" }}>
        <div style={{ backgroundColor: RED_TINT, borderLeft: `5px solid ${RED}`, padding: "32px 24px" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: CONDENSED,
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: RED,
                marginBottom: 10,
              }}
            >
              ❌ Sem App Rápido
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: TEXT }}>
              Você entra na fila comum e espera avaliações sobrarem para outros usuários.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: BLUE_TINT, borderLeft: `5px solid ${BLUE}`, padding: "32px 24px" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: CONDENSED,
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: BLUE,
                marginBottom: 10,
              }}
            >
              ✅ Com App Rápido
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: TEXT }}>
              Você é o primeiro a receber novas avaliações disponíveis — sempre.
            </p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 4. STAT — left aligned */}
        <section style={{ paddingBottom: 56, borderTop: `1px solid ${BLUE}`, paddingTop: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                fontFamily: CONDENSED,
                fontSize: 160,
                fontWeight: 900,
                lineHeight: 0.85,
                color: BLUE,
              }}
            >
              2x
            </div>
            <div
              style={{
                fontFamily: CONDENSED,
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1,
                textTransform: "uppercase",
                color: TEXT,
              }}
            >
              mais avaliações
              <br />
              por dia
            </div>
          </div>
          <p style={{ fontSize: 15, color: MUTED, marginTop: 16 }}>
            Mais avaliações = mais ganhos. Simples assim.
          </p>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="ed-testimonials" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, paddingBottom: 56 }}>
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
                backgroundColor: "#FFFFFF",
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${BLUE}`,
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.5, color: TEXT, marginBottom: 16 }}>{`"${t.quote}"`}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: BLUE,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: CONDENSED,
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {t.initials}
                </div>
                <div style={{ fontSize: 14, color: MUTED }}>
                  {t.name} — {t.city}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64 }}>
          <p
            style={{
              fontFamily: CONDENSED,
              fontSize: 28,
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: 20,
              textWrap: "balance",
              color: TEXT,
            }}
          >
            Pagamento único de R$ 27,90 — para sempre.
          </p>
          <CtaButton label="Ativar App Rápido agora →" />
          <div style={{ textAlign: "center" }}>
            <DeclineLink />
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .ed-split { grid-template-columns: 1fr 1fr !important; }
          .ed-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
        .ed-cta { transition: background-color 0.15s ease; }
        .ed-cta:hover { background-color: #1D4ED8; }
      `}</style>
    </main>
  )
}
