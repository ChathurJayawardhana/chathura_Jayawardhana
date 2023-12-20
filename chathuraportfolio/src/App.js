//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Home from './pages/Home';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>


     <SocialLinks/>
    </div>
  );
}

export default App;
