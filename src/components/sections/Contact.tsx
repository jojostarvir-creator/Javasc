"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  FiMail, FiPhone, FiMapPin,
  FiGithub, FiLinkedin,
  FiSend, FiCheck, FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: FiMail,  label: "Email",       value: "fambodonald110@gmail.com", href: "mailto:fambodonald110@gmail.com" },
  { icon: FiPhone, label: "Téléphone",   value: "+229 01 56 33 62 82",      href: "tel:+2290156336282" },
  { icon: FiMapPin,label: "Localisation",value: "Bénin, Afrique de l'Ouest",href: "#" },
];

const socials = [
  { icon: FiGithub,   label: "GitHub",    href: "https://github.com/jojostarvir-creator" },
  { icon: FiLinkedin, label: "LinkedIn",  href: "https://www.linkedin.com/in/donald-dieudonn%C3%A9-fambo-sossa-4360843b2/" },
  { icon: FaWhatsapp, label: "WhatsApp",  href: "https://wa.me/2290156336282" },
];

const reasons = [
  "Projet web ou mobile",
  "Mission freelance",
  "Collaboration créative",
  "Question technique",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name:    data.name,
          from_email:   data.email,
          subject:      data.subject,
          message:      data.message,
          to_email:     "fambodonald110@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: unknown) {
      const e = err as { status?: number; text?: string };
      console.error("EmailJS error status:", e?.status);
      console.error("EmailJS error text:", e?.text);
      alert(`Erreur ${e?.status ?? ""}: ${e?.text ?? "inconnue"}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #020817 0%, #0d0f2d 50%, #020817 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <HiSparkles className="w-3.5 h-3.5" />
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Donnons vie à votre{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818cf8, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              prochain projet
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed text-sm">
            Une idée ? Un besoin ? Écrivez-moi — je réponds sous <span className="text-indigo-400 font-medium">24h</span> avec une proposition concrète.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Availability card */}
            <div
              className="relative rounded-3xl p-6 overflow-hidden border border-indigo-500/20"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%)" }}
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(99,102,241,0.3)" }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Disponible maintenant</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Prêt à collaborer</h3>
                <p className="text-slate-300/70 text-sm leading-relaxed mb-5">
                  Que ce soit pour un projet from scratch, une refonte ou une mission spécifique — je suis là.
                </p>

                {/* Reasons */}
                <div className="flex flex-wrap gap-2">
                  {reasons.map((r) => (
                    <span key={r} className="px-3 py-1 rounded-full text-xs text-indigo-300 border border-indigo-500/25"
                      style={{ background: "rgba(99,102,241,0.1)" }}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 hover:border-indigo-500/30 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                  >
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-slate-200 truncate group-hover:text-indigo-300 transition-colors">{value}</p>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 ml-auto flex-shrink-0 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-600 uppercase tracking-widest">Suivez-moi</span>
              <div className="flex-1 h-px bg-slate-800" />
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white border border-white/8 hover:border-indigo-500/50 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-3xl p-7 sm:p-9 border border-white/8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Subtle corner glow */}
              <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full blur-3xl pointer-events-none opacity-30"
                style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
                    >
                      <FiCheck className="w-9 h-9 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                      <p className="text-slate-400 text-sm">Je vous répondrai dans les plus brefs délais.</p>
                    </div>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-1">Envoyez-moi un message</h3>
                      <p className="text-slate-500 text-xs">Tous les champs marqués * sont obligatoires.</p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nom complet" error={errors.name?.message}>
                        <input
                          {...register("name", { required: "Le nom est requis" })}
                          placeholder="Donald Fambo"
                          className={inputClass(!!errors.name)}
                        />
                      </Field>
                      <Field label="Email" error={errors.email?.message}>
                        <input
                          {...register("email", {
                            required: "L'email est requis",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Email invalide" },
                          })}
                          type="email"
                          placeholder="vous@exemple.com"
                          className={inputClass(!!errors.email)}
                        />
                      </Field>
                    </div>

                    {/* Subject */}
                    <Field label="Sujet" error={errors.subject?.message}>
                      <input
                        {...register("subject", { required: "Le sujet est requis" })}
                        placeholder="Développement d'une application web"
                        className={inputClass(!!errors.subject)}
                      />
                    </Field>

                    {/* Message */}
                    <Field label="Message" error={errors.message?.message}>
                      <textarea
                        {...register("message", {
                          required: "Le message est requis",
                          minLength: { value: 20, message: "Au moins 20 caractères" },
                        })}
                        rows={5}
                        placeholder="Décrivez votre projet, vos besoins, votre budget et vos délais..."
                        className={`${inputClass(!!errors.message)} resize-none`}
                      />
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.97 }}
                      className="relative w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-semibold text-sm text-white overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #22d3ee 100%)" }}
                    >
                      {/* Shine sweep */}
                      {!submitting && (
                        <motion.span
                          animate={{ x: ["-120%", "220%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                          className="absolute inset-y-0 w-1/4 bg-white/20 skew-x-[-20deg] pointer-events-none"
                        />
                      )}
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Helpers ── */
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
        {label} <span className="text-indigo-400">*</span>
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-rose-400 text-xs mt-1.5 flex items-center gap-1"
          >
            <span>⚠</span> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-slate-600",
    "border transition-all duration-200 outline-none",
    "focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500",
    hasError ? "border-rose-500/60 bg-rose-500/5" : "border-white/8 hover:border-white/15 focus:border-indigo-500",
  ]
    .join(" ")
    .concat(" ")
    .concat("bg-white/[0.04]");
}
