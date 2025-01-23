'use client'
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { links } from "./NavMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
    const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="md:hidden block">
        <Menu size={25} />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 justify-around items-center mt-5">
            {links.map((l,i) =>{
                return <Link key={i} href={l.link} className={pathname === l.link ? 'font-bold border-b-[1px] border-primary' : 'text-primary font-semibold'}>{l.name}</Link>
            })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
