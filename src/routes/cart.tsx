    import { createFileRoute, Link } from "@tanstack/react-router";
    import {
    subscribe,
    getCart,
    increaseQty,
    decreaseQty,
    getTotal,
    type CartItem,
    } from "@/store/cart";
    import { useEffect, useState } from "react";
    import { Navbar } from "@/components/Navbar";
    import { Footer } from "@/components/Footer";

    export const Route = createFileRoute("/cart")({
    component: CartPage,
    });

        function CartPage() {
        const [cart, setCart] = useState<CartItem[]>(getCart());

        useEffect(() => {
        const update = () => {
            setCart([...getCart()]);
        };

        update();

        return subscribe(update);
        }, []);

    const total = getTotal();

    return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <div className="pt-32 pb-10 px-6 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-black">
            Your <span className="text-ember-gradient">Cart</span>
        </h1>

        <p className="mt-4 text-muted-foreground">
            Review your selected dishes before checkout.
        </p>
        </div>

        {/* CONTENT */}
        <div className="px-6 max-w-5xl mx-auto pb-24 w-full flex-1">

        {cart.length === 0 ? (
            <div className="text-center p-10 border border-border rounded-3xl bg-card">
            <p className="text-muted-foreground mb-4">
                Your cart is empty
            </p>

            <Link
                to="/menu"
                className="px-6 py-3 rounded-full gradient-ember text-white inline-block"
            >
                Go to Menu
            </Link>
            </div>
        ) : (
            <div className="space-y-4">

            {/* ITEMS */}
            {cart.map((item) => (
                <div
                key={item.id}
                className="flex items-center justify-between p-5 rounded-3xl border border-border bg-card"
                >

                {/* LEFT */}
                <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>

                    <p className="text-sm text-muted-foreground">
                    TSh {(item.price * item.qty).toLocaleString()}
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">

                    <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-9 h-9 rounded-full border border-border hover:border-ember transition"
                    >
                    -
                    </button>

                    <span className="font-medium w-6 text-center">
                    {item.qty}
                    </span>

                    <button
                    onClick={() => increaseQty(item.id)}
                    className="w-9 h-9 rounded-full border border-border hover:border-ember transition"
                    >
                    +
                    </button>

                </div>
                </div>
            ))}

            {/* TOTAL CARD */}
            <div className="mt-10 rounded-3xl border border-border bg-card overflow-hidden">

                <div className="p-6 flex justify-between items-center">
                <div>
                    <div className="text-sm text-muted-foreground">
                    Grand Total
                    </div>

                    <div className="text-2xl font-bold text-ember">
                    TSh {total.toLocaleString()}
                    </div>
                </div>

                <Link
                    to="/checkout"
                    className="px-6 py-4 rounded-full gradient-ember text-white font-bold hover:scale-[1.02] transition-transform"
                >
                    Checkout
                </Link>
                </div>

            </div>

            </div>
        )}
        </div>

        {/* FOOTER */}
        <Footer />
    </div>
    );
    }