import React, { useState, useEffect } from "react";
import { X, ExternalLink, Code2, Cpu, Check, Activity, ShieldCheck } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  initialMode?: "demo" | "code" | "study";
  isOpen: boolean;
  onClose: () => void;
  onOrderProjectStack?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialMode = "demo",
  isOpen,
  onClose,
  onOrderProjectStack,
}) => {
  const [activeTab, setActiveTab] = useState<"demo" | "architecture" | "code">(
    initialMode === "code" ? "code" : initialMode === "study" ? "architecture" : "demo"
  );
  const [kanbanTasks, setKanbanTasks] = useState([
    { id: 1, title: "Deploy Redis cluster on AWS", status: "done", priority: "High" },
    { id: 2, title: "Optimize Postgres compound index", status: "done", priority: "Medium" },
    { id: 3, title: "Implement Stripe idempotency keys", status: "in-progress", priority: "High" },
    { id: 4, title: "Bi-directional WebSocket reconnect logic", status: "in-progress", priority: "Critical" },
  ]);
  const [simulatedMetric, setSimulatedMetric] = useState(38);

  useEffect(() => {
    setActiveTab(
      initialMode === "code" ? "code" : initialMode === "study" ? "architecture" : "demo"
    );
  }, [initialMode, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Periodic latency simulation
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSimulatedMetric((prev) => 35 + Math.floor(Math.sin(Date.now() / 1000) * 8));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const getCodeSnippet = (id: string) => {
    switch (id) {
      case "brew-and-bloom":
        return `// Brew & Bloom — Artisanal Café & Roastery Menu Engine
import React, { useState } from "react";

export function CoffeeRoasteryMenu({ items }) {
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [stampCardOpen, setStampCardOpen] = useState(false);

  const filteredItems = selectedOrigin === "all"
    ? items
    : items.filter(item => item.origin === selectedOrigin);

  return (
    <div className="botanical-container">
      {/* Dynamic Single-Origin Roast Selector */}
      <div className="filter-pill-group">
        {["all", "ethiopia", "colombia", "guatemala"].map(origin => (
          <button 
            key={origin}
            onClick={() => setSelectedOrigin(origin)}
            className={selectedOrigin === origin ? "pill-active" : "pill"}
          >
            {origin.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Menu Cards with Instant Order Trigger */}
      <div className="menu-grid">
        {filteredItems.map(coffee => (
          <article key={coffee.id} className="coffee-card">
            <span className="roast-badge">{coffee.tastingNotes.join(" • ")}</span>
            <h3>{coffee.name}</h3>
            <p className="price">\${coffee.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}`;
      case "verve-store":
        return `// VERVE Store — High-Conversion E-Commerce Cart & Checkout State
import { create } from "zustand";

export const useVerveCartStore = create((set, get) => ({
  cartItems: [],
  promoCode: null,
  discount: 0,

  addItem: (product, size, color) => {
    const existing = get().cartItems.find(
      i => i.id === product.id && i.size === size && i.color === color
    );
    if (existing) {
      set({
        cartItems: get().cartItems.map(i =>
          i === existing ? { ...i, qty: i.qty + 1 } : i
        )
      });
    } else {
      set({ cartItems: [...get().cartItems, { ...product, size, color, qty: 1 }] });
    }
  },

  calculateTotal: () => {
    const subtotal = get().cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const tax = subtotal * 0.08;
    const finalTotal = subtotal - (subtotal * get().discount) + tax;
    return { subtotal, tax, finalTotal };
  }
}));`;
      case "expense-tracker":
        return `// ExpenseFlow — Real-Time Financial Analytics & Budget Engine
import { useMemo } from "react";

export function useExpenseAnalytics(transactions, monthlyBudget) {
  return useMemo(() => {
    const income = transactions
      .filter(t => t.type === "INCOME")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const expense = transactions
      .filter(t => t.type === "EXPENSE")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const netSavings = income - expense;
    const budgetUtilizationRate = monthlyBudget > 0 ? (expense / monthlyBudget) * 100 : 0;

    const categoryBreakdown = transactions
      .filter(t => t.type === "EXPENSE")
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
        return acc;
      }, {});

    return { income, expense, netSavings, budgetUtilizationRate, categoryBreakdown };
  }, [transactions, monthlyBudget]);
}`;
      default:
        return `// Clean modular software engineering implementation`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0e16]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-card w-full max-w-4xl max-h-[92vh] rounded-2xl border border-[#00e5ff]/40 shadow-2xl flex flex-col overflow-hidden bg-[#0f131c]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#3b494c]/30 bg-[#181c24]/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 font-mono text-[11px] font-bold">
              {project.badge}
            </span>
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#dfe2ee] truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#bac9cc] hover:text-[#dfe2ee] hover:bg-[#1c2028] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-[#3b494c]/20 bg-[#141822]">
          <button
            onClick={() => setActiveTab("demo")}
            className={`px-4 py-2 font-mono text-[12px] font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "demo"
                ? "border-[#00e5ff] text-[#00e5ff]"
                : "border-transparent text-[#bac9cc] hover:text-[#dfe2ee]"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 font-mono text-[12px] font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "architecture"
                ? "border-[#00e5ff] text-[#00e5ff]"
                : "border-transparent text-[#bac9cc] hover:text-[#dfe2ee]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>System Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 font-mono text-[12px] font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "code"
                ? "border-[#00e5ff] text-[#00e5ff]"
                : "border-transparent text-[#bac9cc] hover:text-[#dfe2ee]"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Active Tab: Demo */}
          {activeTab === "demo" && (
            <div className="space-y-5">
              {/* Live Preview Control Bar */}
              <div className="p-3.5 rounded-xl bg-[#181c24] border border-[#3b494c]/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8ffd2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a8ffd2]"></span>
                  </span>
                  <span className="font-mono text-[12px] text-[#a8ffd2] font-semibold">
                    LIVE PRODUCTION DEPLOYMENT
                  </span>
                  {project.demoUrl && (
                    <span className="hidden sm:inline font-mono text-[11px] text-[#bac9cc] px-2.5 py-0.5 rounded bg-[#0a0e16] border border-[#3b494c]/30 truncate max-w-xs">
                      {project.demoUrl}
                    </span>
                  )}
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[12px] flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
                  >
                    <span>Open Live Output in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Interactive Iframe Viewer */}
              {project.demoUrl ? (
                <div className="relative rounded-xl overflow-hidden border border-[#00e5ff]/30 shadow-2xl bg-[#0a0e16]">
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="w-full h-[500px] border-0 rounded-xl bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                  <div className="p-2.5 bg-[#141822] border-t border-[#3b494c]/30 flex items-center justify-between text-[11px] font-mono text-[#bac9cc]">
                    <span>Interactive Live Output Viewer</span>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00e5ff] hover:underline flex items-center gap-1"
                    >
                      <span>Fullscreen Experience</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-[#3b494c]/40 bg-[#0a0e16]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-72 object-cover"
                  />
                </div>
              )}

              {/* Stats Strip */}
              {project.stats && (
                <div className="grid grid-cols-3 gap-3">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-[#1c2028] border border-[#3b494c]/30 text-center"
                    >
                      <div className="text-[20px] font-bold text-[#00e5ff] font-mono">
                        {s.value}
                      </div>
                      <div className="font-mono text-[11px] text-[#bac9cc] mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Active Tab: Architecture */}
          {activeTab === "architecture" && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#181c24] border border-[#3b494c]/30">
                <h4 className="text-[15px] font-bold text-[#c3f5ff] mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-[14px] text-[#bac9cc] leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-[14px] font-bold text-[#dfe2ee] mb-3 font-mono text-[13px]">
                  KEY ENGINEERING HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#1c2028]/70 border border-[#3b494c]/30 flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span className="text-[13px] text-[#dfe2ee] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e16] border border-[#3b494c]/30">
                <div className="flex items-center gap-2 text-[#00e5ff] font-mono text-[12px] font-semibold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PRODUCTION QUALITY GUARANTEES</span>
                </div>
                <p className="text-[13px] text-[#bac9cc] leading-relaxed">
                  Every module adheres to strict TypeScript typings, comprehensive error handling,
                  sanitized database inputs to prevent injection attacks, and automated CI test passes.
                </p>
              </div>
            </div>
          )}

          {/* Active Tab: Code */}
          {activeTab === "code" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[12px] font-mono text-[#bac9cc]">
                <span>Source preview &bull; Production excerpt</span>
                <span className="text-[#00e5ff]">TypeScript / Clean SOLID</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0e16] border border-[#3b494c]/40 font-mono text-[12px] text-[#dfe2ee] overflow-x-auto leading-relaxed">
                <pre>{getCodeSnippet(project.id)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#3b494c]/30 bg-[#181c24]/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#0a0e16] border border-[#3b494c]/30 text-[#bac9cc]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-[#3b494c] text-[#dfe2ee] hover:border-[#00e5ff] text-[13px] font-mono transition-colors cursor-pointer"
            >
              Close
            </button>
            {onOrderProjectStack && (
              <button
                onClick={() => {
                  onClose();
                  onOrderProjectStack(project);
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[13px] flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
              >
                <span>Build Similar Architecture</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
