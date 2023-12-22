import './App.css'
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <div className='container mx-auto'>
      <section>
        <Navbar></Navbar>
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
    </div>
  );
};

export default App;