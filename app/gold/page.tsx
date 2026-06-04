import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Plano Gold — Multiplique seus ganhos",
  description: "Usuários Gold ganham até 3x mais em cada avaliação enviada.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOL6"

const WHITE = "#FFFFFF"
const INK = "#111111"
const GOLD = "#D4A017"
const GOLD_TINT = "#FBF6E9"
const GRAY = "#8A8A8A"
const BORDER = "#ECECEC"

function CtaButton() {
  return (
    <a
      href={CHECKOUT_URL}
      style={{
        display: "block",
        width: "100%",
        backgroundColor: GOLD,
        color: INK,
        textAlign: "center",
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 1.3,
        padding: "18px 24px",
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      ATIVAR PLANO GOLD POR R$ 59,90/mês →
    </a>
  )
}

export default function GoldUpsellPage() {
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
        ⚡ Oferta exclusiva — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 56, paddingBottom: 48, textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: GOLD,
              backgroundColor: GOLD_TINT,
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            UPGRADE ESPECIAL
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
            Multiplique seus ganhos por avaliação com o Plano Gold
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: "#444444", marginBottom: 36 }}>
            Usuários Gold ganham até 3x mais em cada avaliação enviada.
          </p>

          <CtaButton />

          <p style={{ fontSize: 13, color: GRAY, marginTop: 16 }}>
            🔒 Pagamento seguro · Cancele quando quiser · Garantia de 7 dias
          </p>
        </section>

        {/* 3. COMPARISON TABLE */}
        <section style={{ paddingBottom: 56 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 12px", fontWeight: 600 }} />
                <th style={{ textAlign: "center", padding: "14px 12px", fontWeight: 600, color: GRAY }}>
                  Gratuito
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "14px 12px",
                    fontWeight: 800,
                    color: GOLD,
                    backgroundColor: GOLD_TINT,
                    borderLeft: `3px solid ${GOLD}`,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  ⭐ Gold
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Ganho por avaliação", free: "R$ 0,50", gold: "R$ 1,50" },
                { label: "Bônus mensal", free: "—", gold: "R$ 20,00" },
                { label: "Avaliações prioritárias", free: "✗", gold: "✓" },
                { label: "Suporte VIP", free: "✗", gold: "✓" },
              ].map((row, i, arr) => {
                const isLast = i === arr.length - 1
                return (
                  <tr key={row.label}>
                    <td style={{ padding: "16px 12px", borderTop: `1px solid ${BORDER}`, fontWeight: 500 }}>
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: "16px 12px",
                        borderTop: `1px solid ${BORDER}`,
                        textAlign: "center",
                        color: GRAY,
                      }}
                    >
                      {row.free}
                    </td>
                    <td
                      style={{
                        padding: "16px 12px",
                        textAlign: "center",
                        fontWeight: 700,
                        backgroundColor: GOLD_TINT,
                        borderLeft: `3px solid ${GOLD}`,
                        borderTop: `1px solid ${BORDER}`,
                        ...(isLast
                          ? { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }
                          : {}),
                      }}
                    >
                      {row.gold}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        {/* 4. ONE BIG NUMBER */}
        <section style={{ textAlign: "center", paddingBottom: 56 }}>
          <p style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, textWrap: "balance" }}>
            Usuários Gold ganham em média{" "}
            <span style={{ color: GOLD }}>R$ 127/mês a mais</span>
          </p>
          <p style={{ fontSize: 14, color: GRAY, marginTop: 10 }}>Com apenas 85 avaliações por mês</p>
        </section>

        {/* 5. TESTIMONIALS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingBottom: 56,
          }}
          className="wa-gold-testimonials"
        >
          {[
            {
              initials: "LM",
              name: "Lucas M.",
              city: "SP",
              quote: "No primeiro mês já recuperei o valor do plano com folga.",
            },
            {
              initials: "FR",
              name: "Fernanda R.",
              city: "CE",
              quote: "Achei caro no começo. Agora não largo por nada.",
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
                    backgroundColor: GOLD_TINT,
                    color: GOLD,
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
          <CtaButton />
          <a
            href="/custo-servidor"
            style={{
              display: "inline-block",
              marginTop: 12,
              fontSize: 13,
              color: GRAY,
              textDecoration: "underline",
            }}
          >
            Não obrigado, prefiro continuar ganhando menos.
          </a>
        </section>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .wa-gold-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
