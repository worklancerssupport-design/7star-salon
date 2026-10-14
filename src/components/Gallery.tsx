"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Check,
  Copy,
  Calendar,
  Sparkles
} from "lucide-react";
import { branchesData, type Branch } from "@/data/branches";
import { contactData } from "@/data/contact";
import { formatRange, getTimingsForScope, timingsDaysLabel } from "@/data/timings";

// Specialized metadata for each branch to make the text-only layout informative and rich
const BRANCH_METADATA: Record<string, {
  type: string;
  badgeColor: string;
  features: string[];
}> = {
  "venus-colony-ext": {
    type: "Family Beauty Salon",
    badgeColor: "#234E70",
    features: ["Men & Women", "Bridal Studio", "Hair Spa", "Skin Care"],
  },
  "vgp-seethapathy-nagar": {
    type: "Men's Luxury Grooming",
    badgeColor: "#1A365D",
    features: ["Precision Fades", "Beard Styling", "Detan & Facials", "Hair Treatments"],
  },
  "iit-m-campus": {
    type: "Campus Unisex Studio",
    badgeColor: "#2C5282",
    features: ["Unisex Salon", "Trendy Cuts", "Balayage & Color", "Student Friendly"],
  },
  "iitm-shopping-complex": {
    type: "Ladies Beauty Saloon",
    badgeColor: "#744210",
    features: ["Bridal Artistry", "Waxing & Threading", "Facials & Cleanups", "Hair Smoothening"],
  },
};

/* ── Individual Text-Only Branch Card ─────────────────────────────────── */
function BranchTextCard({ branch, index }: { branch: Branch; index: number }) {
  const meta = BRANCH_METADATA[branch.id] || {
    type: "Salon & Spa Studio",
    badgeColor: "#234E70",
    features: ["Hair Styling", "Skin Care", "Grooming", "Bridal"],
  };

  const branchTimings = getTimingsForScope(branch.scope);

  const [copied, setCopied] = useState(false);

  const copyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(branch.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branch.location
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E5E7EB] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C6A15B]/50"
    >
      {/* Top Gold Accent Line on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #C6A15B, transparent)" }}
      />

      {/* Top Meta Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{ background: "#EEF5FA", color: "#234E70" }}
            >
              Branch 0{index + 1}
            </span>
            <span
              className="text-[11px] font-body font-medium px-2.5 py-1 rounded-full"
              style={{ background: "#FDF8F0", color: "#B8860B" }}
            >
              {meta.type}
            </span>
          </div>

          {/* Open Status Indicator */}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open
          </span>
        </div>

        {/* Branch Title */}
        <h3
          className="font-heading font-bold text-2xl mb-3 tracking-tight"
          style={{ color: "#234E70" }}
        >
          {branch.name}
        </h3>

        {/* Hours */}
        <div className="flex items-start gap-2 text-xs font-body text-[#6B7280] mb-4">
          <Clock className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
          <div className="flex-1 space-y-1">
            {branchTimings.map((t) => (
              <div key={t.key} className="flex justify-between gap-3">
                <span className="text-[#9CA3AF]">{t.label}</span>
                <span className="font-medium text-[#4B5563]">{formatRange(t.range)}</span>
              </div>
            ))}
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] pt-0.5">
              Open {timingsDaysLabel}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F3F4F6] my-4" />

        {/* Full Address Block */}
        <div className="flex items-start gap-2.5 mb-5">
          <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
          <p className="text-xs font-body leading-relaxed text-[#4B5563]">
            {branch.location}
          </p>
        </div>

        {/* Service Highlights / Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {meta.features.map((feat) => (
            <span
              key={feat}
              className="text-[11px] font-body font-medium px-2 py-0.5 rounded-md bg-[#F9FAFB] text-[#6B7280] border border-[#F3F4F6]"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Bottom */}
      <div className="pt-4 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-body font-semibold tracking-wide uppercase transition-all duration-200"
          style={{
            background: "#234E70",
            color: "#FFFFFF",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a3a55")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#234E70")}
        >
          <Navigation className="w-3.5 h-3.5" />
          Get Directions
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={copyAddress}
            title="Copy address"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-xs font-body font-medium text-[#4B5563] hover:text-[#234E70] hover:bg-[#EEF5FA] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#6B7280]" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>

          <a
            href={`tel:${contactData.phone.primary}`}
            title="Call Salon"
            className="p-2.5 rounded-lg border border-[#E5E7EB] text-[#234E70] hover:bg-[#EEF5FA] transition-colors flex items-center justify-center"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Branches Section ─────────────────────────────────────────────── */
export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="branches" className="section" style={{ background: "#EEF5FA" }}>
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <p className="label tracking-[0.25em]">Citywide Studios</p>
            </div>
            <h2 className="h-lg" style={{ color: "#234E70" }}>
              Our Branches
            </h2>
            <div className="rule rule-left mt-3.5" />
            <p className="text-sm font-body mt-4 max-w-xl leading-relaxed text-[#6B7280]">
              Discover our four strategically placed salon branches across Chennai.
              Each studio delivers the same signature luxury, hospital-grade hygiene,
              and master stylist artistry.
            </p>
          </motion.div>

          {/* Quick Action badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-[#E2E8F0] shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#FAF7F0" }}>
              <Calendar className="w-5 h-5 text-[#C6A15B]" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm text-[#234E70]">Planning a Visit?</p>
              <button
                onClick={scrollToContact}
                className="text-xs font-body font-semibold text-[#C6A15B] hover:underline cursor-pointer"
              >
                Book An Appointment →
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4 Text-Only Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branchesData.map((b, i) => (
            <BranchTextCard key={b.id} branch={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
