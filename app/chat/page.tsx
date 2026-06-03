"use client"

import React, { useState, useEffect, useRef } from "react"

/* Declaracao do custom element do ConverteAI para o TypeScript */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.HTMLAttributes<HTMLElement> & { id?: string }
    }
  }
}
import { useSearchParams } from "next/navigation"
import { Video, Phone, MoreVertical } from "lucide-react"
import Image from "next/image"

/* ─── Tipos ─── */
type Message = {
  id: number
  type: "text" | "audio" | "user-bubble" | "options" | "video" | "cta-button"
  content?: string
  duration?: string
  audioSrc?: string
  options?: string[]
  videoSrc?: string
  longDelay?: boolean
}

type Block = Message[]

/* ─── Data atual em portugues ─── */
const DIAS_SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

function formatarData(d: Date): string {
  return `${DIAS_SEMANA[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`
}

function gerarDataFalsa(baseDate: Date, offsetDias: number): string {
  const d = new Date(baseDate)
  d.setDate(d.getDate() + offsetDias)
  return formatarData(d)
}

const hoje = new Date()
const dataCorreta = formatarData(hoje)
const dataFalsa1 = gerarDataFalsa(hoje, -587)  /* ~1.5 anos atras */
const dataFalsa2 = gerarDataFalsa(hoje, -365)  /* ~1 ano atras */

/* ─── Delays por id (ms) ─── */
const CUSTOM_DELAYS: Record<number, number> = {
  /* intro */
  1:  3000,
  2:  5000,
  3:  3500,
  4:  2500,
  5:  2500,
  6:  2500,
  7:  8000,
  /* Q2 */
  101: 3000, 102: 3000, 103: 3500, 104: 3500,
  /* Q3 */
  201: 3000, 202: 3000, 203: 3500, 204: 3500,
  /* Q4 */
  301: 3000, 302: 3000, 303: 4000, 304: 4000, 305: 3000, 306: 3000, 307: 4000, 308: 3000,
  /* Q5 */
  401: 3500, 402: 3500, 403: 2000,
  /* Q6 */
  501: 3500, 502: 3000, 503: 4000,
}

/* ─── Blocos ─── */
const INTRO_BLOCK: Block = [
  { id: 1,  type: "text",        content: "Parabéns, {nome}, você foi selecionado(a)! 🎉" },
  { id: 2,  type: "audio",       duration: "0:15", audioSrc: "/julia-intro.mp3" },
  { id: 3,  type: "text",        content: "O YouTube precisa de você para melhorar a experiência dos seus anúncios, respondendo algumas perguntas que ajudam os anunciantes." },
  { id: 4,  type: "text",        content: "Você acaba de receber acesso à nova ferramenta do YouTube para responder à pesquisa de anunciantes." },
  { id: 5,  type: "text",        content: "Aproveite, você já ganhou R$90! 💰" },
  { id: 6,  type: "text",        content: "Responda 3 perguntas e realize seu primeiro saque em minutos!" },
  { id: 7,  type: "audio",       duration: "0:18", audioSrc: "/amanda-intro.mp3" },
  { id: 8,  type: "user-bubble", content: "Clique aqui para iniciar o questionário" },
  { id: 9,  type: "text",        content: "💰 Seu saldo atual: R$ 90,00" },
  { id: 10, type: "text",        content: "Responda à pergunta abaixo sobre os anunciantes do YouTube 👇" },
  { id: 11, type: "text",        content: "Quais dessas marcas de refrigerante você consome com mais frequência?" },
  { id: 12, type: "options",     options: ["Schin", "Guaraná Antarctica", "Sprite", "Coca-Cola", "Nenhuma das anteriores"] },
]

const Q2_BLOCK: Block = [
  { id: 101, type: "text",    content: "🎉 Você ganhou na pergunta anterior! +R$ 48,00" },
  { id: 102, type: "text",    content: "💰 Seu saldo atual: R$ 168,00" },
  { id: 103, type: "text",    content: "Responda à pergunta abaixo sobre os anunciantes do YouTube 👇" },
  { id: 104, type: "text",    content: "Qual dessas marcas de celular você escolheria para comprar hoje?" },
  { id: 105, type: "options", options: ["Apple", "Samsung", "Xiaomi", "Motorola", "Nenhum dos anteriores"] },
]

