import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "App Rápido — Receba avaliações antes de todo mundo",
  description: "Entre na fila prioritária e nunca fique sem tarefa disponível.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOJ"

const WHITE = "#FFFFFF"
const INK = "#111111"
const BLUE = "#2563EB"
const BLUE_TINT = "#EFF4FE"
const GRAY = "#8A8A8A"
const BORDER = "#ECECEC"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      style={{
        display: "block",
        width: "100%",
        backgroundColor: BLUE,
        color: WHITE,
        textAlign: "center",
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 1.3,
        padding: "18px 24px",
        borderRadius: 12,
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
      style={{ backgroundColor: WHITE, color: INK, minHeight: "100vh", width: "100%" }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontSize: 13,
          color: GRAY,
          padding: "12px 16px",
          borderBottom: `1px solid ${BORDER}`,
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
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: BLUE,
              backgroundColor: BLUE_TINT,
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            COMPRA ÚNICA · SEM MENSALIDADE
          </span>

          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              fontWeight: 800,
              marginTop: 24,
              marginBottom: 16,
              textWrap: "balance",
            }}
          >
            Receba avaliações antes de todo mundo
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: "#444444", marginBottom: 36 }}>
            Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
          </p>

          <CtaButton label="QUERO APP RÁPIDO POR R$ 27,90 →" />

          <p style={{ fontSize: 13, color: GRAY, marginTop: 16 }}>
            🔒 Pagamento único · Sem mensalidade · Acesso vitalício
          </p>

          <div>
            <DeclineLink />
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
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY, marginBottom: 10 }}>
              ❌ SEM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "#333333" }}>
              Você entra na fila comum e espera avaliações sobrarem para outros usuários.
            </p>
          </div>

          <div
            style={{
              border: `1px solid ${BLUE}`,
              backgroundColor: BLUE_TINT,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: BLUE, marginBottom: 10 }}>
              ✅ COM APP RÁPIDO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1a1a1a" }}>
              Você é o primeiro a receber novas avaliações disponíveis — sempre.
            </p>
          </div>
        </section>

        {/* 4. ONE BIG NUMBER */}
        <section style={{ textAlign: "center", paddingBottom: 56 }}>
          <p style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, textWrap: "balance" }}>
            Usuários prioritários completam{" "}
            <span style={{ color: BLUE }}>2x mais avaliações por dia</span>
          </p>
          <p style={{ fontSize: 14, color: GRAY, marginTop: 10 }}>
            Mais avaliações = mais ganhos. Simples assim.
          </p>
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
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    backgroundColor: BLUE_TINT,
                    color: BLUE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {t.initials}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {t.name} <span style={{ color: GRAY, fontWeight: 400 }}>— {t.city}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "#333333" }}>{`"${t.quote}"`}</p>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, textWrap: "balance" }}>
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
      `}</style>
    </main>
  )
}
