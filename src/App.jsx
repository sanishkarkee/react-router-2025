import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Ordersummary from './components/Ordersummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import Skeleton from './components/skeletonLoader/Skeleton';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
const LazyAbout = React.lazy(() => import('./components/About'));

// Skeleton Loader fallback component
const AboutSkeleton = () => (
  <div style={{ padding: '2rem' }}>
    <Skeleton height='2rem' width='60%' />
    <br />
    <Skeleton height='1rem' width='90%' />
    <br />
    <Skeleton height='1rem' width='80%' />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='about'
          element={
            <Suspense fallback={<AboutSkeleton />}>
              <LazyAbout />
            </Suspense>
          }
        />

        <Route path='*' element={<NoMatch />} />

        <Route path='order-summary' element={<Ordersummary />} />

        <Route path='products' element={<Products />}>
          {/* INDEX ma PATH lekhu hudaina, ani ELEMENT ma chai jun component ko content show garnu xa tyo lekhne */}
          <Route index element={<NewProduct />} />
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>

        {/* DYNAMIC ROUTES  can be Nested also */}
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='profile' element={<Profile />} />

        <Route path='login' element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
