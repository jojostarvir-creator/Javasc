"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiUsers, FiBookOpen, FiUserCheck, FiExternalLink } from "react-icons/fi";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatar_url: string;
}

interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
}

const USERNAME = "jojostarvir-creator";
const CACHE_KEY = "gh_stats_cache";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

export default function GitHubStats() {
  const { lang } = useLang();
  const [user, setUser]   = useState<GitHubUser | null>(null);
  const [stars, setStars] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, ts } = JSON.parse(cached);
          if (Date.now() - ts < CACHE_TTL) {
            setUser(data.user);
            setStars(data.stars);
            setLoading(false);
            return;
          }
        }
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
        ]);
        if (!uRes.ok) throw new Error("API error");
        const uData: GitHubUser = await uRes.json();
        const rData: GitHubRepo[] = await rRes.json();
        const totalStars = rData
          .filter((r) => !r.fork)
          .reduce((acc, r) => acc + r.stargazers_count, 0);
        setUser(uData);
        setStars(totalStars);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: { user: uData, stars: totalStars }, ts: Date.now() }));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const stats = user
    ? [
        { icon: FiBookOpen,  value: user.public_repos, label: tr(T.github.repos,     lang), color: "#7b68ee" },
        { icon: FiUsers,     value: user.followers,    label: tr(T.github.followers,  lang), color: "#06b6d4" },
        { icon: FiUserCheck, value: user.following,    label: tr(T.github.following,  lang), color: "#10b981" },
        { icon: FiStar,      value: stars,             label: tr(T.github.stars,      lang), color: "#f59e0b" },
      ]
    : [];

  return (
    <section id="github" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
            <FiGithub className="w-3.5 h-3.5 text-[#7b68ee]" />
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
              {tr(T.github.badge, lang)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {tr(T.github.title, lang)}{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              {tr(T.github.titleHL, lang)}
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            {tr(T.github.sub, lang)}
          </p>
        </motion.div>

        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 rounded-2xl border border-white/6 bg-white/2 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-slate-500 text-sm mb-10">{tr(T.github.error, lang)}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 transition-all duration-300 text-center"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon className="w-4.5 h-4.5" style={{ color: s.color }} />
                </div>
                <p className="text-2xl font-extrabold text-white mb-1 group-hover:text-[#7b68ee] transition-colors">
                  {s.value}
                </p>
                <p className="text-slate-500 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 hover:border-[#7b68ee]/40 hover:bg-[#7b68ee]/5 transition-all"
            >
              <FiGithub className="w-4 h-4" />
              {tr(T.github.viewProfile, lang)}
              <FiExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}
