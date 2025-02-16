import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

// Simulación de datos
const noticias = [
    {
        id: 1,
        titulo: "Inicio del Año Escolar 2025",
        fecha: "2025-03-01",
        autor: "Dirección Académica",
        tiempoLectura: "5 minutos",
        imagenUrl: "/placeholder.svg?height=400&width=800",
        contenido: [
            {
                subtitulo: "Bienvenida a la comunidad educativa",
                parrafo: "Nos complace dar la bienvenida a todos nuestros estudiantes al nuevo año escolar 2025. Este año promete ser emocionante y lleno de oportunidades de aprendizaje y crecimiento."
            },
            {
                subtitulo: "Novedades para este año",
                parrafo: "Hemos preparado una serie de actividades y programas innovadores para enriquecer la experiencia educativa de nuestros alumnos. Además, contamos con nuevas instalaciones y recursos tecnológicos que facilitarán el proceso de enseñanza-aprendizaje."
            },
            {
                subtitulo: "Participación de los padres",
                parrafo: "Invitamos a todos los padres y apoderados a mantenerse informados sobre las actividades escolares y a participar activamente en la educación de sus hijos. ¡Juntos haremos de este año escolar uno para recordar!"
            }
        ]
    },
    // ... otros artículos
];

// Genera los parámetros estáticos// Genera los parámetros estáticos
export async function generateStaticParams() {
    return noticias.map(noticia => ({
        id: noticia.id.toString(), // Next.js requiere IDs como strings
    }));
}

// Interfaz para las props
interface PageProps {
    params: {
        id: string;
    };
}

// Componente de la página
export default async function NoticiaDetalle({ params }: PageProps) {
    if (!params || !params.id) {
        return notFound();
    }

    const noticia = noticias.find(n => n.id === Number(params.id));

    if (!noticia) {
        return notFound();
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <article className="py-12 bg-gray-50 text-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={noticia.imagenUrl}
                                alt={noticia.titulo}
                                width={800}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
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
                                            <h2 className="text-2xl font-semibold mb-2">{seccion.subtitulo}</h2>
                                            <p>{seccion.parrafo}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}