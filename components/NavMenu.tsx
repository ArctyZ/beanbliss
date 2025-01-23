'use client'

import Link from "next/link"
import { usePathname, } from "next/navigation"


export const links: {name: string, link: string}[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Shop',
        link: '#'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact Us',
        link:'/contact'
    }

]


export default function NavMenu() {
    const pathname = usePathname()
  return (
    <div className="hidden md:flex gap-5 items-center justify-around  md:text-lg lg:text-xl">
        {links.map((l,i) => {
            return <Link key={i} href={l.link} className={pathname === l.link ? 'font-bold border-b-[1px] border-primary' : 'text-primary font-semibold'}>{l.name}</Link>
        })}
    </div>
  )
}
