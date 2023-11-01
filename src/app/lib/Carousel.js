'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const Carousel = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };  
  
    return (
      <div className="m-4 flex h-full border">
        <button className='p-1 transition duration-300 ease-in-out hover:text-yellow-300' onClick={handlePrev}><FontAwesomeIcon icon={faArrowLeft}/></button>
        <div className="border-l border-r h-full w-full overflow-hidden relative">
            <div className='flex transition h-full duration-300 ease-in-out' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-none w-full h-full">
                        <Image src={slide.photo} alt={''} fill={true} className={'bg-cover'}/>
                        <div onClick={() => {slide.url ? window.location.href = slide.url : null}} className="p-6 z-50 bg-black bg-opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity opacity-0 relative w-full h-full flex flex-col items-end justify-end">
                            <p className='font-bold'>{slide.title}</p>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <button className='p-1 transition duration-300 ease-in-out hover:text-yellow-300'onClick={handleNext}><FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
    )
}