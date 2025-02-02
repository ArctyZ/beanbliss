import Image from "next/image";


export default function AdditionalDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center px-16 py-10 h-[50vh] bg-primary/5">
        <div className="flex flex-col gap-1 border-x-2 p-4 px-10 border-white">
            <div>
                <Image src={"/coffee-bean-icon.png"} alt="bean" height={30} width={30}/>
            </div>
            <h3 className="font-semibold mb-3 ">OUR DIFFERENCE</h3>
            <p className="text-sm">Inspired by champagne houses, we blend an roast our beans to perfection. Developed with a Michelin-starred chef, this is coffee as you've never tasted before.</p>
        </div>
        <div className="flex flex-col gap-1  p-4 px-10">
            <div>
            <Image src={"/package-icon.png"} alt="bean" height={30} width={30}/>
            </div>
            <h3 className="font-semibold mb-3">PACKAGING</h3>
            <p className="text-sm">Our coffee is sealed using nitro-flush technology to ensure the aroma remains consistent over time. You won't find coffee that tastes this fresh anywhere else</p>
        </div>
        <div className="flex flex-col gap-1 border-x-2 p-4 px-10 border-white">
            <div>
            <Image src={"/edu-hat-icon.png"} alt="bean" height={30} width={30}/>
            </div>
            <h3 className="font-semibold mb-3">BREW GUIDES</h3>
            <p className="text-sm">Check out our step-by-step brew guides for tips on how to make the perfect cup every time. Available for all brew methods; pods, cafetiere, espresso, cold brew...</p>
        </div>
    </div>
  )
}
