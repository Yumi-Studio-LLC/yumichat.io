import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhyYumi from "./components/WhyYumi";
import Features from "./components/Features";
import TranslationDemo from "./components/TranslationDemo";
import Languages from "./components/Languages";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyYumi />
        <Features />
        <TranslationDemo />
        <Languages />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
