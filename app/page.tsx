import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
