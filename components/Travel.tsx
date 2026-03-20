"use client";

import { motion } from "framer-motion";
import { travelRegions } from "@/data/resume";

/*
  Magazine-style travel layout:
  - Hero-sized feature photo for the first place in each region
  - Smaller photos in a grid alongside
  - Asymmetric, editorial feel
*/

function MagazineRegion({
  region,
  regionIdx,
}: {
  region: (typeof travelRegions)[number];
  regionIdx: number;
}) {
  const [feature, ...rest] = region.places;
  // Alternate layout direction per region
  const reversed = regionIdx % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: regionIdx * 0.1 }}
      className="mb-20"
    >
      {/* Region label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{region.emoji}</span>
        <h3 className="text-xl font-bold">{region.region}</h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Magazine grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
          reversed ? "md:direction-rtl" : ""
        }`}
      >
        {/* Feature (large) card */}
        <div
          className={`${
            rest.length > 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-3"
          }`}
        >
          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer h-full min-h-[280px] md:min-h-[360px]"
            style={{ backgroundColor: `${feature.color}18` }}
          >
            {/* Placeholder photo area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">📷</span>
            </div>
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(135deg, ${feature.color}30, transparent 60%)`,
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
              <h4 className="text-white text-xl font-bold drop-shadow-lg">
                {feature.name}
              </h4>
              <p className="text-white/80 text-sm drop-shadow">
                {feature.tag}
              </p>
            </div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
          </div>
        </div>

        {/* Smaller cards */}
        {rest.map((place, i) => (
          <div key={place.name}>
            <div
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full min-h-[170px]"
              style={{ backgroundColor: `${place.color}18` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl opacity-20">📷</span>
              </div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(${
                    135 + i * 45
                  }deg, ${place.color}30, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                <h4 className="text-white text-base font-bold drop-shadow-lg">
                  {place.name}
                </h4>
                <p className="text-white/80 text-xs drop-shadow">
                  {place.tag}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Travel() {
  return (
    <section id="travel" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            ✈️ 我去过哪里
          </h1>
          <p className="text-text-light">用脚步丈量世界，用照片留住记忆</p>
        </motion.div>

        {travelRegions.map((region, i) => (
          <MagazineRegion key={region.region} region={region} regionIdx={i} />
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm mt-4"
        >
          🗺️ 照片正在路上... 敬请期待更多旅行故事！
        </motion.p>
      </div>
    </section>
  );
}
