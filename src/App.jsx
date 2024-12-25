import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div className='container mx-auto'>
      <header className='px-2 sticky top-0 z-[999]'>
        <Navbar></Navbar>
      </header>
      <section id='home' className='md:px-2'>
        <Hero></Hero>
      </section>

      <section id='about' className='px-2'>
        <About />
      </section>
      <section id='skills' className='px-2'>
        <Skills />
      </section>

      {/* <section id='services' className='px-2'>
        <Parallax type="services" />
      </section> */}

      <section id='services' className='px-2'>
        <Services />
      </section>

      {/* <section id='portfolio' className='px-2'>
        <Parallax type="portfolio" />
      </section> */}

      <section className='px-2'>
        <Portfolio />
      </section>
      <section id='contact' className='px-2'>
        <Contact />
      </section>
      <section className='px-2'>
        <Footer />
      </section>
    </div>
  );
};

export default App;