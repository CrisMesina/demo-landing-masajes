import nosotros from '../../images/nosotros.png'

import { FaCheckCircle } from "react-icons/fa"
import { GiLotusFlower } from "react-icons/gi"


export const Nosotros = () => {
    return (
        <>
        
            <div className='grid lg:grid-cols-2 min-h-screen bg-yellow-50'>
                <div className="flex flex-col mx-auto lg:p-20 my-auto gap-2">
                    <h1 className="w-fit flex font-bold text-2xl items-center font-mono text-amber-700 gap-2">
                        <GiLotusFlower className="w-10 h-10"/>
                        Sobre Nosotros</h1>
                    <h1  className="p-5 font-serif text-4xl lg:text-6xl lg:w-110">Cuidamos de ti en cada detalle</h1>
                    <p  className="p-5 text-lg w-80 lg:w-120">
                        Somos un espacio dedicado al bienestar fisico y mental.
                        Contamos con profesionales certificados y un ambiente diseñado 
                        para que vivas una experiencia unica de relajacion
                    </p>
                    <ul>
                        <li className="p-5 flex font-bold italic">
                            <FaCheckCircle className="w-6 h-6 mr-2 text-amber-900"/>
                            Profesionales certificados</li>
                        <li className="p-5 flex font-bold italic">
                            <FaCheckCircle className="w-6 h-6 mr-2 text-amber-900"/>
                            Ambiente relajante</li>
                        <li className="p-5 flex font-bold italic">
                            <FaCheckCircle className="w-6 h-6 mr-2 text-amber-900"/>
                            Servicio personalizado</li>
                    </ul>
                </div>
                <div className="hidden lg:flex my-auto p-10">
                    <img 
                        className="my-auto rounded-4xl"
                        src={nosotros} alt="" />
                </div>
            </div>
        
        </>
    )
}
