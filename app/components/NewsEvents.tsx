const NewsEvents = () => {
    const news = [
        { id: 1, title: "Inicio de clases 2025", date: "17/03/2025" },
        { id: 2, title: "Feria de Ciencias", date: "15/05/2025" },
        { id: 3, title: "Día de Logro", date: "10/07/2025" }
    ]
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-black font-bold mb-6 text-center">Noticias y Eventos</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl text-gray-950 font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsEvents