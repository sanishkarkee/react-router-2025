import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Ordersummary from './components/Ordersummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import { UserDetails } from './components/UserDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<Ordersummary />} />

        <Route path='products' element={<Products />}>
          {/* INDEX ma PATH lekhu hudaina, ani ELEMENT ma chai jun component ko content show garnu xa tyo lekhne */}
          <Route index element={<NewProduct />} />
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>

        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
