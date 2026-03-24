"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageShell({
  children,
  backLabel = "首页",
  backHref = "/",
}: {
  children: React.ReactNode;
  backLabel?: string;
  backHref?: string;
}) {
  return (
    <div className="pt-24 min-h-screen pb-16 relative">
      <div className="absolute inset-x-0 top-0 h-72 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(244,217,139,0.45),transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-sunny-dark transition-colors"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>
        </motion.div>
      </div>
      {children}
    </div>
  );
}
