import Header from '../components/Header'
import Footer from '../components/Footer'

import Link from 'next/link'

const noticias = [
    {
        id: 1,
        titulo: "Inicio del Año Escolar 2025",
        fecha: "2025-03-17",
        resumen: "Damos la bienvenida a todos nuestros estudiantes al nuevo año escolar. Conoce las novedades y el calendario académico.",
    },
    {
        id: 2,
        titulo: "Feria de Ciencias 2025",
        fecha: "2025-05-15",
        resumen: "Nuestros estudiantes presentarán sus proyectos innovadores en la Feria de Ciencias anual. ¡No te lo pierdas!",
    },
    {
        id: 3,
        titulo: "Campaña de Solidaridad: Avances en la Construcción del Techo",
        fecha: "2025-06-10",
        resumen: "Gracias a la generosidad de nuestra comunidad, hemos alcanzado el 50% de nuestro objetivo. Conoce cómo puedes seguir apoyando.",
    },
    {
        id: 4,
        titulo: "Taller para Padres: Educación Emocional",
        fecha: "2025-07-20",
        resumen: "Invitamos a todos los padres de familia a participar en nuestro taller sobre cómo fomentar la inteligencia emocional en los niños.",
    },
    {
        id: 5,
        titulo: "Resultados de las Olimpiadas Matemáticas",
        fecha: "2025-08-05",
        resumen: "Felicitamos a nuestros estudiantes por su destacada participación en las Olimpiadas Matemáticas Regionales.",
    },
]

export default function Noticias() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="py-12 bg-gray-50 text-black">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-8 text-center">Noticias y Eventos</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            {noticias.map((noticia) => (
                                <div key={noticia.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-2xl font-semibold mb-2">{noticia.titulo}</h2>
                                    <p className="text-gray-600 mb-4">{noticia.fecha}</p>
                                    <p className="mb-4">{noticia.resumen}</p>
                                    <Link href={`/noticias/${noticia.id}`} className="text-blue-600 hover:underline">
                                        Leer más
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

