import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Send, Bell, ShieldAlert, Sparkles } from "lucide-react";


const INITIAL_MESSAGES = [
  {
    role: "ai",
    text: "Hello Rafiul. I can help you understand possible causes for your symptoms and suggest which department to consult. What are you experiencing today?",
  },
  {
    role: "user",
    text: "I've had a persistent headache for 3 days, mostly on the right side, and I feel a bit dizzy when I stand up quickly.",
  },
  {
    role: "ai",
    text: "Thanks for the detail. A few quick questions to refine this:",
    chips: ["Fever present", "No fever", "Worse with light", "Blurred vision"],
  },
  {
    role: "user",
    text: "No fever, but it does feel worse in bright light.",
  },
  {
    role: "ai",
    text: "Based on the pattern — one-sided headache, light sensitivity, and dizziness on standing — this is consistent with a tension or migraine-type headache, possibly linked to mild dehydration or blood pressure changes. I've updated the analysis panel on the right. I'd recommend a General Medicine consultation if symptoms persist beyond 2 more days.",
  },
];

const CONDITIONS = [
  {
    name: "Tension Headache",
    note: "Common, often stress or posture related",
    match: 68,
  },
  {
    name: "Migraine (without aura)",
    note: "Light sensitivity is a key indicator",
    match: 54,
  },
  {
    name: "Mild Orthostatic Hypotension",
    note: "Linked to dizziness on standing",
    match: 31,
  },
];

const DEPARTMENTS = [
  { name: "General Medicine", match: 87 },
  { name: "Neurology", match: 41 },
];

function severityColor(level) {
  if (level === "Low") return "text-emerald-600";
  if (level === "Moderate") return "text-amber-600";
  if (level === "High") return "text-orange-600";
  return "text-rose-600";
}

export default function SymptomChecker() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  function send(text) {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    // Placeholder response — swap this block for your real AI call.
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Dizziness on standing, without other red-flag symptoms, is usually a sign of mild dehydration or a brief drop in blood pressure. Sit or lie down when it happens, and rise slowly. It's worth mentioning to a doctor if it keeps recurring.",
        },
      ]);
    }, 1400);
  }

  return (
    <div className="flex h-full min-h-screen w-full bg-[#F5F2EA] font-sans text-stone-800">
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-stone-200 bg-white px-8 py-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-700">
              AI MODULE
            </p>
            <h1 className="text-xl font-bold text-stone-900">
              Symptom Checker
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-500">
              <ShieldAlert className="h-3.5 w-3.5" />
              NOT A DIAGNOSIS
            </span>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50">
              <Bell className="h-4 w-4" />
            </button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-700 text-sm font-semibold text-white">
              RI
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="flex flex-1 gap-6 overflow-hidden p-6">
          {/* Chat panel */}
          <div className="flex flex-1 flex-col rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-stone-100 px-6 py-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-700 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  Symptom Assistant
                </p>
                <p className="text-xs text-stone-400">
                  Powered by OpenAI · Trained on triage guidelines
                </p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-6 py-5"
            >
              {messages.map((m, i) => (
                <ChatBubble key={i} msg={m} onChip={send} />
              ))}
              <AnimatePresence>{isTyping && <TypingBubble />}</AnimatePresence>
            </div>

            <div className="flex items-center gap-3 border-t border-stone-100 px-6 py-4">
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50">
                <Mic className="h-4 w-4" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Describe how you're feeling..."
                className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
              <button
                onClick={() => send()}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-700 text-white transition hover:bg-emerald-800 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right analysis panel */}
          <div className="flex w-80 shrink-0 flex-col gap-5 overflow-y-auto">
            <SeverityCard level="Moderate" />
            <ConditionsCard />
            <DepartmentsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ msg, onChip }) {
  const isAI = msg.role === "ai";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`flex items-start gap-3 ${isAI ? "" : "flex-row-reverse"}`}
    >
      <div
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
          isAI ? "bg-emerald-700 text-white" : "bg-stone-200 text-stone-600"
        }`}
      >
        {isAI ? "AI" : "RI"}
      </div>
      <div className={`max-w-[80%] ${isAI ? "" : "flex flex-col items-end"}`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isAI ? "bg-stone-50 text-stone-700" : "bg-emerald-700 text-white"
          }`}
        >
          {msg.text}
        </div>
        {msg.chips && (
          <div className="mt-2 flex flex-wrap gap-2">
            {msg.chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onChip(chip)}
                className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-start gap-3"
    >
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-700 text-xs font-semibold text-white">
        AI
      </div>
      <div className="flex items-center gap-1 rounded-2xl bg-stone-50 px-4 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-stone-400"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SeverityCard({ level }) {
  const position = { Low: "12%", Moderate: "45%", High: "70%", Urgent: "92%" }[
    level
  ];
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold text-stone-900">
        Severity Assessment
      </h3>
      <div className="relative mb-2 h-2 w-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500">
        <motion.div
          initial={{ left: "0%" }}
          animate={{ left: position }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-stone-900 shadow"
        />
      </div>
      <div className="mb-3 flex justify-between text-[10px] font-medium uppercase tracking-wide text-stone-400">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Urgent</span>
      </div>
      <p className="text-sm leading-relaxed text-stone-500">
        Current assessment:{" "}
        <span className={`font-semibold ${severityColor(level)}`}>{level}</span>{" "}
        — monitor for 48 hours. Seek urgent care if vision loss, slurred speech,
        or numbness occurs.
      </p>
    </div>
  );
}

function ConditionsCard() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold text-stone-900">
        Possible Conditions
      </h3>
      <div className="space-y-4">
        {CONDITIONS.map((c, i) => (
          <div key={c.name}>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-stone-800">
                {c.name}
              </span>
              <span className="text-xs font-semibold text-emerald-700">
                {c.match}%
              </span>
            </div>
            <p className="mb-1.5 text-xs text-stone-400">{c.note}</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${c.match}%` }}
                transition={{ duration: 0.9, delay: 0.15 * i, ease: "easeOut" }}
                className="h-full rounded-full bg-emerald-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DepartmentsCard() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold text-stone-900">
        Recommended Departments
      </h3>
      <div className="space-y-3">
        {DEPARTMENTS.map((d) => (
          <div key={d.name} className="flex items-center justify-between">
            <span className="text-sm text-stone-700">{d.name}</span>
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              {d.match}% match
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
