import React from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Footer from './components/Footer';

const HomePath = () => useRoutes([
  { path: "/", element: <Home /> },
  { path: "FitnessHeroes", element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: 'gallery', element: <Gallery /> },
  { path: 'plans', element: <Plans /> },
  { path: 'trainers', element: <Trainers /> },
  { path: '*', element: <NotFound /> },
])
function App() {
  return (
  <div>
    <Navbar />
    {/* <Routes> */}
      <HomePath/>
      {/* <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='plans' element={<Plans />} />
      <Route path='trainers' element={<Trainers />} />
      <Route path='*' element={<NotFound />} /> */}
    {/* </Routes> */}
    <Footer />
  </div>
  )
};

export default App;
