import { BsWhatsapp } from "react-icons/bs"
import { Nav } from "../components/Nav"
import { Beneficios } from "../components/Sections/Beneficios"
import { Hero } from "../components/Sections/Hero"
import { Nosotros } from "../components/Sections/Nosotros"
import { Servicios } from "../components/Sections/Servicios"
import { Testimonios } from "../components/Sections/Testimonios"
import { PreFooter } from "../components/Sections/PreFooter"
import { Footer } from "../components/Sections/Footer"

export const Home = () => {


    const wsp = "https://wa.me/56979165611?text=Hola%20quiero%20hacer%20una%20reserva"

  return (
    <>  
        <div className='fixed lg:hidden bottom-5 right-5 w-20 h-20 rounded-full bg-green-500 z-500 opacity-80'>
            <div className="flex w-20 h-20 items-center justify-center">
                <BsWhatsapp className="w-15 h-15 p-1" fill="white"
                onClick={() => window.open(wsp, "_blank")} />
            </div>
        </div>
        <div className="text-white fixed w-full z-99999 h-40">
            <Nav/>
        </div>
        <div className="fondo" id="hero">
            <Hero/>
        </div>
        <div className="min-h-screen" id="nosotros">
            <Nosotros/>
        </div>
        <div className="" id="beneficios">
            <Beneficios/>
        </div>
        <div className="" id="servicios">
            <Servicios/>
        </div>
        <div>
            <Testimonios/>
        </div>

        <div>
            <PreFooter/>
        </div>

        <div>
            <Footer/>
        </div>

    </>
  )
}
