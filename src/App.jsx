import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return(
    <>
      <Analytics/>
      <SpeedInsights/>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
