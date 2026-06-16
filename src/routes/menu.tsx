import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpiceLevel } from "@/components/SpiceLevel";

import { MENU, CATEGORIES, type Category } from "@/data/menu";
import { addToCart } from "@/store/cart";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu · SOULMEATS Open Air Restaurant" },
      {
        name: "description",
        content:
          "Browse mishkaki, biryani, paneer tikka, T-bone steak and more.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    return MENU.filter((m) => {
      const matchCat = cat === "All" || m.category === cat;

      const q = query.toLowerCase().trim();
      const matchQ =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q);

      return matchCat && matchQ;
    });
  }, [query, cat]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-black">
            Eat with <span className="text-ember">soul.</span>
          </h1>
        </motion.div>

        {/* SEARCH + FILTERS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search food..."
              className="w-full border border-border pl-10 py-2 rounded-full"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1 rounded-full border text-sm ${
                  cat === c
                    ? "bg-ember text-white"
                    : "border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <img
                  src={item.image}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.name}</h3>
                    <SpiceLevel level={item.spice} />
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold">
                      TSh {item.price.toLocaleString()}
                    </span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                          })
                        }
                        className="px-4 py-2 rounded-full bg-ember text-white text-sm font-semibold"
                      >
                        Add to Cart
                      </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            No dishes found
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}