const Q3_BLOCK: Block = [
  { id: 201, type: "text",    content: "🎉 Você ganhou na pergunta anterior! +R$ 48,00" },
  { id: 202, type: "text",    content: "💰 Seu saldo atual: R$ 168,00" },
  { id: 203, type: "text",    content: "Responda à pergunta abaixo sobre os anunciantes do YouTube 👇" },
  { id: 204, type: "text",    content: "Qual desses serviços de streaming você mais assiste em seu dia a dia?" },
  { id: 205, type: "options", options: ["Netflix", "Amazon Prime Video", "Disney+", "HBO Max", "Nenhum dos anteriores"] },
]

const Q4_BLOCK: Block = [
  { id: 301, type: "text",    content: "🎉 Você ganhou na pergunta anterior! +R$ 12,00" },
  { id: 302, type: "text",    content: "💰 Seu saldo atual: R$ 180,00" },
  { id: 303, type: "text",    content: "Você completou suas três primeiras pesquisas! Agora, está pronto para fazer seu primeiro saque! 🎉" },
  { id: 304, type: "text",    content: "Estamos validando sua participação em nosso questionário... ⏳" },
  { id: 305, type: "text",    content: "✅ Verificado!" },
  { id: 306, type: "text",    content: "Você está qualificado(a) para nosso questionário! 🏆" },
  { id: 307, type: "text",    content: "Para confirmarmos que você não é um robô, marque a data que você está respondendo esse questionário:" },
  { id: 308, type: "text",    content: "Qual opção está correta?" },
  { id: 309, type: "options", options: [dataCorreta, dataFalsa1, dataFalsa2] },
]

const Q5_BLOCK: Block = [
  { id: 401, type: "text",  content: "Para realizar seu saque, assista a um vídeo de 4 minutos! 🎬" },
  { id: 402, type: "text",  content: "Clique no botão abaixo para iniciar 👇" },
  { id: 403, type: "video", videoSrc: "/video-placeholder.mp4", longDelay: true },
]

const Q6_BLOCK: Block = [
  { id: 501, type: "text",       content: "Parabéns você completou todas as perguntas com sucesso! 😍" },
  { id: 502, type: "text",       content: "Clique no botão abaixo para realizar o seu saque" },
  { id: 503, type: "audio",      duration: "0:12" },
  { id: 504, type: "cta-button", content: "QUERO PAGAR A TAXA" },
]

const NEXT_BLOCKS: Record<number, Block> = {
  1: Q2_BLOCK,
  2: Q3_BLOCK,
  3: Q4_BLOCK,
  4: Q5_BLOCK,
}

