// importacion de header y footer
import Header from "../components/Header"
import Footer from "../components/Footer"

// importacion de iconos y next/image
import { CheckCircle } from 'lucide-react'
import Image from "next/image"

export default function PropuestaEducativa() {

    const objetc = [
        "Metodología activa y participativa.",
        "Desarrollo de habilidades de pensamiento crítico y creativo.",
        "Formación en valores y ciudadanía.",
        "Uso de tecnologías educativas.",
        "Aprendizaje basado en proyectos.",
        "Atención a la diversidad e inclusión."
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h1 className="text-black text-4xl font-bold mb-8 text-center">Propuesta Educativa</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="text-black">
                                <h2 className="text-2xl font-semibold mb-4">Nivel Primario</h2>
                                <p className="mb-4">
                                    Nuestra propuesta educativa para el nivel primario se basa en un enfoque integral,
                                    que busca desarrollar las habilidades cognitivas, sociales y emocionales de nuestros estudiantes.
                                </p>

                                <ul className="list-disc pl-8 space-y-2">
                                    {objetc.map((objetc, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0" />
                                            <span className="text-black">{objetc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-full w-full md:h-auto">
                                <Image
                                    src="/propuesta-educativa.jpg"
                                    alt="Estudiantes en clase"
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-black text-2xl font-semibold mb-4">Características Diferenciales</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md text-black">
                                    <h3 className="text-xl font-semibold mb-2">Educación Personalizada</h3>
                                    <p>Atendemos las necesidades individuales de cada estudiante para potenciar sus talentos y habilidades.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md text-black">
                                    <h3 className="text-xl font-semibold mb-2">Formación Integral</h3>
                                    <p>Desarrollamos competencias académicas, artísticas, deportivas y socioemocionales.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md text-black">
                                    <h3 className="text-xl font-semibold mb-2">Innovación Educativa</h3>
                                    <p>Implementamos metodologías y recursos pedagógicos actualizados para un aprendizaje efectivo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}