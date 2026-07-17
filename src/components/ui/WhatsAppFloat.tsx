"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function WhatsAppFloat() {
  const [visible, setVisible]   = useState(false);
  const [tooltip, setTooltip]   = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    const t2 = setTimeout(() => setTooltip(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative bg-white text-slate-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl max-w-[180px]"
              >
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300"
                >
                  <FiX className="w-3 h-3 text-slate-600" />
                </button>
                Contacte-moi sur WhatsApp ! 👋
                {/* Arrow */}
                <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/2290156336282"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            aria-label="Contacter sur WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
            <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
