'use client'
import Link from "next/link";
import NavLink from "../lib/NavLink";
import Image from "next/image";

export default function Header() {
    return(
        <div className={`z-50 p-4 bg-black flex absolute w-full border-b justify-between items-center`}>
            <div className='px-2 flex flex-col justify-center items-center'>
                <Link href='/' className='flex flex-col items-center text-xs font-bold'><Image src='/joybreadstudios-nobg.png' alt='' height={64} width={64}/>Joybread Studios</Link>
            </div>
            <div>
                {[
                    ['#intro', 'HOME'],
                    ['#about', 'ABOUT'],
                    ['#projects', 'PROJECTS']
                ].map(([url, title]) => (
                    <NavLink href={url}>{title}</NavLink>
                ))}
            </div>
        </div>    
    )
};
