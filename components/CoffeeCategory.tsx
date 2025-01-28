
import Image from "next/image"
import Link from "next/link"


const category = [
    {
        name: 'Whole Beans',
        url: '/coffee-beans.png',
        link: 'wholeBean'
    },
    {
        name: 'Ground Beans',
        url: '/coffee-ground.png',
        link: 'groundBean'
    },
    {
        name: 'Coffee Pods',
        url: '/coffee-pods.png',
        link: 'coffeePod'
    },
    {
        name: 'Coffee Bags',
        url: '/coffee-bag.png',
        link: 'coffeeBag'
    },
]



export default function CoffeeCategory() {
  return (
    <div className='flex flex-row gap-24 justify-around items-center max-w-7xl mx-auto px-4 md:px-8'>
        {category.map((cat, i) => {
            return (
                <Link key={i} className="overflow-hidden flex flex-col gap-5 items-center justify-center" href={`/shop/${cat.link}`}>
                    <div className="h-[150px] w-[150px]"> 
                    <Image src={cat.url} alt={cat.name} height={300} width={300} className="w-full h-full object-cover" objectFit="cover"/>
                    </div>
                    <h1 className="font-semibold">{cat.name}</h1>
                </Link>
            )
        })}
    </div>
  )
}
