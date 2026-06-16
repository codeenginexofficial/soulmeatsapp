import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getCart, subscribe } from "@/store/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const update = () => {
      const cart = getCart();
      setCount(cart.reduce((sum, i) => sum + i.qty, 0));
    };

    update();
    return subscribe(update);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-black/60 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="font-bold text-lg">
          SOULMEATS
        </Link>

        {/* CART */}
        <Link
          to="/cart"
          className="px-4 py-2 rounded-full border border-white/20"
          onClick={() => setOpen(false)}
        >
          Cart {count > 0 && <span>({count})</span>}
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU (FIXED - THIS WAS MISSING) */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-white/80 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}