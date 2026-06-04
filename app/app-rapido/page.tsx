import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "App Rápido — Receba avaliações antes de todo mundo",
  description: "Entre na fila prioritária e nunca fique sem tarefa disponível.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOJ"

const BG = "#FFFFFF"
const SURFACE = "#F2F2F2"
const RED = "#FF0000"
const RED_HOVER = "#CC0000"
const TEXT = "#0F0F0F"
const MUTED = "#606060"
const BORDER = "#E5E5E5"

const FONT = "var(--font-roboto)"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="yt-cta"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 56,
        backgroundColor: RED,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: 17,
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
        fontFamily: FONT,
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
      className={roboto.variable}
      style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh", width: "100%", fontFamily: FONT }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "#FFFFFF",
          padding: "12px 16px",
          backgroundColor: RED,
        }}
      >
        Oferta única — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 48, paddingBottom: 48 }}>
          {/* progress bar — você na frente */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 8 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "0 0 auto" }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 500,
                      backgroundColor: i === 0 ? RED : SURFACE,
                      color: i === 0 ? "#FFFFFF" : MUTED,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flex: "0 0 auto",
                    }}
                  >
                    {/* user icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  {i < 2 && (
                    <div style={{ flex: 1, height: 3, backgroundColor: i === 0 ? RED : BORDER, margin: "0 4px" }} />
                  )}
                </div>
              ))}
            </div>
            <span
              style={{
                display: "inline-block",
                fontFamily: FONT,
                fontSize: 12,
                fontWeight: 500,
                color: RED,
                backgroundColor: SURFACE,
                padding: "4px 12px",
                borderRadius: 500,
              }}
            >
              Você está aqui na frente
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONT,
              fontSize: 44,
              lineHeight: 1.05,
              fontWeight: 700,
              marginBottom: 20,
              textWrap: "balance",
              color: TEXT,
            }}
          >
            Receba avaliações <span style={{ color: RED }}>antes de todo mundo</span>
          </h1>

          {/* medals row */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 28 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, lineHeight: 1 }}>🥇</div>
              <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: RED, marginTop: 6 }}>Você</div>
            </div>
            <div style={{ textAlign: "center", opacity: 0.5 }}>
              <div style={{ fontSize: 28, lineHeight: 1 }}>🥈</div>
            </div>
            <div style={{ textAlign: "center", opacity: 0.5 }}>
              <div style={{ fontSize: 28, lineHeight: 1 }}>🥉</div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.5, color: MUTED, marginBottom: 32 }}>
            Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
          </p>

          <CtaButton label="QUERO APP RÁPIDO POR R$ 27,90 →" />

          <p style={{ fontSize: 13, color: MUTED, marginTop: 16, textAlign: "center" }}>
            🔒 Pagamento único · Sem mensalidade · Acesso vitalício
          </p>

          <div style={{ textAlign: "center" }}>
            <DeclineLink />
          </div>
        </section>

        {/* 3. PROBLEM vs SOLUTION */}
        <section className="yt-split" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, paddingBottom: 48 }}>
          <div
            style={{
              backgroundColor: SURFACE,
              borderLeft: `4px solid ${RED}`,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 700,
                color: RED,
                marginBottom: 10,
              }}
            >
              ❌ Sem App Rápido
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: TEXT }}>
              Você entra na fila comum e espera avaliações sobrarem para outros usuários.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${RED}`,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 700,
                color: RED,
                marginBottom: 10,
              }}
            >
              ✅ Com App Rápido
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: TEXT }}>
              Você é o primeiro a receber novas avaliações disponíveis — sempre.
            </p>
          </div>
        </section>
      </div>

      {/* 4. STAT — dark banner */}
      <section style={{ backgroundColor: TEXT, padding: "48px 24px", marginBottom: 48 }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: FONT, fontSize: 120, fontWeight: 900, lineHeight: 0.9, color: RED }}>2x</div>
          <div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, color: "#FFFFFF", marginTop: 8 }}>
            mais avaliações por dia
          </div>
          <p style={{ fontSize: 14, color: "#AAAAAA", marginTop: 12 }}>
            Mais avaliações = mais ganhos. Simples assim.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 5. TESTIMONIALS */}
        <section
          className="yt-testimonials"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, paddingBottom: 48 }}
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
                backgroundColor: SURFACE,
                borderLeft: `3px solid ${RED}`,
                borderRadius: 12,
                padding: 24,
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.5, color: MUTED, fontStyle: "italic", marginBottom: 16 }}>
                {`"${t.quote}"`}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 500,
                    backgroundColor: RED,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {t.initials}
                </div>
                <div style={{ fontSize: 14 }}>
                  <span style={{ color: TEXT, fontWeight: 500 }}>{t.name}</span>{" "}
                  <span style={{ color: MUTED }}>— {t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64 }}>
          <p
            style={{
              fontFamily: FONT,
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 20,
              textWrap: "balance",
              color: TEXT,
            }}
          >
            Pagamento único de R$ 27,90 — para sempre.
          </p>
          <CtaButton label="ATIVAR APP RÁPIDO AGORA →" />
          <div style={{ textAlign: "center" }}>
            <DeclineLink />
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .yt-split { grid-template-columns: 1fr 1fr !important; }
          .yt-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
        .yt-cta { transition: background-color 0.15s ease; }
        .yt-cta:hover { background-color: ${RED_HOVER}; }
      `}</style>
    </main>
  )
}
