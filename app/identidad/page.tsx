// importacion de header y footer
import Header from '../components/Header'
import Footer from '../components/Footer'

// importacion de iconos y next/image
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Identidad() {
    const objetc = [
        "Promover una educación de calidad centrada en el estudiante.",
        "Fortalecer la relación entre la escuela, la familia y la comunidad.",
        "Fomentar la práctica de valores y la responsabilidad social.",
        "Impulsar la innovación y el uso de tecnologías educativas.",
        "Desarrollar habilidades y competencias para el siglo XXI."
    ]

    return (
        <div>
            <Header />
            <main className="bg-gray-100 py-12 px-4 items-center">
                {/* identidad */}
                <section className='max-w-7xl mx-auto'>
                    <h1 className='text-4xl text-black font-bold mb-8 text-center'>Identidad Institucional</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* mision */}
                        <div className='bg-white p-6 rounded-lg shadow-md'>
                            <h3 className='text-gray-900 text-2xl font-semibold mb-4'>Misión</h3>
                            <p className='text-gray-700 text-lg'>
                                Nuestra misión es formar estudiantes integrales, con sólidos valores
                                éticos y morales, capaces de enfrentar los desafíos del mundo moderno y
                                contribuir positivamente a la sociedad.
                            </p>
                        </div>

                        {/* vision */}
                        <div className='bg-white p-6 rounded-lg shadow-md'>
                            <h3 className='text-gray-900 text-2xl font-semibold mb-4'>Visión</h3>
                            <p className='text-gray-700 text-lg'>
                                Ser reconocidos como una institución educativa líder en la formación de
                                estudiantes competentes, creativos y comprometidos con el desarrollo
                                sostenible de su comunidad y país.
                            </p>
                        </div>
                    </div>
                </section>

                {/* objetivos institucionales */}
                <section className='max-w-7xl mx-auto mt-12'>
                    <h2 className='text-black text-3xl md:text-4xl font-bold text-center mb-8'>Objetivos Institucionales</h2>
                    <div className="items-center grid md:grid-cols-2 gap-6">
                        {objetc.map((objetc, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle className="text-green-500 flex-shrink-0" />
                                <p className="text-lg text-black">{objetc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* patrona religiosa */}
                <section className='max-w-7xl mx-auto mt-12 flex flex-col items-center'>
                    <h2 className='text-black text-3xl md:text-4xl font-bold text-center mb-8'>Nuestra Patrona Religiosa</h2>
                    <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12'>
                        <div className='relative w-64 h-64 rounded-lg shadow-md overflow-hidden'>
                            <Image
                                src="/virgen-fatima.png"
                                alt='Virgen de Fátima'
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <div className='max-w-md'>
                            <p className='text-gray-900 text-xl md:text-left leading-relaxed'>
                                Nuestra institución se encuentra bajo la protección de la{' '}
                                <strong>Virgen de Fátima</strong> o <strong>Nuestra Señora de Fátima</strong>,
                                cuyo ejemplo de vida inspira nuestros valores y principios educativos.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}



