import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
export default function IntroSection () {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center' id='intro'>
            <div className="p-4">
                <p className='text-4xl'>We are...</p>
                <p className='text-6xl font-bold text-yellow-300'>Joybread Studios</p>
                <p className='flex justify-end'>...we joy, we bread, we joybread.</p>
            </div>
            <div className='p-4'>
                <Link href='https://github.com/joybread-studios'><FontAwesomeIcon icon={faGithub} size='3x' className="hover:text-yellow-300 transition duration-300 ease-in-out"/></Link>
            </div>
        </div>
    )
}