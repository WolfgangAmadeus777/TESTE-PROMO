"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Gift, Users, Star, Shield, Flame, AlertTriangle, Check, Timer } from "lucide-react"

type Step = "form" | "loading" | "success"

const DIAS_SEMANA = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
function getDataHoje(): string {
  const d = new Date()
  return `${DIAS_SEMANA[d.getDay()]}, ${d.getDate()} De ${MESES[d.getMonth()]} De ${d.getFullYear()}`
}

export default function Page() {
  const dataHoje = getDataHoje()
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [step, setStep] = useState<Step>("form")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (step !== "loading") return

    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 3.5
      })
    }, 60)

    const timeout = setTimeout(() => {
      setStep("success")
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [step])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim()) return
    setStep("loading")
  }

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#ede8e3", fontFamily: "Inter, sans-serif" }}
    >
      {/* ── Header Banner ── */}
      <div style={{ backgroundColor: "#c03a2b", paddingTop: 13, paddingBottom: 13 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Flame style={{ width: 18, height: 18, color: "#ffffff" }} />
          <span
            style={{
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            PROMOÇÃO OFICIAL — EDIÇÃO LIMITADA
          </span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ padding: "32px 16px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>

          {/* ════ STEP 1 — Formulário ════ */}
          {step === "form" && (
            <>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                }}
              >
                {/* Pink Header */}
                <div style={{ backgroundColor: "#fde8e8", padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        backgroundColor: "#c03a2b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Gift style={{ width: 26, height: 26, color: "#ffffff" }} />
                    </div>
                    <div>
                      <h1
                        style={{
                          margin: 0,
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#1c1c1c",
                          lineHeight: 1.3,
                        }}
                      >
                        Você pode ter sido pré-selecionado!
                      </h1>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: 14,
                          fontWeight: 400,
                          color: "#c8877a",
                        }}
                      >
                        Confira em menos de 30 segundos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "24px 24px 28px" }}>
                  {/* Stats */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Users style={{ width: 20, height: 20, flexShrink: 0, color: "#c03a2b" }} />
                      <p style={{ margin: 0, fontSize: 15, color: "#2c2c2c" }}>
                        <span style={{ fontWeight: 700 }}>+12.430 pessoas</span> já receberam seus prêmios este mês
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Star style={{ width: 20, height: 20, flexShrink: 0, color: "#e8a020" }} />
                      <p style={{ margin: 0, fontSize: 15, color: "#2c2c2c" }}>
                        Avaliação <span style={{ fontWeight: 700 }}>4.9/5</span> dos participantes
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Shield style={{ width: 20, height: 20, flexShrink: 0, color: "#2e8b3a" }} />
                      <p style={{ margin: 0, fontSize: 15, color: "#2c2c2c" }}>
                        Site verificado e <span style={{ fontWeight: 700 }}>100% seguro</span>
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <p
                      style={{
                        margin: "24px 0 10px",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1c1c1c",
                      }}
                    >
                      Digite seu nome para começar:
                    </p>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome completo"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        border: "2px solid #c03a2b",
                        borderRadius: 12,
                        padding: "16px 18px",
                        fontSize: 16,
                        color: "#2c2c2c",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        marginTop: 12,
                        width: "100%",
                        backgroundColor: nome.trim() ? "#c03a2b" : "#d4837e",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: 12,
                        padding: "18px 0",
                        fontSize: 15,
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        cursor: nome.trim() ? "pointer" : "default",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      VERIFICAR MINHA PRÉ-SELEÇÃO
                    </button>
                  </form>
                </div>
              </div>

              {/* Warning Box */}
              <div
                style={{
                  marginTop: 20,
                  backgroundColor: "#fef6d6",
                  border: "1px solid #f0d98a",
                  borderRadius: 12,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <AlertTriangle
                  style={{ width: 20, height: 20, flexShrink: 0, color: "#d4900a", marginTop: 1 }}
                />
                <p style={{ margin: 0, fontSize: 14, color: "#2c2c2c", lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700 }}>Atenção:</span> Hoje,{" "}
                  <span style={{ fontWeight: 700 }}>{dataHoje}</span>, é o
                  último dia para participar.
                </p>
              </div>
            </>
          )}

          {/* ════ STEP 2 — Verificando perfil ════ */}
          {step === "loading" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: "48px 32px 40px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                textAlign: "center",
              }}
            >
              {/* Shield Icon */}
              <div
                style={{
                  display: "inline-flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                {/* Outer glow ring */}
                <div
                  style={{
                    position: "absolute",
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    backgroundColor: "#fde8e8",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    backgroundColor: "#c03a2b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Shield style={{ width: 32, height: 32, color: "#ffffff" }} />
                </div>
              </div>

              <h2
                style={{
                  margin: "24px 0 0",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#1c1c1c",
                }}
              >
                Verificando seu perfil...
              </h2>

              {/* Progress Bar */}
              <div
                style={{
                  marginTop: 28,
                  height: 6,
                  width: "100%",
                  backgroundColor: "#f0ece8",
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "#c03a2b",
                    borderRadius: 99,
                    transition: "width 60ms linear",
                  }}
                />
              </div>

              {/* Safe Connection Badge */}
              <div
                style={{
                  marginTop: 24,
                  backgroundColor: "#d6f0d6",
                  borderRadius: 12,
                  padding: "16px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Check style={{ width: 18, height: 18, color: "#2a7a2a" }} />
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#2a7a2a",
                  }}
                >
                  Conexão Segura
                </span>
              </div>
            </div>
          )}

          {/* ════ STEP 3 — Selecionado ════ */}
          {step === "success" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: "48px 32px 40px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                textAlign: "center",
              }}
            >
              {/* Gift Icon */}
              <div
                style={{
                  display: "inline-flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    backgroundColor: "#fde8e8",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    backgroundColor: "#c03a2b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Gift style={{ width: 32, height: 32, color: "#ffffff" }} />
                </div>
              </div>

              <h2
                style={{
                  margin: "28px 0 0",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#1c1c1c",
                  lineHeight: 1.3,
                }}
              >
                {"🎉 "}Parabéns! Você foi selecionado!
              </h2>

              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 15,
                  color: "#7a7a7a",
                  lineHeight: 1.5,
                }}
              >
                Seu perfil está qualificado para participar do nosso questionário premiado.
              </p>

              {/* Vagas Badge */}
              <div
                style={{
                  marginTop: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#fde8e8",
                  borderRadius: 99,
                  padding: "10px 22px",
                }}
              >
                <Flame style={{ width: 16, height: 16, color: "#c03a2b" }} />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#c03a2b",
                  }}
                >
                  67 vagas restantes
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => router.push(`/chat?nome=${encodeURIComponent(nome)}`)}
                style={{
                  marginTop: 24,
                  display: "block",
                  width: "100%",
                  backgroundColor: "#c03a2b",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 12,
                  padding: "20px 0",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                RESPONDER QUESTIONÁRIO AGORA!
              </button>

              {/* Urgency */}
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <Timer style={{ width: 15, height: 15, color: "#9a9a9a" }} />
                <span style={{ fontSize: 14, color: "#9a9a9a" }}>
                  As vagas estão se esgotando rapidamente!
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
