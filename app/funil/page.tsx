"use client"

import { useState } from "react"

const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQCOL6"

function goToCheckout() {
  window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer")
}

export default function FunilPage() {
  // 0 = App Rápido, 1 = Gold, 2 = Servidor, 3 = Obrigado
  const [currentPage, setCurrentPage] = useState(0)

  const next = () => setCurrentPage((p) => Math.min(p + 1, 3))

  return (
    <main className="min-h-screen bg-white font-sans text-[#111111]">
      <div className="mx-auto w-full max-w-[640px] px-5 py-8">
        {currentPage === 0 && <AppRapido onAccept={goToCheckout} onDecline={next} />}
        {currentPage === 1 && <Gold onAccept={goToCheckout} onDecline={next} />}
        {currentPage === 2 && <Servidor onAccept={goToCheckout} onDecline={next} />}
        {currentPage === 3 && <Obrigado />}
      </div>
    </main>
  )
}

/* ───────────────────────── Componentes auxiliares ───────────────────────── */

function TopBar({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="mb-8 text-center text-sm font-medium" style={{ color }}>
      {children}
    </div>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color }}>
      {children}
    </p>
  )
}

function PrimaryButton({
  children,
  color,
  onClick,
}: {
  children: React.ReactNode
  color: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl px-6 py-4 text-base font-bold text-white shadow-sm transition-transform active:scale-[0.98]"
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  )
}

function DismissLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto mt-5 block text-center text-sm text-[#9CA3AF] underline underline-offset-4 transition-colors hover:text-[#6B7280]"
    >
      {children}
    </button>
  )
}

