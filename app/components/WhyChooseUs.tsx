import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
    const reasons = [
        "Educación de calidad",
        "Valores sólidos",
        "Infraestructura adecuada",
        "Docentes comprometidos con la educación chimbaina",
        "Actividades extracurriculares",
    ]

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-black font-bold mb-6 text-center">¿Por qué elegirnos?</h2>
                <div className="items-center grid md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="text-green-500 flex-shrink-0" />
                            <p className="text-lg text-black">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs