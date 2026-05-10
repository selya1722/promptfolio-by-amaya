//import avatar from "@/assets/avatar.jpeg";
import avatar from "@/assets/avatar2.jpeg";
import keepSmiling from "@/assets/keep-smiling.png";
import { Heart, Star, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
      {/* Avatar sticker + keep smiling character */}
      <div className="mx-auto md:mx-0 space-y-8">
        <div className="relative w-64 mx-auto">
          <div
            className="sticker p-2 rotate-[-4deg]"
            style={{ background: "var(--gradient-peach)" }}
          >
            <div className="rounded-2xl overflow-hidden bg-card">
              <img src={avatar} alt="My avatar" width={768} height={768} className="w-full" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 sticker px-4 py-2 rotate-[6deg] bg-accent">
            <p className="font-handwritten text-2xl text-accent-foreground leading-none">
              hi, it's me! ♡
            </p>
          </div>
          <Heart className="absolute -top-4 -left-4 w-10 h-10 text-primary fill-primary animate-float" />
          <Star className="absolute top-10 -right-6 w-8 h-8 text-accent fill-accent animate-wiggle" />
        </div>

        {/* Keep smiling chibi */}
        <div className="relative w-56 mx-auto pt-4">
          <div className="sticker p-2 rotate-[3deg] bg-card">
            <img
              src={keepSmiling}
              alt="keep smiling chibi"
              className="w-full rounded-xl"
            />
          </div>
          <Sparkles className="absolute -top-2 -right-3 w-7 h-7 text-primary fill-primary/40 animate-wiggle" />
        </div>
      </div>

      {/* About text */}
      <div className="space-y-5">
        <div className="sticker p-6 rotate-[1deg] bg-card">
          <h2 className="font-handwritten text-5xl text-gradient-pink leading-none mb-3">
            Hai! welcome to my promptfolio
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            I'm a prompt enthusiast who loves turning words into dreamy little
            worlds. This is my cozy corner of the internet where I collect every
            image I've conjured up with AI — paired with the exact prompt that
            made it bloom. Browse the tabs above, copy any prompt you love, and
            sprinkle some magic into your own creations. ✨
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Heart, label: "Cute", count: "3 prompts", tilt: -2 },
            { icon: Sparkles, label: "Professional", count: "3 prompts", tilt: 2 },
            { icon: Star, label: "Cartoon", count: "3 prompts", tilt: -1 },
          ].map(({ icon: Icon, label, count, tilt }) => (
            <div
              key={label}
              className="sticker p-4 text-center wobble"
              style={{ transform: `rotate(${tilt}deg)` }}
            >
              <Icon className="w-7 h-7 text-primary mx-auto mb-1 fill-primary/30" />
              <p className="font-display font-semibold text-lg">{label}</p>
              <p className="font-handwritten text-xl text-muted-foreground leading-none">
                {count}
              </p>
            </div>
          ))}
        </div>

        <div className="sticker p-5 -rotate-[1deg] bg-secondary">
          <p className="font-handwritten text-3xl text-primary leading-none mb-2">
            things i love
          </p>
          <div className="flex flex-wrap gap-2">
            {["pink everything", "kittens", "soft lighting", "ghibli movies", "cherry blossoms", "stickers", "sparkles", "cozy rooms"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-card font-mono-cute text-xs border-2 border-primary/30"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
