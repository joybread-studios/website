import Link from "next/link";

export default function NavLink({href, children}){
    return <Link className={'px-2 hover:text-yellow-300 transition duration-300 ease-in-out scroll-smooth'} href={href}>{children}</Link>
}