import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Star, Clock, MapPin, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MENU, REVIEWS } from "@/data/menu";
import hero from "@/assets/hero.jpg";
import ambience from "@/assets/ambience.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOULMEATS Open Air — Where Dar es Salaam Eats Late" },
      { name: "description", content: "Open-air restaurant in Dar es Salaam serving Swahili, Indian & Arabic favourites. Mishkaki, biryani, T-bone — open till 2 AM." },
      { property: "og:title", content: "SOULMEATS Open Air Restaurant" },
      { property: "og:description", content: "Swahili, Indian & Arabic flavours under string lights. Open till 2 AM." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Signatures />
      <Ambience />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={hero} alt="SoulMeats open-air restaurant at dusk" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        <div className="absolute inset-0 bg-grain" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="size-2 rounded-full bg-ember animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Open Tonight · Till 2 AM</span>
        </motion.div>

        <h1 className="text-display text-[clamp(3.5rem,11vw,11rem)] font-black leading-[0.85] max-w-6xl">
          {"Soul on".split("").map((c, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
          <br />
          <motion.span initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="text-ember-gradient italic font-bold inline-block">
            open flame.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <Link to="/menu" className="group inline-flex items-center gap-3 px-7 py-4 rounded-full gradient-ember text-ember-foreground font-semibold glow-ember hover:scale-105 transition-transform">
            Explore the Menu
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="tel:0658898989" className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border backdrop-blur-md bg-background/40 font-semibold hover:border-ember transition">
            Reserve · 0658 898 989
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-border/50 pt-8"
        >
          {[
            { Icon: Star, label: "4.1 · 66 reviews" },
            { Icon: Clock, label: "Open till 2 AM" },
            { Icon: MapPin, label: "Dar es Salaam" },
          ].map(({ Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Icon className="size-4 text-ember" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Swahili Soul", "Open Flame", "Indian Spice", "Arabic Warmth", "Iftar Buffet", "Late Night Vibes", "Live Matches"];
  return (
    <div className="border-y border-border bg-card/40 py-6 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap gap-12 text-display text-3xl md:text-5xl text-muted-foreground/50"
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Story() {
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Our Story</div>
          <h2 className="text-display text-5xl md:text-6xl font-bold leading-[0.95]">
            Three cuisines.<br />One open sky.
          </h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed">
          SOULMEATS is where Dar es Salaam comes to slow down. Swahili classics meet Indian masala and Arabic charcoal, all served under string lights and a warm coastal breeze. Whether it's iftar with family or a late dinner with friends, the fire is always lit.
        </motion.p>
      </div>
    </section>
  );
}

function Signatures() {
  const picks = MENU.filter((m) => m.tag === "Signature" || m.tag === "Popular").slice(0, 4);
  return (
    <section className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Signatures</div>
          <h2 className="text-display text-5xl md:text-6xl font-bold leading-tight">Tonight's fire.</h2>
        </div>
        <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-ember hover:gap-3 transition-all">
          View full menu <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {picks.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img src={item.image} alt={item.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-background/70 backdrop-blur text-ember border border-ember/30">{item.tag}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent">
              <h3 className="text-display text-xl font-bold">{item.name}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">{item.category}</span>
                <span className="text-ember font-semibold text-sm">TSh {item.price.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Ambience() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border"
        >
          <img src={ambience} alt="Open-air seating with hanging Edison bulbs" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/50 to-transparent" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">The Setting</div>
          <h2 className="text-display text-5xl md:text-6xl font-bold leading-[0.95] mb-8">A garden that hums after dark.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Warm Edison bulbs, hanging lanterns, lush tropical greens, and long wooden tables. Big screens for match nights, quiet corners for a date, and a buffet that comes alive during Ramadhan.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { k: "4.1", v: "Google rating" },
              { k: "2 AM", v: "Closing time" },
              { k: "10–30K", v: "TSh per person" },
              { k: "100%", v: "Open air" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-2 border-ember pl-4">
                <div className="text-display text-3xl font-bold text-ember-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Loved by Dar</div>
        <h2 className="text-display text-5xl md:text-6xl font-bold">What guests say.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((r, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="relative rounded-2xl bg-card border border-border p-7 hover:border-ember/60 transition-colors"
          >
            <Quote className="size-6 text-ember/60 mb-4" />
            <blockquote className="text-foreground leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.time}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-ember text-ember" />
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 lg:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center border border-border bg-gradient-to-br from-card to-background"
      >
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-ember/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-display text-5xl md:text-7xl font-bold leading-[0.95]">
            See you<br />
            <span className="text-ember-gradient italic">tonight.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">A table under the lanterns is waiting. Call us — we'll keep one warm.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0658898989" className="px-7 py-4 rounded-full gradient-ember text-ember-foreground font-semibold glow-ember hover:scale-105 transition-transform">
              Call 0658 898 989
            </a>
            <Link to="/contact" className="px-7 py-4 rounded-full border border-border font-semibold hover:border-ember transition">
              Find us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
