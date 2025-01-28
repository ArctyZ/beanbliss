import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Star } from "lucide-react";


interface productCardProps {
    name:string;
    price:number;
    weight:number;
    image:string;
    intensity:number;
    category: string;
    id: string

}

export default function ProductCard({name, price, weight, image, intensity, category, id}: productCardProps) {
  return (
    <Card>
        <CardHeader>
            <div>
                <Image src={image} alt={name} height={300} width={300} />
            </div>
            <CardTitle className="capitalize">{name}</CardTitle>
            <CardDescription>${price}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-2">
                <p className=" border-b-[1px] py-2 border-primary text-sm flex justify-between"><span className="font-semibold">Type:</span> {category}</p>
                <p className=" border-b-[1px] py-2 border-primary text-sm flex justify-between"><span className="font-semibold">Weight:</span> {weight}g</p>
                <p className=" border-b-[1px] py-2 border-primary flex justify-between items-center text-sm"><span className="font-semibold">Strength {intensity}/10</span> <span className="grid grid-cols-5">{Array.from({length: intensity}, (_, i) => {
                    return <Star key={i} size={12} className="text-primary" />
                })}</span></p>
            </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-between w-full items-center">
            <Link className="border-b-[1.5px] border-primary " href={`/shop/products/${id}`}>See Details</Link>
            <Button>Add to Basket</Button>
        </CardFooter>
    </Card>
  )
}
