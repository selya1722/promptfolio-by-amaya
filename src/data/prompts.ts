import cute1 from "@/assets/cute-1.jpeg";
import cute2 from "@/assets/cute-2.jpeg";
import cute3 from "@/assets/cute-3.jpeg";
import pro1 from "@/assets/pro-1.png";
import pro2 from "@/assets/pro-2.png";
import pro3 from "@/assets/pro-3.png";
//import pro4 from "@/assets/pro-4.png";
import cartoon1 from "@/assets/cartoon-1.webp";
import cartoon2 from "@/assets/cartoon-2.png";
import cartoon3 from "@/assets/cartoon-3.png";
import cartoon4 from "@/assets/cartoon-4.png";
import cartoon6 from "@/assets/cartoon-6.png";
import cartoon7 from "@/assets/cartoon-7.png";

export type PromptItem = {
  id: string;
  title: string;
  images: string[];
  prompt: string;
  model?: string;
};

export const collections: Record<string, PromptItem[]> = {
  cute: [
    {
      id: "c1",
      title: "Cute Scrapbook",
      images: [cute1, cute2, cute3],
      prompt:
        "In 8K Cinematic resolution, transform a reference image into a comfortable scrapbook-style composition, preserving the subject, identity, pose, lighting, and background. Add multiple miniature chibi/doll versions of the same person (matching face, hair, and clothing), naturally positioned and performing various activities. Add handwritten doodles (hearts, arrows, stars, captions). Use soft pastel tones. Maintain a rich yet clean, warm, dreamy, Instagram-style feel. The final result should enhance the SAME image, not recreate it. Make the aspect ratio 4:3",
      model: "Chatgpt",
    },
    {
      id: "c2",
      title: "Instagram Profile Mockup",
      images: [cartoon3,cartoon7],
      prompt:
        "Create a kawaii Instagram profile overlay inspired by Hello Kitty and Sanrio characters. Include Hello Kitty, My Melody, Kuromi, and Cinnamoroll interacting with bubble tea drinks. Use soft pastel colors like pink, cream, baby blue, and lavender with a cute, dreamy aesthetic. Add sticker-style doodles around the interface such as bows, stars, sparkles, clouds, and boba cups. Decorate the profile picture with a cute frame and add playful elements like speech bubbles saying boba time! or sip sip. Style everything in a soft, glossy, slightly 3D kawaii look with sparkles and shine. Make it feel like a magical Sanrio-themed UI, very detailed, layered, and immersive while still keeping the profile readable.",
      model: "Chatgpt",
    },
    {
      id: "c3",
      title: "Girl Boss Dreamboard",
      images: [cartoon2],
      prompt:"Create a hyper-detailed pink feminine entrepreneur scrapbook poster featuring a beautiful young digital creator sitting with a laptop and iced coffee. Surround her with luxury pink accessories, cameras, handbags, notebooks, planners, money, travel icons, content creation tools, cute typography cards, motivational quotes, goals, vision board sections, and social media branding elements. Use an all-pink aesthetic with blush pink, pastel pink, rose gold, and white tones. Include scrapbook stickers, hearts, sparkles, ribbons, handwritten notes, feminine productivity themes, and social media influencer vibes. Add sections like “About Me”, “My Vision”, “What I Create”, “My Values”, and “Girl Boss Energy”. Style: ultra cute, kawaii luxury, 3D semi-realistic cartoon style, Pinterest aesthetic, soft lighting, dreamy feminine branding, clean composition, Instagram creator vibe, highly detailed, glossy textures, 8k",
      model: "Chatgpt",
    },
  ],
  professional: [
    {
      id: "p1",
      title: "Professional Corporate Portrait of Woman",
      images: [pro1],
      prompt:
        "Create a professional corporate portrait of an adult woman seated at a modern office desk with an upright posture, hands neatly folded on the desk surface, wearing a tailored navy blazer over a light gray silk blouse and matching formal trousers, minimal pearl earrings, sleek straight hair tucked behind the ears, natural professional makeup, calm confident gaze directed at the camera, soft balanced office lighting, blurred contemporary workspace background, realistic color tones, high-end business editorial look. Use aspect ratio 4:5.",
      model: "Chatgpt",
    },
    {
      id: "p2",
      title: "",
      images: [pro3, pro3],
      prompt:
        "Replace the face with the person from the uploaded photo, matching the lighting, skin tone, and perspective realistically. Keep the image high quality and photorealistic. standing against a bold red gradient background, confidently. The lighting is dramatic and cinematic, emphasizing his facial structure and giving a luxury fashion magazine vibe. Ultra-realistic, high-detail, editorial photography style. 4K resolution, symmetrical composition, minimal background elements. 4:5 ratio.",
      model: "Chatgpt",
    },
    {
      id: "p3",
      title: "",
      images: [pro2],
      prompt:
        "hyper-detailed graphic design featuring a striking portrait of a young man/ woman with the same face as uploaded] with a confident demeanour. his head is adorned with voluminous, adding texture and depth to the composition. the portrait is rendered in a high-contrast black-and-white style, standing out against the minimalist background. his expression is calm yet determined, with one eye partially obscured by a bold red rectangular overlay that adds a modern, artistic flair. the background is a smooth, textured grey canvas. serving as a neutral backdrop that enhances the focal elements. overlaid vertically along the left side of the image, the word “paul somendra is repeated in large, bold black letters with a slight transparency effect. creating a layered, dynamic look interspersed within this text are iconic design elements: a prominent nike logo in red near the top. a stylized red “s” lower down, and a vertical red line that punctuates the design. to the right. a red geometric frame surrounds the obscured eye, drawing attention to the interplay of colour and form. at the bottom right. the phrase “work smart not hard” is written in bold red capital letters, with “smart” in a smaller, elegant cursive script beneath it signed off with “graphics” in a matching style, suggesting a personal or brand signature. the bottom left corner features the hashtag #paul” in red. reinforcing the identity theme. the young man’s attire, a partially visible black leather jacket with an open collar, adds a rugged yet stylish edge to the overall aesthetic. the lighting is soft yet dramatic. highlighting the textures of his hair and jacket, while the red accents pop vividly against the grayscale tones, creating a cohesive, high-energy visual that blends streetwear culture with graphic artistry. photorealistic, shallow depth of field, high-resolution dslr quality, hasselblad x2d 100c, shallow depth of field. sharply focused on me.4:5 aspect ratio. make it 8k ultra realistic hyper detailed",
      model: "Chatgpt",
    },
  ],
  cartoon: [
    {
      id: "k3",
      title: "Social Media Avatar Card",
      images: [cartoon6],
      prompt:
        "Create a highly detailed 3D chibi-style avatar of a [Person] standing confidently inside a modern social media inspired setup. The character should have a cute oversized head, expressive eyes, soft glossy skin, and a playful stylized cartoon appearance similar to premium collectible vinyl toys and Pixar-inspired chibi figures. The character wears [Glasses Style] glasses and has a [Facial Expression] expression. Their hairstyle and hair color should match their personality and aesthetic vibe, with a natural, confident, and cute pose. Outfit includes a [Color and Text on t-shirt] t-shirt featuring [Graphic Description], paired with [Pant Color and Style], a [Hoodie Color] hoodie, and [Shoe Style and Color]. The character is holding or using a [Device Type], surrounded by aesthetic lifestyle props and tiny decorative elements that reflect their personality. Place the character standing or sitting on a glossy cube featuring [Brand or Logo], with floating social media UI elements around them. Include profile statistics showing [number of posts] posts, [number of followers] followers, [number following] following, and the username @[username]. Use ultra detailed 3D rendering, soft cinematic lighting, realistic shadows and reflections, cute pastel or themed color palettes, Instagram and Pinterest-inspired aesthetics, kawaii modern design, vibrant polished textures, and a premium high-end collectible toy appearance in stunning 8K resolution.",
      model: "Chatgpt",
    },
    {
      id: "k1",
      title: "Aesthetic Life Journal",
      images: [cartoon1],
      prompt:
        "Create a personalized scrapbook-style aesthetic poster featuring a cute stylized portrait of me in the center. Surround the character with aesthetic objects, hobbies, favorite things, goals, personality traits, handwritten notes, doodles, polaroid photos, lifestyle icons, and cozy decorations that match my vibe and interests.Use a soft pastel color palette matching my personality. Include sections like “About Me”, “What I Love”, “Goals”, “Daily Essentials”, “Fun Facts”, and “Current Mood”. Add cute typography, sparkles, ribbons, stars, hearts, coffee cups, books, music, fashion accessories, and aesthetic lifestyle elements. Style should look like a dreamy Pinterest scrapbook mixed with a personal diary and Instagram moodboard. Highly detailed, feminine, cozy, kawaii aesthetic, 3D cartoon realism, soft lighting, clean layout, ultra aesthetic, 8k.",
      model: "Chatgpt",
    },
    {
      id: "k2",
      title: "Action Figure Blister Pack",
      images: [cartoon4],
      prompt:
        "Design a highly detailed 3D-rendered action figure inside a classic toy blister pack. Use the uploaded photo to model the character’s face and hair with a stylized, cartoon-like design—similar to collectible vinyl figures or Funko Pop style. Outfit the figure in this style: [describe outfit or leave blank for casual default] Place the figure in a clear plastic blister case mounted on a cardboard backing with this theme color: [e.g., bright red, pastel blue, neon green] At the top, print the name: [insert user’s name or nickname] in bold, playful lettering. Add 2–3 miniature accessories based on the following items: [Accessory 1 (e.g., smartphone, coffee cup, book)] [Accessory 2 (e.g., laptop, paintbrush, gaming controller)][Accessory 3 or brand/personal logo (optional)] Ensure the scene is brightly lit, with studio-style lighting, shadows, and realistic plastic and cardboard textures. The final result should look like a fun, personal collectible action figure, vibrant, quirky, and made for display.",
      model: "Chatgpt",
    },
    
  ],
};
