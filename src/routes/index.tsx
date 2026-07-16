import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const heroImg = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop";
const stonesImg = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop";
const aromaImg = "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop";
const facialImg = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop";

export const Route = createFileRoute("/")({
  component: Landing,
});

const services = [
  { name: "Incall Booking", desc: "Service at our location. Remaining Amount pay at meeting place.", duration: "Confirm now", price: "₹299", img: stonesImg },
  { name: "Outcall Booking", desc: "Service at your location or Home. Remaining Amount pay at meeting place.", duration: "Confirm now", price: "₹599", img: aromaImg },
  { name: "100% Refund Policy", desc: "If you don't like massager girls then 💯% refund your money back 🔹", duration: "Guarantee", price: "Refund", img: facialImg },
];

const rituals = [
  { time: "1", unit: "hour", label: "Full body massage", price: "₹2000" },
  { time: "2", unit: "hour", label: "Full body massage", price: "₹3500" },
  { time: "3", unit: "hour", label: "Full body massage", price: "₹4500" },
  { time: "4", unit: "hour", label: "Full body massage", price: "₹5500" },
  { time: "1", unit: "day", label: "Full Day massage", price: "₹6000" },
  { time: "1", unit: "night", label: "Full night massage", price: "₹7000" },
];

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
  </svg>
);

function Landing() {
  const [telegramLink, setTelegramLink] = useState("https://t.me/+rgkEHNogLxVlNTc1");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  useEffect(() => {
    const savedTelegram = localStorage.getItem("telegramLink");
    const savedWhatsapp = localStorage.getItem("whatsappNumber");
    if (savedTelegram) setTelegramLink(savedTelegram);
    if (savedWhatsapp) setWhatsappNumber(savedWhatsapp);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="font-display text-2xl tracking-wide text-gold-gradient">Sejal Spa Agency</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="#rituals" className="hover:text-primary transition">Rituals</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#sanctuary" className="hover:text-primary transition">Sanctuary</a>
            <a href="#book" className="hover:text-primary transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={telegramLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/80 text-white transition shadow-[0_0_15px_-5px_#0088cc]" aria-label="Telegram Contact">
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a href="#book" className="rounded-full border border-primary/40 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition">Book</a>
            <a href="/login" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-gold transition shadow-[0_0_20px_-5px_var(--gold)]">Login</a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center">
        <img src={heroImg} alt="Candlelit spa treatment room" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">𝗪𝗘𝗟𝗟𝗖𝗢𝗠𝗘 • 𝗬𝗲𝘀 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝘀𝗶𝗿</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]">
            Full body massage <span className="italic text-gold-gradient">without</span>
            <br />any restrictions.
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Booking options available: Paytm, Gpay, Phonepe. Booking confirm now (₹299) ✅
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#book" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]">Reserve Your Ritual</a>
            <a href="#rituals" className="rounded-full border border-border px-8 py-3.5 text-sm text-foreground hover:border-primary transition">Explore Rituals</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</div>
      </section>

      <section className="relative py-32 bg-radial-glow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Authentic Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Experience genuine Indian wellness therapies with trusted, verified professionals.
          </h2>
          <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Signature Treatments</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">Curated Rituals</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">Each treatment is a slow, intentional passage — designed by our senior therapists.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group relative overflow-hidden rounded-lg bg-card border border-border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    <span className="text-sm text-primary">{s.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-display text-xl text-gold-gradient">{s.price}</span>
                    <a href="#book" className="text-xs uppercase tracking-widest text-primary hover:text-gold transition">Reserve →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rituals" className="py-24 border-y border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Choose Your Passage of Time</h2>
          </div>
          <div className="space-y-1">
            {rituals.map((r, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-6 py-6 border-b border-border/60 hover:border-primary/50 transition">
                <span className="font-display text-3xl md:text-4xl text-gold-gradient w-20 md:w-28 shrink-0">
                  {r.time}<span className="text-sm text-muted-foreground ml-1">{r.unit}</span>
                </span>
                <span className="min-w-0 text-base md:text-xl truncate">{r.label}</span>
                <span className="font-display text-2xl md:text-3xl text-primary shrink-0">{r.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sanctuary" className="py-32">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img src={heroImg} alt="Spa sanctuary" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Agency</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">Genuine profiles. Authentic services.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">As a trusted Indian spa agency, Sejal Spa guarantees 100% genuine services. We pride ourselves on authentic traditional therapies, complete privacy, and verified therapists to ensure your ultimate relaxation.</p>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div><div className="font-display text-3xl text-gold-gradient mb-1">100%</div><div className="text-muted-foreground">Genuine Profiles</div></div>
              <div><div className="font-display text-3xl text-gold-gradient mb-1">50+</div><div className="text-muted-foreground">Verified Therapists</div></div>
              <div><div className="font-display text-3xl text-gold-gradient mb-1">Premium</div><div className="text-muted-foreground">Traditional Oils</div></div>
              <div><div className="font-display text-3xl text-gold-gradient mb-1">24/7</div><div className="text-muted-foreground">Customer Support</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Booking Options</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">Paytm • Gpay • Phonepe</h2>
          <p className="text-muted-foreground mb-10">Booking confirm now (₹299) ✅. Remaining Amount pay at meeting place.</p>
          <div className="flex flex-col items-center gap-4">
            <a href={telegramLink} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_60px_-10px_var(--gold)]">Check Reviews on Telegram</a>
            {whatsappNumber && (
              <p className="text-sm text-muted-foreground">or WhatsApp/Call: <span className="text-primary font-medium">{whatsappNumber}</span></p>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center">
        <a href={telegramLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/80 text-white transition mb-6 shadow-[0_0_20px_-5px_#0088cc]" aria-label="Telegram Contact">
          <TelegramIcon className="w-7 h-7" />
        </a>
        <p className="font-display text-lg text-gold-gradient mb-2">Sejal Spa Agency</p>
        <p>© {new Date().getFullYear()} Sejal Genuine Indian Spa Agency · All bookings by appointment</p>
        <a href="/login" className="absolute right-6 bottom-10 opacity-20 hover:opacity-100 transition" aria-label="Admin Login">Admin</a>
      </footer>
    </div>
  );
}
