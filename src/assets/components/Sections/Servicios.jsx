import descontracturante from '../../images/masaje-descontracturante.png'
import relajante from '../../images/masaje-relajante.png'
import aromaterapia from '../../images/aromaterapia.png'
import piedras from '../../images/piedras.png'

export const Servicios = () => {

    const servicios = [
        {
            name: "Masaje Relajante",
            description: "Técnicas suaves que ayudan a liberar el estrés y relajar cuerpo y mente",
            image: relajante
        },
        {
            name: "Masaje Descontracturante",
            description: "Alivia tensiones musculares profundas y mejora la movilidad",
            image: descontracturante
        },
        {
            name: "Aromaterapia",
            description: "Masaje con aceites esenciales que equilibran tus emociones y promueven bienestar",
            image: aromaterapia
        },
        {
            name: "Piedras calientes",
            description: "Terapia con piedras volcanicas que relaja profundamente y mejora la circulación",
            image: piedras
        }
    ]

    return (
        <>
            <div className=''>
                <h1 className="text-center font-bold text-2xl items-center  font-mono text-amber-700 gap-2 p-10">
                    SERVICIOS 
                </h1>
                <h1 className="text-center font-serif text-4xl lg:text-6xl p-5">
                    El masaje perfecto para ti
                </h1>
                <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 gap-10 mx-5 md:p-10">
                    {
                        servicios.map((s, i) => (
                            <div className="  2xl:w-86 mx-auto shadow-2xl rounded-2xl h-auto flex flex-col items-center overflow-hidden" key={i}>
                                <img src={s.image}  className={` my-10 bg-orange-200 rounded-t-2xl`} />
                                <h2 className="text-xl font-bold mb-2">{s.name}</h2>
                                <p className="text-gray-600 p-5 mb-10 text-center text-lg font-sans">{s.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
