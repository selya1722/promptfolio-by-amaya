import { useState } from "react";
import {
  Copy,
  Check,
  Sparkles,
  Images,
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
} from "lucide-react";
import type { PromptItem } from "@/data/prompts";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const tapeColors = [
  "bg-[hsl(28_95%_80%/0.7)]",
  "bg-[hsl(340_100%_85%/0.7)]",
  "bg-[hsl(280_60%_85%/0.7)]",
];

export const PromptCard = ({
  item,
  index,
}: {
  item: PromptItem;
  index: number;
}) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const tilt = [-2, 1.5, -1, 2][index % 4];
  const tape = tapeColors[index % tapeColors.length];
  const total = item.images.length;
  const hasMany = total > 1;

  const copy = async () => {
    try {
      // Modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(item.prompt);
      } else {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = item.prompt;

        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");

        document.body.removeChild(textArea);

        if (!successful) {
          throw new Error("Fallback copy failed");
        }
      }

      setCopied(true);

      toast.success("Prompt copied! ♡", {
        description: "It's ready to paste wherever you like",
        duration: 2200,
      });

      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error(err);

      toast.error("Copy failed ♡", {
        description: "Try selecting and copying manually~",
        duration: 3000,
      });
    }
  };

  const openAt = (i: number) => {
    setActive(i);
    setOpen(true);
  };

  const prev = () => {
    setActive((a) => (a - 1 + total) % total);
  };

  const next = () => {
    setActive((a) => (a + 1) % total);
  };

  return (
    <>
      <div
        className="sticker p-4 relative wobble"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 ${tape} rounded-sm shadow-[var(--shadow-tape)] -rotate-3 z-10`}
        />

        <button
          type="button"
          onClick={() => openAt(0)}
          className="block w-full overflow-hidden rounded-2xl aspect-square bg-muted relative group"
          aria-label={`Open ${item.title}`}
        >
          <img
            src={item.images[0]}
            alt={item.title}
            loading="lazy"
            width={768}
            height={768}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {hasMany && (
            <span className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm border-2 border-primary/40 font-display font-semibold text-xs text-primary-foreground shadow-[var(--shadow-tape)]">
              <Images className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground">{total}</span>
            </span>
          )}

          <span className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
            <span className="font-handwritten text-xl text-primary-foreground bg-primary/80 px-3 py-1 rounded-full">
              tap to peek ♡
            </span>
          </span>
        </button>

        <h3 className="font-handwritten text-3xl text-primary mt-3 leading-none">
          {item.title}
        </h3>

        {item.model && (
          <span className="inline-flex items-center gap-1 text-xs font-mono-cute mt-1 text-muted-foreground">
            <Sparkles className="w-3 h-3" />
            {item.model}
          </span>
        )}

        <div className="mt-3 dotted-bg rounded-2xl p-3 bg-secondary/50">
          <p className="font-mono-cute text-xs leading-relaxed text-foreground/80 line-clamp-4">
            {item.prompt}
          </p>

          <button
            onClick={copy}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-full bg-primary text-primary-foreground font-display text-sm hover:scale-[1.02] transition-transform"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}

            {copied ? "Copied!" : "Copy prompt"}
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-[92vw] max-h-[90vh] overflow-y-auto border-0 bg-transparent shadow-none p-0">
          <DialogTitle className="sr-only">
            {item.title}
          </DialogTitle>

          <div className="sticker bg-card p-5 sm:p-6 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-[hsl(340_100%_85%/0.8)] rounded-sm shadow-[var(--shadow-tape)] -rotate-2" />

            <div className="flex items-center justify-between mb-4 mt-1">
              <div>
                <h3 className="font-handwritten text-4xl text-gradient-pink leading-none">
                  {item.title}
                </h3>

                {hasMany && (
                  <p className="font-mono-cute text-xs text-muted-foreground mt-1">
                    {active + 1} / {total} ♡
                  </p>
                )}
              </div>

              <Heart className="w-8 h-8 text-primary fill-primary animate-float" />
            </div>

            <div className="text-center">
              <div className="relative rounded-3xl overflow-hidden inline-block">
                <img
                  src={item.images[active]}
                  alt={`${item.title} ${active + 1}`}
                  className="block max-w-full w-auto h-auto object-contain mx-auto"
                  style={{ maxHeight: "60vh" }}
                />

                {hasMany && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/90 backdrop-blur border-2 border-primary/40 flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-transform shadow-[var(--shadow-soft)]"
                    >
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Next"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/90 backdrop-blur border-2 border-primary/40 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-transform shadow-[var(--shadow-soft)]"
                    >
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </button>
                  </>
                )}

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur border-2 border-primary/40 flex items-center justify-center hover:rotate-90 transition-transform"
                >
                  <X className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>

            {hasMany && (
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {item.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-16 h-16 rounded-2xl overflow-hidden border-[3px] transition-all ${
                      i === active
                        ? "border-primary scale-110 shadow-[var(--shadow-soft)]"
                        : "border-card hover:border-primary/50 opacity-70 hover:opacity-100"
                    }`}
                    style={{
                      transform: `rotate(${
                        (i % 2 === 0 ? -1 : 1) * 3
                      }deg) ${i === active ? "scale(1.1)" : ""}`,
                    }}
                  >
                    <img
                      src={src}
                      alt={`thumb ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 dotted-bg rounded-2xl p-4 bg-secondary/60">
              <p className="font-mono-cute text-xs sm:text-sm leading-relaxed text-foreground/80">
                {item.prompt}
              </p>

              <button
                onClick={copy}
                className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-full bg-primary text-primary-foreground font-display text-sm hover:scale-[1.02] transition-transform"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}

                {copied ? "Copied!" : "Copy prompt"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};