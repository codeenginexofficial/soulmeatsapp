export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

let cart: CartItem[] = [];

// simple listeners (reactive system)
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

// persist
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function load() {
  if (typeof window === "undefined") return;
  const data = localStorage.getItem("cart");
  if (data) cart = JSON.parse(data);
}

// INIT ON IMPORT
load();

export function getCart() {
  return cart;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function addToCart(item: Omit<CartItem, "qty">) {
  const existing = cart.find((i) => i.id === item.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  save();
  emit();
}

export function increaseQty(id: string) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;

  save();
  emit();
}

export function decreaseQty(id: string) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty--;

  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }

  save();
  emit();
}

export function clearCart() {
  cart = [];
  save();
  emit();
}

export function getTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}