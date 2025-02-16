import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 w-full h-screen">
                <Image
                    src="/IE-10509.png"
                    alt="IE N° 10509"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                />
                {/* se tiene que agregar unos patrones de fondo */}
                <div className="absolute inset-0 bg-blue-500 opacity-30"></div>
            </div>
            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Institución Educativa N° 10509!</h1>
                <p className="text-2xl sm:text-3xl md:text-4xl mb-8">Formando el futuro de nuestra comunidad</p>
                <Link 
                href="/campana"
                className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
                Apoya nuestra campaña de solidaridad
                </Link>
            </div>
        </section>
    )
}

export default Hero