"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiAlertCircle } from "react-icons/fi";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border max-w-sm"
        style={{
          background: type === "success" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
          borderColor: type === "success" ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          type === "success" ? "bg-emerald-500/20" : "bg-red-500/20"
        }`}>
          {type === "success"
            ? <FiCheck className="w-4 h-4 text-emerald-400" />
            : <FiAlertCircle className="w-4 h-4 text-red-400" />
          }
        </div>
        <p className={`text-sm font-medium ${type === "success" ? "text-emerald-300" : "text-red-300"}`}>
          {message}
        </p>
        <button onClick={onClose} className="ml-auto text-slate-500 hover:text-white transition-colors">
          <FiX className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
