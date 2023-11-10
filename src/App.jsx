import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import HeadContact from './components/headContact/HeadContact'
import Offers from './components/offers/Offers'
import Recording from './components/recording/Recording'
import Reviews from './components/reviews/Reviews'

const App = () => {
  return (
    <>
    <HeadContact/>
    <Nav/>
    <Header />
    <Services />
    <About />
    <Offers/>
    <Recording/>
    <Reviews/>
    <Contact />
    <Footer />
    </>
  )
}

export default App
