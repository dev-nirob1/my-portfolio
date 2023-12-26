import './App.css'
import About from './components/about/About';
import Chatbot from './components/chatbot/chatbot';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div className='container mx-auto'>

      <section id='home' className='md:px-2'>
        <Navbar></Navbar>
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
      <Chatbot />
    </div>
  );
};

export default App;