import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: "Plano Gold — Multiplique seus ganhos",
  description: "Usuários Gold ganham até 3x mais em cada avaliação enviada.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOOH"

const WHITE = "#FFFFFF"
const SURFACE = "#F2F2F2"
const RED = "#FF0000"
const INK = "#0F0F0F"
const GRAY = "#606060"
const BORDER = "#E5E5E5"

function CoinIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="34" rx="14" ry="5" fill={RED} opacity="0.25" />
      <ellipse cx="24" cy="28" rx="14" ry="5" fill={RED} opacity="0.45" />
      <ellipse cx="24" cy="22" rx="14" ry="5" fill={RED} opacity="0.7" />
      <ellipse cx="24" cy="16" rx="14" ry="5" fill={RED} />
      <text x="24" y="19" textAnchor="middle" fontSize="7" fontWeight="900" fill={WHITE}>
        R$
      </text>
    </svg>
  )
}

function CtaButton() {
  return (
    <a
      href={CHECKOUT_URL}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 56,
        backgroundColor: RED,
        color: WHITE,
        textAlign: "center",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.2,
        padding: "0 20px",
        borderRadius: 2,
        textDecoration: "none",
      }}
    >
      ATIVAR PLANO GOLD POR R$ 59,90/mês →
    </a>
  )
}

function DeclineLink() {
  return (
    <a
      href="/custo-servidor"
      style={{
        display: "inline-block",
        marginTop: 14,
        fontSize: 13,
        color: GRAY,
        textDecoration: "underline",
      }}
    >
      Não obrigado, prefiro continuar ganhando menos.
    </a>
  )
}

export default function GoldUpsellPage() {
  return (
    <main
      className={roboto.className}
      style={{ backgroundColor: WHITE, color: INK, minHeight: "100vh", width: "100%" }}
    >
      {/* 1. TOP BAR */}
      <div
        style={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 500,
          color: WHITE,
          backgroundColor: RED,
          padding: "10px 16px",
        }}
      >
        Oferta exclusiva — disponível apenas agora
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 48, paddingBottom: 44, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <CoinIcon />
          </div>

          <h1
            style={{
              fontSize: 38,
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: 24,
              textWrap: "balance",
            }}
          >
            Multiplique seus ganhos <span style={{ color: RED }}>com o Plano Gold</span>
          </h1>

          {/* STAT ROW */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 24, color: GRAY, textDecoration: "line-through" }}>R$ 0,50</span>
            <span style={{ fontSize: 24, color: GRAY }}>→</span>
            <span style={{ fontSize: 32, fontWeight: 700, color: RED }}>R$ 1,50</span>
          </div>
          <p style={{ fontSize: 14, color: GRAY, marginBottom: 36 }}>ganho por avaliação</p>

          <CtaButton />

          <p style={{ fontSize: 13, color: GRAY, marginTop: 16 }}>
            🔒 Pagamento seguro · Cancele quando quiser · Garantia de 7 dias
          </p>

          <div>
            <DeclineLink />
          </div>
        </section>

        {/* 3. COMPARISON TABLE */}
        <section style={{ paddingBottom: 56 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 12px",
                    fontWeight: 500,
                    color: GRAY,
                    backgroundColor: SURFACE,
                  }}
                />
                <th
                  style={{
                    textAlign: "center",
                    padding: "14px 12px",
                    fontWeight: 500,
                    color: GRAY,
                    backgroundColor: SURFACE,
                  }}
                >
                  Gratuito
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "14px 12px",
                    fontWeight: 700,
                    color: RED,
                    backgroundColor: WHITE,
                    borderTop: `3px solid ${RED}`,
                  }}
                >
                  Gold
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Ganho por avaliação", free: "R$ 0,50", gold: "R$ 1,50" },
                { label: "Bônus mensal", free: "—", gold: "R$ 20,00" },
                { label: "Avaliações prioritárias", free: "✗", gold: "✓" },
                { label: "Suporte VIP", free: "✗", gold: "✓" },
              ].map((row) => (
                <tr key={row.label}>
                  <td style={{ padding: "16px 12px", borderTop: `1px solid ${BORDER}`, fontWeight: 500 }}>
                    {row.label}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      borderTop: `1px solid ${BORDER}`,
                      textAlign: "center",
                      color: row.free === "✗" ? GRAY : GRAY,
                    }}
                  >
                    {row.free}
                  </td>
                  <td
                    style={{
                      padding: "16px 12px",
                      textAlign: "center",
                      fontWeight: 700,
                      color: RED,
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    {row.gold}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 4. STAT BLOCK */}
        <section
          style={{
            backgroundColor: INK,
            borderRadius: 12,
            padding: "48px 24px",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <p style={{ lineHeight: 1.1, textWrap: "balance" }}>
            <span style={{ fontSize: 72, fontWeight: 900, color: RED }}>R$ 127</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: WHITE, marginLeft: 8 }}>/mês a mais</span>
          </p>
          <p style={{ fontSize: 14, color: "#AAAAAA", marginTop: 16 }}>
            Com apenas 85 avaliações por mês
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
                backgroundColor: SURFACE,
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
                <div style={{ fontSize: 14, fontWeight: 500, color: INK }}>
                  {t.name} <span style={{ color: GRAY, fontWeight: 400 }}>— {t.city}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: GRAY, fontStyle: "italic" }}>{`"${t.quote}"`}</p>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64, textAlign: "center" }}>
          <CtaButton />
          <div>
            <DeclineLink />
          </div>
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
