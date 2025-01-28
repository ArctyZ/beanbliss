import { products } from "@/lib/testProduct";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductsRow() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-7xl px-4 py-4 md:px-8">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-4xl font-semibold tracking-tight">Best Sellers</h1>
        <Link
          className="flex items-center gap-3 text-xl tracking-tight"
          href={"/shop"}
        >
          Shop All <MoveRight className="rounded-full border-2 p-2" size={40} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-center">
        {products.map((product,i) => {
            return <ProductCard key={i} {...product} />
        })}
      </div>
    </div>
  );
}
