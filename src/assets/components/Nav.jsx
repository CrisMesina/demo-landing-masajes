import logo from '../images/logo.png'

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"


export const Nav = () => {


    const [open, setOpen] = useState(false)


    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    
    const navs = [
        {
            name: "Inicio",
            link: "/"
        },
        {
            name: "Servicios",
            link: "#servicios"
        },
        {
            name: "Contacto",
            link: "#contacto"
        },
        {
            name: "Nosotros",
            link: "#nosotros"
        },
        {
            name: "Beneficios",
            link: "#beneficios"
        }
    ]

    

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 flex w-full h-30 xl:h-30 2xl:h-40 lg:h-40 justify-center items-center transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-2xl shadow-lg" : "bg-transparent"}`}>
                <div className="lg:grid lg:grid-cols-3 hidden w-full">
                    <div className="flex items-end justify-start">
                        {/* LOGO */}
                        <img src={logo} className="h-40" alt="Logo" />
                    </div>
                    <div className="flex text-start justify-center items-center my-auto">
                        {/* Navs */}
                        <div>
                            {navs.map((n, i) =>(
                                <a href={n.link} key={i} className="text-white text-lg font-bold mx-5 hover:underline hover:underline-offset-8">{n.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="relative my-auto mx-20 w-20 items-center justify-end gap-5">
                        {/* BOTON DE RESERVA */}
                        <button 
                            className="border p-3 rounded-4xl xl:w-72 2xl:w-90 w-90 font-bold hover:shadow-md hover:will-change-auto hover:translate-y-1 transition-all duration-300 hover:shadow-white"
                        >
                            <FaWhatsapp className="absolute w-9 xl:hidden 2xl:block h-9 top-2 left-10"/>
                            Reservar por Whatsapp
                        </button>

                    </div>
                </div>

                <div className="block lg:hidden w-full">
                    <div className="h-40 grid grid-cols-2 justify-between items-center">
                        <div className="">
                            <img src="/src/assets/images/logo.png" className="w-35" alt="" />
                        </div>
                        <div className="flex justify-end items-center px-5 gap-5">
                            {
                                open ? (
                                    <>
                                        <IoClose
                                            onClick={() => setOpen(!open)}
                                            className="w-20 h-20"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <RxHamburgerMenu 
                                            onClick={() => setOpen(!open)}
                                            className="w-20 h-20"
                                        />
                                    </>
                                )
                            }
                        </div>

                        {
                            open && (
                                <>
                                    <div className="w-screen h-auto flex flex-col bg-black/80 backdrop-blur-2xl shadow-lg">
                                        <div>
                                            {navs.map((n, i) =>(
                                                <a href={n.link} key={i} className="flex text-white my-10 mx-10">{n.name}</a>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </>   
    )
}
