import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: "Custo do Servidor — Mantenha sua conta sempre ativa",
  description: "Contribua com R$ 19,90 e mantenha sua conta protegida e ativa.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOP1"

const WHITE = "#FFFFFF"
const INK = "#0F0F0F"
const SECONDARY = "#606060"
const RED = "#FF0000"
const SURFACE = "#F2F2F2"
const BORDER = "#E5E5E5"
const RED_TINT = "#FEF2F2"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      style={{
        display: "block",
        width: "100%",
        backgroundColor: RED,
        color: WHITE,
        textAlign: "center",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.3,
        minHeight: 56,
        padding: "18px 24px",
        borderRadius: 2,
        textDecoration: "none",
        boxSizing: "border-box",
      }}
    >
      {label}
    </a>
  )
}

function DeclineLink() {
  return (
    <a
      href="/obrigado"
      style={{
        display: "inline-block",
        marginTop: 12,
        fontSize: 13,
        color: SECONDARY,
        textDecoration: "underline",
      }}
    >
      Não obrigado, prefiro arriscar minha conta.
    </a>
  )
}

function ShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3z"
        fill={RED}
      />
      <path
        d="M9.5 12.5l1.8 1.8 3.5-3.8"
        stroke={WHITE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CustoServidorUpsellPage() {
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
        Mantenha sua conta sempre ativa
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. HERO */}
        <section style={{ paddingTop: 48, paddingBottom: 48, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <ShieldIcon />
          </div>

          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: 24,
              textWrap: "balance",
            }}
          >
            Garanta que sua conta <span style={{ color: RED }}>nunca seja suspensa</span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textAlign: "left",
              backgroundColor: RED_TINT,
              borderLeft: `4px solid ${RED}`,
              borderRadius: 12,
              padding: "14px 16px",
              marginBottom: 32,
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>⚠️</span>
            <span style={{ fontSize: 14, lineHeight: 1.45, color: INK, fontWeight: 500 }}>
              Contas sem contribuição estão sujeitas à suspensão
            </span>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.5, color: SECONDARY, marginBottom: 32 }}>
            O app tem custos reais de servidor. Contribuindo com R$ 19,90 você mantém sua conta
            protegida e ativa.
          </p>

          <CtaButton label="CONTRIBUIR COM R$ 19,90 AGORA →" />

          <p style={{ fontSize: 13, color: SECONDARY, marginTop: 16 }}>
            Pagamento seguro · Sua conta fica garantida · Sem surpresas
          </p>

          <div>
            <DeclineLink />
          </div>
        </section>

        {/* 3. WHAT HAPPENS WITHOUT IT — STACKED */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            paddingBottom: 48,
          }}
        >
          <div
            style={{
              backgroundColor: RED_TINT,
              borderLeft: `4px solid ${RED}`,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 10 }}>
              ❌ SEM CONTRIBUIÇÃO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: INK }}>
              Sua conta pode ser suspensa por inatividade de servidor. Você perde acesso às
              avaliações disponíveis.
            </p>
          </div>

          <div
            style={{
              backgroundColor: SURFACE,
              borderLeft: `4px solid ${RED}`,
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 10 }}>
              ✅ COM CONTRIBUIÇÃO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: INK }}>
              Sua conta fica protegida, ativa e com prioridade de manutenção. Você continua ganhando
              sem interrupção.
            </p>
          </div>
        </section>
      </div>

      {/* 4. STAT BLOCK — DARK FULL BLEED */}
      <section style={{ backgroundColor: INK, padding: "56px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 24, fontWeight: 700, color: WHITE, lineHeight: 1.3 }}>
            Você ganha muito mais do que
          </p>
          <p
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: RED,
              lineHeight: 1,
              margin: "12px 0",
            }}
          >
            R$ 19,90
          </p>
          <p style={{ fontSize: 24, fontWeight: 700, color: WHITE, lineHeight: 1.3 }}>
            por mês com as avaliações
          </p>
          <p style={{ fontSize: 14, color: SECONDARY, marginTop: 16 }}>
            Proteger sua conta é proteger sua renda.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {/* 5. TESTIMONIALS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingTop: 48,
            paddingBottom: 48,
          }}
          className="wa-servidor-testimonials"
        >
          {[
            {
              initials: "CP",
              name: "Carla P.",
              city: "BA",
              quote:
                "Paguei sem pensar duas vezes. Não queria perder minha conta depois de tudo que já ganhei.",
            },
            {
              initials: "DL",
              name: "Diego L.",
              city: "PR",
              quote: "Faz sentido. O app me gera renda, justo contribuir para ele continuar no ar.",
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
                  {t.name} <span style={{ color: SECONDARY, fontWeight: 400 }}>— {t.city}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: SECONDARY, fontStyle: "italic" }}>
                {`"${t.quote}"`}
              </p>
            </div>
          ))}
        </section>

        {/* 6. FINAL CTA */}
        <section style={{ paddingBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, textWrap: "balance" }}>
            R$ 19,90 para manter sua conta ativa e segura.
          </p>
          <CtaButton label="QUERO MANTER MINHA CONTA ATIVA →" />
          <div>
            <DeclineLink />
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .wa-servidor-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