function getTime() {
  const now = new Date()
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`
}

/* ─── TypingBubble ─── */
function TypingBubble({ isAudio }: { isAudio: boolean }) {
  return (
    <div className="wa-typing-row">
      <div className="wa-avatar">
        <Image src="/julia.png" alt="Julia" width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      {isAudio ? (
        <div className="wa-typing-bubble wa-audio-typing">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#128c7e" style={{ flexShrink: 0 }}>
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
          <span className="wa-wave" style={{ animationDelay: "0s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.15s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.3s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.45s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.6s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.75s" }} />
          <span className="wa-wave" style={{ animationDelay: "0.9s" }} />
        </div>
      ) : (
        <div className="wa-typing-bubble">
          <span className="wa-dot" style={{ animationDelay: "0s" }} />
          <span className="wa-dot" style={{ animationDelay: "0.2s" }} />
          <span className="wa-dot" style={{ animationDelay: "0.4s" }} />
        </div>
      )}
    </div>
  )
}

/* ─── AudioBubble ─── */
function AudioBubble({ duration, audioSrc }: { duration: string; audioSrc?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState("0:00")

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    playing ? audio.pause() : audio.play()
    setPlaying(!playing)
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    setProgress((audio.currentTime / audio.duration) * 100)
    const m = Math.floor(audio.currentTime / 60)
    const s = Math.floor(audio.currentTime % 60).toString().padStart(2, "0")
    setCurrentTime(`${m}:${s}`)
  }

  function handleEnded() {
    setPlaying(false)
    setProgress(0)
    setCurrentTime("0:00")
  }

  return (
    <div className="wa-audio-bubble">
      {audioSrc && (
        <audio ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} preload="metadata" />
      )}
      <div className="wa-audio-row">
        <button className="wa-play-btn" onClick={togglePlay} aria-label={playing ? "Pausar" : "Reproduzir"}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
        <div className="wa-audio-track">
          <div className="wa-audio-fill" style={{ width: `${progress}%` }} />
          <div className="wa-audio-thumb" style={{ left: `${progress}%` }} />
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#667781">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
        <MoreVertical size={16} color="#667781" />
      </div>
      <div className="wa-audio-time">{currentTime} / {duration}</div>
    </div>
  )
}

/* ─── VturbBubble — embed ConverteAI ─── */
function VturbBubble({ time }: { time: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    /* Evita injetar o script mais de uma vez */
    if (document.getElementById("vturb-script-69ff5b9c")) return
    const s = document.createElement("script")
    s.id = "vturb-script-69ff5b9c"
    s.src = "https://scripts.converteai.net/abbfb8e9-1820-4d22-b6f1-31161a8ea891/players/69ff5b9c9c0c7d2462e88151/v4/player.js"
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <div style={{
      background: "#fff",
      borderRadius: "0 8px 8px 8px",
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
      width: "min(520px, 90vw)",
    }}>
      <div ref={containerRef} style={{ width: "100%", background: "#000", display: "block" }}>
        <vturb-smartplayer
          id="vid-69ff5b9c9c0c7d2462e88151"
          style={{ display: "block", width: "100%" }}
        />
      </div>
      <div style={{ padding: "4px 10px 6px", textAlign: "right", fontSize: 11, color: "#667781", fontFamily: "Inter, sans-serif" }}>
        {time}
      </div>
    </div>
  )
}

/* ─── Componente principal ─── */
export default function ChatPage() {
  const searchParams = useSearchParams()
  const nome = searchParams.get("nome") || "você"

  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isTypingAudio, setIsTypingAudio] = useState(false)
  const [queue, setQueue] = useState<Message[]>(INTRO_BLOCK)
  const [queueIndex, setQueueIndex] = useState(0)
  const [time] = useState(getTime())
  const [waitingForOption, setWaitingForOption] = useState(false)
  const [waitingForButtonClick, setWaitingForButtonClick] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [done, setDone] = useState(false)
  const [showCta, setShowCta] = useState(false)
  /* id da mensagem de opcoes que esta aguardando resposta */
  const [activeOptionsId, setActiveOptionsId] = useState<number | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (queueIndex >= queue.length) {
      if (!waitingForOption && !waitingForButtonClick) setDone(true)
      return
    }
    if (waitingForOption || waitingForButtonClick) return

    const msg = queue[queueIndex]

    if (msg.type === "options") {
      const t = setTimeout(() => {
        setVisibleMessages(p => [...p, msg])
        setActiveOptionsId(msg.id)
        setWaitingForOption(true)
        setQueueIndex(i => i + 1)
      }, 600)
      return () => clearTimeout(t)
    }

    if (msg.type === "user-bubble") {
      const t = setTimeout(() => {
        setVisibleMessages(p => [...p, msg])
        setWaitingForButtonClick(true)
      }, 400)
      return () => clearTimeout(t)
    }

    if (msg.type === "cta-button") {
      const t = setTimeout(() => {
        setVisibleMessages(p => [...p, msg])
        setShowCta(true)
        setQueueIndex(i => i + 1)
      }, 800)
      return () => clearTimeout(t)
    }

    const delay = CUSTOM_DELAYS[msg.id] ?? (msg.type === "audio" ? 2000 : msg.type === "video" ? 1500 : 2000)
    setIsTyping(true)
    setIsTypingAudio(msg.type === "audio")
    const t = setTimeout(() => {
      setIsTyping(false)
      setIsTypingAudio(false)
      setVisibleMessages(p => [...p, msg])

      if (msg.longDelay) {
        const lt = setTimeout(() => {
          setQueue(Q6_BLOCK)
          setQueueIndex(0)
          setDone(false)
        }, 725_000)
        return () => clearTimeout(lt)
      }

      setQueueIndex(i => i + 1)
    }, delay)
    return () => clearTimeout(t)
  }, [queueIndex, waitingForOption, waitingForButtonClick, queue])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [visibleMessages, isTyping])

  function handleButtonClick() {
    if (!waitingForButtonClick) return
    setWaitingForButtonClick(false)
    setQueueIndex(i => i + 1)
  }

  function handleOptionClick(opt: string, msgId: number) {
    if (!waitingForOption) return
    /* Remove o bloco de opcoes e coloca a resposta do usuario no lugar */
    setVisibleMessages(p => [
      ...p.filter(m => m.id !== msgId),
      { id: Date.now(), type: "user-bubble", content: opt },
    ])
    setActiveOptionsId(null)
    setWaitingForOption(false)
    const nextQ = questionCount + 1
    setQuestionCount(nextQ)
    const nextBlock = NEXT_BLOCKS[nextQ]
    if (nextBlock) {
      setQueue(nextBlock)
      setQueueIndex(0)
      setDone(false)
    } else {
      setDone(true)
    }
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes wa-dot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30%            { opacity: 1;   transform: translateY(-5px); }
        }
        @keyframes wa-wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          50%       { transform: scaleY(1.4); opacity: 1; }
        }
        .wa-audio-typing {
          display: flex; align-items: center; gap: 3px; padding: 10px 14px;
        }
        .wa-wave {
          display: inline-block;
          width: 3px; height: 16px;
          background: #128c7e;
          border-radius: 99px;
          animation: wa-wave 0.9s ease-in-out infinite;
        }
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(18,140,126,0.5); }
          50%       { box-shadow: 0 0 0 10px rgba(18,140,126,0); }
        }

        /* ── Shell ── */
        .wa-shell {
          display: flex;
          flex-direction: column;
          height: 100dvh;
          width: 100%;
          background: #f0f2f5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* ── Header ── */
        .wa-header {
          background: #075e54;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          min-height: 60px;
          z-index: 10;
        }
        .wa-header-back {
          background: none; border: none;
          color: #fff; cursor: pointer;
          padding: 4px; display: flex; align-items: center;
          -webkit-tap-highlight-color: transparent;
        }
        .wa-header-avatar {
          width: 40px; height: 40px;
          border-radius: 50%; overflow: hidden; flex-shrink: 0;
        }
        .wa-header-info { flex: 1; min-width: 0; }
        .wa-header-name {
          display: flex; align-items: center; gap: 5px;
        }
        .wa-header-name span {
          color: #fff;
          font-size: 17px;
          font-weight: 600;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .wa-verified {
          width: 16px; height: 16px;
          background: #34b7f1; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .wa-header-status {
          color: rgba(255,255,255,0.75);
          font-size: 13px; margin-top: 1px;
        }
        .wa-header-actions {
          display: flex; gap: 20px; align-items: center; flex-shrink: 0;
        }
        .wa-header-actions button {
          background: none; border: none; cursor: pointer;
          padding: 4px; display: flex;
          -webkit-tap-highlight-color: transparent;
        }

        /* ── Area de mensagens ── */
        .wa-messages-area {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          background-color: #ece5dd;
          background-image: url('/wa-bg.png');
          background-size: 400px auto;
          background-repeat: repeat;
          padding: 12px 16px 8px;
          scroll-behavior: smooth;
        }
        .wa-messages-area::-webkit-scrollbar { width: 6px; }
        .wa-messages-area::-webkit-scrollbar-track { background: transparent; }
        .wa-messages-area::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }

        /* Tag conta comercial */
        .wa-commercial-tag {
          text-align: center; margin-bottom: 14px;
        }
        .wa-commercial-tag span {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.85);
          border-radius: 8px;
          padding: 6px 16px;
          font-size: 12.5px;
          color: #54656f;
        }

        .wa-messages-list {
          display: flex; flex-direction: column; gap: 2px;
        }

        /* ── Bolha Julia ── */
        .wa-msg-row {
          display: flex; align-items: flex-end; gap: 6px; margin-bottom: 2px;
        }
        .wa-avatar {
          width: 34px; height: 34px;
          border-radius: 50%; overflow: hidden; flex-shrink: 0;
        }
        .wa-bubble-left {
          background: #fff;
          border-radius: 0 8px 8px 8px;
          padding: 7px 10px 5px;
          box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
          max-width: min(78%, 500px);
        }
        .wa-bubble-left p {
          font-size: 14.5px; color: #111; line-height: 1.55; word-break: break-word;
        }
        .wa-bubble-left .wa-ts {
          font-size: 11px; color: #667781;
          text-align: right; margin-top: 3px; display: block;
        }

        /* ── Bolha usuario ── */
        .wa-bubble-right-wrap {
          display: flex; justify-content: flex-end; margin-bottom: 2px;
        }
        .wa-bubble-right {
          background: #d9fdd3;
          border-radius: 8px 0 8px 8px;
          padding: 7px 10px 5px;
          box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
          max-width: min(78%, 500px);
        }
        .wa-bubble-right p {
          font-size: 14.5px; color: #111; line-height: 1.55; word-break: break-word;
        }
        .wa-ts-row {
          display: flex; align-items: center; justify-content: flex-end;
          gap: 3px; margin-top: 3px;
        }
        .wa-ts-row span { font-size: 11px; color: #667781; }

        /* Botao clicavel pulsante */
        .wa-bubble-cta-btn {
          animation: wa-pulse 1.5s ease-in-out infinite;
          outline: 2px solid #128c7e;
          outline-offset: 2px;
          cursor: pointer;
        }

        /* ── Opcoes ── */
        .wa-options-wrap {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 8px; margin: 6px 0 4px;
        }
        .wa-option-btn {
          background: #d9fdd3;
          border: 1.5px solid #25d366;
          border-radius: 22px;
          padding: 10px 22px;
          font-size: 14.5px;
          font-weight: 500;
          color: #111;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          transition: background 0.15s, transform 0.1s;
          -webkit-tap-highlight-color: transparent;
        }
        .wa-option-btn:active { transform: scale(0.97); }

        /* ── Typing ── */
        .wa-typing-row {
          display: flex; align-items: flex-end; gap: 6px; margin-bottom: 6px;
        }
        .wa-typing-bubble {
          background: #fff;
          border-radius: 0 8px 8px 8px;
          padding: 12px 16px;
          box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
          display: flex; align-items: center; gap: 5px;
        }
        .wa-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #90a4ae;
          animation: wa-dot 1.2s ease-in-out infinite;
        }

        /* ── Audio ── */
        .wa-audio-bubble {
          background: #fff;
          border-radius: 0 8px 8px 8px;
          padding: 10px 12px 7px;
          box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
          width: 250px;
          max-width: 100%;
        }
        .wa-audio-row {
          display: flex; align-items: center; gap: 8px;
        }
        .wa-play-btn {
          width: 38px; height: 38px; border-radius: 50%;
          background: #128c7e; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .wa-audio-track {
          flex: 1; height: 3px;
          background: #c8d3da; border-radius: 99px;
          position: relative;
        }
        .wa-audio-fill {
          position: absolute; left: 0; top: 0;
          height: 100%; background: #128c7e;
          border-radius: 99px; transition: width 0.2s linear;
        }
        .wa-audio-thumb {
          position: absolute; top: 50%;
          transform: translate(-50%, -50%);
          width: 12px; height: 12px; border-radius: 50%;
          background: #128c7e; transition: left 0.2s linear;
        }
        .wa-audio-time {
          font-size: 11px; color: #667781;
          text-align: right; margin-top: 5px;
          font-family: 'Inter', sans-serif;
        }

        /* ── Video Vturb ── */
        .wa-vturb-bubble {
          background: #fff;
          border-radius: 0 8px 8px 8px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
          width: 320px; max-width: 100%;
        }
        .wa-vturb-inner {
          width: 100%;
          background: #000;
        }
        .wa-vturb-inner vturb-smartplayer {
          display: block;
          width: 100%;
        }
        .wa-video-time {
          padding: 4px 10px 6px; text-align: right;
          font-size: 11px; color: #667781;
          font-family: 'Inter', sans-serif;
        }

        /* ── Barra inferior ── */
        .wa-cta-bar {
          padding: 8px 12px;
          background: #f0f2f5;
          border-top: 1px solid #d1d7db;
        }
        .wa-cta-bar button {
          width: 100%;
          background: #128c7e;
          border: none; border-radius: 8px;
          padding: 16px 0;
          font-size: 15px; font-weight: 700;
          color: #fff; letter-spacing: 0.05em;
          cursor: pointer; font-family: 'Inter', sans-serif;
        }
        .wa-input-bar {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 12px;
          background: #f0f2f5;
          border-top: 1px solid #d1d7db;
          flex-shrink: 0;
        }
        .wa-input-field {
          flex: 1; background: #fff;
          border: none; border-radius: 22px;
          padding: 10px 16px;
          font-size: 15px; color: #667781;
          font-family: 'Inter', sans-serif;
          outline: none; pointer-events: none;
        }
        .wa-send-btn {
          width: 46px; height: 46px; border-radius: 50%;
          background: #128c7e; border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .wa-messages-area { background-size: 280px auto; padding: 8px 10px 6px; }
          .wa-bubble-left, .wa-bubble-right { max-width: 85%; }
          .wa-audio-bubble { width: 220px; }
          .wa-video-bubble { width: 240px; }
          .wa-header-name span { font-size: 16px; }
        }
      `}</style>

      <div className="wa-shell">

        {/* ── Header ── */}
        <header className="wa-header">
          <button className="wa-header-back" aria-label="Voltar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
          <div className="wa-header-avatar">
            <Image src="/julia.png" alt="Julia" width={40} height={40} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <div className="wa-header-info">
            <div className="wa-header-name">
              <span>Atendente Julia</span>
              <div className="wa-verified" aria-label="Verificada">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            </div>
            <p className="wa-header-status">online</p>
          </div>
          <div className="wa-header-actions">
            <button aria-label="Chamada de video"><Video size={22} color="#fff" /></button>
            <button aria-label="Chamada de voz"><Phone size={22} color="#fff" /></button>
            <button aria-label="Mais opcoes"><MoreVertical size={22} color="#fff" /></button>
          </div>
        </header>

        {/* ── Mensagens ── */}
        <main className="wa-messages-area">
          <div className="wa-commercial-tag">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#54656f"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
              Esta e uma conta comercial
            </span>
          </div>

          <div className="wa-messages-list">
            {visibleMessages.map((msg) => {
              const text = (msg.content || "").replace("{nome}", nome)

              if (msg.type === "options") {
                /* Opcoes ainda visiveis (antes de o lead escolher) */
                return (
                  <div key={msg.id} className="wa-options-wrap">
                    {msg.options?.map((opt) => (
                      <button
                        key={opt}
                        className="wa-option-btn"
                        onClick={() => handleOptionClick(opt, msg.id)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )
              }

              if (msg.type === "user-bubble") {
                const isClickable = waitingForButtonClick && msg.id === 8
                return (
                  <div key={msg.id} className="wa-bubble-right-wrap">
                    <div
                      className={`wa-bubble-right${isClickable ? " wa-bubble-cta-btn" : ""}`}
                      onClick={isClickable ? handleButtonClick : undefined}
                      role={isClickable ? "button" : undefined}
                      tabIndex={isClickable ? 0 : undefined}
                      onKeyDown={isClickable ? (e) => e.key === "Enter" && handleButtonClick() : undefined}
                    >
                      <p>{text}</p>
                      <div className="wa-ts-row">
                        <span>{time}</span>
                        {isClickable ? (
                          <span style={{ fontSize: 11, color: "#128c7e", fontWeight: 600, marginLeft: 4 }}>Toque para iniciar</span>
                        ) : (
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path d="M1 5.5L5 9.5L15 1.5" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 5.5L9 9.5L15 1.5" stroke="#53bdeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }

              if (msg.type === "cta-button") return null

              /* Mensagens da Julia */
              return (
                <div key={msg.id} className="wa-msg-row">
                  <div className="wa-avatar">
                    <Image src="/julia.png" alt="Julia" width={34} height={34} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                {msg.type === "audio" ? (
                  <AudioBubble duration={msg.duration!} audioSrc={msg.audioSrc} />
                ) : msg.type === "video" ? (
                  <VturbBubble time={time} />
                ) : (
                    <div className="wa-bubble-left">
                      <p>{text}</p>
                      <span className="wa-ts">{time}</span>
                    </div>
                  )}
                </div>
              )
            })}

            {isTyping && <TypingBubble isAudio={isTypingAudio} />}
            <div ref={bottomRef} />
          </div>
        </main>

        {/* ── Barra inferior ── */}
        {showCta ? (
          <div className="wa-cta-bar">
            <button>QUERO PAGAR A TAXA</button>
          </div>
        ) : (
          <div className="wa-input-bar">
            <input
              className="wa-input-field"
              type="text"
              placeholder="Selecione uma opção acima..."
              readOnly
              aria-label="Campo de mensagem desabilitado"
            />
            <button className="wa-send-btn" aria-label="Enviar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
