import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Ordersummary from './components/Ordersummary';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<Ordersummary />} />
      </Routes>
    </>
  );
}

export default App;
