import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import MySkills from './components/MySkills/MySkills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {

  return (
    <div id='top' className={`light app`}>
      <Navbar />

      <main>
        <About />
        <ProjectGrid />
        <MySkills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App;
