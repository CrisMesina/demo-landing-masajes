

export const Hero = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-start text-white mx-5 lg:mx-30">
                <div className="xl:mt-20">
                    <h1 className="font-bold mb-4 font-mono text-amber-800">TU BIENESTAR, NUESTRA PRIORIDAD</h1>
                    <h1 className="lg:text-8xl xl:text-7xl text-5xl mb-4 font-serif">Relaja tu cuerpo,</h1>
                    <h1 className="lg:text-8xl xl:text-7xl text-5xl mb-4 font-serif">Renueva tu energía</h1>
                    <p className="lg:text-2xl xl:text-xl text-lg mb-20 w-70 lg:w-160 font-bold">Masajes relajantes y terapéuticos en un ambiente diseñado para tu bienestar</p>
                    <button className="bg-green-600 text-white font-bold p-4 rounded-4xl lg:w-90 xl:w-72 2xl:w-90
                        hover:shadow-lg hover:bg-green-700 hover:shadow-green-900 
                        hover:will-change-auto hover:translate-y-1 transition-all duration-300"
                        >
                        Reservar por Whatsapp
                    </button>
                </div>
            </div>
        </>
    )
}
