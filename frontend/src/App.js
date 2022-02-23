
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from './pages/Home';
import NosotrosPage from './pages/Nosotros';
import NovedadesPage from './pages/Novedades';
import ContactoPage from './pages/Contacto';


import './App.css';

function App() {
  return (
    
    <Router>
      <Header></Header>
      <Nav/>
      <Routes>
        <Route path="/" exact element ={<HomePage />} />
        <Route path="/nosotros" exact element ={<NosotrosPage />} />
        <Route path="/novedades" exact element ={<NovedadesPage />} />
        <Route path="/contacto" exact element ={<ContactoPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
