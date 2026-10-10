"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sparkles,
  MapPin,
  ChevronDown,
  Phone,
  ShieldCheck,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import { contactData } from "@/data/contact";
import { WhatsAppIcon } from "./SocialIcons";

const SEO_SERVICES = [
  {
    icon: Scissors,
    title: "Men's Precision Haircuts in Velachery",
    keyword: "Men's Haircut Saloon",
    desc: "From trendy skin fades, burst fades, and classic corporate cuts to beard sculpting and organic head massages. Tailored grooming for every gentleman.",
    tags: ["Fade Haircuts", "Beard Styling", "Hair Colour", "Head Massage"],
  },
  {
    icon: Sparkles,
    title: "Women's Hair Care & Smoothening",
    keyword: "Women's Beauty Parlour",
    desc: "Expert layer haircuts, balayage highlights, L'Oréal hair spa, keratin treatments, and botox therapies designed to restore healthy shine.",
    tags: ["Layer Cuts", "Keratin Therapy", "Hair Spa", "Balayage Colour"],
  },
  {
    icon: Heart,
    title: "Bridal & Pre-Bridal Artistry",
    keyword: "Bridal Makeup Velachery",
    desc: "Velachery's premier choice for HD bridal makeup, engagement looks, saree draping, herbal facials, and luxury pre-bridal glow packages.",
    tags: ["HD Makeup", "Saree Draping", "Facials", "Pre-Bridal"],
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Hygiene & Family Care",
    keyword: "Family Saloon Near Me",
    desc: "Sterilised tools, single-use disposables, child-friendly styling chairs, and transparent prices with no hidden charges for the whole family.",
    tags: ["Sterilised Tools", "Kids Haircuts", "Honest Pricing", "Family Salon"],
  },
];

const LOCAL_AREAS = [
  "Venus Colony",
  "VGP Seethapathy Nagar",
  "Anna Nagar Extension",
  "IIT Madras Campus",
  "Baby Nagar",
  "Vijaya Nagar",
  "Taramani",
  "Guindy",
  "Madipakkam",
];

const FAQS = [
  {
    q: "Why is 7Star Salon considered the top haircut saloon in Velachery?",
    a: "7Star Salon combines 15+ years of master styling experience with hospital-grade hygiene, certified stylists, and premium international brands like L'Oréal and Schwarzkopf. Rated 4.9★ on Google by over 500 happy clients, we provide premier styling at fair, honest prices.",
  },
  {
    q: "Where is 7Star Salon located in Velachery, Chennai?",
    a: "Our flagship Velachery branch is located at No. 13, Anna Nagar 3rd Main Road, near V.G.P Selva Nagar, Venus Colony Extension, Velachery, Chennai - 600042. We also operate our specialized men's salon at VGP Seethapathy Nagar and two studios inside the IIT-M campus.",
  },
  {
    q: "Do you offer both men's and women's hair services in Velachery?",
    a: "Yes! 7Star Salon is a full-service family and unisex beauty studio. We provide precision men's haircuts, beard styling, and detan alongside women's haircuts, keratin smoothening, hair colouring, waxing, threading, facials, and bridal makeup.",
  },
  {
    q: "How can I book an appointment at 7Star Salon Velachery?",
    a: "You can book instantly by calling us at +91 98414 18413 or messaging our WhatsApp desk. Walk-in appointments are also warmly welcomed throughout our business hours from 9:00 AM to 9:00 PM daily.",
  },
  {
    q: "What hair smoothening and keratin treatments do you provide?",
    a: "We offer professional hair smoothening, straightening, keratin therapy, and deep-nourishing hair spa using dermatologically tested, high-grade products that eliminate frizz and retain natural strength.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="velachery-salon" className="section relative overflow-hidden" style={{ background: "#FAF7F0" }}>
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#234E70 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="wrap relative z-10">
        {/* Header Block — Search-Intent Optimized */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFCF] text-[#234E70] text-xs font-body font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Velachery, Chennai · Premier Hair Studio</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.18]" style={{ color: "#234E70" }}>
            The Preferred Haircut Saloon &amp; Family Beauty Studio in Velachery
          </h2>
          <div className="rule rule-left mt-4 mb-5" />

          <p className="text-sm sm:text-base font-body leading-relaxed text-[#4B5563]">
            Looking for the <strong>best haircut saloon in Velachery</strong>? <strong>7Star Salon</strong> delivers
            signature haircuts, trendsetting hair colouring, botox &amp; keratin smoothening, and couture bridal artistry.
            Whether you need a quick taper fade or a complete wedding glow transformation, our master stylists
            bring unmatched craftsmanship right to your neighborhood.
          </p>
        </motion.div>

        {/* 4 Pillars Grid — High Local SEO Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SEO_SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl border border-[#E5E7EB] p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C6A15B]/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-105 duration-300"
                    style={{ background: "#EEF5FA" }}>
                    <s.icon className="w-6 h-6" style={{ color: "#234E70" }} />
                  </div>
                  <span className="text-[11px] font-body font-bold px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#C6A15B] border border-[#E5DFCF] tracking-wide uppercase">
                    {s.keyword}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl mb-2.5 text-[#234E70]">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm font-body leading-relaxed text-[#6B7280] mb-5">
                  {s.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F3F4F6]">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-body px-2.5 py-1 rounded-md bg-[#F9FAFB] text-[#4B5563] border border-[#F3F4F6] font-medium"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Neighborhoods Badge Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 mb-16 shadow-xs"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-body font-bold uppercase tracking-wider text-[#C6A15B] mb-1">
                Local Area Coverage
              </p>
              <h4 className="font-heading font-bold text-lg text-[#234E70]">
                Proudly Serving Velachery &amp; Nearby Neighborhoods
              </h4>
              <p className="text-xs font-body text-[#6B7280] mt-1">
                Walking distance from key transport hubs, shopping avenues, and the IIT Madras campus.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-xl">
              {LOCAL_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium bg-[#EEF5FA] text-[#234E70] border border-[#D5E3EF]"
                >
                  <MapPin className="w-3 h-3 text-[#C6A15B]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Local Search FAQ Accordion — Drives Featured Snippets */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="label tracking-[0.25em] mb-2">Frequently Asked Questions</p>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#234E70]">
              Everything You Need to Know About Our Velachery Salons
            </h3>
            <div className="rule rule-center mt-3" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F9FAFB] transition-colors"
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-[#234E70] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C6A15B] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-body text-[#4B5563] leading-relaxed border-t border-[#F3F4F6]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Banner: Call & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, #234E70 0%, #1A365D 100%)" }}
        >
          {/* Subtle gold glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#C6A15B]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-[#C6A15B] block mb-2">
              ✦ Ready for Your Fresh Look?
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
              Book Your Appointment at 7Star Salon Velachery
            </h3>
            <p className="text-xs sm:text-sm font-body text-white/80 leading-relaxed mb-7 max-w-lg mx-auto">
              Call us directly or send a quick WhatsApp message to reserve your slot with our top stylists today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(contactData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-body font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                Chat on WhatsApp ({contactData.phone.primary})
              </a>

              <a
                href={`tel:${contactData.phone.primary}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-body font-bold uppercase tracking-wider bg-white/10 text-white border border-white/25 hover:bg-white/20 transition-all backdrop-blur-xs"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                Call +91 98414 18413
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
