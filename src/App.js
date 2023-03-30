import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { ThpaceGL } from 'thpace';

const canvas = document.querySelector('.background');

const settings = {
  triangleSize: 90,
	colors: ['#edb55a', '#b35656', '#681884'],
	maxFps: 144,
	particleSettings: {},
};

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

ThpaceGL.create(canvas, settings);

export default App