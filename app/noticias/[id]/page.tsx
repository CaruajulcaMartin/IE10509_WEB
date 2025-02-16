
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

// Esta es una simulación de datos. En una aplicación real, estos datos vendrían de una base de datos o API.
const noticias = [
    {
        id: 1,
        titulo: "Inicio del Año Escolar 2025",
        fecha: "2025-03-17",
        autor: "Dirección Académica",
        tiempoLectura: "5 minutos",
        imagenUrl: "/placeholder.svg?height=400&width=800",
        contenido: [
            {
                subtitulo: "Bienvenida a la comunidad educativa",
                parrafo:
                    "Nos complace dar la bienvenida a todos nuestros estudiantes al nuevo año escolar 2025. Este año promete ser emocionante y lleno de oportunidades de aprendizaje y crecimiento.",
            },
            {
                subtitulo: "Novedades para este año",
                parrafo:
                    "Hemos preparado una serie de actividades y programas innovadores para enriquecer la experiencia educativa de nuestros alumnos. Además, contamos con nuevas instalaciones y recursos tecnológicos que facilitarán el proceso de enseñanza-aprendizaje.",
            },
            {
                subtitulo: "Participación de los padres",
                parrafo:
                    "Invitamos a todos los padres y apoderados a mantenerse informados sobre las actividades escolares y a participar activamente en la educación de sus hijos. ¡Juntos haremos de este año escolar uno para recordar!",
            },
        ],
    },
    {
        id: 2,
        titulo: "Feria de Ciencias 2025",
        fecha: "2025-05-15",
        autor: "Departamento de Ciencias",
        tiempoLectura: "4 minutos",
        imagenUrl: "/placeholder.svg?height=400&width=800",
        contenido: [
            {
                subtitulo: "Un evento para la innovación",
                parrafo:
                    "Estamos emocionados de anunciar nuestra próxima Feria de Ciencias, que se llevará a cabo el 15 de mayo de 2025. Este evento anual es una oportunidad para que nuestros estudiantes demuestren su creatividad, habilidades de investigación y pensamiento crítico a través de proyectos innovadores.",
            },
            {
                subtitulo: "Participación de la comunidad",
                parrafo:
                    "La feria estará abierta al público, y animamos a padres, familiares y miembros de la comunidad a asistir y apoyar a nuestros jóvenes científicos.",
            },
            {
                subtitulo: "Diversidad de proyectos",
                parrafo:
                    "Los proyectos abarcarán una amplia gama de temas, desde experimentos de física y química hasta investigaciones sobre el medio ambiente y la salud. ¡No se pierdan esta fascinante muestra del talento y la curiosidad científica de nuestros estudiantes!",
            },
        ],
    },
    {
        id: 3,
        titulo: "Campaña de Solidaridad: Avances en la Construcción del Techo",
        fecha: "2025-06-10",
        autor: "Comité de Infraestructura",
        tiempoLectura: "6 minutos",
        imagenUrl: "/placeholder.svg?height=400&width=800",
        contenido: [
            {
                subtitulo: "Un gran avance",
                parrafo:
                    "Nos complace informar que nuestra meta es recaudar 100,000 soles para la construcción del techo en el patio de nuestra escuela. Hasta la fecha, gracias a la generosidad y el apoyo de nuestra comunidad educativa, hemos logrado reunir 6,000 soles. Aún tenemos un largo camino por recorrer, pero con su ayuda, estamos cada vez más cerca de hacer realidad este importante proyecto. ¡Sigamos sumando esfuerzos!",
            },
            {
                subtitulo: "Impacto del proyecto",
                parrafo:
                    "Este logro representa un paso significativo hacia la mejora de nuestras instalaciones y el bienestar de nuestros estudiantes. La construcción del techo proporcionará un espacio protegido para actividades al aire libre, independientemente de las condiciones climáticas.",
            },
            {
                subtitulo: "Llamado a la acción",
                parrafo:
                    "Agradecemos profundamente a todos los que han contribuido hasta ahora y animamos a quienes aún no lo han hecho a unirse a esta noble causa. Cada donación, sin importar su tamaño, nos acerca más a nuestro objetivo. Juntos, podemos crear un entorno escolar más seguro y cómodo para nuestros niños.",
            },
        ],
    },
]

export default async function NoticiaDetalle({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const noticia = noticias.find((n) => n.id === Number.parseInt(id))

    if (!noticia) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <article className="py-12 bg-gray-50 text-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Link
                                href="/noticias"
                                className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                <span>Volver a Noticias</span>
                            </Link>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src={noticia.imagenUrl || "/placeholder.svg"}
                                    alt={noticia.titulo}
                                    width={800}
                                    height={400}
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">{noticia.titulo}</h1>
                                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
                                        <div className="flex items-center mr-4 mb-2">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            <span>{noticia.fecha}</span>
                                        </div>
                                        <div className="flex items-center mr-4 mb-2">
                                            <User className="w-4 h-4 mr-1" />
                                            <span>{noticia.autor}</span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{noticia.tiempoLectura} de lectura</span>
                                        </div>
                                    </div>
                                    <div className="prose max-w-none">
                                        {noticia.contenido.map((seccion, index) => (
                                            <div key={index} className="mb-6">
                                                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{seccion.subtitulo}</h2>
                                                <p className="text-base sm:text-lg">{seccion.parrafo}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}

