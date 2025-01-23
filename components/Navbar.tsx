import { Search, ShoppingCart } from "lucide-react";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex gap-2 justify-between items-center">
        <div className="flex gap-2">
            <MobileMenu/>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold"><span className="text-primary">Bean</span>Bliss<span className="text-primary">.</span></h1>
        </div>
        {/* Large screen menu */}
        <div>
            <NavMenu/>
        </div>
        <div className="flex items-center gap-5">
        <Search size={25} className="text-primary"/>
        <ShoppingCart size={25} className="text-primary"/>
        <UserMenu/>
        </div>
    </div>
  )
}
