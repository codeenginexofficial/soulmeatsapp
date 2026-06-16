import { Link } from "@tanstack/react-router";
import { Flame, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-to-b from-background to-charcoal">
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              {/* <div className="size-11 rounded-full gradient-ember grid place-items-center glow-ember">
                <Flame className="size-6 text-ember-foreground" />
              </div> */}
              <div>
                <div className="text-display text-2xl font-bold">SOULMEATS</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Open Air Restaurant</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Where Swahili soul, Indian spice & Arabic warmth gather under the Dar es Salaam sky. Open till 2 AM, every single night.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="size-10 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-ember hover:border-ember hover:-translate-y-1 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm uppercase tracking-widest text-ember mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition">Home</Link></li>
              <li><Link to="/menu" className="text-muted-foreground hover:text-foreground transition">Menu</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-ember mb-5">Visit</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-ember shrink-0" /><span>Plus Code 57WG+XM<br/>Dar es Salaam, Tanzania</span></li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-ember shrink-0" /><a href="tel:0658898989" className="hover:text-foreground">0658 898 989</a></li>
              <li className="flex gap-3"><Clock className="size-4 mt-0.5 text-ember shrink-0" /><span>Open daily · Closes 2 AM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SOULMEATS Open Air Restaurant. All rights reserved.</div>
          <div>
            Crafted by{" "}
            <a
              href="https://skyzenlabs.pages.dev"
              target="_blank"
              rel="noreferrer"
              className="text-ember font-semibold hover:underline"
            >
              Skyzen Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
