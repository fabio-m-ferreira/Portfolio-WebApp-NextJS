import React from 'react';
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

const App = () => {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Junior Full Stack Developer from Portugal | Get to know him as well as his projects" />
        <meta name="keyword" content="portfolio, web, html, css, javascript, react, developer,"></meta>
        <link rel="manifest" href="/manifest.json" />
        <title>Fábio Ferreira | Portfolio</title>
      </Head>

      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App