

export const Beneficios = () => {

    const beneficions = [
        {
            id:1,
            name: "Reduce el estrés",
            description: "Disminuye la ansiedad y promueve la relagación profunda",
            image: "/src/assets/images/loto.png"
        },
        {
            id:2,
            name: "Alivia tensión muscular",
            description: "Ideal para dolores musculares, contracturas y cansancio fisico",
            image: "/src/assets/images/espalda.png"
        },
        {
            id:3,
            name: "Mejora el descanso",
            description: "Favorece un sueño profundo y reparador",
            image: "/src/assets/images/moon-beneficios.png"
        },
        {
            id:4,
            name: "Renueva tu energía",
            description: "Recupera tu vitaludad fisica y mental",
            image: "/src/assets/images/leaf.png"
        }
    ]

    return (
        <>
            <div className=''>
                <h1 className="text-center font-bold text-2xl items-center  font-mono text-amber-700 gap-2 p-10">
                    BENEFICIOS 
                </h1>
                <h1 className="text-center font-serif text-4xl lg:text-6xl p-5">
                    ¿Qué beneficios puedes obtener?
                </h1>
                <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 gap-10 mx-5 md:p-10">
                    {
                        beneficions.map((b, i) => (
                            <div className="  2xl:w-86 mx-auto shadow-2xl rounded-2xl h-auto flex flex-col items-center p-5" key={i}>
                                <img src={b.image}  className={`w-40 h-40 my-10 p-5 bg-orange-200 rounded-full ${b.id === 4 ? 'rotate-320': ''}`} />
                                <h2 className="text-xl font-bold mb-2">{b.name}</h2>
                                <p className="text-gray-600 p-4 text-center text-lg font-sans">{b.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
