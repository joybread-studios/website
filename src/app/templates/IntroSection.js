import Link from "next/link";

export default function IntroSection () {
    return (
        <div className='h-screen w-full flex justify-center items-center' id='intro'>
            <div>
                <p className='text-4xl'>We are...</p>
                <p className='text-6xl font-bold text-yellow-300'>Joybread Studios</p>
                <p className='flex justify-end'>...we joy, we bread, we breadjoy.</p>
            </div>
            <div>
                <Link href='https://github.com/joybread-studios'><FontAwesomeIcon icon="fa-brands fa-github" /></Link>
            </div>
        </div>
    )
}