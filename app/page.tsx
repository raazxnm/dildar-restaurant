"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ShieldCheck,
  ChefHat
} from "lucide-react";

export default function Home() {

const foods = [
"/food1.jpg",
"/food2.jpg",
"/food3.jpg",
"/food4.jpg"
];
const reviewVideo =
"https://www.youtube.com/embed/d9uwnTKkfkk";
return (
<div className="bg-[#111111] text-white">

{/* HERO */}

<section
className="relative h-screen flex items-center justify-center overflow-hidden"
>

<img
src="/restaurant-front.jpg"
className="absolute w-full h-full object-cover scale-110"
/>

<div className="absolute inset-0 bg-black/55"/>

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="relative text-center z-10"
>

<h1
className="
text-7xl
font-serif
tracking-widest
"
>
DILDAR
</h1>

<p className="mt-5 text-xl">
Authentic Indian Cuisine • Fast Food
</p>

<div className="mt-8 flex gap-5 justify-center">

<button
className="
px-8 py-4
bg-yellow-600
rounded-full
hover:scale-105
transition
"
>
Explore Menu
</button>

<button
className="
border
px-8 py-4
rounded-full
"
>
Watch Reviews
</button>

</div>

<div className="mt-10 flex justify-center gap-10">

<div className="flex items-center gap-2">
<Clock/>
11:00 AM – 12:00 AM
</div>

<div className="flex items-center gap-2">
<ShieldCheck/>
Hygienic Kitchen
</div>

</div>

</motion.div>

</section>


{/* FOOD SECTION */}

<section className="py-32 px-10">

<h2 className="text-5xl mb-12 text-center">

Featured Dishes

</h2>

<div
className="
grid
md:grid-cols-4
gap-8
"
>

{foods.map((f,i)=>(

<motion.div
key={i}
whileHover={{
scale:1.08,
rotate:2
}}
className="
overflow-hidden
rounded-3xl
"
>

<img
src={f}
className="
h-[450px]
object-cover
w-full
"
/>

</motion.div>

))}

</div>

</section>


{/* HYGIENE */}

<section className="py-28">

<h2
className="
text-center
text-5xl
mb-12
"
>
Quality & Hygiene
</h2>

<div
className="
grid
md:grid-cols-4
gap-6
px-10
"
>

{[
"Fresh Ingredients",
"Daily Cleaning",
"Safe Cooking",
"Premium Service"
].map((v)=>(

<div
key={v}
className="
bg-[#1b1b1b]
rounded-3xl
p-10
text-center
"
>

<ChefHat
size={40}
className="mx-auto"
/>

<p className="mt-6">
{v}
</p>

</div>

))}

</div>

</section>


{/* FOUNDER */}

<section
className="
py-32
px-10
grid
md:grid-cols-2
gap-16
items-center
"
>

<img
src="/father.jpg"
className="
rounded-[40px]
h-[650px]
object-cover
"
/>

<div>

<h2
className="
text-6xl
mb-8
"
>
Meet The Founder
</h2>

<p
className="
text-gray-300
leading-8
"
>


ସ୍ୱାଦିଷ୍ଟ ଖାଦ୍ୟ ପରିବେଷଣ ଏବଂ ସ୍ମରଣୀୟ ଅଭିଜ୍ଞତା ସୃଷ୍ଟି କରିବାର ଏକ ଉତ୍ସାହ ସହିତ,
ଦିଲଦାର ରେଷ୍ଟୁରାଣ୍ଟ ପ୍ରତ୍ୟେକ ଅତିଥିଙ୍କୁ ଉଷ୍ମତା, ଗୁଣବତ୍ତା ଏବଂ ଆତିଥ୍ୟ ସହିତ ସ୍ୱାଗତ କରେ

</p>

<div className="mt-10">

<h3 className="text-3xl">

[Devi prasad mahapatra (ଖଲିଆ)]

</h3>

<p className="text-yellow-500">

Founder

</p>

</div>

</div>

</section>


{/* LOCATION */}

<section
className="
py-28
text-center
"
>

<h2 className="text-5xl">

<section className="py-32 px-10">

<h2
className="
text-5xl
text-center
mb-14
"
>

Customer Reviews

</h2>

<div
className="
max-w-5xl
mx-auto
overflow-hidden
rounded-[30px]
shadow-2xl
"
>

<iframe
className="
w-full
h-[650px]
"
src={reviewVideo}
title="Restaurant Review"
allowFullScreen
/>

</div>

</section>

Visit Us

</h2>

<div className="mt-10">

<MapPin
size={40}
className="mx-auto"
/>

<p className="mt-5">

[Jagannath prasad, ganjam, odisha]

</p>

<p>

Open Daily • 11 AM – 12 AM

</p>

</div>

</section>

</div>
);
}