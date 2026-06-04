import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Custo do Servidor — Mantenha sua conta sempre ativa",
  description: "Contribua com R$ 19,90 e mantenha sua conta protegida e ativa.",
}

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOP1"

const WHITE = "#FFFFFF"
const INK = "#111111"
const GREEN = "#16A34A"
const GREEN_TINT = "#ECFBF1"
const GRAY = "#8A8A8A"
const BORDER = "#ECECEC"

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      style={{
        display: "block",
        width: "100%",
        backgroundColor: GREEN,
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
      href="/obrigado"
      style={{
        display: "inline-block",
        marginTop: 12,
        fontSize: 13,
        color: GRAY,
        textDecoration: "underline",
      }}
    >
      Não obrigado, prefiro arriscar minha conta.
    </a>
  )
}

export default function CustoServidorUpsellPage() {
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
        🛡️ Mantenha sua conta sempre ativa
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
              color: GREEN,
              backgroundColor: GREEN_TINT,
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            CONTRIBUIÇÃO DO SERVIDOR
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
            Garanta que sua conta nunca seja suspensa
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: "#444444", marginBottom: 36 }}>
            O app tem custos reais de servidor. Contribuindo com R$ 19,90 você mantém sua conta
            protegida e ativa.
          </p>

          <CtaButton label="CONTRIBUIR COM R$ 19,90 AGORA →" />

          <p style={{ fontSize: 13, color: GRAY, marginTop: 16 }}>
            🔒 Pagamento seguro · Sua conta fica garantida · Sem surpresas
          </p>

          <div>
            <DeclineLink />
          </div>
        </section>

        {/* 3. WHAT HAPPENS WITHOUT IT */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            paddingBottom: 56,
          }}
          className="wa-servidor-problem"
        >
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY, marginBottom: 10 }}>
              ❌ SEM CONTRIBUIÇÃO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "#333333" }}>
              Sua conta pode ser suspensa por inatividade de servidor. Você perde acesso às
              avaliações disponíveis.
            </p>
          </div>

          <div
            style={{
              border: `1px solid ${GREEN}`,
              backgroundColor: GREEN_TINT,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: GREEN, marginBottom: 10 }}>
              ✅ COM CONTRIBUIÇÃO
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "#1a1a1a" }}>
              Sua conta fica protegida, ativa e com prioridade de manutenção. Você continua ganhando
              sem interrupção.
            </p>
          </div>
        </section>

        {/* 4. ONE ANCHOR STAT */}
        <section style={{ textAlign: "center", paddingBottom: 56 }}>
          <p style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, textWrap: "balance" }}>
            Você ganha muito mais do que{" "}
            <span style={{ color: GREEN }}>R$ 19,90 por mês</span> com as avaliações
          </p>
          <p style={{ fontSize: 14, color: GRAY, marginTop: 10 }}>
            Proteger sua conta é proteger sua renda.
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
                    backgroundColor: GREEN_TINT,
                    color: GREEN,
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
          .wa-servidor-problem { grid-template-columns: 1fr 1fr !important; }
          .wa-servidor-testimonials { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
