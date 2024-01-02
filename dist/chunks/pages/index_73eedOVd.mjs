/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro_dQ8heKJL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="./index.css"><title>Tailwind Snipcart</title>${renderHead()}</head> <body> <nav class="py-2 px-4 bg-black text-white sticky top-0 z-10 flex"> <div> <h1 class="text-2xl"><span class="italic">Man</span>Bags</h1> <p class="text-slate-400">Luxury bags for men</p> </div> <div class="ml-auto">cart</div> </nav> <main> <header class="flex bg-cover bg-center h-[calc(100vh-72px)] min-h-[400px]" style="background-image: url('images/3.1 bg.jpg');"> <div class="m-auto
        font-semibold
        text-center"> <h1 class="text-3xl mb-8"> <span class="italic">Man</span>Bags
</h1> <h1 class="mb-8 drop-shadow-lg text-7xl underline text-white decoration-black underline-offset-8">
Clean &amp; Modern.
</h1> <p class="text-lg mb-8 drop-shadow-lg">Luxury Bags for Men</p> <button id="btn-browse-collection" class="bg-black text-white uppercase px-6 py-4 cursor-pointer font-bold hover:bg-zinc-700 rounded-md transition">Browse The Collection</button> </div> </header> <section id="product-1" class="flex max-w-screen-xl mx-auto p-20 items-center gap-6"> <div class="min-w-[30%] max-w-[30%]"> <img src="images/1.png" alt="alpine elegance"> </div> <div class="flex-grow"> <h1 class="text-7xl">Alpine Elegance</h1> <p class="mt-8">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus
            laboriosam culpa? Dicta autem, veritatis libero, asperiores
            blanditiis veniam doloribus labore soluta ducimus vero accusamus
            cumque possimus reprehenderit in eaque, eveniet omnis at similique
            dolor voluptates quod? Aliquid veritatis beatae nobis nam
            architecto. Blanditiis, fuga reprehenderit iusto doloribus dolorum
            in asperiores tempora sunt impedit aliquam perferendis doloremque.
            Maxime, rerum necessitatibus?
</p> <p class="text-2xl mt-8 font-semibold hover:text-lime-600 cursor-pointer">
€79.99
</p> <label class="text-sm mt-8 inline-block">Quantity</label> <div class="grid grid-cols-[100px_1fr] gap-8"> <input class="border border-1 rounded-md text-center px-2" type="number" value="1" min="1"> <button class="bg-black text-white uppercase px-6 py-4 cursor-pointer font-bold hover:bg-zinc-700 rounded-md transition">Add To Cart</button> </div> </div> </section> </main>  </body> </html>`;
}, "D:/SNIPCART/taiwind-ecom/src/pages/index.astro", void 0);

const $$file = "D:/SNIPCART/taiwind-ecom/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
