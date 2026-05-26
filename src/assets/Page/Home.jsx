import { Nav } from "../components/Nav"
import { Beneficios } from "../components/Sections/Beneficios"
import { Hero } from "../components/Sections/Hero"
import { Nosotros } from "../components/Sections/Nosotros"
import { Servicios } from "../components/Sections/Servicios"

export const Home = () => {
  return (
    <>  
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
    </>
  )
}
