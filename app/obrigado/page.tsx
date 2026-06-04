import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Tudo certo — Sua conta está ativa",
  description: "Obrigado por participar. Sua conta está pronta para uso.",
}

const WHITE = "#FFFFFF"
const INK = "#111111"
const GREEN = "#16A34A"
const GREEN_TINT = "#ECFBF1"
const GRAY = "#8A8A8A"
const BORDER = "#ECECEC"

export default function ObrigadoPage() {
  return (
    <main
      className={jakarta.className}
      style={{
        backgroundColor: WHITE,
        color: INK,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 999,
            backgroundColor: GREEN_TINT,
            color: GREEN,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 800,
            margin: "0 auto 28px",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            fontSize: 36,
            lineHeight: 1.15,
            fontWeight: 800,
            marginBottom: 16,
            textWrap: "balance",
          }}
        >
          Tudo certo! Sua conta está ativa
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.5, color: "#444444", marginBottom: 36 }}>
          Obrigado por participar. Você já pode começar a receber e completar suas avaliações
          normalmente pelo aplicativo.
        </p>

        <div
          style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: 24,
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#333333" }}>
            <strong>Próximos passos:</strong>
            <br />
            1. Abra o aplicativo e acesse a aba de avaliações.
            <br />
            2. Complete as tarefas disponíveis para você.
            <br />
            3. Acompanhe seus ganhos diretamente no painel.
          </p>
        </div>

        <p style={{ fontSize: 13, color: GRAY, marginTop: 28 }}>
          Você pode fechar esta página com segurança.
        </p>
      </div>
    </main>
  )
}
