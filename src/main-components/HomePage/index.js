import React from 'react'
import Header from '../../components/header'
import Home from '../../components/home'
import About from '../../components/about'
import Projects from '../../components/projects'
import Footer from '../../components/footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default HomePage;