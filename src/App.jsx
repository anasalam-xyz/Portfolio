import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return(
    <>
      <Analytics/>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
