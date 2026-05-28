import defaultImage from '../../images/default-img.png'

export const Testimonios = () => {
    
    
    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1 justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl mt-10">
                        {i < rating ? '⭐' : '☆'}
                    </span>
                ))}
            </div>
        );
    };

    const testimonios = [
        {
            name: "María G.",
            description: "Una experiencia increíble, el masaje relajante me dejó como nueva. El ambiente es muy acogedor y el personal súper amable.",
            rating: 5,
            image: defaultImage
        },
        {
            name: "Carlos M.",
            description: "El masaje descontracturante realmente alivió mis tensiones musculares. El equipo es muy profesional y atento.",
            rating: 5,
            image: defaultImage
        },
        {
            name: "Sofía R.",
            description: "La aromaterapia fue una experiencia única, los aceites esenciales me ayudaron a relajarme profundamente. Sin duda volveré.",
            rating: 5,
            image: defaultImage
        },
    ]


    return (
        <>
            <div className=''>
                <h1 className="text-center font-bold text-2xl items-center  font-mono text-amber-700 gap-2 p-10">
                    TESTIMONIOS 
                </h1>
                <h1 className="text-center font-serif text-4xl lg:text-6xl p-5">
                    Lo que dicen nuestros clientes
                </h1>
                <div className="grid md:gap-2 lg:grid-cols-3 mx-auto gap-10 md:p-10">
                    {
                        testimonios.map((s, i) => (
                            <div className="2xl:w-86 mx-auto shadow-2xl rounded-2xl w-70 md:w-80 h-auto flex flex-col items-center overflow-hidden" key={i}>
                                <StarRating rating={s.rating} />
                                <p className="text-gray-600 p-5 mb-10 text-center text-lg font-sans">{s.description}</p>
                                <div className="flex mb-10">
                                    <img src={s.image}  className={`w-20 h-20 rounded-t-2xl`} />
                                    <h2 className="text-xl font-bold my-auto">{s.name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
