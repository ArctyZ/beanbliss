import AdditionalDetails from "@/components/AdditionalDetails"
import AdditionalInfo from "@/components/AdditionalInfo"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/testProduct"
import Image from "next/image"

export default function page() {
  return (
    <div>
      {/* Breadcrump */}
      <div>

      </div>

    {/* Product details */}
    <div className="flex gap-2 items-center justify-center bg-primary/5">
      {/* image */}
      <div className="p-32">
        <Image src={products[0].image} alt={products[0].name} height={300} width={300}/>
      </div>
      {/* details */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-4xl tracking-wider">{products[0].name}</h1>
          <p className="font-semibold text-md">${products[0].price}</p>
        </div>
        <div className="grid grid-cols-4 w-fit">
          <div className="flex flex-col gap-2 border-[1px] p-4 items-center justify-center">
            <span>Intensity</span>
            <span className="font-semibold">{products[0].intensity}/10</span>
          </div>
          <div className="flex flex-col gap-2 border-[1px] p-5 items-center justify-center">
            <span>Type</span>
            <span className="font-semibold">{products[0].category}</span>
          </div>
          <div className="flex flex-col gap-2 border-[1px] p-5 items-center justify-center">
            <span>Weight</span>
            <span className="font-semibold">{products[0].weight}g</span>
          </div>
          <div className="flex flex-col gap-2 border-[1px] p-5 items-center justify-center">
            <span>No. of Cups</span>
            <span className="font-semibold">{products[0].cups}</span>
          </div>
        </div>
        <div>
          <p>{products[0].description}</p>
        </div>
        <div className="w-full">
          <Button className="w-full">Add to Basket</Button>
        </div>
      </div>
    </div>

    <div>
      <AdditionalInfo/>
    </div>
    <div>
      <AdditionalDetails/>
    </div>
    </div>
  )
}
