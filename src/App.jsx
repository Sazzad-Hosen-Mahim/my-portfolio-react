import React from "react";
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



const App = () => {
    return (
        <>
           <Header></Header>
           <Nav></Nav>
           <About></About>
           <Experience></Experience>
           <Services></Services>
           <Portfolio></Portfolio>
           <Contact></Contact>
           <Footer></Footer>
        </>
    )
}

export default App