import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from './comps/Navbar';
import './App.css';
import './index.css';
import Footer from './comps/Footer';

const Hero = lazy(() => import('./comps/Hero'));
const Acadamic = lazy(() => import('./comps/Acadamic'));
const Faculty = lazy(() => import('./comps/Faculty'));
const Events = lazy(() => import('./comps/Events'));
const Feedback = lazy(() => import('./comps/Feedback'));

const About = lazy(() => import('./pages/About'));
const Admission = lazy(() => import('./pages/Admission'));
const Faculties = lazy(() => import('./pages/Faculties'));
const Scholerships = lazy(() => import('./pages/Scholerships'));
const Links = lazy(() => import('./pages/Links'));
const Contact = lazy(() => import('./pages/Contact'));

function HomePageComponents() {
  return (
    <>
      <Hero />
      <Acadamic />
      <Faculty />
      <Events />
      <Feedback />
    </>
  );
}

function App() {
  
 

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading data...</div>}>
        <Routes>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/Scholerships" element={<Scholerships />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
