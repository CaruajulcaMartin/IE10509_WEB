import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    // se tiene que mejorar el tamaño del footer
    return (
        <footer className='bg-blue-800 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div>
                        {/* este H3 se remplazara por el logo */}
                        <h3 className='text-lg font-semibold mb-4'>IE N° 10509</h3>
                        <p>Formando el futuro de nuestra comunidad desde 1914</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Enlaces rápidos</h3>
                        <ul className='space-y-2'>
                            <li><Link href="/" className='hover:text-blue-300 transition-colors'>Inicio</Link></li>
                            <li><Link href="/identidad" className='hover:text-blue-300 transition-colors'>Identidad Institucional</Link></li>
                            <li><Link href="/propuesta" className='hover:text-blue-300 transition-colors'>Propuesta Educativa</Link></li>
                            <li><Link href="/noticias" className='hover:text-blue-300 transition-colors'>Noticias</Link></li>
                            <li><Link href="/contacto" className='hover:text-blue-300 transition-colors'>Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Campaña de Solidaridad</h3>
                        <p className='mb-4'>Ayúdanos a construir el techo del patio de nuestra escuela</p>
                        <Link href="/campana" className='bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-base font-semibold hover:bg-yellow-400 transition-colors'>Apoya nuestra campaña</Link>
                    </div>
                </div>

                <div className='mt-8 pt-8 border-t border-slate-300 flex flex-col md:flex-row items-center justify-between'>
                    <p>&copy; 2025 IE N° 10509. Todos los derechos reservados.</p>
                    <div className='flex space-x-4 mt-4 md:mt-0'>
                        <a href="#" className='hover:text-blue-300 transition-colors'><Facebook /></a>
                        <a href="#" className='hover:text-blue-300 transition-colors'><Twitter /></a>
                        <a href="#" className='hover:text-blue-300 transition-colors'><Instagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer