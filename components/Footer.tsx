import { Facebook, Linkedin, Twitter, X } from "lucide-react";

import Link from "next/link";



 const links: {name: string, link: string}[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Shop',
        link: '/shop'
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

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 md:px-8 bg-slate-800">
      <div className="flex flex-row justify-between border-b-[1px] border-primary py-10">
        <div>
          <div>
            <h1 className="text-4xl font-bold">
              Bean<span className="text-primary">Bliss</span>
            </h1>
            <p className="text-muted">
              Discover the perfect blend of coffee beans to elevate your day. <br />
              From the finest beans to the perfect cup of coffee, BeanBliss has
              you covered.
            </p>
            <div className="flex gap-3 items-center mt-5">
              <Link href={'https://www.facebook.com/'}><Facebook size={40} className="text-primary border-[1px] border-primary rounded-full p-2 " /></Link>
              <Link href={'https://www.x.com/'}><Twitter size={40} className="text-primary border-[1px] border-primary rounded-full p-2 " /></Link>
              <Link href={'https://www.linkedin.com/'}><Linkedin size={40} className="text-primary border-[1px] border-primary rounded-full p-2 " /></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl text-white">Menu</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
                {links.map((l, i) => {
                    return <Link className="hover:text-primary" key={i} href={l.link}>{l.name}</Link>
                })}
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl text-white">GET IN TOUCH</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
                <p>+1 (123) 456-7890</p>
                <p>beanbliss@example.com</p>
                <p>123 Main Street, City, Country</p>
            </div>
        </div>
      </div>
      <div className="text-center w-full mt-5 text-white">
        <p className="pb-5">Copyright &copy; 2024 Beanbliss - All Right Reserved</p>
      </div>
    </footer>
  );
}
