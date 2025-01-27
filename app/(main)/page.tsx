import CoffeeCategory from "@/components/CoffeeCategory";
import Hero from "@/components/Hero";





export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Hero/>
      <div className="mb-4">
        <div>
        <CoffeeCategory/>
        </div>
      </div>
    </div>
  );
}
