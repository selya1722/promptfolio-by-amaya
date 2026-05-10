import { useEffect, useState } from "react";
import { Heart, Home, Sparkles, Palette, Star, Mail, Send } from "lucide-react";
import { About } from "@/components/About";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PromptCard } from "@/components/PromptCard";
import { collections } from "@/data/prompts";
import miniMe from "@/assets/mini-me-bubble.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "example@gmail.com";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "cute", label: "Cute", icon: Heart },
  { id: "professional", label: "Professional", icon: Sparkles },
  { id: "cartoon", label: "Cartoon", icon: Palette },
] as const;

const Index = () => {
  const [active, setActive] = useState<string>("home");
  const [contactOpen, setContactOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      toast({ title: "oops!", description: "write a little something first ♡" });
      return;
    }
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("hi from your promptfolio ♡")}&body=${encodeURIComponent(message)}`;
    toast({ title: "off it goes! ♡", description: "opening your email app..." });
    setMessage("");
    setContactOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen px-4 sm:px-8 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8 relative pt-4">
        <div className="absolute top-4 right-0 sm:right-2">
          <ThemeToggle />
        </div>
        <div className="inline-block relative">
          <h1 className="font-display font-bold text-5xl sm:text-7xl text-gradient-pink leading-none">
            promptfolio ♡
          </h1>
          <Star className="absolute -top-4 -right-8 w-10 h-10 text-accent fill-accent animate-wiggle" />
          <Heart className="absolute -bottom-2 -left-6 w-8 h-8 text-primary fill-primary animate-float" />
        </div>
        <p className="font-handwritten text-2xl text-muted-foreground mt-2">
          a sweet little gallery of prompts & pixels
        </p>
      </header>

      {/* Sticky pastel nav */}
      <nav className="sticky top-3 z-30 mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mx-auto w-fit max-w-full px-3 py-2 rounded-full bg-card/80 backdrop-blur-md border-2 border-primary/30 shadow-[var(--shadow-soft)]">
          {sections.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-display font-semibold text-sm transition-all border-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary scale-105 shadow-[var(--shadow-soft)]"
                    : "bg-card/60 text-foreground border-transparent hover:border-primary/40 hover:-rotate-2"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "fill-primary-foreground/30" : ""}`} />
                {t.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="scroll-mt-28 pb-20">
        <About />
      </section>

      {/* Collections */}
      {(["cute", "professional", "cartoon"] as const).map((key) => (
        <section key={key} id={key} className="scroll-mt-28 pb-20">
          <h2 className="font-handwritten text-5xl sm:text-6xl text-gradient-pink text-center mb-8 capitalize">
            {key} collection
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {collections[key].map((item, i) => (
              <PromptCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>
      ))}

      <footer className="text-center pb-8">
        <p className="font-handwritten text-xl text-muted-foreground">
          made with ♡ + a lot of pastel
        </p>
      </footer>

      {/* Mini-me sticker (bottom-right) — click to open contact */}
      <button
        type="button"
        onClick={() => setContactOpen(true)}
        aria-label="Open contact form"
        className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 select-none animate-float group scale-90"
      >
        <div className="relative">
          <img
            src={miniMe}
            alt="mini me waving — click to contact"
            className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-[0_8px_16px_hsl(340_50%_70%/0.5)] transition-transform group-hover:scale-105"
          />
          <div className="absolute -top-2 left-0 sm:-left-2 sticker bg-card px-3 py-1 rotate-6 group-hover:-rotate-3 transition-transform">
            <p className="font-handwritten text-lg sm:text-xl text-primary leading-none whitespace-nowrap">
              say hi! ♡
            </p>
          </div>
        </div>
      </button>

      {/* Contact dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sticker bg-card border-primary/40 max-w-md p-0 overflow-hidden">
          <div className="p-6" style={{ background: "var(--gradient-peach, hsl(var(--secondary)))" }}>
            <DialogTitle asChild>
              <h3 className="font-handwritten text-4xl text-gradient-pink leading-none mb-2">
                wanna contact me? ♡
              </h3>
            </DialogTitle>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4">
              send an email to my mail address{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1 font-mono-cute text-primary underline decoration-wavy underline-offset-2"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
              <br />
              or send your cute message instantly to me here ↓
            </p>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
              placeholder="type something sweet..."
              className="min-h-[120px] rounded-2xl border-2 border-primary/30 bg-card/80 font-mono-cute resize-none focus-visible:ring-primary"
            />
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleSend}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm border-2 border-primary shadow-[var(--shadow-soft)] hover:-rotate-2 transition-transform"
              >
                <Send className="w-4 h-4" />
                send ♡
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
