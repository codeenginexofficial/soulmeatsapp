import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · SOULMEATS Open Air Restaurant" },
      { name: "description", content: "Find SOULMEATS Open Air in Dar es Salaam. Call 0658 898 989. Open daily till 2 AM." },
      { property: "og:title", content: "Contact SOULMEATS" },
      { property: "og:description", content: "Visit, call, or reserve a table at SOULMEATS Open Air, Dar es Salaam." },
    ],
  }),
  component: ContactPage,
});

// Plus code 57WG+XM Dar es Salaam ≈ -6.78, 39.25
const MAP_SRC = "https://www.google.com/maps?q=SOULMEATS+Open+Air+Restaurant+Dar+es+Salaam&output=embed";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-40 pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Find Us</div>
          <h1 className="text-display text-6xl md:text-8xl font-black leading-[0.9]">
            Pull up a<br/><span className="text-ember-gradient italic">chair.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We're easy to find, easier to love. Call ahead for big groups or just walk in — the lanterns are always lit.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-20 grid lg:grid-cols-3 gap-6">
        {[
          { label: "Call us", value: "0658 898 989", href: "tel:0658898989" },
          { label: "Plus code", value: "57WG+XM, Dar es Salaam" },
          { label: "Hours", value: "Open daily · Closes 2 AM" },
        ].map(({ label, value, href }, i) => (
          <motion.a
            key={i}
            href={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="block rounded-2xl bg-card border border-border p-8 hover:border-ember/60 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</div>
            <div className="text-display text-2xl font-bold">{value}</div>
          </motion.a>
        ))}
      </section>

      <section className="px-6 lg:px-10 max-w-7xl mx-auto pb-32 grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 rounded-3xl overflow-hidden border border-border h-[480px] lg:h-auto"
        >
          <iframe
            title="SOULMEATS location on Google Maps"
            src={MAP_SRC}
            className="w-full h-full min-h-[480px] grayscale-[20%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </section>

      <Footer />

      <style>{`.input { width:100%; background: oklch(0.16 0.012 50 / 0.5); border:1px solid var(--border); border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.875rem; outline:none; transition: border-color .2s; }
        .input:focus { border-color: var(--ember); }`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>
      {children}
    </label>
  );
}
