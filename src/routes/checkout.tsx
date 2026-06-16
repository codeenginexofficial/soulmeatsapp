import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  subscribe,
  getCart,
  getTotal,
  type CartItem,
} from "@/store/cart";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>(getCart());

  useEffect(() => {
    const update = () => setCart([...getCart()]);
    update();
    return subscribe(update);
  }, []);

  const total = getTotal();

  function sendWhatsApp() {
    if (cart.length === 0) return;

    const phone = "255658898989";

    const items = cart
      .map((i) => `• ${i.name} x${i.qty} = TSh ${(i.price * i.qty).toLocaleString()}`)
      .join("\n");

    const message =
      `🔥 SOULMEATS ORDER\n\n${items}\n\nTOTAL: TSh ${total.toLocaleString()}\n\nPlease confirm order.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* PAGE BODY */}
      <main className="flex-1">
        <div className="pt-32 pb-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl font-black">
            Checkout <span className="text-ember-gradient">Now</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            Review your order before sending it on WhatsApp.
          </p>
        </div>

        <div className="px-6 max-w-5xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT INFO BOX */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((i) => (
                  <div
                    key={i.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {i.name} x{i.qty}
                    </span>
                    <span className="text-ember">
                      TSh {(i.price * i.qty).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-ember">
                  TSh {total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* RIGHT ACTION BOX */}
            <div className="p-6 rounded-2xl border border-ember/30 bg-ember/5 flex flex-col justify-between">
              <div>
                <h2 className="font-bold mb-2">Confirm Order</h2>
                <p className="text-sm text-muted-foreground">
                  Your order will be sent directly to WhatsApp.
                </p>
              </div>

              <button
                onClick={sendWhatsApp}
                disabled={cart.length === 0}
                className="mt-6 w-full py-4 rounded-full gradient-ember text-white font-bold disabled:opacity-50"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}