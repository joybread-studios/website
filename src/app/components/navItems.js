'use client'
import { useState, useEffect } from "react";
import NavLink from "../lib/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function NavItemsContainer(){
    const [isContainerVisible, setContainerVisible] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return(() => {
            window.removeEventListener("scroll", handleScroll)
        })
    }, [])

    useEffect(() => {
        if (scrollPosition > 0) {
            setContainerVisible(true);
        } else {
            setContainerVisible(false);
        }
    }, [scrollPosition]);

    return (
        <>
            { isContainerVisible && scrollY !== 0 && (
                <div className='m-4 p-2 fixed bottom-0 right-0 bg-black rounded-2xl border flex'>
                    <NavLink href='#intro'><FontAwesomeIcon icon={faHouse} className="hover:text-yellow-300 transition duration-300 ease-in-out"/></NavLink>
                    <NavLink href='#about'><FontAwesomeIcon icon={faInfoCircle} className="hover:text-yellow-300 transition duration-300 ease-in-out"/></NavLink>
                    <NavLink href='#projects'><FontAwesomeIcon icon={faBriefcase} className="hover:text-yellow-300 transition duration-300 ease-in-out"/></NavLink>
                </div>
            )}
        </>
    )
}