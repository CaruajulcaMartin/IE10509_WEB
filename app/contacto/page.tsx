'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail } from 'lucide-react'
import emailjs from 'emailjs-com'

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        try {
            await emailjs.send(
                'service_h0fpa5w',  // Reemplaza con tu Service ID de EmailJS
                'template_32vqiak', // Reemplaza con tu Template ID
                {
                    from_name: formData.nombre,
                    from_email: formData.email,
                    message: formData.mensaje,
                },
                'e8err7VZmrohR0kdW' // Reemplaza con tu Public Key de EmailJS
            )

            alert('Mensaje enviado con éxito')
            setFormData({ nombre: '', email: '', mensaje: '' }) // Resetea el formulario
        } catch (error) {
            console.error('Error al enviar el mensaje:', error)
            alert('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.')
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow justify-center">
                <section className="py-12 bg-gray-50 text-black">
                    <div className="container mx-auto pl-16">
                        <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="nombre" className="block mb-1 font-medium">Nombre</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mensaje" className="block mb-1 font-medium">Mensaje</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Enviar mensaje
                                    </button>
                                </form>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="mr-2 mt-1 text-blue-600" />
                                        <p>Av. José Gálvez s/n, Chimbán, Chota, Cajamarca, Perú</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="mr-2 text-blue-600" />
                                        <p>+51 904 348 554</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="mr-2 text-blue-600" />
                                        <p>info@ie10509.edu.pe</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold mb-2">Horario de atención</h3>
                                    <p>Lunes a Viernes: 8:00 AM - 1:20 PM</p>
                                    <p>Sábados: 9:00 AM - 12:00 PM</p>
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