function Testimonial({ initials, name, quote, color }: { initials: string; name: string; quote: string; color: string }) {
  return (
    <div className="flex-1 rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <span className="text-sm font-semibold text-[#111111]">{name}</span>
      </div>
      <p className="text-sm leading-relaxed text-[#4B5563]">{`"${quote}"`}</p>
    </div>
  )
}

function AnchorStat({ big, small }: { big: string; small: string }) {
  return (
    <div className="my-12 text-center">
      <p className="text-2xl font-extrabold leading-tight text-balance">{big}</p>
      <p className="mt-3 text-sm text-[#6B7280]">{small}</p>
    </div>
  )
}

function PainSolution({
  painTitle,
  painText,
  solTitle,
  solText,
  solColor,
}: {
  painTitle: string
  painText: string
  solTitle: string
  solText: string
  solColor: string
}) {
  return (
    <div className="my-10 flex flex-col gap-4">
      <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-5">
        <p className="mb-2 text-sm font-bold text-[#DC2626]">{painTitle}</p>
        <p className="text-sm leading-relaxed text-[#7F1D1D]">{painText}</p>
      </div>
      <div className="rounded-xl border p-5" style={{ borderColor: `${solColor}40`, backgroundColor: `${solColor}10` }}>
        <p className="mb-2 text-sm font-bold" style={{ color: solColor }}>
          {solTitle}
        </p>
        <p className="text-sm leading-relaxed text-[#111111]">{solText}</p>
      </div>
    </div>
  )
}

/* ───────────────────────── Página 1 — App Rápido ───────────────────────── */

function AppRapido({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) {
  const blue = "#2563EB"
  return (
    <>
      <TopBar color={blue}>{"⚡ Oferta única — disponível apenas agora"}</TopBar>

      <header className="text-center">
        <Eyebrow color={blue}>COMPRA ÚNICA · SEM MENSALIDADE</Eyebrow>
        <h1 className="text-3xl font-extrabold leading-tight text-balance">Receba avaliações antes de todo mundo</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
          Com o App Rápido você entra na fila prioritária e nunca fica sem tarefa disponível.
        </p>
      </header>

      <div className="mt-8">
        <PrimaryButton color={blue} onClick={onAccept}>
          {"QUERO APP RÁPIDO POR R$ 27,90 →"}
        </PrimaryButton>
        <p className="mt-3 text-center text-xs text-[#6B7280]">
          {"🔒 Pagamento único · Sem mensalidade · Acesso vitalício"}
        </p>
      </div>

      <PainSolution
        painTitle="❌ SEM APP RÁPIDO"
        painText="Você entra na fila comum e espera avaliações sobrarem para outros usuários."
        solTitle="✅ COM APP RÁPIDO"
        solText="Você é o primeiro a receber novas avaliações disponíveis — sempre."
        solColor={blue}
      />

      <AnchorStat
        big="Usuários prioritários completam 2x mais avaliações por dia"
        small="Mais avaliações = mais ganhos. Simples assim."
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <Testimonial
          initials="MR"
          name="Marcos R., RJ"
          quote="Antes ficava horas sem tarefa. Agora assim que abre já cai pra mim."
          color={blue}
        />
        <Testimonial
          initials="JS"
          name="Juliana S., MG"
          quote="Paguei uma vez e até hoje recebo antes de todo mundo. Melhor compra."
          color={blue}
        />
      </div>

      <div className="mt-12">
        <p className="mb-4 text-center text-base font-semibold">Pagamento único de R$ 27,90 — para sempre.</p>
        <PrimaryButton color={blue} onClick={onAccept}>
          {"ATIVAR APP RÁPIDO AGORA →"}
        </PrimaryButton>
        <DismissLink onClick={onDecline}>Não, prefiro ficar na fila comum.</DismissLink>
      </div>
    </>
  )
}

/* ───────────────────────── Página 2 — Plano Gold ───────────────────────── */

function Gold({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) {
  const gold = "#D4A017"
  return (
    <>
      <TopBar color={gold}>{"⭐ Oferta exclusiva — disponível apenas agora"}</TopBar>

      <header className="text-center">
        <Eyebrow color={gold}>UPGRADE ESPECIAL</Eyebrow>
        <h1 className="text-3xl font-extrabold leading-tight text-balance">
          Multiplique seus ganhos por avaliação com o Plano Gold
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
          Usuários Gold ganham até 3x mais em cada avaliação enviada.
        </p>
      </header>

      <div className="mt-8">
        <PrimaryButton color={gold} onClick={onAccept}>
          {"ATIVAR PLANO GOLD POR R$ 59,90/mês →"}
        </PrimaryButton>
        <p className="mt-3 text-center text-xs text-[#6B7280]">
          {"🔒 Pagamento seguro · Cancele quando quiser · Garantia de 7 dias"}
        </p>
      </div>

      {/* Tabela de comparação */}
      <div className="my-10 overflow-hidden rounded-xl border border-[#E5E7EB]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F9FAFB] text-[#6B7280]">
              <th className="p-3 text-left font-medium"> </th>
              <th className="p-3 text-center font-semibold">Gratuito</th>
              <th
                className="border-l-2 p-3 text-center font-bold"
                style={{ borderColor: gold, backgroundColor: `${gold}14`, color: gold }}
              >
                {"⭐ Gold"}
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ganho por avaliação", "R$ 0,50", "R$ 1,50"],
              ["Bônus mensal", "—", "R$ 20,00"],
              ["Avaliações prioritárias", "✗", "✓"],
              ["Suporte VIP", "✗", "✓"],
            ].map(([label, free, goldVal], i) => (
              <tr key={i} className="border-t border-[#E5E7EB]">
                <td className="p-3 text-left text-[#374151]">{label}</td>
                <td className="p-3 text-center text-[#6B7280]">{free}</td>
                <td
                  className="border-l-2 p-3 text-center font-semibold text-[#111111]"
                  style={{ borderColor: gold, backgroundColor: `${gold}0D` }}
                >
                  {goldVal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnchorStat big="Usuários Gold ganham em média R$ 127/mês a mais" small="Com apenas 85 avaliações por mês" />

      <div className="flex flex-col gap-4 sm:flex-row">
        <Testimonial
          initials="LM"
          name="Lucas M., SP"
          quote="No primeiro mês já recuperei o valor do plano com folga."
          color={gold}
        />
        <Testimonial
          initials="FR"
          name="Fernanda R., CE"
          quote="Achei caro no começo. Agora não largo por nada."
          color={gold}
        />
      </div>

      <div className="mt-12">
        <p className="mb-4 text-center text-base font-semibold">Ganhe até 3x mais em cada avaliação.</p>
        <PrimaryButton color={gold} onClick={onAccept}>
          {"ATIVAR PLANO GOLD POR R$ 59,90/mês →"}
        </PrimaryButton>
        <DismissLink onClick={onDecline}>Não, prefiro continuar ganhando menos.</DismissLink>
      </div>
    </>
  )
}

/* ───────────────────────── Página 3 — Custo do Servidor ───────────────────────── */

function Servidor({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) {
  const green = "#16A34A"
  return (
    <>
      <TopBar color={green}>{"🛡️ Mantenha sua conta sempre ativa"}</TopBar>

      <header className="text-center">
        <Eyebrow color={green}>CONTRIBUIÇÃO DO SERVIDOR</Eyebrow>
        <h1 className="text-3xl font-extrabold leading-tight text-balance">Garanta que sua conta nunca seja suspensa</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
          O app tem custos reais de servidor. Contribuindo com R$ 19,90 você mantém sua conta protegida e ativa.
        </p>
      </header>

      <div className="mt-8">
        <PrimaryButton color={green} onClick={onAccept}>
          {"CONTRIBUIR COM R$ 19,90 AGORA →"}
        </PrimaryButton>
        <p className="mt-3 text-center text-xs text-[#6B7280]">
          {"🔒 Pagamento seguro · Sua conta fica garantida · Sem surpresas"}
        </p>
      </div>

      <PainSolution
        painTitle="❌ SEM CONTRIBUIÇÃO"
        painText="Sua conta pode ser suspensa por inatividade de servidor. Você perde acesso às avaliações."
        solTitle="✅ COM CONTRIBUIÇÃO"
        solText="Sua conta fica protegida, ativa e com prioridade de manutenção. Você continua ganhando sem interrupção."
        solColor={green}
      />

      <AnchorStat
        big="Você ganha muito mais do que R$ 19,90 por mês com as avaliações"
        small="Proteger sua conta é proteger sua renda."
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <Testimonial
          initials="CP"
          name="Carla P., BA"
          quote="Paguei sem pensar duas vezes. Não queria perder minha conta depois de tudo que já ganhei."
          color={green}
        />
        <Testimonial
          initials="DL"
          name="Diego L., PR"
          quote="Faz sentido. O app me gera renda, justo contribuir para ele continuar no ar."
          color={green}
        />
      </div>

      <div className="mt-12">
        <p className="mb-4 text-center text-base font-semibold">R$ 19,90 para manter sua conta ativa e segura.</p>
        <PrimaryButton color={green} onClick={onAccept}>
          {"QUERO MANTER MINHA CONTA ATIVA →"}
        </PrimaryButton>
        <DismissLink onClick={onDecline}>Não, prefiro arriscar minha conta.</DismissLink>
      </div>
    </>
  )
}

/* ───────────────────────── Página 4 — Obrigado ───────────────────────── */

function Obrigado() {
  const green = "#16A34A"
  return (
    <div className="py-8 text-center">
      <div
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${green}1A` }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 className="mt-6 text-2xl font-extrabold leading-tight text-balance">
        Tudo certo! Sua conta está sendo configurada.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
        Em instantes você já poderá começar a receber avaliações e acumular seus ganhos.
      </p>

      <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
        {["Conta ativa", "Acesso ao painel de avaliações", "Suporte disponível"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="font-bold" style={{ color: green }}>
              ✓
            </span>
            <span className="text-sm text-[#374151]">{item}</span>
          </div>
        ))}
      </div>

      <div className="my-10 border-t border-[#E5E7EB]" />

      <p className="text-sm text-[#6B7280]">Enquanto isso, veja nossas dicas para maximizar seus ganhos:</p>

      <div className="mt-6 flex flex-col gap-3">
        {[
          { icon: "💡", text: "Avalie todos os dias para acumular mais" },
          { icon: "⏰", text: "Fique atento às notificações de novas tarefas" },
          { icon: "🏆", text: "Usuários consistentes ganham acesso a tarefas especiais" },
        ].map((tip) => (
          <div key={tip.text} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 text-left">
            <span className="text-xl" aria-hidden="true">
              {tip.icon}
            </span>
            <span className="text-sm text-[#374151]">{tip.text}</span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-[#9CA3AF]">Você receberá um e-mail de confirmação em breve.</p>
    </div>
  )
}
