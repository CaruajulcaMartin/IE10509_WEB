"use client"; //Esto indica que el componente debe ejecutarse en el cliente.

import { useState, useEffect } from 'react'

const GraduateCounter = () => {
    const [count, setCount] = useState(0)
    const targetCount = 3000 // Ejemplo de número de egresados

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < targetCount) {
                    return prevCount + Math.ceil((targetCount - prevCount) / 10)
                }
                clearInterval(timer)
                return targetCount
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-blue-600 text-white py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Nuestros Egresados</h2>
                <p className="text-5xl font-bold mb-2">{count.toLocaleString()}</p>
                <p className="text-xl">estudiantes formados en nuestra institución</p>
            </div>
        </section>
    )
}

export default GraduateCounter

