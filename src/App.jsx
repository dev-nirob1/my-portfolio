import './App.css'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <div className='container mx-auto'>
      <section id='home' className='px-2'>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id='services'>parallax</section>
      <section>services</section>
      <section id='portfolio'>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id='contact'>contact</section>
    </div>
  );
};

export default App;