import CoffeeCategory from "@/components/CoffeeCategory";
import Hero from "@/components/Hero";
import ProductsRow from "@/components/ProductsRow";





export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <Hero/>
      <div className="mb-4">
        <div>
        <CoffeeCategory/>
        </div>
        <ProductsRow/>
      </div>
    </div>
  );
}
