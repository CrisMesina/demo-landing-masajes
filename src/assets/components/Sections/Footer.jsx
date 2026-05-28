

import { FiFacebook} from "react-icons/fi";
import logo from "/src/assets/images/logo.png";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaLocationPin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <>
            <footer className='grid lg:grid-cols-3 w-full bg-black/90 text-white'>
                <div className="flex items-center my-5 justify-center flex-col">
                    <img src={logo} className="w-40 h-40" alt="Logo" />
                    <p className="w-50">Bienestar y armonía para tu cuerpo cuerpo y mente</p>
                    <div className="flex gap-5 my-5">
                        <a href="https://www.facebook.com/masajesrelajantes" target="_blank" className="text-white p-1 rounded-full bg-amber-900/70 hover:bg-amber-950/90 hover:text-blue-700 transition-all duration-300">
                            <FiFacebook className="w-10 h-10 p-1 flex mx-auto"/>
                        </a>
                        <a href="https://www.instagram.com/masajesrelajantes" target="_blank" className="text-white p-1 rounded-full bg-amber-900/70 hover:bg-amber-950/90 hover:text-pink-300 transition-all duration-300 ">
                            <BsInstagram className="w-10 h-10 p-1 flex mx-auto"/>
                        </a>
                        <a href="https://wa.me/56979165611?text=Hola%20quiero%20hacer%20una%20reserva" target="_blank" className="text-white p-1 rounded-full bg-amber-900/70 hover:bg-amber-950/90 hover:text-green-500 transition-all duration-300">
                            <FaWhatsapp className="w-10 h-10 p-1 flex mx-auto"/>
                        </a>
                    </div>
                </div>
                <div className=" flex items-center my-5 justify-center flex-col">
                    <h1 className="mb-5">Enlaces Rapidos</h1>
                    <ul>
                        <li className="mb-3">
                            <a href="#hero" className="text-white hover:text-amber-700 italic transition-colors duration-300">Inicio</a>
                        </li>
                        <li className="mb-3">
                            <a href="#nosotros" className="text-white hover:text-amber-700 italic transition-colors duration-300">Nosotros</a>
                        </li>
                        <li className="mb-3">
                            <a href="#beneficios" className="text-white hover:text-amber-700 italic transition-colors duration-300">Beneficios</a>
                        </li>
                        <li className="mb-3">
                            <a href="#servicios" className="text-white hover:text-amber-700 italic transition-colors duration-300">Servicios</a>
                        </li>
                        <li className="mb-3">
                            <a href="#testimonios" className="text-white hover:text-amber-700 italic transition-colors duration-300">Testimonios</a>
                        </li>
                    </ul>
                </div>
                <div className=" flex items-center mt-5 mb-10 justify-center flex-col">
                    <h1 className="text-2xl font-bold mb-5">Contáctanos</h1>
                    <p className="mb-2 flex">
                        <FaLocationPin className="my-auto mx-2"/>
                        Calle Principal 123, Ciudad
                    </p>
                    <p className="mb-2 flex">
                        <BsTelephone className="my-auto mx-2"/>
                        Teléfono: +56 9 1234 5678
                    </p>
                    <p className="mb-2 flex">
                        <MdEmail className="my-auto mx-2"/> 
                        ejemplo@ejemplo.cl
                    </p>
                </div>
            </footer>
        </>
    )
}
