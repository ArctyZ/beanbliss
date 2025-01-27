import { Button } from "./ui/button";


export default function Hero() {
  return (
    <div className="bg-[url('../public/hero.jpg')] relative object-cover w-full h-screen">
        <div className="absolute top-8 left-8 w-[80%] flex flex-col gap-4">
            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-8xl">Awaken Your Senses with the Perfect <span className="text-primary">Bean</span></h1>
            <p className="font-semibold text-muted text-xl">Discover the finest, freshly roasted coffee beans from around the world. Handpicked for flavor, crafted for your perfect cup.</p>
            <Button className="w-fit">Shop Now</Button>
        </div>
    </div>
  )
}
