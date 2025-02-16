import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewsEvents from "./components/NewsEvents";
import GraduateCounter from "./components/GraduateCounter";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewsEvents />
        <GraduateCounter />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

