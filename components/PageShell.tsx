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
    <div className="pt-20 min-h-screen pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-coral transition-colors"
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
