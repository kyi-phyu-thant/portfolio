import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_sections/Hero";
import About from "./_sections/About";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
