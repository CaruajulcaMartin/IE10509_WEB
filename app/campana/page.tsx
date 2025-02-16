
import Header from '../components/Header'
import Footer from '../components/Footer'

import Image from 'next/image'
import Link from 'next/link'

export default function CampanaSolidaridad() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="py-12 bg-blue-50 text-black">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center ">Campaña de Solidaridad: Un Techo para Nuestro Patio</h1>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Nuestro Objetivo</h2>
                                <p className="mb-4">
                                    Estamos recaudando fondos para construir un techo en el patio de nuestra escuela.
                                    Este proyecto mejorará significativamente las condiciones para nuestros estudiantes,
                                    permitiéndoles disfrutar de actividades al aire libre sin importar el clima.
                                </p>
                                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
                                    <p className="font-bold">Meta de recaudación: S/. 100,000</p>
                                    <p>Llevamos recaudado: S/. 6,000</p>
                                </div>
                                {/* direcciona al numero de wsp */}
                                <Link
                                    href="https://wa.me/51904348554?text=Hola,%20quiero%20apoyar%20la%20campaña!"
                                    className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ¡Apoya nuestra campaña!
                                </Link>

                            </div>
                            <div className="relative h-64 md:h-full">
                                <Image
                                    src="/10509-patio-escolar.png"
                                    alt="Render del techo propuesto"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 bg-white text-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-center">¿Por qué es importante?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Protección del clima</h3>
                                <p>El techo protegerá a nuestros estudiantes de la lluvia y el sol intenso, permitiendo actividades al aire libre todo el año.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Más espacio para actividades</h3>
                                <p>Con un área cubierta, podremos realizar más actividades educativas y recreativas, enriqueciendo la experiencia escolar.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">Mejora del entorno escolar</h3>
                                <p>Un patio techado mejorará la estética de nuestra escuela y proporcionará un espacio versátil para eventos escolares.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="donar" className="py-12 bg-gray-100 text-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-center">¿Cómo puedes ayudar?</h2>
                        <div className="max-w-2xl mx-auto">
                            <p className="mb-6 text-center">
                                Toda contribución, sin importar su tamaño, nos acerca más a nuestro objetivo.
                                Puedes hacer tu donación de las siguientes maneras:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">Transferencia Bancaria</h3>
                                    <p>Banco: [Nombre del Banco]</p>
                                    <p>Cuenta: [Número de Cuenta]</p>
                                    <p>Titular: IE N° 10509</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">Donación en Efectivo</h3>
                                    <p>Puedes hacer tu donación directamente en la oficina administrativa de la escuela.</p>
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

