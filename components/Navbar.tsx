"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "思考", href: "/behavioral-science", emoji: "🧠" },
  { label: "足迹", href: "/experience", emoji: "🚀" },
  { label: "追问", href: "/research", emoji: "🔍" },
  { label: "折腾", href: "/projects", emoji: "💡" },
  { label: "在路上", href: "/travel", emoji: "✈️" },
  { label: "手记", href: "/portfolio", emoji: "🎨" },
  { label: "找我", href: "/contact", emoji: "💌" },
];

const wipHrefs = ["/travel", "/portfolio"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const showWip = process.env.NEXT_PUBLIC_SHOW_WIP === "true";
  const visibleItems = showWip
    ? navItems
    : navItems.filter((item) => !wipHrefs.includes(item.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black gradient-text hover-wiggle"
        >
          盈豫 ✨
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {visibleItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors group ${
                  isActive
                    ? "text-coral"
                    : "text-text-light hover:text-coral"
                }`}
              >
                <span className="group-hover:hidden">{item.label}</span>
                <span className="hidden group-hover:inline">
                  {item.emoji} {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-coral/10 rounded-xl transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-lg border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {visibleItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors py-1 ${
                      isActive ? "text-coral" : "text-text-light hover:text-coral"
                    }`}
                  >
                    {item.emoji} {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
