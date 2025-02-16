"use client"; //Esto indica que el componente debe ejecutarse en el cliente.

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        // se mejorara el tamaño del header
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* sera remplazadom por el logo */}
                <Link href="/" className="text-2xl font-bold">IE N° 10509</Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
                    <Link href="/identidad" className="hover:text-blue-200 transition-colors">Identidad Institucional</Link>
                    <Link href="/propuesta" className="hover:text-blue-200 transition-colors">Propuesta Educativa</Link>
                    <Link href="/noticias" className="hover:text-blue-200 transition-colors">Noticias</Link>
                    <Link href="/contacto" className="hover:text-blue-200 transition-colors">Contacto</Link>
                </nav>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center py-4">
                        <Link href="/" className="py-2 hover:text-blue-200 transition-colors">Inicio</Link>
                        <Link href="/identidad" className="py-2 hover:text-blue-200 transition-colors">Identidad Institucional</Link>
                        <Link href="/propuesta" className="py-2 hover:text-blue-200 transition-colors">Propuesta Educativa</Link>
                        <Link href="/noticias" className="py-2 hover:text-blue-200 transition-colors">Noticias</Link>
                        <Link href="/contacto" className="py-2 hover:text-blue-200 transition-colors">Contacto</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header

