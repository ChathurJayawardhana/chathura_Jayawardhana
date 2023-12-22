//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Service/>
     <Portfolio/>


     <SocialLinks/>
    </div>
  );
}

export default App;
