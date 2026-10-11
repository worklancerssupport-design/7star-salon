"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ownerData } from "@/data/owner";

export default function Owner() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="owner" className="section" style={{ background: "#EEF5FA" }}>
      <div className="wrap">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative overflow-hidden bg-[#ddd8d0]"
              style={{ aspectRatio: "4/5", borderRadius: "10px" }}
            >
              <Image
                src={ownerData.photo}
                alt={ownerData.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label mb-3">Meet the Owner</p>
            <h2 className="h-lg mb-1" style={{ color: "#234E70" }}>{ownerData.name}</h2>
            <p className="text-sm font-body mb-5" style={{ color: "#C6A15B" }}>{ownerData.title}</p>
            <div className="rule rule-left mb-8" />

            <ul className="space-y-3.5 mb-8">
              {ownerData.facts.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3.5 text-sm font-body leading-[1.75]"
                  style={{ color: "#6B7280" }}
                >
                  <span
                    className="mt-2.5 shrink-0 block"
                    style={{ width: "20px", height: "1.5px", background: "#C6A15B" }}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <p
              className="text-base font-body italic leading-[1.85] max-w-md pl-5"
              style={{ color: "#234E70", borderLeft: "2px solid #C6A15B" }}
            >
              {ownerData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
