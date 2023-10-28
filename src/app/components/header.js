'use client'
import Link from "next/link";
import NavLink from "../lib/NavLink";
import Image from "next/image";

export default function Header() {
    return(
        <div className="p-4 bg-black flex fixed w-full border-b justify-between items-center">
            <div className='px-2 flex flex-col justify-center items-center'>
                <Link href='/' className='flex flex-col items-center text-xs font-bold'><Image src='/joybreadstudios.png' alt='' height={64} width={64}/>Joybread Studios</Link>
            </div>
            <div>
                <NavLink href='#intro'>HOME</NavLink>
                <NavLink href='#about'>ABOUT</NavLink>
                <NavLink href='#projects'>PROJECTS</NavLink>
            </div>
        </div>
    )
};
